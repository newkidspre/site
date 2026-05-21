import axios from 'axios';
import type { EnquiryFormData, ApiResponse } from '../types';

// Switch to APPROACH1_URL for AWS Lambda or APPROACH2_URL for Express
const APPROACH2_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const APPROACH1_URL = import.meta.env.VITE_LAMBDA_URL || '';

// Set to 'lambda' or 'express'
const BACKEND = import.meta.env.VITE_BACKEND || 'express';

const api = axios.create({
  baseURL: BACKEND === 'lambda' ? APPROACH1_URL : APPROACH2_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

export async function submitEnquiry(data: EnquiryFormData): Promise<ApiResponse> {
  try {
    const endpoint = BACKEND === 'lambda' ? '/enquiry' : '/api/enquiry';
    const res = await api.post<ApiResponse>(endpoint, data);
    return res.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw new Error('Failed to submit enquiry. Please try again.');
  }
}
