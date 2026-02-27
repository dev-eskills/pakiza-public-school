import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedText } from "../ui/AnimatedText";

const banners = [
  "/images/banner6.jpg",
  "/images/banner10.jpg",
  "/images/banner13.jpg",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banners[current]})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto py-16 md:py-0">
        {/* Top Line */}
        <p className="text-white tracking-widest uppercase text-[10px] sm:text-xs md:text-sm mb-3 md:mb-4">
          Est. 1999 · Indore, Madhya Pradesh
        </p>

        {/* Main Heading */}
        <h1
          className="font-bold text-white leading-tight mb-4 md:mb-6
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Empowering Young Minds at
          <span className="flex items-center justify-center mt-2">
            <AnimatedText
              underlineClassName=" text-[#f7ce83]"
              text="Pakiza Public School"
              textClassName="
              text-[#f7ce83] 
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              drop-shadow-lg"
            />
            <motion.span
              className="hidden text-[#f7ce83]  md:inline-block"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {" "}
              .
            </motion.span>
          </span>
        </h1>

        {/* Sub Heading */}
        <p
          className="text-white/90 text-sm sm:text-base md:text-lg 
        max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          A trusted institution committed to
          <span className="text-[#f7ce83] font-semibold">
            {" "}
            Academic Excellence
          </span>
          ,<span className="text-[#f7ce83] font-semibold"> Moral Values</span>,
          and
          <span className="text-[#f7ce83] font-semibold">
            {" "}
            Holistic Development
          </span>
          — preparing students to thrive in a rapidly evolving world.
        </p>

        {/* Parent Line */}
        <p
          className="text-white/80 text-sm sm:text-base md:text-lg 
        max-w-4xl mx-auto mb-8 leading-relaxed"
        >
          We partner with parents to nurture
          <span className="font-semibold text-white"> confident learners</span>,
          <span className="font-semibold text-white">
            {" "}
            responsible citizens
          </span>
          , and
          <span className="font-semibold text-white"> future leaders</span>.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <motion.div
            className="relative inline-block overflow-hidden rounded-md group"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Link
              to="/admission"
              className="relative flex items-center justify-center
               px-6 sm:px-8 md:px-10 py-3
               bg-white text-[#000e51]
               font-semibold text-sm sm:text-base
               shadow-xl"
            >
              <motion.span
                variants={{
                  rest: { x: 0 },
                  hover: { x: -6 },
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                Apply for Admission
              </motion.span>

              <motion.span
                variants={{
                  rest: { opacity: 0, x: 10 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute right-4 z-10"
              >
                <ChevronRight size={18} />
              </motion.span>
            </Link>

            {/* Shine */}
            <motion.div
              className="absolute top-0 left-0 w-1/3 h-full 
               bg-linear-to-r 
               from-transparent 
               via-gray-300/70 
               to-transparent 
               skew-x-[-25deg]"
              animate={{ x: ["-150%", "400%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-white flex-col items-center gap-">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}

export default Hero;
