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

    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.034335562974!2d75.855087!3d22.6897657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcf840891f21%3A0x25bd02ced10a135a!2sPakiza%20Public%20School!5e0!3m2!1sen!2sin!4v1771826699097!5m2!1sen!2sin",
  },

  khajrana: {
    name: "Pakiza School Branch 2 – Khajrana",
    heroImage: "/images/PTM.jpg",

    description: `
Welcome to Pakiza School Branch 2 – Khajrana.

We provide a balanced environment where academic excellence meets moral values. Our mission is to nurture responsible individuals equipped with modern knowledge and strong character.
    `,

    vision:
      "To inspire young minds through innovation, discipline, and holistic growth.",

    mission:
      "To cultivate confident learners prepared for academic and personal success.",

    stats: [
      { icon: Users, label: "1200+ Students" },
      { icon: GraduationCap, label: "60+ Faculty" },
      { icon: BookOpen, label: "Digital Learning" },
      { icon: Trophy, label: "Award-Winning Campus" },
    ],

    address: "70, Habib Colony, Khajrana, Indore, 452016",
    phone: "+91 9644006856, +91 9644006857",
    email: "pps.channel.indore@gmail.com",
    facebook: "https://www.facebook.com/pakizaschool",
    youtube: "https://www.youtube.com/@PakizaSchool",
    instagram: "https://www.instagram.com/pakizaschool",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942018.2995030741!2d75.917222!3d22.737198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3003ec92635%3A0x5cecf029fa433e89!2sPakiza%20School-%202%20Khajrana!5e0!3m2!1sen!2sin!4v1771852660171!5m2!1sen!2sin",
  },
  "green-park": {
    name: "Pakiza School Branch 3 – Green Park",
    heroImage: "/images/banner7.jpg",

    description: `
Welcome to Pakiza School, a joint venture of Pakiza Edu Group and Markaz.

We offer a blend of modern and moral education, integrating contemporary ideas with timeless values for a transformative learning experience. Our holistic approach nurtures each student's growth, fostering curiosity, critical thinking, and integrity. By shaping future leaders, we prepare individuals ready to make a positive impact.
  `,

    vision:
      "To develop intellectually strong, morally grounded, and socially responsible individuals.",

    mission:
      "To provide a transformative educational experience that blends modern knowledge with timeless values.",

    stats: [
      { icon: Users, label: "1000+ Students" },
      { icon: GraduationCap, label: "55+ Faculty" },
      { icon: BookOpen, label: "Advanced Learning Labs" },
      { icon: Trophy, label: "Excellence in Academics" },
    ],

    address: "Near 5000 Multi, Green Park Colony, Indore, India, 452002",

    phone: "+91 97520005500, +91 9826926336",

    email: "pps.channel.indore@gmail.com",

    facebook: "https://www.facebook.com/pakizaschool",

    youtube: "http://www.youtube.com/@PakizaSchool",

    instagram: "https://www.instagram.com/pakizaschool",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942208.0059381237!2d75.806202!3d22.709649!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fe77d1c8a265%3A0xa57c69085987e0a4!2sPakiza%20School%20(PS-3)!5e0!3m2!1sen!2sin!4v1771913601757!5m2!1sen!2sin",
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
      <section className="relative max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 ">
        <img
          src="/images/pakizalogo2.png"
          alt="PPS Logo"
          className="absolute -top-5 right-110 w-52 md:w-72 opacity-20 pointer-events-none"
        />

        <div>
          <h2 className="text-3xl font-bold text-[#000e51] mb-3">
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

      <section className="bg-linear-to-tr from-[#fdfaf4] to-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div className="relative pl-10 ">
            <h2 className="text-3xl font-bold text-[#000e51] mb-3">
              Visit Our Campus
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              We warmly invite parents and students to visit our campus and
              experience an atmosphere of academic excellence and holistic
              development.
            </p>

            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-5">
                <MapPin className="text-[#000e51] mt-1" size={22} />
                <div>
                  <p className="font-semibold text-[#000e51]">Address</p>
                  <p className="text-sm text-gray-600">{data.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Phone className="text-sm text-[#000e51] mt-1" size={22} />
                <div>
                  <p className="font-semibold text-[#000e51]">Call Us</p>
                  <p className=" text-sm text-gray-600">{data.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail className="text-[#000e51] mt-1" size={22} />
                <div>
                  <p className="font-semibold text-[#000e51]">Email</p>
                  <p className="text-sm text-gray-600">{data.email}</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6">
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
                src={data.mapEmbed}
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
