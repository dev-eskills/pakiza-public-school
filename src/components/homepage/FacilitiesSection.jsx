import { motion } from "framer-motion";
import {
  Bus,
  BookOpen,
  Trophy,
  Theater,
  Laptop,
  FlaskConical,
  Presentation,
} from "lucide-react";

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
      icon: FlaskConical,
      title: "State-of-the-Art Science Laboratories",
      desc: "Our fully equipped Physics, Chemistry, and Biology laboratories provide students with hands-on experimental learning experiences. Designed to meet CBSE standards, these labs encourage scientific inquiry, analytical thinking, and real-world application of theoretical concepts in a safe and supervised environment.",
      image: "/images/sciencelab.png",
    },
    {
      icon: Laptop,
      title: "Computer Labs",
      desc: "Equipped with advanced computer systems, high-speed internet connectivity, and updated educational software, our computer lab nurtures digital literacy and coding skills. Students are introduced to emerging technologies, research tools, and responsible digital practices that prepare them for a technology-driven future.",
      image: "/images/computerlab.jpg",
    },
    {
      icon: Presentation,
      title: "Smart & Interactive Classrooms",
      desc: "Our spacious, technology-enabled classrooms integrate smart boards, multimedia tools, and collaborative learning methods. These interactive spaces enhance engagement, improve concept clarity, and create a dynamic academic atmosphere where every student can actively participate and excel.",
      image: "/images/classroom.jpg",
    },
    {
      icon: Theater,
      title: "Cultural & Co-Curricular Events",
      desc: "Through annual functions, competitions, debates, art festivals, and celebration of national events, we foster creativity and confidence in our students. These vibrant activities promote teamwork, leadership, and holistic personality development beyond the classroom.",
      image: "/images/events.webp",
    },
    {
      icon: Bus,
      title: "Safe Transportation",
      desc: "Our fleet of well-maintained school buses ensures safe and punctual transportation across the city. Each vehicle is GPS-enabled and supervised by trained staff, providing parents with peace of mind and students with a secure commuting experience.",
      image: "/images/banner3.jpg",
    },
    {
      icon: Trophy,
      title: "Comprehensive Sports & Fitness Facilities",
      desc: "We provide extensive indoor and outdoor sports infrastructure including playgrounds and structured physical education programs. Through athletics and team sports, students develop discipline, teamwork, resilience, and a healthy competitive spirit.",
      image: "/images/sports.jpg",
    },
    {
      icon: BookOpen,
      title: "Library & Reading Hub",
      desc: "Our library serves as a knowledge center with an extensive collection of academic resources, reference materials, fiction, and periodicals. It cultivates reading habits, research skills, and intellectual curiosity in a calm and inspiring environment.",
      image: "/images/library.jpg",
    },
  ];
  return (
    <section className="py-10 bg-white px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4B] mb-3">
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
