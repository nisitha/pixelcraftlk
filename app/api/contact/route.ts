import { NextRequest, NextResponse } from 'next/server';

interface ContactRequestBody {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  website_hp?: string; // Honeypot field for anti-spam
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequestBody = await request.json();

    // 1. Anti-spam honeypot verification
    // If hidden honeypot field is filled, silently discard or reject bot submission
    if (body.website_hp && body.website_hp.trim().length > 0) {
      return NextResponse.json(
        { success: false, error: 'Spam detected' },
        { status: 400 }
      );
    }

    const { name, email, company, service, message } = body;
    const errors: Record<string, string> = {};

    // 2. Server-side validation
    if (!name || name.trim().length < 2) {
      errors.name = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid business email address.';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Project scope or message must be at least 10 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please correct the highlighted fields.',
          fieldErrors: errors,
        },
        { status: 400 }
      );
    }

    // 3. Email service dispatch or simulation
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'hello@pixelcraftlk.com';

    if (resendApiKey) {
      // If RESEND_API_KEY is configured in environment, dispatch actual email via Resend API
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'PixelCraft Inquiries <onboarding@resend.dev>',
          to: [recipientEmail],
          subject: `New Project Inquiry from ${name} (${company || 'Individual'})`,
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nService: ${service || 'General Inquiry'}\n\nProject Scope:\n${message}`,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json().catch(() => ({}));
        console.error('Failed to send email via Resend:', errorData);
        return NextResponse.json(
          {
            success: false,
            error: 'Failed to deliver message via email provider. Please contact us directly at hello@pixelcraftlk.com',
          },
          { status: 502 }
        );
      }
    } else {
      // Documented fallback: Log to server telemetry when external API key is not yet provisioned
      console.log('--- [PIXELCRAFT CONTACT SUBMISSION] ---');
      console.log(`From: ${name} <${email}>`);
      console.log(`Company: ${company || 'N/A'}`);
      console.log(`Service: ${service || 'General'}`);
      console.log(`Scope: ${message}`);
      console.log('Notice: Configure RESEND_API_KEY in .env.local to enable real production email dispatch.');
      console.log('---------------------------------------');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. Our technical team will review and respond within 24 hours.',
        requiresConfig: !resendApiKey,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected server error occurred while processing your request. Please try again.',
      },
      { status: 500 }
    );
  }
}
