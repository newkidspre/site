# Little Stars Preschool – Full Stack Website

A modern, responsive preschool website built with **React 18 + TypeScript + Vite + Tailwind CSS** and two interchangeable backend approaches.

---

## 🗂 Project Structure

```
sch/
├── frontend/                    # React 18 + TS + Vite + Tailwind CSS
│   └── src/
│       ├── pages/               # Home, About, Programs, Admissions, Contact
│       ├── components/          # Navbar, Footer
│       ├── api/enquiry.ts       # API client (switchable)
│       └── types/index.ts       # TypeScript types
├── backend/
│   ├── approach1-serverless/    # AWS Lambda + API Gateway + SES
│   │   ├── handler.js
│   │   └── serverless.yml
│   └── approach2-express/       # Node.js + Express + Nodemailer
│       └── src/
│           ├── app.ts
│           ├── routes/enquiry.ts
│           ├── middleware/validate.ts
│           └── services/{mailer,logger}.ts
└── README.md
```

---

## 🚀 Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev          # → http://localhost:5173
```

### Backend – Approach 2 (Express, recommended for local dev)

```bash
cd backend/approach2-express
npm install
cp .env.example .env   # Fill in your SMTP credentials
npm run dev            # → http://localhost:3001
```

Test the API:
```bash
curl -X POST http://localhost:3001/api/enquiry \
  -H "Content-Type: application/json" \
  -d '{"parentName":"Rahul","childName":"Aarav","childAge":3,"email":"rahul@test.com","phone":"9876543210","program":"Nursery"}'
```

### Backend – Approach 1 (AWS Lambda)

```bash
cd backend/approach1-serverless
npm install -g serverless
npm install nodemailer
export ADMIN_EMAIL=admin@littlestars.in
export SMTP_USER=your-ses-smtp-user
export SMTP_PASS=your-ses-smtp-pass
serverless deploy --stage prod
# or test locally:
serverless offline
```

---

## 🔌 Switching Backends in Frontend

Edit `frontend/.env`:

```env
# Use Express backend (default)
VITE_BACKEND=express
VITE_API_URL=http://localhost:3001

# Use AWS Lambda
VITE_BACKEND=lambda
VITE_LAMBDA_URL=https://your-api-id.execute-api.ap-south-1.amazonaws.com/prod
```

---

## 📧 Email Setup (Approach 2 – Express)

Copy `.env.example` → `.env` and fill in:

| Variable | Description |
|---|---|
| `SMTP_HOST` | `smtp.gmail.com` or your provider |
| `SMTP_PORT` | Usually `587` |
| `SMTP_USER` | Your sender email |
| `SMTP_PASS` | App password (Gmail: generate at myaccount.google.com) |
| `ADMIN_EMAIL` | Where enquiries are sent |

**Gmail:** Enable 2FA → Generate App Password → use as `SMTP_PASS`

---

## 🧩 Extending the Backend

| Feature | How to Add |
|---|---|
| **Database (MongoDB)** | Add `mongoose`, create `Enquiry` model, save before emailing |
| **Dashboard/Auth** | Add JWT middleware + admin routes |
| **SMS notifications** | Integrate Twilio/MSG91 in mailer.ts |
| **Analytics** | Log to CloudWatch (Lambda) or a DB table |
| **Rate limiting** | Already included in Express (`express-rate-limit`) |

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Forms | React Hook Form + Yup validation |
| Animations | Framer Motion, Swiper.js |
| Icons | Lucide React |
| Notifications | React Toastify |
| Backend (A1) | AWS Lambda, API Gateway, SES |
| Backend (A2) | Node.js, Express, Nodemailer, Joi, Winston |
