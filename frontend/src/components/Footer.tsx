import { Link } from 'react-router-dom';
import { Star, Phone, Mail, MapPin, Share2, Camera, Play, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white leading-tight">New Kids</div>
                <div className="text-xs text-gray-400 font-fun">Preschool</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Nurturing young minds with love, creativity, and play-based learning since 2010. Every child deserves to shine!
            </p>
            <div className="flex gap-3">
              {[
                { icon: Share2,        href: '#', label: 'Facebook' },
                { icon: Camera,         href: '#', label: 'Instagram' },
                { icon: Play,           href: '#', label: 'YouTube' },
                { icon: MessageCircle,  href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Programs', path: '/programs' },
                { label: 'Admissions', path: '/admissions' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1"
                  >
                    <span className="text-primary-500">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {['Playgroup (1.5–2.5 yrs)', 'Nursery (2.5–3.5 yrs)', 'LKG (3.5–4.5 yrs)', 'UKG (4.5–5.5 yrs)'].map((p) => (
                <li key={p} className="text-sm text-gray-400 flex items-center gap-1">
                  <span className="text-accent-400">✦</span> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>123, Sunshine Colony, Banjara Hills, Hyderabad – 500034</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary-400 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a href="mailto:hello@littlestars.in" className="hover:text-primary-400 transition-colors">hello@littlestars.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} New Kids Preschool. All rights reserved.</p>
          <p className="text-xs text-gray-500">Made with ❤️ for little learners</p>
        </div>
      </div>
    </footer>
  );
}
