/**
 * Netlify Serverless Function: Contact Form Handler
 *
 * Sends contact form submissions to NOTIFICATION_EMAIL via Resend.
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

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
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
    const data = JSON.parse(event.body);

    // Validate required fields
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      company: data.company || 'Not provided',
      subject,
      message,
      timestamp: new Date().toISOString(),
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
          reply_to: email,
          subject: `[Contact Form] ${escapeHtml(subject)}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Company:</strong> ${escapeHtml(data.company || 'Not provided')}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <h3>Message:</h3>
            <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
            <hr>
            <p style="color: #666; font-size: 12px;">
              Submitted via Layer 10 Security website at ${new Date().toISOString()}
            </p>
          `,
          text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nCompany: ${data.company || 'Not provided'}\nSubject: ${subject}\n\nMessage:\n${message}`,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Resend API error:', error);
      }
    }

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Thank you for your message. We\'ll get back to you soon!',
      }),
    };

  } catch (error) {
    console.error('Error processing contact form:', error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
