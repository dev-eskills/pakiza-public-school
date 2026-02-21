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
      icon: Library,
      title: "Cultural & School Events",
      desc: "Annual functions, competitions, and celebrations that nurture creativity, confidence, and holistic development.",
      image: "/images/events.webp",
    },
    // {
    //   icon: Dumbbell,
    //   title: "Sports & Physical Education",
    //   desc: "Comprehensive indoor and outdoor sports facilities that promote teamwork, discipline, and physical well-being.",
    //   image: "/images/sports.jpg",
    // },
    {
      icon: Bus,
      title: "Safe & Reliable Transport",
      desc: "GPS-enabled buses with trained staff ensuring secure and punctual transportation for students.",
      image: "/images/banner3.jpg",
    },
   {
      icon: Dumbbell,
      title: "Sports & Physical Education",
      desc: "Comprehensive indoor and outdoor sports facilities that promote teamwork, discipline, and physical well-being.",
      image: "/images/sports.jpg",
    },
  ];
  return (
    <section className="py-14 bg-white px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4B] mb-4">
            World-Class Campus Facilities
          </h2>

          <div className="w-82 h-0.5 bg-linear-to-r from-[#f7ce83] via-[#0B1F4B]/30 to-transparent mx-auto mb-6" />

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Our campus is thoughtfully designed to nurture academic excellence,
            creativity, and character development. From advanced laboratories to
            dynamic learning spaces, every facility empowers students to
            explore, innovate, and grow with confidence.
          </p>
        </div>

        {/* Asymmetric Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {facilitiesData.map((facility, index) => (
            <motion.div
              key={facility.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-sm ${
                index === 0 || index === 5 ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 bg-black/20 "></div>
              {/* Image */}
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-100 object-cover 
               transition duration-700 group-hover:scale-105"
              />

              {/* Title (Always Visible - Top Left) */}
              <div className="absolute bottom-6 right-6 z-10">
                <h3 className="text-xl md:text-2xl text-white drop-shadow-md">
                  {facility.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black/60 
               opacity-0 group-hover:opacity-100
               transition-all duration-500
               flex flex-col justify-center items-center
               text-center px-8"
              >
                <facility.icon
                  size={30}
                  strokeWidth={1.5}
                  className="text-[#fec65e] mb-4"
                />

                <p className="text-white text-sm md:text-lg leading-relaxed max-w-md">
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
