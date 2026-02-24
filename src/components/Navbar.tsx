import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "PORTFOLIO", path: "/portfolio" },
  { name: "BLOG", path: "/blog" },
  {
    name: "PAGES",
    path: "#",
    dropdown: [{ name: "Testimonials", path: "/testimonials" }],
  },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false); // New state
  const location = useLocation();
  // Dark mode logic
  useEffect(() => {
    // On mount: check localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-dark shadow-lg py-3"
          : "bg-white/95 dark:bg-dark/95 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-40 h-auto">
              {" "}
              {/* w-96 = ~384px; h-auto lets it grow naturally */}
              <img
                src={isDark ? "anvilogo.png" : "anvilfooter.png"}
                alt="Anvil logo"
                className="w-full h-auto object-contain" // w-full fills container, object-contain preserves ratio
              />
            </div>
            {/* <span className="text-2xl font-bold text-text-primary">
              Anvil Technologies
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path) ||
                    link.dropdown?.some((item) => isActive(item.path))
                      ? "text-primary"
                      : "text-text-primary  hover:text-primary"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 " />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark/95  rounded-lg shadow-xl border border-gray-100 py-2"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-text-primary hover:bg-gray-50 dark:hover:bg-dark hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Dark Mode Toggle Button (Desktop) */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 1.1 : 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-600" />
                )}
              </motion.div>
            </button>
          </nav>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-text-secondary">Hotline 24/7</p>
              <p className="text-sm font-semibold text-text-primary">
                +(977) 9705-236388
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-primary"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 dark:bg-dark/95"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block text-sm font-medium ${
                      isActive(link.path)
                        ? "text-primary "
                        : "text-text-primary hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block text-sm text-text-secondary hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors w-full text-left"
                aria-label="Toggle dark mode"
              >
                <motion.div
                  initial={false}
                  animate={{
                    rotate: isDark ? 180 : 0,
                    scale: isDark ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-indigo-600" />
                  )}
                  {/* <span className="text-sm font-medium text-text-primary dark:text-gray-200">
                  {isDark ? "Light Mode" : "Dark Mode"}
                </span> */}
                </motion.div>
              </button>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Hotline 24/7</p>
                  <p className="text-sm font-semibold text-text-primary">
                    +(977) 9705-236388
                  </p>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
