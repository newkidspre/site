import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/programs', label: 'Programs' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <div className="font-display font-bold text-lg leading-tight text-gray-900">
                Little <span className="gradient-text">Stars</span>
              </div>
              <div className="text-xs text-gray-500 font-fun leading-tight">Preschool</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-primary-50 text-primary-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="ml-3 btn-primary text-sm py-2.5 px-6"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 py-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl font-medium mb-1 transition-all duration-200 ${
                location.pathname === link.path
                  ? 'bg-primary-50 text-primary-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="btn-primary block text-center mt-3 text-sm"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
