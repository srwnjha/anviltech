import { motion } from 'framer-motion';
import { ArrowRight, Palette, Box, Code, BarChart3 } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'UI/UX Design',
    description: 'We are providing the best UI/UX design. That help you be professional.',
    icon: Palette,
    color: 'bg-accent-yellow',
    textColor: 'text-accent-yellow',
    borderColor: 'border-accent-yellow/20',
  },
  {
    id: '01',
    title: 'Product Design',
    description: 'We are providing the best UI/UX design. That help you be professional.',
    icon: Box,
    color: 'bg-accent-purple',
    textColor: 'text-accent-purple',
    borderColor: 'border-accent-purple/20',
  },
  {
    id: '01',
    title: 'Development',
    description: 'We are providing the best UI/UX design. That help you be professional.',
    icon: Code,
    color: 'bg-accent-red',
    textColor: 'text-accent-red',
    borderColor: 'border-accent-red/20',
  },
  {
    id: '01',
    title: 'Data Analysis',
    description: 'We are providing the best UI/UX design. That help you be professional.',
    icon: BarChart3,
    color: 'bg-accent-green',
    textColor: 'text-accent-green',
    borderColor: 'border-accent-green/20',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 leading-tight">
            Design The Concept Of Your Business Idea Now
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl border ${service.borderColor} p-8 card-hover group`}
            >
              {/* Number Badge */}
              <div className={`absolute -top-4 right-8 w-12 h-12 ${service.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.id}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 ${service.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-8 h-8 ${service.textColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${service.textColor} group/btn`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
