import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Decorative shapes */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent-purple/30 rounded-full blur-xl" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent-yellow/30 rounded-full blur-xl" />
          <div className="absolute top-1/2 -right-12 w-16 h-16 bg-accent-red/20 rounded-full" />
          <div className="absolute bottom-1/4 -left-12 w-12 h-12 bg-accent-green/20 rounded-full" />

          {/* Video Thumbnail */}
          <div
            className="relative z-10 rounded-2xl overflow-hidden shadow-elevated group cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="/video-thumbnail.jpg"
              alt="Video Thumbnail"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulse rings */}
                <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse-ring" />
                <div
                  className="absolute inset-0 bg-white/20 rounded-full animate-pulse-ring"
                  style={{ animationDelay: "0.5s" }}
                />

                {/* Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Play
                    className="w-8 h-8 text-primary ml-1"
                    fill="currentColor"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="aspect-video bg-black flex items-center justify-center">
            <p className="text-white/60">Video Player Placeholder</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
