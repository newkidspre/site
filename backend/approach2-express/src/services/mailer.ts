import nodemailer from 'nodemailer';
import { logger } from './logger';

export interface EnquiryData {
  parentName: string;
  childName: string;
  childAge: number;
  email: string;
  phone: string;
  program: string;
  message?: string;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function buildHtmlEmail(data: EnquiryData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background:#f8fafc; margin:0; padding:0; }
    .container { max-width:600px; margin:30px auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.08); }
    .header { background:linear-gradient(135deg,#f97316,#d946ef); padding:32px; text-align:center; color:#fff; }
    .header h1 { margin:0; font-size:24px; font-weight:800; }
    .header p { margin:6px 0 0; opacity:0.9; font-size:14px; }
    .body { padding:32px; }
    .field { margin-bottom:16px; }
    .label { font-size:11px; font-weight:700; text-transform:uppercase; color:#94a3b8; letter-spacing:0.08em; margin-bottom:4px; }
    .value { font-size:16px; color:#1e293b; font-weight:600; padding:10px 14px; background:#f1f5f9; border-radius:8px; }
    .badge { display:inline-block; padding:6px 14px; background:linear-gradient(135deg,#10b981,#059669); color:#fff; border-radius:20px; font-size:13px; font-weight:700; }
    .message-box { background:#fefce8; border-left:4px solid #f97316; padding:14px; border-radius:0 8px 8px 0; color:#1e293b; font-size:14px; line-height:1.6; }
    .footer { background:#f8fafc; padding:20px 32px; text-align:center; font-size:12px; color:#94a3b8; border-top:1px solid #e2e8f0; }
    .divider { height:1px; background:#e2e8f0; margin:24px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>⭐ New Admission Enquiry</h1>
      <p>Little Stars Preschool – Admissions 2025–26</p>
    </div>
    <div class="body">
      <p style="color:#475569;font-size:14px;margin-top:0;">A new enquiry has been submitted via the website. Please follow up within 24 hours.</p>
      <div class="divider"></div>

      <div class="field">
        <div class="label">Parent / Guardian Name</div>
        <div class="value">${data.parentName}</div>
      </div>
      <div class="field">
        <div class="label">Child's Name</div>
        <div class="value">${data.childName}</div>
      </div>
      <div style="display:flex;gap:12px;">
        <div class="field" style="flex:1;">
          <div class="label">Child's Age</div>
          <div class="value">${data.childAge} year${data.childAge > 1 ? 's' : ''}</div>
        </div>
        <div class="field" style="flex:1;">
          <div class="label">Preferred Program</div>
          <div class="value"><span class="badge">${data.program}</span></div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${data.email}" style="color:#f97316;text-decoration:none;">${data.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Mobile Number</div>
        <div class="value"><a href="tel:${data.phone}" style="color:#f97316;text-decoration:none;">${data.phone}</a></div>
      </div>

      ${data.message ? `
      <div class="divider"></div>
      <div class="field">
        <div class="label">Additional Message</div>
        <div class="message-box">${data.message}</div>
      </div>` : ''}

      <div class="divider"></div>
      <p style="font-size:12px;color:#94a3b8;margin:0;">Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
    </div>
    <div class="footer">© ${new Date().getFullYear()} Little Stars Preschool · newkidspre@gmail.com</div>
  </div>
</body>
</html>`;
}

export async function sendEnquiryEmail(data: EnquiryData): Promise<void> {
  const transporter = createTransporter();
  const adminEmail = process.env.ADMIN_EMAIL || 'newkidspre@gmail.com';

  const info = await transporter.sendMail({
    from: `"Little Stars Website" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    replyTo: data.email,
    subject: `New Admission Enquiry: ${data.childName} (${data.program})`,
    html: buildHtmlEmail(data),
    text: `
New Admission Enquiry
=====================
Parent Name  : ${data.parentName}
Child Name   : ${data.childName}
Child Age    : ${data.childAge} years
Program      : ${data.program}
Email        : ${data.email}
Phone        : ${data.phone}
Message      : ${data.message || 'N/A'}
Submitted at : ${new Date().toISOString()}
    `.trim(),
  });

  logger.info(`Email sent to ${adminEmail}`, { messageId: info.messageId, childName: data.childName });
}
