import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Loader2, Send, CheckCircle2, User, Baby, Mail, Phone, MessageSquare, GraduationCap } from 'lucide-react';
import { submitEnquiry } from '../api/enquiry';
import type { EnquiryFormData } from '../types';

const schema = yup.object({
  parentName: yup.string().min(2, 'Minimum 2 characters').required('Parent name is required'),
  childName:  yup.string().min(2, 'Minimum 2 characters').required("Child's name is required"),
  childAge:   yup.number().typeError('Enter a valid age').min(2, 'Minimum age is 2').max(6, 'Maximum age is 6').required('Age is required'),
  email:      yup.string().email('Enter a valid email address').required('Email is required'),
  phone:      yup.string()
    .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number')
    .required('Phone number is required'),
  program:    yup.string().oneOf(['Playgroup', 'Nursery', 'LKG', 'UKG'], 'Select a program').required('Please select a program'),
  message:    yup.string().optional(),
}).required();



export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: yupResolver(schema) as any,
    mode: 'onChange',
  });

  const onSubmit = async (data: EnquiryFormData) => {
    try {
      await submitEnquiry(data);
      setSubmitted(true);
      reset();
      toast.success('🎉 Enquiry submitted! We\'ll contact you within 24 hours.');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      toast.error(msg);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-5 left-10 w-48 h-48 bg-secondary-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary-500 font-fun font-bold uppercase tracking-wider mb-3">Join Our Family</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-6">
            Admissions <span className="gradient-text">2025–26</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-subtitle mx-auto">
            Fill out the enquiry form and our admissions team will get in touch within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left: info panel */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-8">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Why Enroll Early?</h2>
                <ul className="space-y-3">
                  {[
                    'Limited seats per batch (12–20 children)',
                    'Early birds get first choice of timing slots',
                    'Sibling discount available',
                    'No-obligation enquiry — just fill the form!',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card p-8 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                <h3 className="text-xl font-display font-bold mb-3">Admission Process</h3>
                <ol className="space-y-3">
                  {[
                    'Submit online enquiry form',
                    'School visit & interaction',
                    'Admission confirmation',
                    'Fee payment & enrollment',
                  ].map((step, i) => (
                    <li key={step} className="flex items-center gap-3 text-sm">
                      <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="card p-8 bg-accent-50 border border-accent-200">
                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">📋 Documents Needed</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {["Child's birth certificate", 'Parent/Guardian ID proof', '2 passport-size photos', 'Address proof'].map((doc) => (
                    <li key={doc} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" /> {doc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-12 text-center"
                >
                  <div className="w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12 text-accent-500" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">You're All Set! 🎉</h2>
                  <p className="text-gray-500 mb-8">Thank you for your enquiry. Our admissions team will call you within 24 hours to discuss the next steps.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-8 md:p-10">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Admission Enquiry Form</h2>
                  <p className="text-gray-400 text-sm mb-8">All fields marked <span className="text-red-500">*</span> are required.</p>

                  <form id="admission-form" onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                    {/* Parent Name */}
                    <div>
                      <label htmlFor="parentName" className="label">
                        <User className="inline w-4 h-4 mr-1 text-primary-400" /> Parent / Guardian Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        {...register('parentName')}
                        className={`input-field ${errors.parentName ? 'input-error' : ''}`}
                      />
                      {errors.parentName && <p className="mt-1 text-xs text-red-500">{errors.parentName.message}</p>}
                    </div>

                    {/* Child Name + Age */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="childName" className="label">
                          <Baby className="inline w-4 h-4 mr-1 text-primary-400" /> Child's Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="childName"
                          type="text"
                          placeholder="e.g. Aarav Sharma"
                          {...register('childName')}
                          className={`input-field ${errors.childName ? 'input-error' : ''}`}
                        />
                        {errors.childName && <p className="mt-1 text-xs text-red-500">{errors.childName.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="childAge" className="label">
                          Child's Age (years) <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="childAge"
                          type="number"
                          min={2}
                          max={6}
                          placeholder="e.g. 3"
                          {...register('childAge')}
                          className={`input-field ${errors.childAge ? 'input-error' : ''}`}
                        />
                        {errors.childAge && <p className="mt-1 text-xs text-red-500">{errors.childAge.message}</p>}
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="label">
                          <Mail className="inline w-4 h-4 mr-1 text-primary-400" /> Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="rahul@example.com"
                          {...register('email')}
                          className={`input-field ${errors.email ? 'input-error' : ''}`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="label">
                          <Phone className="inline w-4 h-4 mr-1 text-primary-400" /> Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="10-digit Indian number"
                          maxLength={10}
                          {...register('phone')}
                          className={`input-field ${errors.phone ? 'input-error' : ''}`}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                      </div>
                    </div>

                    {/* Program */}
                    <div>
                      <label htmlFor="program" className="label">
                        <GraduationCap className="inline w-4 h-4 mr-1 text-primary-400" /> Preferred Program <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="program"
                        {...register('program')}
                        className={`input-field ${errors.program ? 'input-error' : ''}`}
                        defaultValue=""
                      >
                        <option value="" disabled>Select a program...</option>
                        <option value="Playgroup">🧸 Playgroup (1.5–2.5 years)</option>
                        <option value="Nursery">🌸 Nursery (2.5–3.5 years)</option>
                        <option value="LKG">📗 LKG (3.5–4.5 years)</option>
                        <option value="UKG">🎓 UKG (4.5–5.5 years)</option>
                      </select>
                      {errors.program && <p className="mt-1 text-xs text-red-500">{errors.program.message}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="label">
                        <MessageSquare className="inline w-4 h-4 mr-1 text-primary-400" /> Additional Message <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Any specific questions, concerns, or information you'd like to share..."
                        {...register('message')}
                        className="input-field resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      id="submit-enquiry-btn"
                      type="submit"
                      disabled={isSubmitting || !isValid}
                      className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> Submit Enquiry
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      By submitting, you agree to be contacted by our admissions team. We respect your privacy.
                    </p>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
