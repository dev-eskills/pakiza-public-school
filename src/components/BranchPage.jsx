import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Users,
  BookOpen,
  Trophy,
  GraduationCap,
} from "lucide-react";

const branchesData = {
  "manik-bagh": {
    name: "Pakiza School Branch 1 – Manik Bagh",
    heroImage: "/images/banner1.jpg",

    description: `
Welcome to Pakiza School, a joint venture of Pakiza Edu Group and Markaz.

We offer a blend of modern and moral education, integrating contemporary ideas with timeless values. Our holistic approach nurtures curiosity, leadership, and integrity — shaping responsible citizens of tomorrow.
    `,

    vision:
      "To create a nurturing academic environment where excellence meets character-building.",

    mission:
      "To empower students with knowledge, discipline, and moral strength to excel in life.",

    stats: [
      { icon: Users, label: "1500+ Students" },
      { icon: GraduationCap, label: "75+ Faculty" },
      { icon: BookOpen, label: "Smart Classrooms" },
      { icon: Trophy, label: "State-Level Achievements" },
    ],

    address: "Opp. Choithram Hospital, Manik Bagh Road, Indore, 452014",
    phone: "+91 9644333330, +91 9644006859",
    email: "pps.channel.indore@gmail.com",
    facebook: "https://www.facebook.com/pakizaplayschool",
    youtube: "https://www.youtube.com/@PakizaSchool",
    instagram: "https://www.instagram.com/pakizaschool",
  },
};

const BranchPage = () => {
  const { branch } = useParams();
  const data = branchesData[branch];

  if (!data) {
    return (
      <div className="text-center py-20 text-[#000e51] text-xl">
        Branch Not Found
      </div>
    );
  }

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <img
          src={data.heroImage}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Branch Banner"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <p className="drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] text-[#fff5d4] uppercase tracking-[4px] mb-4">
            Pakiza Public School
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
            {data.name}
          </h1>
          <p className="max-w-2xl mx-auto text-white/90 drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] text-lg">
            Excellence in Education • Integrity in Values • Leadership for
            Tomorrow
          </p>
        </motion.div>
      </section>

      {/* ABOUT (UNCHANGED - AS YOU LIKED) */}
      <section className="relative max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <img
          src="/images/pakizalogo2.png"
          alt="PPS Logo"
          className="absolute -top-5 right-110 w-52 md:w-72 opacity-20 pointer-events-none"
        />

        <div>
          <h2 className="text-3xl font-bold text-[#000e51] mb-6">
            About This Branch
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {data.description}
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-[#c9a227] mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700">{data.vision}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#d19226] mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">{data.mission}</p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#000e51] py-5 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center px-6">
          {data.stats.map((stat, i) => (
            <div key={i} className="space-y-4">
              <stat.icon className="mx-auto text-[#ffd494]" size={36} />
              <p className="font-semibold text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACADEMIC & ACTIVITY SPLIT SECTION */}
      <section className="relative pt-30 pb-20 bg-linear-to-br from-[#f8fafc] via-white to-[#eef3ff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          {/* ================= ACADEMIC SECTION ================= */}
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            {/* Large Background Text */}
            <h1 className="absolute -top-20 left-0 text-[80px] font-extrabold text-[#B29563]/40  hidden md:block select-none">
              ACADEMICS
            </h1>

            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#000e51]/10 rounded-md"></div>
              <img
                src="/images/academics.JPG"
                alt="Academics"
                className="relative w-full h-95 object-cover rounded-md transition duration-700 "
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-[#000e51] mb-3">
                Academic Excellence
              </h2>

              <div className="w-content h-0.5 bg-linear-to-r from-[#f7ce83] via-[#0B1F4B]/30 to-transparent mb-6"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Our curriculum blends conceptual clarity with real-world
                exposure. Through smart classrooms and interactive digital
                tools, students develop analytical thinking and problem-solving
                abilities.
              </p>

              <p className="text-gray-600 ">
                Continuous assessments, project-based learning, and mentorship
                from experienced faculty ensure every child progresses with
                confidence.
              </p>
            </div>
          </div>

          {/* ================= CO-CURRICULAR SECTION ================= */}
          <div className="relative grid md:grid-cols-2 gap-16 items-center">
            {/* Large Background Text */}
            <h1 className="absolute -top-19 right-0 text-[80px] font-extrabold text-[#B29563]/40 hidden md:block select-none">
              GROWTH
            </h1>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-[#000e51] mb-3">
                Co-Curricular Growth
              </h2>

              <div className="w-content h-0.5 bg-linear-to-r from-[#f7ce83] via-[#0B1F4B]/30 to-transparent mb-6"></div>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Education at Pakiza goes beyond textbooks. Students actively
                participate in sports, performing arts, leadership programs,
                competitions, and cultural celebrations.
              </p>

              <p className="text-gray-600 leading-relaxed">
                These activities build teamwork, resilience, and confidence —
                helping students discover their true potential and passions.
              </p>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#000e51]/10 rounded-2xl"></div>
              <img
                src="/images/growth.jpg"
                alt="Co-Curricular"
                className="relative w-full h-95 object-cover rounded-md transition duration-700 "
              />
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION - PREMIUM LOOK */}
      <section className="bg-linear-to-tr from-[#fdfaf4] to-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <div className="relative pl-10 ">
            <h2 className="text-4xl font-bold text-[#000e51] mb-6">
              Visit Our Campus
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              We warmly invite parents and students to visit our campus and
              experience an atmosphere of academic excellence and holistic
              development.
            </p>

            <div className="space-y-8 text-lg">
              <div className="flex items-start gap-5">
                <MapPin className="text-[#000e51] mt-1" size={22} />
                <div>
                  <p className="font-semibold text-[#000e51]">Address</p>
                  <p className="text-gray-600">{data.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Phone className="text-[#000e51] mt-1" size={22} />
                <div>
                  <p className="font-semibold text-[#000e51]">Call Us</p>
                  <p className="text-gray-600">{data.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail className="text-[#000e51] mt-1" size={22} />
                <div>
                  <p className="font-semibold text-[#000e51]">Email</p>
                  <p className="text-gray-600">{data.email}</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-12">
              {[
                { icon: Facebook, link: data.facebook },
                { icon: Youtube, link: data.youtube },
                { icon: Instagram, link: data.instagram },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center 
                         border border-[#000e51] 
                         text-[#000e51] 
                         rounded-full 
                         transition-all duration-300 
                         hover:bg-[#000e51] hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE - GOOGLE MAP */}
          <div className="relative">
            {/* Decorative Border Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#000e51] rounded-2xl"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.034335562974!2d75.855087!3d22.6897657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcf840891f21%3A0x25bd02ced10a135a!2sPakiza%20Public%20School!5e0!3m2!1sen!2sin!4v1771826699097!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BranchPage;
