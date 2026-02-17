import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  breadcrumb: { name: string; path: string }[];
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border border-white/30 rounded-full" />
        <div className="absolute bottom-10 right-20 w-60 h-60 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/20 rounded-full" />
        <div className="absolute top-10 right-1/3 w-32 h-32 border border-white/10 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-2 text-white/80"
        >
          {breadcrumb.map((item, index) => (
            <span key={item.name} className="flex items-center gap-2">
              {index > 0 && <span className="w-1 h-1 bg-white/60 rounded-full" />}
              {index === breadcrumb.length - 1 ? (
                <span className="text-white">{item.name}</span>
              ) : (
                <Link to={item.path} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              )}
            </span>
          ))}
        </motion.nav>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60L1440 60L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
