import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import SMTPConnection from 'nodemailer/lib/smtp-connection';
import { ContactMessage, isContactMessage } from './types';

const smtpConnectionOptions: SMTPConnection.Options = {
  host: process.env.EMAIL_SLAVE_HOST,
  port: process.env.EMAIL_SLAVE_PORT
    ? Number(process.env.EMAIL_SLAVE_PORT)
    : undefined,
  secure: true,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_SLAVE_USER,
    pass: process.env.EMAIL_SLAVE_PASS,
  },
  logger: false,
};
const transporter = nodemailer.createTransport(smtpConnectionOptions);

const emailBodyTemplate = (contactMessage: ContactMessage) =>
  `User: ${contactMessage.fullName} Email: ${contactMessage.email} says:

${contactMessage.body}`;

const userContact = async (req: NextApiRequest, res: NextApiResponse) => {
  const contactMessage = req.body;

  if (!isContactMessage(contactMessage)) {
    res.status(500);
    res.end();
    return res;
  }

  await transporter
    .sendMail({
      from: `${contactMessage.fullName} <${contactMessage.email}>`,
      replyTo: `${contactMessage.fullName} <${contactMessage.email}>`,
      to: process.env.PUBLIC_EMAIL,
      subject: contactMessage.subject,
      text: emailBodyTemplate(contactMessage),
    })
    .then(() => res.status(200))
    .catch((e) => {
      console.error(e);
      res.status(500);
    })
    .finally(() => res.end());

  return res;
};

export default userContact;
