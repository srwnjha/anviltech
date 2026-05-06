import { useRef, useState } from "react";
import { ArrowRight, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
const countries = [
  { id: "np", code: "+977", flag: "🇳🇵", name: "Nepal" },
  { id: "us", code: "+1", flag: "🇺🇸", name: "United States" },
  { id: "ca", code: "+1", flag: "🇨🇦", name: "Canada" },
  { id: "gb", code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { id: "in", code: "+91", flag: "🇮🇳", name: "India" },
  { id: "au", code: "+61", flag: "🇦🇺", name: "Australia" },
  { id: "de", code: "+49", flag: "🇩🇪", name: "Germany" },
  { id: "fr", code: "+33", flag: "🇫🇷", name: "France" },
];
export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+977", // default to Nepal
    countryId: "np",
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const selectedCountry = countries.find(
  //   (c) => c.code === formData.countryCode
  // );
  const selectedCountry = countries.find((c) => c.id === formData.countryId);

  {
    /* Country Selector Button */
  }
  <button
    type="button"
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    className="flex items-center gap-2 px-4 py-4 bg-white/10 border border-r-0 border-white/20 rounded-l-xl text-white focus:outline-none hover:bg-white/20 transition z-10"
  >
    <span className="text-lg">{selectedCountry?.flag}</span>
    <span>{selectedCountry?.code}</span>
    <span className="text-xs">▼</span>
  </button>;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Full Phone:", formData.countryCode + formData.phone);
    alert("Request received! We'll contact you soon.");
    setFormData({ name: "", phone: "", countryCode: "+977", countryId: "np" });
  };

  return (
    <section className="relative min-h-screen flex items-center ">
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
                  <div className="relative flex">
                    {/* Country Selector */}
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-r-0 border-white/20 rounded-l-xl text-white focus:outline-none hover:bg-white/20 transition"
                    >
                      <span className="text-lg">{selectedCountry?.flag}</span>
                      <span>{selectedCountry?.code}</span>
                      <span className="text-xs">▼</span>
                    </button>

                    {/* Phone Number Input */}
                    <input
                      type="tel"
                      placeholder="📞Phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-r-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
                      required
                    />

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 max-h-80 overflow-auto">
                        {countries.map((country) => (
                          <button
                            key={country.id}
                            type="button"
                            onClick={() => {
                              setFormData({
                                ...formData,
                                countryCode: country.code,
                                countryId: country.id,
                              });
                              setIsDropdownOpen(false);
                            }}
                            className="w-full px-2 py-1 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 transition"
                          >
                            <span className="text-xl">{country.flag}</span>
                            <span className="font-medium">{country.code}</span>
                            <span className="text-gray-500 dark:text-gray-400">
                              {country.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-4 py-2 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-2 group"
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
