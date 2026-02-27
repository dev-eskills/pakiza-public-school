import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, ChevronRight, Mail } from "lucide-react";
import { BranchCard } from "./homepage/BranchCard";
import { branches } from "../constants/branches";
import { footerLinks } from "../constants/footerLinks";

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
          <p className="text-white/70 flex gap-1  items-center text-sm mb-6">
            <Mail size={16} className="text-[#f7ce83] shrink-0" />
            cbsepakizapublicschool@gmail.com
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
              {links.map((item) => {
                const isExternal = item.isPDF || item.link.startsWith("http");

                if (isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/80 hover:text-[#f7ce83] transition text-sm cursor-pointer"
                    >
                      <ChevronRight size={14} />
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="flex items-center gap-2 text-white/80 hover:text-[#f7ce83] transition text-sm"
                  >
                    <ChevronRight size={14} />
                    {item.name}
                  </Link>
                );
              })}
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
          Our Campuses & Administrative Office
        </motion.h3>

        {/* ================= TOP ROW: Main Campus & City Office ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {branches
            .filter((b) => b.name === "Main Campus" || b.isOffice)
            .map((branch, i) => (
              <BranchCard key={branch.name} branch={branch} index={i} primary />
            ))}
        </div>

        {/* ================= BOTTOM ROW: Three Branches ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches
            .filter((b) => b.name !== "Main Campus" && !b.isOffice)
            .map((branch, i) => (
              <BranchCard key={branch.name} branch={branch} index={i + 2} />
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
