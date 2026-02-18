import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-32 pb-20 bg-gradient-hero overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-accent-yellow/20 rounded-full blur-xl" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent-yellow rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Forging IT Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight"
            >
              Strong & Secure IT <span className="text-secondary">Services</span> For Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-text-secondary max-w-lg"
            >
              Your success is our success. We prioritize understanding your unique business requirements, tailoring solutions that not only meet your needs but also exceed your expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:-translate-y-1 btn-arrow shadow-lg shadow-primary/30"
              >
                Get Started
                <ArrowRight className="w-5 h-5 arrow-icon" />
              </Link>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-4 mt-8"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-primary rounded-full animate-pulse-ring" />
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-text-secondary">Years Of Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Decorative shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-yellow/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
            
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="/hero-woman.png"
                alt="IT Solutions Expert"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
            >
              <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-0 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center"
            >
              <div className="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
