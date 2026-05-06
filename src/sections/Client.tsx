import { useRef } from "react";
import { motion } from "framer-motion";

const clients = [
  { src: "/img/clients/1.png", alt: "Client 1", link: "https://pmlil.com/" },
  {
    src: "/img/clients/2.png",
    alt: "Client 2",
    link: "https://batasfoundation.org/",
  },
  {
    src: "/img/clients/3.png",
    alt: "Client 3",
    link: "https://www.immigration.gov.np/en",
  },
  {
    src: "/img/clients/4.png",
    alt: "Client 4",
    link: "https://customs.gov.np/",
  },
  { src: "/img/clients/5.png", alt: "Client 5", link: "https://bpc.com.np/" },
  {
    src: "/img/clients/6.png",
    alt: "Client 6",
    link: "https://www.tiairport.com.np/",
  },
  {
    src: "/img/clients/7.png",
    alt: "Client 7",
    link: "https://janakedu.org.np/",
  },
  { src: "/img/clients/8.png", alt: "Client 8", link: "https://tcioe.edu.np/" },
  {
    src: "/img/clients/9.png",
    alt: "Client 9",
    link: "https://archiodesigns.com/",
  },
  {
    src: "/img/clients/10.png",
    alt: "Client 10",
    link: "https://batasmaw.com/",
    imgStyle: {
      width: "140px",
      height: "140px",
      maxWidth: "unset", // ← kills the 130px CSS clamp
      maxHeight: "unset", // ← kills the 70px CSS clamp
    },
  },
  {
    src: "/img/clients/11.jpeg",
    alt: "Client 11",
    link: "https://gorkhabrewery.com/en/",
  },
];

// Duplicate for seamless loop
const track = [...clients, ...clients];

export default function Clients() {
  const isPaused = useRef(false);

  return (
    <section className="clients-section">
      <div className="clients-inner">
        {/* Header */}
        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="clients-label">Trusted By</span>
          <h2 className="clients-title">Our Clients</h2>
          <div className="clients-rule" />
        </motion.div>

        {/* Marquee */}
        <div
          className="marquee-viewport"
          onMouseEnter={() => {
            isPaused.current = true;
          }}
          onMouseLeave={() => {
            isPaused.current = false;
          }}
        >
          <motion.div
            className="marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
            style={{ willChange: "transform" }}
          >
            {track.map(({ src, alt, link, imgStyle }, i) => (
              <a
                key={`${alt}-${i}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="logo-card"
                aria-label={alt}
              >
                <img
                  src={src}
                  alt={alt}
                  className="logo-img"
                  draggable={false}
                  style={imgStyle}
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .clients-section {
          padding: 30px 0;
          background: #fafaf8;
          overflow: hidden;
        }

        .clients-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ── Header ── */
        .clients-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 10px;
        }

        .clients-label {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b09060;
          white-space: nowrap;
        }

        .clients-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          color: #1c1c18;
          white-space: nowrap;
          margin: 0;
        }

        .clients-rule {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, #d8d8d0 0%, transparent 100%);
        }

        /* ── Marquee ── */
        .marquee-viewport {
          overflow: hidden;
          /* Edge fade */
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 7%,
            #000 93%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 7%,
            #000 93%,
            transparent 100%
          );
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          cursor: default;
        }

        /* ── Logo card ── */
        .logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 36px;
        //   border-right: 1px solid #e8e8e2;
          text-decoration: none;
          transition: background 0.2s ease;
          flex-shrink: 0;
        }

        // .logo-card:hover {
        //   background: rgba(0, 0, 0, 0.03);
        // }

        .logo-img {
          display: block;
          max-width: 130px;
          max-height: 70px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(1) contrast(0.7) brightness(1.1);
          opacity: 0.65;
          transition: filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
          user-select: none;
        }

        .logo-card:hover .logo-img {
          filter: none;
          opacity: 1;
          transform: scale(1.05);
        }

        /* ── Pause on hover (CSS-level fallback) ── */
        .marquee-viewport:hover .marquee-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .clients-section { padding: 56px 0; }
          .clients-inner { padding: 0 16px; }
          .clients-header { margin-bottom: 36px; }
          .logo-img { max-width: 80px; max-height: 40px; }
          .logo-card { padding: 12px 24px; }
        }
      `}</style>
    </section>
  );
}
