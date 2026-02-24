import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react";

const branches = [
  {
    name: "Main Campus",
    address:
      "U-Turn from Ankur Rehab Center, Sai Vihar Colony, Gram Jetpura, Near Dharampuri, Ujjain Road, Indore (M.P.)",
    phone: "+91 9644333330",
    email: "info@pakizaschool.com",
  },
  {
    name: "Branch II – Manik Bagh",
    address: "Opp. Choithram Hospital, Manik Bagh Road, Indore, 452014",
    phone: "+91 9644006859",
    email: "manikbagh@pakizaschool.com",
  },
  {
    name: "Branch III – Khajrana",
    address: "70, Habib Colony, Khajrana, Indore, 452016",
    phone: "+91 9644006856",
    email: "khajrana@pakizaschool.com",
  },
];

const footerLinks = {
  About: [
    { name: "About Us", link: "/about" },
    { name: "Vision & Mission", link: "/about" },
    { name: "Management Committee", link: "/management" },
    { name: "Chairman's Message", link: "/chairman" },
  ],
  Academics: [
    { name: "Academic Calendar", link: "/academic-calendar" },
    { name: "CBSE Disclosure", link: "/cbse" },
    { name: "Book List", link: "/books" },
    { name: "Examination", link: "/exams" },
  ],
  Admissions: [
    { name: "Admission Process", link: "/admission" },
    { name: "Fee Structure", link: "/fees" },
    { name: "Online Enquiry", link: "/contact" },
    { name: "Scholarships", link: "/scholarship" },
  ],
  StudentCorner: [
    { name: "Gallery", link: "/gallery" },
    { name: "Events", link: "/events" },
    { name: "Achievements", link: "/achievements" },
    { name: "Staff Details", link: "/staff" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#000a3b] text-white pt-16 pb-10 relative overflow-hidden">
      {/* Top Gold Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-[#f7ce83] via-[#0B1F4B]/30 to-[#f7ce83]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-6 md:grid-cols-3 gap-12">
        {/* Logo + Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <img
            src="/images/pakizaLogo.png"
            alt="Pakiza Public School"
            className="h-16 mb-6"
          />

          <p className="text-white/70 leading-relaxed text-sm mb-6">
            Pakiza Public School is committed to nurturing young minds through
            academic excellence, discipline, and moral integrity. Our holistic
            approach ensures students grow intellectually, socially, and
            emotionally to become responsible global citizens.
          </p>

          <div className="flex gap-4">
            {[Facebook, Youtube, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center
                border border-[#f7ce83] rounded-full
                text-[#f7ce83]
                hover:bg-[#f7ce83] hover:text-[#000e51]
                transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Link Sections */}
        {Object.entries(footerLinks).map(([title, links], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + index * 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#f7ce83]">
              {title}
            </h3>

            <div className="space-y-3">
              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="flex items-center gap-2 text-white/80 hover:text-[#f7ce83] transition text-sm"
                >
                  <ChevronRight size={14} />
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Branch Addresses */}
      <div className="max-w-7xl mx-auto px-6 mt-6 border-t border-white/10 pt-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl font-bold mb-8 text-[#f7ce83] text-center"
        >
          Our Campuses
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-10">
          {branches.map((branch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" p-6 rounded-xl border border-white/5 hover:bg-[#06183e] transition"
            >
              <h4 className="text-lg font-semibold mb-3 text-white">
                {branch.name}
              </h4>

              <div className="flex gap-3 text-white/70 text-sm mb-2">
                <MapPin size={16} className="text-[#f7ce83]" />
                {branch.address}
              </div>

              <div className="flex gap-3 text-white/70 text-sm mb-2">
                <Phone size={16} className="text-[#f7ce83]" />
                {branch.phone}
              </div>

              <div className="flex gap-3 text-white/70 text-sm">
                <Mail size={16} className="text-[#f7ce83]" />
                {branch.email}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10 mt-6 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Pakiza Public School. All Rights Reserved.
        <br />
        <span className="text-[#f7ce83] font-medium">
          Designed & Developed by
          <span>
            {" "}
            <Link target="_blank" to="https://www.aimfortech.com/">
              Aimfortech Solutions
            </Link>
          </span>
        </span>
      </div>
    </footer>
  );
}
