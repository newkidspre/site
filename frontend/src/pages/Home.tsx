import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight, Star, Users, Award, Heart, BookOpen, Smile, Shield } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Happy Families', icon: Heart },
  { value: '15+', label: 'Expert Teachers', icon: Users },
  { value: '12+', label: 'Years of Excellence', icon: Award },
  { value: '98%', label: 'Parent Satisfaction', icon: Star },
];

const features = [
  { icon: BookOpen, title: 'Play-Based Learning', desc: 'Structured play activities that make learning joyful and effective for every child.' },
  { icon: Shield, title: 'Safe Environment', desc: 'CCTV-monitored, hygienic, and child-safe premises with trained staff at all times.' },
  { icon: Smile, title: 'Holistic Development', desc: 'Emotional, social, cognitive, and physical growth nurtured with expert care.' },
  { icon: Heart, title: 'Loving Teachers', desc: 'Qualified educators passionate about guiding young minds with patience and empathy.' },
];

const testimonials = [
  { id: '1', name: 'Priya Sharma', child: 'Aarav (Nursery)', text: 'Little Stars transformed my shy child into a confident, happy learner. The teachers are incredibly nurturing!', rating: 5, avatar: 'PS' },
  { id: '2', name: 'Rajesh Kumar', child: 'Ananya (LKG)', text: 'The curriculum is outstanding. My daughter loves going to school every day and has made amazing progress.', rating: 5, avatar: 'RK' },
  { id: '3', name: 'Meena Patel', child: 'Rohan (Playgroup)', text: "We felt so welcome from day one. The staff truly cares about every child's wellbeing and development.", rating: 5, avatar: 'MP' },
  { id: '4', name: 'Sunita Reddy', child: 'Priya (UKG)', text: 'The best investment we made for our child. Priya is now reading full sentences and loves mathematics!', rating: 5, avatar: 'SR' },
];

const galleryItems = [
  { bg: 'from-yellow-400 to-orange-400', emoji: '🎨', label: 'Art & Craft' },
  { bg: 'from-pink-400 to-red-400', emoji: '🎵', label: 'Music & Dance' },
  { bg: 'from-green-400 to-teal-400', emoji: '🌱', label: 'Garden Play' },
  { bg: 'from-blue-400 to-indigo-400', emoji: '📚', label: 'Story Time' },
  { bg: 'from-purple-400 to-pink-400', emoji: '🧩', label: 'Puzzles' },
  { bg: 'from-orange-400 to-yellow-400', emoji: '⚽', label: 'Sports' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-300 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent-300 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '0.75s' }} />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-primary-500 fill-primary-500" />
                <span className="text-primary-700 text-sm font-semibold font-fun">Admissions Open 2025–26</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-900 leading-tight mb-6">
                Where Every{' '}
                <span className="gradient-text">Little Star</span>{' '}
                Shines ✨
              </motion.h1>

              <motion.p variants={fadeUp} className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
                Nurturing curious minds through play, creativity, and love. Join 500+ happy families who trust Little Stars Preschool for their child's bright future.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-primary text-base flex items-center gap-2">
                  Enroll Your Child <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/programs" className="btn-outline text-base">
                  Explore Programs
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero visual grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {galleryItems.slice(0, 4).map((item, i) => (
                <div
                  key={item.label}
                  className={`rounded-3xl bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center p-8 shadow-xl ${i === 0 ? 'row-span-1' : ''} aspect-square`}
                >
                  <span className="text-5xl mb-2">{item.emoji}</span>
                  <span className="text-white font-fun font-bold text-sm">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <div className="text-4xl font-display font-black mb-1">{stat.value}</div>
                <div className="text-sm font-fun opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-primary-500 font-fun font-bold uppercase tracking-wider mb-3">Why Parents Love Us</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">A Place Where Learning<br />Meets <span className="gradient-text">Pure Joy</span></motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle">We believe the early years are the most important. Our approach blends structured learning with free exploration.</motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-fun font-bold uppercase tracking-wider mb-3">Campus Life</p>
            <h2 className="section-title">Fun, Learning &amp; <span className="gradient-text">Laughter</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.03 }}
                className={`rounded-3xl bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center p-10 shadow-lg cursor-pointer aspect-video`}
              >
                <span className="text-6xl mb-3">{item.emoji}</span>
                <span className="text-white font-fun font-bold text-lg">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary-500 font-fun font-bold uppercase tracking-wider mb-3">Parent Stories</p>
            <h2 className="section-title">What Our <span className="gradient-text">Families</span> Say</h2>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="card p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-xs text-gray-400">Parent of {t.child}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-5 text-9xl">⭐</div>
          <div className="absolute bottom-5 right-5 text-9xl">🌟</div>
          <div className="absolute top-1/2 left-1/3 text-7xl">✨</div>
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
            Give Your Child the Best Start in Life
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Seats are limited! Secure your child's spot at Little Stars Preschool for 2025–26.
          </p>
          <Link to="/admissions" className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold py-4 px-10 rounded-full shadow-2xl hover:shadow-primary-300/50 hover:-translate-y-1 transition-all duration-300 text-lg">
            Apply for Admission <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
