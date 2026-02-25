import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["7 Green Lake Street", "Crawfordsville, IN 47933"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["manit@gmail.com", "helloyou@gmail.com"],
  },
  {
    icon: Phone,
    title: "Call Now",
    lines: ["+1 800 123 456 789", "+1 800 123 654 987"],
  },
];

export default function ContactInfo() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {info.title}
              </h3>
              <div className="space-y-1">
                {info.lines.map((line, i) => (
                  <p key={i} className="text-text-secondary">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
