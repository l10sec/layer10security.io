/**
 * Netlify Serverless Function: Newsletter Subscription Handler
 *
 * Security features:
 * - Origin validation (CSRF protection)
 * - Rate limiting
 * - Input validation
 */

// Allowed origins for CSRF protection
const ALLOWED_ORIGINS = [
  'https://layer10security.io',
  'https://www.layer10security.io',
  'http://localhost:8888',
  'http://localhost:3000',
];

// Rate limiting
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  let requests = rateLimitMap.get(ip) || [];
  requests = requests.filter(timestamp => timestamp > windowStart);

  if (requests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  requests.push(now);
  rateLimitMap.set(ip, requests);
  return true;
}

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

function getClientIP(event) {
  return event.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
         event.headers['client-ip'] ||
         event.headers['x-real-ip'] ||
         'unknown';
}

exports.handler = async (event, context) => {
  const securityHeaders = {
    'Content-Type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store',
  };

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: securityHeaders,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  if (!validateOrigin(event)) {
    return {
      statusCode: 403,
      headers: securityHeaders,
      body: JSON.stringify({ error: 'Invalid request origin' }),
    };
  }

  const clientIP = getClientIP(event);
  if (!checkRateLimit(clientIP)) {
    return {
      statusCode: 429,
      headers: { ...securityHeaders, 'Retry-After': '60' },
      body: JSON.stringify({ error: 'Too many requests. Please try again later.' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { email } = data;

    if (!email) {
      return {
        statusCode: 400,
        headers: securityHeaders,
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    // Validate email format and length
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return {
        statusCode: 400,
        headers: securityHeaders,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    const sanitizedEmail = email.trim().toLowerCase();

    // Log subscription (in production, add to mailing list service)
    console.log('Newsletter subscription:', {
      email: sanitizedEmail,
      ip: clientIP,
      timestamp: new Date().toISOString(),
    });

    // Option: Add to Mailchimp, ConvertKit, etc.
    /*
    const fetch = require('node-fetch');
    await fetch(`https://api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: sanitizedEmail,
        status: 'pending', // Double opt-in
      }),
    });
    */

    return {
      statusCode: 200,
      headers: securityHeaders,
      body: JSON.stringify({
        success: true,
        message: 'Thanks for subscribing! Check your email to confirm.',
      }),
    };

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      statusCode: 500,
      headers: securityHeaders,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
