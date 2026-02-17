import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'Eleanor Pena',
    role: 'CEO of BREAG',
    image: '/testimonial-1.jpg',
    rating: 4.0,
    quote: 'It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable. The generated lorem ipsum is therefore always free from repetition injected humour or non-characteristic.',
  },
  {
    id: 2,
    name: 'Jeffrey Dykes',
    role: 'Senior Developer',
    image: '/testimonial-2.jpg',
    rating: 4.0,
    quote: 'It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable. The generated lorem ipsum is therefore always free from repetition injected humour or non-characteristic.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'text-accent-yellow fill-accent-yellow'
              : 'text-gray-300'
          }`}
        />
      ))}
      <span className="text-sm text-text-secondary ml-1">({rating.toFixed(1)})</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              TESTIMONIAL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6 leading-tight">
              Our Latest Case Studies
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Fringilla feugiat et imperdiet iaculis scelue vestibulum diam eget fusce. Vitae id amet eleifend lacus ornare nisl leo dis est.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 btn-arrow"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 arrow-icon" />
            </Link>
          </motion.div>

          {/* Right Testimonials */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-card hover:shadow-card-hover transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-10 h-10 text-accent-yellow/30" />
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Quote */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {testimonial.quote}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
