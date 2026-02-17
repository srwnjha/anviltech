import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Latest News', path: '/blog' },
  { name: 'Portfolio', path: '/portfolio' },
];

const usefulLinks = [
  { name: 'Projects', path: '/portfolio' },
  { name: 'Sign Up', path: '/contact' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Faq', path: '#' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" fill="#3b82f6" />
                  <path d="M20 8 L24 16 L32 16 L26 22 L28 30 L20 25 L12 30 L14 22 L8 16 L16 16 Z" fill="white" />
                </svg>
              </div>
              <span className="text-2xl font-bold">Anvil Technologies</span>
            </Link>
            <p className="text-text-light text-sm leading-relaxed mb-6">
              Mattis inelit neque quis donec eleifnd amet. Amet sed et cursus eu euismod. Egestas in morbi tristique.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-light text-sm hover:text-secondary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-text-light rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-light text-sm hover:text-secondary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-text-light rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-text-light text-sm">info@anvil.com.np</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div className="text-text-light text-sm">
                  <p>(704) 555-0127</p>
                  <p>(208) 555-0112</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-text-light text-sm">
                  4517 Washington Ave.<br />
                  Manchester, Kentucky 495
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-light text-sm text-center md:text-left">
              Copyright © 2026 Anvil Technologies . All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="#" className="text-text-light text-sm hover:text-secondary transition-colors">
                Privacy & Policy
              </Link>
              <Link to="#" className="text-text-light text-sm hover:text-secondary transition-colors">
                Terms
              </Link>
              <Link to="/about" className="text-text-light text-sm hover:text-secondary transition-colors">
                About us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors z-40"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
}
