import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, BookOpen, Users } from 'lucide-react';

const faculty = [
  { name: 'Mrs. Kavitha Reddy', role: 'Principal & Founder', qualification: 'M.Ed, Child Psychology', experience: '18 years', avatar: 'KR', color: 'from-pink-400 to-red-400' },
  { name: 'Ms. Shruti Nair', role: 'Head Teacher (LKG/UKG)', qualification: 'B.Ed, Montessori Certified', experience: '10 years', avatar: 'SN', color: 'from-purple-400 to-pink-400' },
  { name: 'Mr. Arun Mehta', role: 'Activity Coordinator', qualification: 'B.A Fine Arts, Yoga Certified', experience: '7 years', avatar: 'AM', color: 'from-blue-400 to-indigo-400' },
  { name: 'Mrs. Deepa Krishnan', role: 'Nursery Lead Teacher', qualification: 'Diploma in ECE, M.Sc', experience: '12 years', avatar: 'DK', color: 'from-green-400 to-teal-400' },
];

const facilities = [
  { icon: '🎨', title: 'Art Studio', desc: 'Creative space for painting, craft, and sensory play.' },
  { icon: '📚', title: 'Library Corner', desc: 'Age-appropriate books and interactive reading stations.' },
  { icon: '⚽', title: 'Play Ground', desc: 'Safe, soft-surface outdoor playground with climbing structures.' },
  { icon: '🎵', title: 'Music Room', desc: 'Instruments, rhythm activities, and weekly music sessions.' },
  { icon: '🖥️', title: 'Smart Classrooms', desc: 'Interactive whiteboards and child-friendly digital tools.' },
  { icon: '🍎', title: 'Nutrition Kitchen', desc: 'Healthy meals prepared fresh daily on-site.' },
];

const values = [
  { icon: Heart, title: 'Love & Care', desc: 'Every interaction grounded in unconditional love.' },
  { icon: BookOpen, title: 'Curiosity', desc: 'We spark wonder and encourage questions.' },
  { icon: Users, title: 'Community', desc: 'Building bonds between families and children.' },
  { icon: Award, title: 'Excellence', desc: 'High standards without pressure or rush.' },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary-500 font-fun font-bold uppercase tracking-wider mb-3">Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-title mb-6">About <span className="gradient-text">New Kids</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-subtitle mx-auto">Founded in 2010 with a single classroom and a big dream — to give every child the best start possible.</motion.p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-10 bg-gradient-to-br from-primary-50 to-orange-50 border border-primary-100">
              <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center mb-6"><Target className="w-7 h-7 text-white" /></div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">To provide a safe, stimulating, and joyful learning environment where every child discovers their unique potential. We combine modern pedagogy with traditional Indian values to nurture well-rounded individuals ready for school and life.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card p-10 bg-gradient-to-br from-secondary-50 to-purple-50 border border-secondary-100">
              <div className="w-14 h-14 bg-secondary-500 rounded-2xl flex items-center justify-center mb-6"><Eye className="w-7 h-7 text-white" /></div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">To be the most loved preschool in Hyderabad — where children arrive with excitement and leave with confidence, curiosity, and a love of learning that lasts a lifetime.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-fun font-bold uppercase tracking-wider mb-3">What We Stand For</p>
            <h2 className="section-title">Our Core <span className="gradient-text">Values</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-8 text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <v.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-fun font-bold uppercase tracking-wider mb-3">Meet the Team</p>
            <h2 className="section-title">Our <span className="gradient-text">Dedicated Faculty</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card overflow-hidden">
                <div className={`h-40 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <div className="w-24 h-24 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white text-3xl font-bold font-display">{member.avatar}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-xs mb-1">🎓 {member.qualification}</p>
                  <p className="text-gray-400 text-xs">⏱ {member.experience} experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-fun font-bold uppercase tracking-wider mb-3">Campus Features</p>
            <h2 className="section-title">World-Class <span className="gradient-text">Facilities</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-8 flex gap-5 hover:bg-primary-50">
                <span className="text-4xl">{f.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
