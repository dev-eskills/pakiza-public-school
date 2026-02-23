import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Mrs. Sharma",
    role: "Parent",
    video: "/videos/review1.mp4",
  },
  {
    name: "Mr. Khan",
    role: "Parent",
    video: "/videos/review2.mp4",
  },
  {
    name: "Aarav Mehta",
    role: "Student",
    video: "/videos/school-hero.mp4",
  },
];

const ReviewsSection = () => {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(testimonials.length - 1); // Start from RIGHT

  // Play active video only
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  // Auto scroll when video ends
  const handleVideoEnd = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // Scroll animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth * 0.6;
    container.scrollTo({
      left: cardWidth * activeIndex,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <section className="bg-[#fdfaf4] py-32 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000e51]">
            Voices of Our Community
          </h2>
          <div className="w-24 h-1 bg-[#000e51] mt-6"></div>
        </div>

        {/* Horizontal Scroll */}
        <div ref={containerRef} className="flex gap-12 overflow-x-hidden">
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={index}
                animate={{
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.5,
                }}
                transition={{ duration: 0.6 }}
                className="min-w-[40%] md:min-w-[25%] bg-white rounded-3xl shadow-2xl border border-[#000e51]/10 relative group"
              >
                {/* Video */}
                <div className="overflow-hidden rounded-3xl">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="w-full h-[450px] object-cover"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>

                {/* Hover Name Overlay */}
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 bg-[#000e51]/90 text-white p-6 opacity-0 group-hover:opacity-100 transition"
                  >
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-200">{item.role}</p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#000e51] scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
