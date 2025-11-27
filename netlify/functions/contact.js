/**
 * Netlify Serverless Function: Contact Form Handler
 *
 * This function handles contact form submissions from the Layer 10 Security website.
 * It can be configured to:
 * - Send emails via SendGrid, Mailgun, or other providers
 * - Store submissions in a database
 * - Forward to Slack, Discord, or other notification services
 */

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
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
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Log the submission (in production, you'd send to email/database/Slack)
    console.log('Contact form submission:', {
      name,
      email,
      company: data.company || 'Not provided',
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Option 1: Send email via SendGrid (uncomment and configure)
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: 'hello@layer10security.io',
      from: 'noreply@layer10security.io',
      subject: `[Contact Form] ${subject}: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${data.company || 'Not provided'}
        Subject: ${subject}

        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // Option 2: Send to Slack webhook (uncomment and configure)
    /*
    const fetch = require('node-fetch');
    await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `New contact form submission from ${name} (${email})`,
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '📬 New Contact Form Submission' }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Name:*\n${name}` },
              { type: 'mrkdwn', text: `*Email:*\n${email}` },
              { type: 'mrkdwn', text: `*Company:*\n${data.company || 'N/A'}` },
              { type: 'mrkdwn', text: `*Subject:*\n${subject}` },
            ]
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: `*Message:*\n${message}` }
          }
        ]
      }),
    });
    */

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Thank you for your message. We\'ll get back to you soon!',
      }),
    };

  } catch (error) {
    console.error('Error processing contact form:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
