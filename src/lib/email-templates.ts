interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const companyInfo = {
  name: 'S.I.I. SRL',
  email: 'siisrl.milano@gmail.com',
  addressLegal: 'Via L. Manara 15, Milano (MI)',
  addressOperational: 'Via Gadames 85, Milano (MI)',
  phone: '02 36742919',
  vat: '12287510965',
  website: 'https://siimilano.it' // Assumed, can be updated
};

const commonStyles = `
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
`;

const headerStyles = `
  background-color: #0f172a;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  border-radius: 8px 8px 0 0;
  margin: -20px -20px 20px -20px;
`;

const footerStyles = `
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  font-size: 12px;
  color: #666;
  text-align: center;
`;

const highlightStyles = `
  color: #fbbf24; /* Primary color approximation */
  font-weight: bold;
`;

const labelStyles = `
  font-weight: bold;
  color: #555;
`;

export const getAdminEmailTemplate = (data: EmailData) => {
  return `
    <div style="${commonStyles}">
      <div style="${headerStyles}">
        <h1 style="margin:0; font-size: 24px;">Nuova Richiesta dal Sito Web</h1>
      </div>
      
      <p>Ciao Admin,</p>
      <p>Hai ricevuto una nuova richiesta di contatto tramite il modulo del sito web.</p>
      
      <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <p><span style="${labelStyles}">Nome:</span> ${data.name}</p>
        <p><span style="${labelStyles}">Email:</span> ${data.email}</p>
        <p><span style="${labelStyles}">Oggetto:</span> ${data.subject}</p>
        
        <div style="margin-top: 15px;">
          <p style="${labelStyles} margin-bottom: 5px;">Messaggio:</p>
          <p style="white-space: pre-wrap; background-color: #fff; padding: 10px; border: 1px solid #eee; border-radius: 4px;">${data.message}</p>
        </div>
      </div>
      
      <p>Puoi rispondere direttamente a questa email per contattare il cliente (Reply-To impostato su: ${data.email}).</p>
      
      <div style="${footerStyles}">
        <p>Messaggio inviato automaticamente dal sito web S.I.I. Milano</p>
      </div>
    </div>
  `;
};

export const getCustomerEmailTemplate = (data: EmailData) => {
  return `
    <div style="${commonStyles}">
      <div style="${headerStyles}">
        <h1 style="margin:0; font-size: 24px;">Grazie per averci contattato</h1>
      </div>
      
      <p>Gentile <strong>${data.name}</strong>,</p>
      <p>Abbiamo ricevuto la tua richiesta e ti ringraziamo per l'interesse mostrato verso i nostri servizi.</p>
      <p>Il nostro team prenderà in carico la tua richiesta e ti risponderà il prima possibile.</p>
      
      <div style="margin: 25px 0; border-left: 4px solid #fbbf24; padding-left: 15px;">
        <h3 style="margin-top: 0; color: #0f172a;">Riepilogo della tua richiesta:</h3>
        <p><span style="${labelStyles}">Oggetto:</span> ${data.subject}</p>
        <p><span style="${labelStyles}">Messaggio:</span></p>
        <p style="font-style: italic; color: #555;">"${data.message}"</p>
      </div>
      
      <div style="background-color: #0f172a; color: white; padding: 20px; border-radius: 8px; margin-top: 30px;">
        <h3 style="margin-top: 0; color: #fbbf24; text-transform: uppercase; font-size: 16px;">I Nostri Contatti</h3>
        <p style="margin: 5px 0;"><strong>${companyInfo.name}</strong></p>
        <p style="margin: 5px 0;">📍 Sede Legale: ${companyInfo.addressLegal}</p>
        <p style="margin: 5px 0;">🏭 Sede Operativa: ${companyInfo.addressOperational}</p>
        <p style="margin: 5px 0;">📞 Telefono: <a href="tel:${companyInfo.phone.replace(/\s/g, '')}" style="color: #fbbf24; text-decoration: none;">${companyInfo.phone}</a></p>
        <p style="margin: 5px 0;">✉️ Email: <a href="mailto:${companyInfo.email}" style="color: #fbbf24; text-decoration: none;">${companyInfo.email}</a></p>
      </div>
      
      <div style="${footerStyles}">
        <p>&copy; ${new Date().getFullYear()} ${companyInfo.name} - P.IVA: ${companyInfo.vat}</p>
        <p>Questa è una email automatica, per favore non rispondere direttamente a questo indirizzo.</p>
      </div>
    </div>
  `;
};
