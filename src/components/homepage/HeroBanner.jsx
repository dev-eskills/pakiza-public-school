import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ChevronDown } from "lucide-react";

const banners = [
  "/images/banner5.jpg",
  "/images/banner4.jpg",
  "/images/banner3.jpg",
  "/images/banner2.jpg",
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

  const goto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banners[current]})` }}
        />
      </AnimatePresence>

      {/* Dark Navy Overlay */}
      <div className="absolute opacity-40 inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/95" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {/* Established Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white tracking-[4px] uppercase text-[11px] sm:text-xs mb-4"
        >
          Est. 1999 · Indore, Madhya Pradesh
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-alpino font-bold text-white md:leading-[4.5rem] mb-6 text-5xl md:text-6xl lg:text-8xl"
        >
          Pakiza Public <br />
          <span className=" text-[#f7ce83]">School</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/90 italic text-base md:text-lg mb-10  "
        >
          Nurturing Minds · Shaping Futures · Building Character
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase  ">Scroll</span>
        <ChevronDown />
      </motion.div>
    </section>
  );
}

export default Hero;

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// const banners = [
//   "/images/banner5.jpg",
//   "/images/banner4.jpg",
//   "/images/banner3.jpg",
//   "/images/banner2.jpg",
// ];

// function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % banners.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Slider */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.8 }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${banners[current]})` }}
//         />
//       </AnimatePresence>

//       {/* Warm Architectural Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#1F1F1F]/80 via-[#1F1F1F]/70 to-[#1F1F1F]/85" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-5xl">
//         <p className="text-[#C6A75E] tracking-[4px] uppercase text-xs mb-6">
//           Est. 1999 · Indore, Madhya Pradesh
//         </p>

//         <h1 className="font-bold text-white leading-tight mb-6 text-5xl md:text-6xl lg:text-7xl">
//           Pakiza Public <br />
//           <span className="text-[#C6A75E]">School</span>
//         </h1>

//         <p className="text-white/80 text-base md:text-lg mb-10">
//           Nurturing Minds · Shaping Futures · Building Character
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex justify-center gap-6 flex-wrap">
//           <a
//             href="#admissions"
//             className="px-8 py-3 bg-[#C6A75E] text-black text-sm uppercase tracking-wide"
//           >
//             Apply Now
//           </a>

//           <a
//             href="#facilities"
//             className="px-8 py-3 border border-white text-white text-sm uppercase tracking-wide"
//           >
//             Explore Campus
//           </a>
//         </div>
//       </div>

//       {/* Bottom Navigation Strip */}
//       <div className="absolute bottom-0 left-0 w-full bg-[#1F1F1F]/90 backdrop-blur-md border-t border-white/10">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-sm uppercase tracking-wide text-white">
//           <a
//             href="#about"
//             className="py-5 border-r border-white/10 hover:text-[#C6A75E] transition"
//           >
//             About
//           </a>

//           <a
//             href="#admissions"
//             className="py-5 border-r border-white/10 hover:text-[#C6A75E] transition"
//           >
//             Admissions
//           </a>

//           <a
//             href="#facilities"
//             className="py-5 border-r border-white/10 hover:text-[#C6A75E] transition"
//           >
//             Facilities
//           </a>

//           <a href="#contact" className="py-5 hover:text-[#C6A75E] transition">
//             Contact
//           </a>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white"
//       >
//         <ChevronDown size={28} />
//       </motion.div>
//     </section>
//   );
// }

// export default Hero;
