import { Router, Request, Response } from 'express';
import { validateEnquiry } from '../middleware/validate';
import { sendEnquiryEmail } from '../services/mailer';
import { logger } from '../services/logger';

const router = Router();

// POST /api/enquiry
router.post('/', validateEnquiry, async (req: Request, res: Response) => {
  const data = req.body;

  logger.info('New enquiry received', {
    parentName: data.parentName,
    childName: data.childName,
    program: data.program,
    email: data.email,
    phone: data.phone,
  });

  try {
    await sendEnquiryEmail(data);
    logger.info('Enquiry email sent successfully', { childName: data.childName });

    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully! We will contact you within 24 hours.',
    });
  } catch (err) {
    logger.error('Failed to send enquiry email', { error: err, childName: data.childName });
    res.status(500).json({
      success: false,
      message: 'Enquiry received but email delivery failed. Please call us directly.',
    });
  }
});

export default router;
