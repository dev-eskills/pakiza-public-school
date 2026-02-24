import { Phone, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SideBadge = () => {
  return (
    <div className="fixed right-0 -translate-y-1/5 top-1/2 z-50 flex flex-col">
      {/* Contact Badge */}
      <motion.div
        // whileHover={{ x: -8 }}
        className="bg-[#000e51] text-white shadow-lg"
      >
        <Link
          to="/contact"
          className="flex flex-col items-center gap-2 px-4 py-3 "
        >
          <Phone size={18} />
          <span className="rotate-180 [writing-mode:vertical-rl] text-sm tracking-widest">
            Contact
          </span>
        </Link>
      </motion.div>

      {/* Admission Badge */}
      <motion.div
        // whileHover={{ x: -8 }}
        className="bg-[#0f172a] text-white shadow-lg"
      >
        <Link
          to="/admissions"
          className="flex flex-col items-center gap-2 px-4 py-3 "
        >
          <GraduationCap size={18} />
          <span className="rotate-180 [writing-mode:vertical-rl] text-sm tracking-wider">
            Admissions
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default SideBadge;
