import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Lubna Fazilat",
    role: "Parent",
    video: "/videos/review2.mp4",
  },
  {
    name: "Khyati Jain (Principle)",
    role: "Parent",
    video: "/videos/review3.mp4",
  },
  {
    name: "Muhafiza Arsh",
    role: "Student",
    video: "/videos/review1.mp4",
  },
  {
    name: "Arshina Khan",
    role: "Student",
    video: "/videos/review1.mp4",
  },
  {
    name: "Sara Ali",
    role: "Student",
    video: "/videos/review1.mp4",
  },
];

const TOTAL = testimonials.length;

const RecentPlacements = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TOTAL);
  }, []);

  // Handle Video Playback logic
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === activeIndex) {
        vid.currentTime = 0;
        vid.play().catch(() => {
          // Silent catch for autoplay blocks
        });
      } else {
        vid.pause();
      }
    });
  }, [activeIndex]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setHoverPosition({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="testimonials"
      className="relative min-h-screen overflow-hidden bg-black py-24 px-6 flex flex-col justify-center"
    >
      {/* Parallax Gradients */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[120px]"
        animate={{ x: hoverPosition.x * -30, y: hoverPosition.y * -30 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full filter blur-[120px]"
        animate={{ x: hoverPosition.x * 30, y: hoverPosition.y * 30 }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] uppercase tracking-[0.3em] font-medium">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white leading-[1.1]">
              What our community <br />
              <span className="text-white/40 italic">is saying.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/50 text-sm md:text-base max-w-xs leading-relaxed border-l border-emerald-500/30 pl-6"
          >
            Real stories from students and parents who have transformed their digital journey with us.
          </motion.p>
        </div>

        {/* Video Slider Area */}
        <div className="relative h-[500px] md:h-[650px] flex items-center justify-center overflow-visible">
          {testimonials.map((item, index) => {
            let offset = index - activeIndex;
            if (offset > TOTAL / 2) offset -= TOTAL;
            if (offset < -TOTAL / 2) offset += TOTAL;

            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            const xPercent = offset * 85;
            const scale = isActive ? 1 : 0.75 - absOffset * 0.05;
            const opacity = isActive ? 1 : 0.3 / absOffset;
            const zIndex = 10 - absOffset;
            const blur = isActive ? 0 : absOffset * 3;

            return (
              <motion.div
                key={index}
                animate={{
                  x: `${xPercent}%`,
                  scale,
                  opacity,
                  filter: `blur(${blur}px)`,
                  rotateY: offset * -20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                onClick={() => setActiveIndex(index)}
                className="absolute w-[280px] h-[450px] md:w-[350px] md:h-[600px] rounded-[2.5rem] overflow-hidden bg-neutral-900 cursor-pointer shadow-2xl border border-white/10"
                style={{ zIndex, perspective: "1200px" }}
              >
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  playsInline
                  onEnded={goNext}
                  poster={item.thumbnail}
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    animate={{
                      y: isActive ? 0 : 20,
                      opacity: isActive ? 1 : 0
                    }}
                  >
                    <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">
                      {item.role}
                    </p>
                    <h3 className="text-white text-2xl font-semibold leading-tight">
                      {item.name}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <button className="group px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-emerald-400 transition-all duration-300 flex items-center gap-2 mx-auto">
            View All Stories
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentPlacements;