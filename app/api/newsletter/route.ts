import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Validate the input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is verplicht' },
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

    // Send notification to yourself
    await resend.emails.send({
      from: 'Codivante Newsletter <onboarding@resend.dev>',
      to: 'burak.zakelijk@outlook.com',
      subject: 'Nieuwe Newsletter Inschrijving',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Nieuwe Newsletter Inschrijving
          </h2>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Datum:</strong> ${new Date().toLocaleString('nl-NL')}</p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Deze inschrijving kwam via codivante.com</p>
          </div>
        </div>
      `,
      text: `Nieuwe Newsletter Inschrijving\n\nEmail: ${email}\nDatum: ${new Date().toLocaleString('nl-NL')}`,
    });

    // Send welcome email to subscriber
    await resend.emails.send({
      from: 'Codivante <onboarding@resend.dev>',
      to: email,
      subject: 'Welkom bij Codivante Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Welkom bij onze nieuwsbrief!
          </h2>

          <p style="color: #555; line-height: 1.6;">
            Bedankt voor je inschrijving op onze nieuwsbrief!
          </p>

          <p style="color: #555; line-height: 1.6;">
            Je ontvangt nu regelmatig:
          </p>

          <ul style="color: #555; line-height: 1.8;">
            <li>Web development tips en tricks</li>
            <li>Updates over nieuwe technologieën</li>
            <li>Exclusieve aanbiedingen</li>
            <li>Portfolio highlights</li>
          </ul>

          <p style="color: #555; line-height: 1.6;">
            Met vriendelijke groet,<br>
            <strong>Het Codivante Team</strong>
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
            <p>
              Codivante - Digitale Innovatie<br>
              Amsterdam, Nederland<br>
              info@codivante.com
            </p>
          </div>
        </div>
      `,
      text: `Welkom bij onze nieuwsbrief!\n\nBedankt voor je inschrijving!\n\nJe ontvangt nu regelmatig updates, tips en aanbiedingen.\n\nMet vriendelijke groet,\nHet Codivante Team`,
    });

    return NextResponse.json(
      { message: 'Succesvol ingeschreven!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);

    if (error instanceof Error && error.message.includes('API')) {
      return NextResponse.json(
        { error: 'Email service niet geconfigureerd' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Er is iets misgegaan. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
