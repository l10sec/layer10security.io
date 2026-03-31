/**
 * Netlify Serverless Function: Early Access Request Handler
 *
 * Sends an email to NOTIFICATION_EMAIL when someone requests early access.
 *
 * Required environment variables in Netlify:
 * - RESEND_API_KEY: Your Resend API key (get one at https://resend.com)
 * - NOTIFICATION_EMAIL: Email address to receive notifications
 */

// Allowed origins for CSRF protection
const ALLOWED_ORIGINS = [
  'https://layer10security.io',
  'https://www.layer10security.io',
  'http://localhost:8888',
  'http://localhost:3000',
];

function validateOrigin(event) {
  const origin = event.headers.origin || event.headers.Origin;
  const referer = event.headers.referer || event.headers.Referer;

  if (origin) {
    return ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed));
  }

  if (referer) {
    return ALLOWED_ORIGINS.some(allowed => referer.startsWith(allowed));
  }

  if (process.env.CONTEXT === 'dev') {
    return true;
  }

  return false;
}

exports.handler = async (event, context) => {
  // Origin validation (CSRF protection)
  const origin = event.headers.origin || event.headers.Origin || '';
  const allowedOrigin = ALLOWED_ORIGINS.find(allowed => origin.startsWith(allowed));

  const headers = {
    'Access-Control-Allow-Origin': allowedOrigin || ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (!validateOrigin(event)) {
    return {
      statusCode: 403,
      headers,
      body: JSON.stringify({ error: 'Invalid request origin' }),
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body);

    // Validate email
    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Log the request
    console.log('Early access request:', {
      email,
      timestamp: new Date().toISOString(),
      ip: event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown',
    });

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Layer 10 Security <noreply@layer10security.io>',
          to: [process.env.NOTIFICATION_EMAIL],
          subject: `[Early Access Request] ${email}`,
          html: `
            <h2>New Early Access Request</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <hr>
            <p style="color: #666; font-size: 12px;">
              This request was submitted via the Layer 10 Security website.
            </p>
          `,
          text: `New Early Access Request\n\nEmail: ${email}\nTimestamp: ${new Date().toISOString()}`,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Resend API error:', error);
        // Don't fail the request - log error but return success to user
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Thank you! We\'ll reach out when early access is available.',
      }),
    };

  } catch (error) {
    console.error('Error processing early access request:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
