import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Codivante Contact Form <onboarding@resend.dev>', // You'll need to verify your domain with Resend to use your own domain
      to: 'burak.zakelijk@outlook.com', // TODO: Change to info@codivante.com when domain email is set up
      subject: `Nieuw bericht van ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Nieuw Contact Formulier Bericht
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Naam:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Bericht:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
              ${message}
            </p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Dit bericht werd verstuurd via het contact formulier op codivante.com</p>
          </div>
        </div>
      `,
      text: `Nieuw bericht van ${name}\n\nEmail: ${email}\n\nBericht:\n${message}`,
    });

    // Also send a confirmation email to the sender
    await resend.emails.send({
      from: 'Codivante <onboarding@resend.dev>',
      to: email,
      subject: 'Bedankt voor je bericht - Codivante',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Bedankt voor je bericht!
          </h2>

          <p style="color: #555; line-height: 1.6;">
            Beste ${name},
          </p>

          <p style="color: #555; line-height: 1.6;">
            We hebben je bericht in goede orde ontvangen. Ons team zal binnen 24 uur contact met je opnemen.
          </p>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Je bericht:</h3>
            <p style="color: #555; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #555; line-height: 1.6;">
            Met vriendelijke groet,<br>
            <strong>Het Codivante Team</strong>
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
            <p>
              Codivante - Digitale Innovatie<br>
              Amsterdam, Nederland<br>
              info@codivante.com | +31 6 12345678
            </p>
          </div>
        </div>
      `,
      text: `Bedankt voor je bericht!\n\nBeste ${name},\n\nWe hebben je bericht in goede orde ontvangen. Ons team zal binnen 24 uur contact met je opnemen.\n\nJe bericht:\n${message}\n\nMet vriendelijke groet,\nHet Codivante Team`,
    });

    return NextResponse.json(
      { message: 'Bericht succesvol verzonden!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Check if it's a Resend API key error
    if (error instanceof Error && error.message.includes('API')) {
      return NextResponse.json(
        { error: 'Email service niet geconfigureerd. Neem contact op via info@codivante.com' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Er is iets misgegaan. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}