/**
 * Netlify Serverless Function: Early Access Request Handler
 *
 * Sends an email to info@layer10security.io when someone requests early access.
 *
 * Required environment variables in Netlify:
 * - RESEND_API_KEY: Your Resend API key (get one at https://resend.com)
 *
 * Alternative: Use SendGrid by uncommenting that section and setting SENDGRID_API_KEY
 */

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
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
          from: 'Layer 10 Security <noreply@send.layer10security.io>',
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

    // Alternative: SendGrid (uncomment if using SendGrid instead)
    /*
    if (process.env.SENDGRID_API_KEY) {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: 'info@layer10security.io' }] }],
          from: { email: 'noreply@layer10security.io', name: 'Layer 10 Security' },
          subject: `[Early Access Request] ${email}`,
          content: [
            {
              type: 'text/html',
              value: `<h2>New Early Access Request</h2><p><strong>Email:</strong> ${email}</p>`,
            },
          ],
        }),
      });

      if (!response.ok) {
        console.error('SendGrid API error:', await response.text());
      }
    }
    */

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
