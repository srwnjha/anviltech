import { useRef, useState } from "react";
import { ArrowRight, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request received! We'll contact you soon.");
    setFormData({ name: "", phone: "" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.4]"
        >
          <source src="/img/newvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 mt-10">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Engineering your <span className="text-blue-400">Future.</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl">
              We build smart AI and automation tools designed to make your
              business run smoother, reduce errors, and help you grow.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-12">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  {/* <div className="text-sm text-gray-400 mb-1 flex items-center gap-2">
                    👤 Your name
                  </div> */}
                  <input
                    type="text"
                    placeholder="👤 Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="📞 Phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-2 group"
              >
                Request a Call
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </form>

            {/* Trust Bar */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/32?u=${i}`}
                      alt="Client"
                      className="w-8 h-8 rounded-full border-2 border-white/20"
                    />
                  ))}
                </div>
                <div>250+ happy clients</div>
              </div>

              <div className="flex items-center gap-1.5">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>4.9/5 from 180+ reviews</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>8+ years in business</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Network Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <img
                src="/img/cube.png" // Replace with your actual image
                alt="Network Sphere"
                className="w-[420px] h-[420px] drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
