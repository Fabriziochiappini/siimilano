import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY non configurata nelle variabili d\'ambiente.');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export const sendEmail = async ({ to, from, subject, text, html, replyTo }: {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}) => {
  const msg = {
    to,
    from,
    subject,
    text,
    html,
    replyTo,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error: any) {
    console.error('Errore nell\'invio dell\'email via SendGrid:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    return { success: false, error };
  }
};
