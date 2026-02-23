import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const banners = [
  "/images/library.JPG",
  "/images/banner6.jpg",
  "/images/banner10.jpg",
  "/images/banner9.JPG",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-auto sm:min-h-screen flex py-15 justify-center overflow-hidden"
    >
      {/* Background Slider */}
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banners[current]})` }}
        />
      </AnimatePresence> */}

      <AnimatePresence mode="wait">
        <motion.div
          key="video-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 overflow-hidden"
        >
          <video
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/school-hero3.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative py-10 sm:py-0 z-10 text-center px-6 max-w-6xl">
        {/* Top Line */}
        <p className="text-white tracking-[2px] uppercase text-xs mb-2 sm:mb-4">
          Est. 1999 · Indore, Madhya Pradesh
        </p>

        {/* Main Heading */}
        <h1
          className="font-bold text-white leading-11 sm:leading-18 mb-3 sm:mb-6 
text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
drop-shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
        >
          Empowering Young Minds at <br />
          <span className="text-[#f7ce83] drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
            Pakiza Public School
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#f7ce83]"
          >
            {" "}
            .
          </motion.span>
        </h1>

        {/* Sub Heading */}
        <p className="drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)] text-white/90 text-sm md:text-lg sm:max-w-3xl mx-auto mb-3 sm:mb-3">
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

        {/* Parent Focused Line */}
        <p className=" drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)] text-white/80 text-sm md:text-lg max-w-5xl mx-auto mb-6">
          At Pakiza Public School, we partner with parents to nurture
          <span className="font-semibold text-white"> confident learners</span>,
          <span className="font-semibold text-white">
            {" "}
            responsible citizens
          </span>
          , and
          <span className="font-semibold text-white"> future leaders</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <motion.div
            className="relative inline-block rounded-lg overflow-hidden group"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Link
              to="/admissions"
              className="relative flex items-center justify-center
               px-10 py-3 
               bg-white 
               text-[#000e51] 
               font-semibold 
               shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
            >
              {/* Text */}
              <motion.span
                variants={{
                  rest: { x: 0 },
                  hover: { x: -8 },
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                Apply for Admission
              </motion.span>

              {/* Chevron */}
              <motion.span
                variants={{
                  rest: { opacity: 0, x: 10 },
                  hover: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute right-6 z-10 text-black"
              >
                <ChevronRight size={18} />
              </motion.span>
            </Link>

            {/* Infinite Shine Layer */}
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
          {/* <Link
            to="/contact"
            className="border border-white font-semibold text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            Book a Campus Visit
          </Link> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className=" hidden sm:flex absolute bottom-30 left-1/2 -translate-x-1/2 text-white flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown />
      </div>
    </section>
  );
}

export default Hero;
