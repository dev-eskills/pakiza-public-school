import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/sports.jpg",
  "/images/classroom.jpg",
];

const achievements = [
  "Pakiza Public School secured first position in the Inter-School Science Exhibition held at district level, showcasing innovation and creativity among students.",
  "Our Under-14 football team won the Regional Championship and qualified for the State Level Tournament.",
  "Students achieved 100% board examination results with multiple distinctions in Mathematics and Science.",
  "The school received recognition for excellence in digital learning integration and smart classroom implementation.",
  "Three students were selected for the National Olympiad Merit List this academic year.",
];

export default function NewsSection() {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();
  const scrollRef = useRef(null);

  // Auto Image Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Infinite smooth scroll
  useEffect(() => {
    const scrollHeight = scrollRef.current.scrollHeight / 2;

    controls.start({
      y: -scrollHeight,
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <section className="bg- py-16 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10">
        {/* ================= LEFT - IMAGE SLIDER ================= */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-[#0b2545] text-white px-6 py-4 text-lg font-semibold">
            Latest Highlights
          </div>

          <div className="relative h-87.5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt="School"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#0b2545] mb-2">
              Pakiza Public School
            </h3>
            <p className="text-gray-600">
              Empowering young minds with academic excellence, discipline,
              innovation, and leadership qualities for a brighter future.
            </p>
          </div>
        </div>

        {/* ================= RIGHT - ACHIEVEMENTS BILLBOARD ================= */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-[#0b2545] text-white px-6 py-4 text-lg font-semibold">
            School Achievements
          </div>

          <div className="relative h-150 overflow-hidden bg-[#ffffff]">
            <motion.div
              ref={scrollRef}
              animate={controls}
              className="flex flex-col gap-8 p-8"
            >
              {[...achievements, ...achievements].map((item, index) => (
                <p
                  key={index}
                  className="text-[#0b2545] text-base leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
