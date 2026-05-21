import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import enquiryRouter from './routes/enquiry';
import { logger } from './services/logger';

const app = express();
const PORT = parseInt(process.env.PORT || '3001');

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// CORS – allow frontend origin
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// Rate limiting – max 20 requests per 15 min per IP
app.use('/api', rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please try again later.' },
}));

// ── Routes ─────────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Little Stars API', timestamp: new Date().toISOString() });
});

app.use('/api/enquiry', enquiryRouter);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global error handler
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  logger.error('Unhandled error', { error: err.message, stack: err.stack });
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ── Start ──────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  logger.info(`🚀 Little Stars API running at http://localhost:${PORT}`);
  logger.info(`📧 Admin email: ${process.env.ADMIN_EMAIL || 'NOT SET'}`);
  logger.info(`🌐 CORS origin: ${process.env.FRONTEND_ORIGIN || 'http://localhost:5173'}`);
});

export default app;
