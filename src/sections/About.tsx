import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative shapes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-yellow/30 rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full" />
            
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/about-team.jpg"
                alt="Our Team"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Award Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 right-8 bg-white rounded-xl shadow-elevated p-6 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-text-primary">Award Winning</p>
                  <p className="text-sm text-text-secondary">We have a history of successfully delivering IT solutions to a great diverse clientele, from startups to established enterprises.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              ABOUT COMPANY
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6 leading-tight">
              Our approach ensures <span className="text-primary">flexibility, adaptability, & rapid response.</span>
            </h2>

            <div className="space-y-4 text-text-secondary">
              <p>
                Welcome to Manit, where innovation meets implementation, & technology transforms possibilities into realities. Established with a vision to redefine the landscape of IT solutions, we are a dynamic and forward-thinking company committed to delivering cutting-edge services.
              </p>
              <p>
                Our mission is clear - to provide comprehensive and customized IT solution that align seamlessly with your business objectives. We believe in not just meeting but exceeding expectations.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="font-bold text-text-primary text-lg">Annette Black</p>
              <p className="text-sm text-text-secondary">CEO & Founder of Manit</p>
              <div className="mt-2">
                <svg viewBox="0 0 200 40" className="h-8">
                  <path
                    d="M10 30 Q30 10 50 25 T90 20 T130 25 T170 15 T190 20"
                    fill="none"
                    stroke="#1e40af"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
