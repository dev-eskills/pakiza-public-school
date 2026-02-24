import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Lubna Fazilat",
    role: "Parent",
    video: "/videos/review2.mp4",
    // thumbnail:
    //   "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
  },
  {
    name: "Khyati Jain (Principle)",
    role: "Parent",
    video: "/videos/review3.mp4",
    // thumbnail:
    //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  },
  {
    name: "Muhafiza Arsh",
    role: "Student",
    video: "/videos/review1.mp4",
    // thumbnail:
    //   "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=600&fit=crop",
  },
  {
    name: "Muhafiza Arsh",
    role: "Student",
    video: "/videos/review1.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=600&fit=crop",
  },
  {
    name: "Muhafiza Arsh",
    role: "Student",
    video: "/videos/review1.mp4",
    thumbnail:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=600&fit=crop",
  },
  // {
  //   name: "Muhafiza Arsh",
  //   role: "Student",
  //   video: "/videos/review4.mp4",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=600&fit=crop",
  // },
];

const TOTAL = testimonials.length;

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === activeIndex) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [activeIndex]);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % TOTAL);
  };

  return (
    <section className="bg-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#000e51] leading-tight">
            Voices of Our Community
            <div className="w-2xl h-px bg-linear-to-r from-[#f7ce83] via-[#0B1F4B]/30 to-transparent mt-3 rounded" />
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-130 flex items-center justify-center">
          {testimonials.map((item, index) => {
            let offset = index - activeIndex;

            if (offset > TOTAL / 2) offset -= TOTAL;
            if (offset < -TOTAL / 2) offset += TOTAL;
            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            const xPercent = offset * 72;
            const scale = isActive ? 1 : absOffset === 1 ? 0.82 : 0.68;
            const opacity = isActive ? 1 : absOffset === 1 ? 0.9 : 0.6;
            const zIndex = isActive ? 10 : absOffset === 1 ? 5 : 1;
            const blur = isActive ? 0 : absOffset === 1 ? 1 : 2;

            return (
              <motion.div
                key={index}
                animate={{
                  x: `${xPercent}%`,
                  scale,
                  opacity,
                  filter: `blur(${blur}px)`,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 32 }}
                onClick={() => !isActive && setActiveIndex(index)}
                className={`absolute w-70 h-115 rounded-3xl overflow-hidden 
                bg-black cursor-pointer`}
                style={{ zIndex }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  playsInline
                  onEnded={goNext}
                  poster={item.thumbnail}
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Name */}
                <motion.div
                  animate={{ y: isActive ? 0 : 8, opacity: isActive ? 1 : 0.6 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 p-5"
                >
                  <h3 className="text-white text-xl font-semibold">
                    {item.name}
                  </h3>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
