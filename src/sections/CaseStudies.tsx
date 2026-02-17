import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    category: 'DEVELOPMENT / IDEA',
    title: 'Consulting Project',
    image: '/portfolio-1.jpg',
  },
  {
    id: 2,
    category: 'PRODUCT / IDEA',
    title: 'Product Design',
    image: '/portfolio-2.jpg',
  },
  {
    id: 3,
    category: 'UI/UX / DESIGN',
    title: 'Website Redesign',
    image: '/portfolio-1.jpg',
  },
  {
    id: 4,
    category: 'MARKETING / STRATEGY',
    title: 'Digital Campaign',
    image: '/portfolio-2.jpg',
  },
];

export default function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
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
            RECENT CASE STUDIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 leading-tight">
            Our Latest Case Studies
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex gap-6 transition-transform duration-500 ease-out"
               style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}>
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
              >
                <div className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-primary mb-1">
                          {study.category}
                        </p>
                        <h3 className="text-lg font-bold text-text-primary">
                          {study.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
