import { motion } from "framer-motion";
import { Microscope, Dumbbell, Monitor, Bus, Library } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const HomeFacilities = () => {
  // ✅ Data stored in variable
  const facilitiesData = [
    {
      icon: Microscope,
      title: "Advanced Science Laboratories",
      desc: "Well-equipped Physics, Chemistry, and Biology labs designed to foster practical understanding and scientific curiosity.",
      image: "/images/sciencelab.png",
    },
    {
      icon: Monitor,
      title: "Computer Laboratory",
      desc: "Modern computer lab with updated systems and high-speed connectivity to enhance digital literacy and technical skills.",
      image: "/images/computerlab.jpg",
    },
    {
      icon: Monitor,
      title: "Interactive Classrooms",
      desc: "Spacious, technology-enabled classrooms that create an engaging and focused learning environment.",
      image: "/images/classroom.jpg",
    },
    {
      icon: Dumbbell,
      title: "Sports & Physical Education",
      desc: "Comprehensive indoor and outdoor sports facilities that promote teamwork, discipline, and physical well-being.",
      image: "/images/sports.jpg",
    },
    {
      icon: Bus,
      title: "Safe & Reliable Transport",
      desc: "GPS-enabled buses with trained staff ensuring secure and punctual transportation for students.",
      image: "/images/banner3.jpg",
    },
    {
      icon: Library,
      title: "Cultural & School Events",
      desc: "Annual functions, competitions, and celebrations that nurture creativity, confidence, and holistic development.",
      image: "/images/events.webp",
    },
  ];
  return (
    <section className="py-24 bg-white px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4B] mb-4">
            Campus Facilities
          </h2>
          <div className="w-82 h-[2px]  bg-gradient-to-r from-[#f7ce83] via-[#0B1F4B]/30 to-transparent mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Purposefully designed spaces that inspire excellence, innovation,
            and growth.
          </p>
        </div>

        {/* Asymmetric Layout */}
        <div className="grid md:grid-cols-3 gap-12">
          {facilitiesData.map((facility, index) => (
            <motion.div
              key={facility.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`space-y-3 ${
                index === 0 || index === 3 ? "md:col-span-2" : ""
              }`}
            >
              {/* Large Vertical Image */}
              <div className="overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-[420px] object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Text Below Image */}
              <div>
                <facility.icon
                  size={26}
                  strokeWidth={1.5}
                  className="text-[#ecc172] mb-2"
                />

                <h3 className="text-xl md:text-2xl font-semibold text-[#0B1F4B] mb-2">
                  {facility.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                  {facility.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFacilities;
