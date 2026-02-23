import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const images = [
  "/images/banner8.JPG",
  "/images/banner11.jpg",
  "/images/sports.jpg",
  "/images/classroom.jpg",
];

const notices = [
  {
    title: "Admissions Open 2026-27",
    description:
      "Admissions are now open for the academic session 2026-27. Interested parents are requested to collect the prospectus from the school office during working hours.",
  },
  {
    title: "Annual Sports Day Announcement",
    description:
      "The Annual Sports Day will be held on 15th March at the school ground. Parents are cordially invited to witness the event and encourage the students.",
  },
  {
    title: "Parent-Teacher Meeting",
    description:
      "PTM is scheduled for 5th February from 9:00 AM to 12:00 PM. Parents are requested to attend and discuss their child’s academic progress.",
  },
  {
    title: "CBSE Training Workshop",
    description:
      "A CBSE training workshop for teachers will be conducted this Saturday to enhance innovative teaching methodologies and classroom engagement.",
  },
  {
    title: "SOF Olympiad Registration",
    description:
      "Registrations for the upcoming SOF Olympiad are now open. Students interested in participating must submit their forms before the deadline.",
  },
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
    <section
      className="relative py-24 px-4 md:px-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/banner1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fffcf5]/70"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10">
        {/*IMAGE SLIDER */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <div className="bg-[#0b2545] text-white px-6 py-4 text-lg">
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
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="bg-white p-6">
            <h3 className="text-2xl font-bold text-[#0b2545] mb-2">
              Pakiza Public School
            </h3>
            <p className="text-gray-600">
              Empowering young minds with academic excellence, discipline,
              innovation, and leadership qualities for a brighter future.
            </p>
          </div>
        </div>

        {/* ================= RIGHT - NOTICES ================= */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <div className="bg-[#0b2545] text-white px-6 py-4 text-lg">
            School Notices
          </div>

          <div className="relative h-125 overflow-hidden bg-white">
            <motion.div
              ref={scrollRef}
              animate={controls}
              className="flex flex-col gap-10 p-8"
            >
              {[...notices, ...notices].map((item, index) => (
                <div key={index} className="pb-6 border-b border-gray-200">
                  <h4 className="text-[#0b2545] font-semibold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
