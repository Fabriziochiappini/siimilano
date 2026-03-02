import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { getAdminEmailTemplate, getCustomerEmailTemplate } from '@/lib/email-templates';

// Configure SendGrid API Key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const SENDER_EMAIL = process.env.SENDER_EMAIL || 'wpi@automailer.it';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'siisrl.milano@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailData = {
      name,
      email,
      subject,
      message,
    };

    // 1. Send email to Admin
    const adminMsg = {
      to: ADMIN_EMAIL,
      from: SENDER_EMAIL, // Must be verified sender
      replyTo: email, // Admin replies to customer
      subject: `Nuova richiesta dal sito: ${subject}`,
      html: getAdminEmailTemplate(emailData),
    };

    // 2. Send confirmation email to Customer
    const customerMsg = {
      to: email,
      from: SENDER_EMAIL, // Must be verified sender
      subject: 'Conferma ricezione richiesta - S.I.I. Milano',
      html: getCustomerEmailTemplate(emailData),
    };

    // Send both emails in parallel
    await Promise.all([
      sgMail.send(adminMsg),
      sgMail.send(customerMsg),
    ]);

    return NextResponse.json(
      { message: 'Email inviate con successo' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('SendGrid Error:', error);
    
    // Check for specific SendGrid errors
    if (error.response) {
      console.error(error.response.body);
    }

    return NextResponse.json(
      { error: 'Si è verificato un errore durante l\'invio del messaggio.' },
      { status: 500 }
    );
  }
}
