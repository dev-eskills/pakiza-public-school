import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  GraduationCap,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

const StaffPage = () => {
  const text = "Our Eceptional Environment";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    let timeout;

    if (!isDeleting && displayedText.length < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 80);
    } else if (!isDeleting && displayedText.length === text.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText.length === 0) {
      // Restart typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text]);
  const features = [
    {
      icon: <Users className="text-[#000e51]" />,
      title: "Collaborative Excellence",
      desc: "Our educators work as a cohesive unit, sharing best practices to ensure every child receives consistent, high-quality attention.",
    },
    {
      icon: <Heart className="text-[#000e51]" />,
      title: "Empathetic Mentors",
      desc: "Beyond academics, our staff acts as emotional anchors, guiding students through their personal and social development with care.",
    },
    {
      icon: <GraduationCap className="text-[#000e51]" />,
      title: "Highly Qualified",
      desc: "Comprised of specialists and veteran educators who are committed to continuous professional development and modern pedagogy.",
    },
  ];

  return (
    <div className="bg-[#fffcf8] min-h-screen font-sans">
      {/* --- Hero Section --- */}
      <section className="bg-[#000e51] py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl flex flex-col mx-auto"
        >
          <span className="flex flex-col items-center justify-center ">
            <span className="text-[#f7ce83] uppercase tracking-widest text-sm font-bold">
              The Pillars of Pakiza
            </span>
            <span className=" text-3xl sm:text-5xl mb-2 text-white inline-flex items-center">
              {displayedText}

              {/* Blinking Cursor */}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </span>

          <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
            At Pakiza Public School, we believe that a school is only as good as
            its teachers. Our faculty isn't just a group of employees; they are
            a family of visionaries dedicated to shaping the leaders of
            tomorrow.
          </p>
        </motion.div>
      </section>

      {/* --- Image Gallery Grid --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="h-80 bg-white p-2 rounded-2xl shadow-md border border-gray-100"
            >
              <div className="w-full h-full rounded-xl bg-gray-200 overflow-hidden relative group">
                <img
                  src={`/images/staff${i}.jpg`}
                  alt="Pakiza Staff Group"
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <p className="text-white font-medium italic">
                    Building futures together.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Philosophy Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-[#000e51] text-3xl md:text-3xl font-bold mb-6">
              Why Our Staff Stands Out
            </h2>
            <div className="space-y-8">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[#000e51] font-bold text-lg mb-1">
                      {f.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-md border-t-4 border-[#f7ce83] relative">
            <Lightbulb className="absolute -top-6 -right-6 text-[#f7ce83] w-12 h-12 bg-white rounded-full p-2 shadow-lg" />
            <h3 className="text-[#000e51] text-2xl font-bold mb-4">
              Our Commitment
            </h3>
            <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
              "We don't just teach subjects; we teach children. Every member of
              our staff is vetted not only for their academic prowess but for
              their ability to inspire curiosity and foster a safe, inclusive
              environment for every learner."
            </p>
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-12 bg-[#f7ce83]"></div>
              <span className="text-[#000e51] font-bold  tracking-wide text-sm">
                Management, Pakiza
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="relative py-20 overflow-hidden border-t border-gray-100">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/games2.jpg" // Replace with your image path
            alt="School Atmosphere"
            className="w-full h-full object-cover"
          />
          {/* Light Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
        </div>

        {/* Content - Positioned relative to sit above the background */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-4 rounded-full bg-[#f7ce83]/20 mb-2 shadow-sm">
              <ShieldCheck className="text-white w-10 h-10" />
            </div>

            <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              A Safe & Nurturing Environment
            </h2>

            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Every staff member undergoes rigorous background checks and
              regular training in child safety and modern pedagogical
              techniques.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StaffPage;
