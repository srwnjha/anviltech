import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ConsultationCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We will contact you soon.");
    setFormData({ name: "", email: "", company: "" });
  };

  return (
    <section className="py-20 bg-[hsl(var(--consult))] dark:bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get A Free Consultation
          </h2>
          <p className="text-white/80 mb-10">
            Drop us a line! We are here to answer your questions 24/7
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <input
              type="text"
              placeholder="Your Name*"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors flex-1 max-w-xs"
            />
            <input
              type="email"
              placeholder="Your Email*"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors flex-1 max-w-xs"
            />
            <input
              type="text"
              placeholder="Your Company*"
              required
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors flex-1 max-w-xs"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Free Consultancy
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
