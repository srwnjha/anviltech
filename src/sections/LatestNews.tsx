import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const news = [
  {
    id: 1,
    category: "Technology",
    categoryColor: "bg-primary",
    date: "Sep 03, 2024",
    author: "Anne William",
    title: "15 Secrets Of Digital Transformation",
    image: "/blog-1.jpg",
    slug: "15-secrets-of-digital-transformation",
  },
  {
    id: 2,
    category: "Software",
    categoryColor: "bg-secondary",
    date: "Sep 06, 2024",
    author: "Anne William",
    title: "Plan Your Project with Your Software",
    image: "/blog-2.jpg",
    slug: "plan-your-project-with-your-software",
  },
  {
    id: 3,
    category: "Technology",
    categoryColor: "bg-accent-purple",
    date: "Sep 06, 2024",
    author: "Anne William",
    title: "Tech Conference Events 2023/2024",
    image: "/blog-3.jpg",
    slug: "tech-conference-events-2023-2024",
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-background">
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
            RECENT NEWS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 leading-tight">
            Our Latest News
          </h2>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${item.slug}`}>
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden mb-5 img-zoom">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-video object-cover"
                  />
                  {/* Category Badge */}
                  <span
                    className={`absolute top-4 left-4 px-4 py-1 ${item.categoryColor} text-white text-xs font-semibold rounded-full`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {item.author}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/btn">
                  Continue Reading
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
