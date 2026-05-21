import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Address',
    lines: ['123, Sunshine Colony,', 'Banjara Hills, Hyderabad – 500034', 'Telangana, India'],
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    lines: ['+91 98765 43210', '+91 91234 56789'],
    color: 'bg-accent-100 text-accent-600',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@littlestars.in', 'admissions@littlestars.in'],
    color: 'bg-secondary-100 text-secondary-600',
    href: 'mailto:hello@littlestars.in',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Fri: 8:30 AM – 4:00 PM', 'Saturday: 9:00 AM – 1:00 PM', 'Sunday: Closed'],
    color: 'bg-yellow-100 text-yellow-600',
  },
];

const faqs = [
  { q: 'When does the academic year start?', a: 'Our academic year begins in June. However, admissions are open throughout the year subject to seat availability.' },
  { q: 'Is there a school bus facility?', a: 'Yes, we offer a safe and GPS-tracked school bus service covering major areas in Hyderabad. Contact us for route details.' },
  { q: 'Do you offer a trial class?', a: 'Absolutely! We encourage parents to schedule a free visit and trial session before enrollment.' },
  { q: 'What is the student-to-teacher ratio?', a: 'We maintain a low ratio of 6:1 for Playgroup and up to 10:1 for UKG to ensure personal attention for every child.' },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary-200 rounded-full blur-3xl opacity-30" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-secondary-500 font-fun font-bold uppercase tracking-wider mb-3">We'd Love to Hear From You</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-6">
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-subtitle mx-auto">
            Have questions about admissions, curriculum, or fees? We're happy to help!
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 text-center group"
              >
                <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.lines.map((line, j) => (
                  info.href && j === 0 ? (
                    <a key={line} href={info.href} className="block text-sm text-primary-500 hover:text-primary-700 font-medium">{line}</a>
                  ) : (
                    <p key={line} className="text-sm text-gray-500">{line}</p>
                  )
                ))}
              </motion.div>
            ))}
          </div>

          {/* Map + WhatsApp */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 card overflow-hidden"
            >
              <div className="bg-gray-100 h-96 flex items-center justify-center relative">
                <iframe
                  title="Little Stars Preschool Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2783!2d78.4421!3d17.4156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzU2LjIiTiA3OMKwMjYnMzEuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5 flex items-center gap-3 bg-gray-50 border-t border-gray-100">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">123, Sunshine Colony, Banjara Hills, Hyderabad – 500034</span>
                <a
                  href="https://maps.google.com/?q=Banjara+Hills+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs text-primary-500 font-semibold hover:underline whitespace-nowrap"
                >
                  Open in Maps →
                </a>
              </div>
            </motion.div>

            {/* Quick contact + WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card p-8 bg-gradient-to-br from-green-400 to-teal-500 text-white">
                <MessageCircle className="w-10 h-10 mb-4 opacity-90" />
                <h3 className="text-xl font-display font-bold mb-2">Chat on WhatsApp</h3>
                <p className="text-sm opacity-90 mb-5">Get instant answers from our admissions team. We typically reply within minutes!</p>
                <a
                  href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20admission%20at%20Little%20Stars%20Preschool."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-200 text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> Start WhatsApp Chat
                </a>
              </div>

              <div className="card p-8">
                <h3 className="font-display font-bold text-gray-900 mb-4">School Timings</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 1:00 PM' },
                    { day: 'Office Hours', time: '8:30 AM – 4:00 PM' },
                    { day: 'Saturday', time: '9:00 AM – 1:00 PM' },
                    { day: 'Sunday', time: 'Closed' },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between text-sm">
                      <span className="text-gray-500">{item.day}</span>
                      <span className="font-semibold text-gray-800">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-fun font-bold uppercase tracking-wider mb-3">Common Questions</p>
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card p-6 group cursor-pointer"
              >
                <summary className="font-display font-semibold text-gray-900 list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <span className="text-primary-400 text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
