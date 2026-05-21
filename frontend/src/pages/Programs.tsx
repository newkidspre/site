import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'playgroup',
    name: 'Playgroup',
    age: '1.5 – 2.5 years',
    color: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    badge: 'bg-yellow-100 text-yellow-700',
    emoji: '🧸',
    timings: 'Mon–Fri | 9:00 AM – 11:30 AM',
    capacity: '12 children per class',
    desc: 'A gentle introduction to group learning through sensory play, songs, and creative activities in a warm, home-like setting.',
    features: ['Sensory exploration', 'Circle time & songs', 'Fine motor activities', 'Toilet training support', 'Parent bonding sessions'],
  },
  {
    id: 'nursery',
    name: 'Nursery',
    age: '2.5 – 3.5 years',
    color: 'from-pink-400 to-red-400',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    badge: 'bg-pink-100 text-pink-700',
    emoji: '🌸',
    timings: 'Mon–Fri | 9:00 AM – 12:00 PM',
    capacity: '15 children per class',
    desc: 'Building language, social skills, and early numeracy through stories, art, music, and structured free play.',
    features: ['Language & vocabulary', 'Pre-writing skills', 'Number concepts 1–20', 'Art & craft projects', 'Outdoor play daily'],
  },
  {
    id: 'lkg',
    name: 'LKG',
    age: '3.5 – 4.5 years',
    color: 'from-green-400 to-teal-400',
    bg: 'bg-green-50',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-700',
    emoji: '📗',
    timings: 'Mon–Fri | 9:00 AM – 12:30 PM',
    capacity: '18 children per class',
    desc: 'Structured curriculum covering early literacy, phonics, mathematics, and life skills with a balanced play approach.',
    features: ['Phonics & reading readiness', 'Numbers up to 50', 'EVS (Environment)', 'Computer basics', 'Yoga & mindfulness'],
  },
  {
    id: 'ukg',
    name: 'UKG',
    age: '4.5 – 5.5 years',
    color: 'from-blue-400 to-indigo-400',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    emoji: '🎓',
    timings: 'Mon–Fri | 9:00 AM – 1:00 PM',
    capacity: '20 children per class',
    desc: 'School-readiness program focusing on reading fluency, writing, arithmetic, critical thinking, and independence.',
    features: ['Reading & comprehension', 'Writing sentences', 'Addition & subtraction', 'Science experiments', 'Public speaking'],
  },
];

export default function Programs() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent-200 rounded-full blur-3xl opacity-30" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent-600 font-fun font-bold uppercase tracking-wider mb-3">What We Offer</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-6">
            Our <span className="gradient-text">Programs</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-subtitle mx-auto">
            Age-appropriate programs designed to nurture every stage of early childhood development.
          </motion.p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="space-y-10">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`card ${prog.bg} border ${prog.border} overflow-hidden`}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left: Header */}
                  <div className={`bg-gradient-to-br ${prog.color} p-10 flex flex-col items-center justify-center text-center text-white`}>
                    <span className="text-7xl mb-4">{prog.emoji}</span>
                    <h2 className="text-4xl font-display font-black mb-1">{prog.name}</h2>
                    <span className={`mt-3 px-4 py-1 rounded-full text-sm font-semibold bg-white/20`}>
                      Ages {prog.age}
                    </span>
                  </div>

                  {/* Middle: Info */}
                  <div className="p-8 md:col-span-2">
                    <p className="text-gray-600 leading-relaxed mb-6 text-base">{prog.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span>{prog.timings}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <Users className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span>{prog.capacity}</span>
                      </div>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                      {prog.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/admissions"
                      className="inline-flex items-center gap-2 btn-primary text-sm"
                    >
                      Enroll in {prog.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule overview */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="section-title">Academic <span className="gradient-text">Calendar</span></h2>
          </div>
          <div className="card p-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-display font-bold text-gray-700">Program</th>
                  <th className="text-left py-3 px-4 font-display font-bold text-gray-700">Age Group</th>
                  <th className="text-left py-3 px-4 font-display font-bold text-gray-700">Days</th>
                  <th className="text-left py-3 px-4 font-display font-bold text-gray-700">Timings</th>
                  <th className="text-left py-3 px-4 font-display font-bold text-gray-700">Fee/Month</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Playgroup', age: '1.5–2.5 yrs', days: 'Mon–Fri', time: '9:00–11:30 AM', fee: '₹2,500' },
                  { name: 'Nursery',   age: '2.5–3.5 yrs', days: 'Mon–Fri', time: '9:00–12:00 PM', fee: '₹3,000' },
                  { name: 'LKG',       age: '3.5–4.5 yrs', days: 'Mon–Fri', time: '9:00–12:30 PM', fee: '₹3,500' },
                  { name: 'UKG',       age: '4.5–5.5 yrs', days: 'Mon–Fri', time: '9:00–1:00 PM',  fee: '₹4,000' },
                ].map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-semibold text-gray-800">{row.name}</td>
                    <td className="py-3 px-4 text-gray-600">{row.age}</td>
                    <td className="py-3 px-4 text-gray-600">{row.days}</td>
                    <td className="py-3 px-4 text-gray-600">{row.time}</td>
                    <td className="py-3 px-4 text-accent-600 font-semibold">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
