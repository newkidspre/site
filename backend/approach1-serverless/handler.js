'use strict';

const nodemailer = require('nodemailer');

// ── Email helper ───────────────────────────────────────────────────────────
function buildHtml(data) {
  return `
<!DOCTYPE html><html><head><meta charset="UTF-8"/>
<style>
body{font-family:Arial,sans-serif;background:#f8fafc;margin:0;padding:0;}
.wrap{max-width:600px;margin:30px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);}
.hdr{background:linear-gradient(135deg,#f97316,#d946ef);padding:28px;text-align:center;color:#fff;}
.hdr h1{margin:0;font-size:22px;font-weight:800;}
.body{padding:28px;}
.lbl{font-size:11px;font-weight:700;text-transform:uppercase;color:#94a3b8;margin-bottom:4px;}
.val{font-size:15px;color:#1e293b;font-weight:600;padding:10px 14px;background:#f1f5f9;border-radius:8px;margin-bottom:12px;}
.badge{display:inline-block;padding:5px 12px;background:#10b981;color:#fff;border-radius:20px;font-size:13px;font-weight:700;}
.msg{background:#fefce8;border-left:4px solid #f97316;padding:12px;border-radius:0 8px 8px 0;color:#1e293b;font-size:14px;}
.ftr{background:#f8fafc;padding:16px;text-align:center;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0;}
</style></head>
<body><div class="wrap">
<div class="hdr"><h1>⭐ New Admission Enquiry</h1><p style="margin:4px 0 0;opacity:.9;font-size:13px;">Little Stars Preschool – Admissions 2025–26</p></div>
<div class="body">
<div class="lbl">Parent Name</div><div class="val">${data.parentName}</div>
<div class="lbl">Child Name</div><div class="val">${data.childName}</div>
<div class="lbl">Child Age</div><div class="val">${data.childAge} years</div>
<div class="lbl">Program</div><div class="val"><span class="badge">${data.program}</span></div>
<div class="lbl">Email</div><div class="val"><a href="mailto:${data.email}" style="color:#f97316">${data.email}</a></div>
<div class="lbl">Phone</div><div class="val">${data.phone}</div>
${data.message ? `<div class="lbl">Message</div><div class="msg">${data.message}</div>` : ''}
<p style="font-size:11px;color:#94a3b8;margin-top:16px;">Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
</div>
<div class="ftr">© ${new Date().getFullYear()} Little Stars Preschool · hello@littlestars.in</div>
</div></body></html>`;
}

// ── Validation ─────────────────────────────────────────────────────────────
function validate(body) {
  const errors = [];
  if (!body.parentName || body.parentName.length < 2) errors.push('parentName is required');
  if (!body.childName  || body.childName.length  < 2) errors.push('childName is required');
  const age = parseInt(body.childAge);
  if (isNaN(age) || age < 2 || age > 6) errors.push('childAge must be 2–6');
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) errors.push('valid email required');
  if (!body.phone || !/^[6-9]\d{9}$/.test(body.phone)) errors.push('valid 10-digit Indian phone required');
  if (!['Playgroup','Nursery','LKG','UKG'].includes(body.program)) errors.push('program must be Playgroup/Nursery/LKG/UKG');
  return errors;
}

// ── CORS helper ────────────────────────────────────────────────────────────
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

// ── Lambda Handler ─────────────────────────────────────────────────────────
exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ success: false, message: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ success: false, message: 'Invalid JSON body' }) };
  }

  // Validate
  const errors = validate(body);
  if (errors.length) {
    return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ success: false, message: errors[0], errors }) };
  }

  console.log('New enquiry:', JSON.stringify({ parentName: body.parentName, childName: body.childName, program: body.program }));

  // Send email via SES SMTP (or any SMTP)
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'email-smtp.ap-south-1.amazonaws.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Little Stars Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || 'admin@littlestars.in',
      replyTo: body.email,
      subject: `New Admission Enquiry: ${body.childName} (${body.program})`,
      html: buildHtml(body),
      text: `New Enquiry\nParent: ${body.parentName}\nChild: ${body.childName} (${body.childAge} yrs)\nProgram: ${body.program}\nEmail: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message || 'N/A'}`,
    });

    console.log('Email sent for', body.childName);
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ success: true, message: 'Enquiry submitted! We will contact you within 24 hours.' }),
    };
  } catch (err) {
    console.error('Email send failed:', err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ success: false, message: 'Enquiry received but email failed. Please call us.' }),
    };
  }
};
