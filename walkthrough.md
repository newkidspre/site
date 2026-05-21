# Little Stars Preschool Website – Walkthrough

## ✅ Build Status: Passing

`npm run build` → **✓ built in 2.55s** (zero TypeScript errors)  
Dev server: **http://localhost:5173/** (running)

---

## What Was Built

### Frontend (`/frontend`) — React 18 + TypeScript + Vite + Tailwind CSS

| Page | Route | Status |
|------|-------|--------|
| **Home** | `/` | ✅ Hero, stats, features, gallery, testimonials carousel, CTA |
| **About Us** | `/about` | ✅ Mission/Vision, values, faculty cards, facilities |
| **Programs** | `/programs` | ✅ 4 program cards, timings, fee table |
| **Admissions** | `/admissions` | ✅ Full validated enquiry form |
| **Contact** | `/contact` | ✅ Contact cards, Google Maps embed, WhatsApp CTA, FAQ |

#### Key Components
- `Navbar.tsx` — Scroll-aware glassmorphism, mobile hamburger drawer, active link highlighting
- `Footer.tsx` — 4-column layout, social links, contact info

#### Form Features (Admissions page)
- ✅ All 7 fields with live validation (react-hook-form + Yup)
- ✅ Indian phone regex validation (`/^[6-9]\d{9}$/`)
- ✅ Submit disabled until all fields valid
- ✅ Loading spinner during submission
- ✅ Success state with confetti-style confirmation view
- ✅ Error toast on API failure

---

### Backend Approach 1 — AWS Lambda + API Gateway (`/backend/approach1-serverless`)

| File | Purpose |
|------|---------|
| `handler.js` | Lambda function: validates, sends HTML email via SES SMTP |
| `serverless.yml` | API Gateway routes, IAM roles, SES permissions, env vars |

**Deploy:** `serverless deploy --stage prod`  
**Test locally:** `serverless offline` (port 4000)

---

### Backend Approach 2 — Express + Nodemailer (`/backend/approach2-express`)

| File | Purpose |
|------|---------|
| `src/app.ts` | Express app, CORS, rate-limiting (20 req/15min), health check |
| `src/routes/enquiry.ts` | `POST /api/enquiry` |
| `src/middleware/validate.ts` | Joi schema validation |
| `src/services/mailer.ts` | Nodemailer + beautiful HTML email template |
| `src/services/logger.ts` | Winston structured logging |
| `.env.example` | SMTP config template |

**Run:** `cp .env.example .env && npm run dev` (port 3001)

---

## Switching Backends

Edit `frontend/.env`:
```env
VITE_BACKEND=express        # or 'lambda'
VITE_API_URL=http://localhost:3001
VITE_LAMBDA_URL=https://your-api.execute-api.ap-south-1.amazonaws.com/prod
```

---

## Browser Verification Results

The browser subagent confirmed:

- ✅ All 5 pages load without console errors
- ✅ Gradient hero, animated floating blobs, vibrant color palette
- ✅ Testimonial Swiper carousel with autoplay
- ✅ Form validation: errors shown on blur, submit stays disabled
- ✅ FAQ accordion opens/closes smoothly
- ✅ Mobile hamburger menu collapses properly
- ✅ No broken assets or failed network requests

![Preview Recording](/home/shaikmohamad-s/.gemini/antigravity/brain/40cfc2ee-f3f2-43e2-aeb1-0c70533ecadc/preschool_site_preview_1779342092286.webp)

---

## How to Run

```bash
# Frontend
cd frontend && npm run dev
# → http://localhost:5173

# Express Backend
cd backend/approach2-express
cp .env.example .env   # fill SMTP credentials
npm run dev
# → http://localhost:3001

# Test API
curl -X POST http://localhost:3001/api/enquiry \
  -H "Content-Type: application/json" \
  -d '{"parentName":"Rahul","childName":"Aarav","childAge":3,
       "email":"test@example.com","phone":"9876543210","program":"Nursery"}'
```

---

## Extending the Backend

| Feature | Steps |
|---------|-------|
| **MongoDB** | `npm i mongoose` → create `EnquiryModel` → save before email |
| **SMS (MSG91)** | Add MSG91 SDK to `mailer.ts`, call after email |
| **Auth/Dashboard** | Add JWT middleware + admin routes to `app.ts` |
| **Analytics** | Log to a DB table or CloudWatch in handler/route |
