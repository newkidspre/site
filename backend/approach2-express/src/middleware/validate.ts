import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const enquirySchema = Joi.object({
  parentName: Joi.string().min(2).max(100).required().messages({
    'string.min': 'Parent name must be at least 2 characters',
    'any.required': 'Parent name is required',
  }),
  childName: Joi.string().min(2).max(100).required().messages({
    'string.min': "Child's name must be at least 2 characters",
    'any.required': "Child's name is required",
  }),
  childAge: Joi.number().integer().min(2).max(6).required().messages({
    'number.min': 'Child age must be at least 2',
    'number.max': 'Child age must be at most 6',
    'any.required': "Child's age is required",
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Enter a valid email address',
    'any.required': 'Email is required',
  }),
  phone: Joi.string().pattern(/^[6-9]\d{9}$/).required().messages({
    'string.pattern.base': 'Enter a valid 10-digit Indian mobile number',
    'any.required': 'Phone number is required',
  }),
  program: Joi.string().valid('Playgroup', 'Nursery', 'LKG', 'UKG').required().messages({
    'any.only': 'Program must be one of: Playgroup, Nursery, LKG, UKG',
    'any.required': 'Please select a program',
  }),
  message: Joi.string().max(1000).optional().allow(''),
});

export function validateEnquiry(req: Request, res: Response, next: NextFunction): void {
  const { error, value } = enquirySchema.validate(req.body, { abortEarly: false });
  if (error) {
    const details = error.details.map((d) => d.message);
    res.status(400).json({ success: false, message: details[0], errors: details });
    return;
  }
  req.body = value;
  next();
}
