import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 25,
    suffix: "+",
    label: "Years Of Experience",
    color: "text-primary",
  },
  {
    value: 12,
    suffix: "K+",
    label: "Project Completed",
    color: "text-secondary",
  },
  {
    value: 20,
    suffix: "+",
    label: "Industry Experience",
    color: "text-accent-green",
  },
  {
    value: 10,
    suffix: "K+",
    label: "Happy Clients",
    color: "text-accent-purple",
  },
  { value: 32, suffix: "+", label: "Awards Winner", color: "text-primary" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p
                className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
