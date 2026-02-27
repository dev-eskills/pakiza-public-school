import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BranchCard = ({ branch, index, primary = false }) => {
  // Determine the correct URL based on your routes
  const destination =
    branch.slug === "main-campus" ? "/main-campus" : `/branches/${branch.slug}`;

  return (
    <Link to={destination} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`p-6 cursor-pointer rounded-xl border transition-all duration-300 relative overflow-hidden ${
          primary
            ? "border-white/10 bg-white/5 hover:border-[#f7ce83]/50 shadow-md"
            : "border-white/5 hover:bg-[#06183e] bg-white/5 hover:border-white/20"
        } hover:-translate-y-1`}
      >
        <div className="flex justify-between items-start mb-3">
          <h4
            className={`text-lg font-semibold ${primary ? "text-[#f7ce83]" : "text-white"}`}
          >
            {branch.name}
          </h4>
          {branch.isHostel && (
            <span className="text-[10px] bg-[#f7ce83] text-[#0B1F4B] px-2 py-0.5 rounded font-bold uppercase">
              Hostel Facility
            </span>
          )}
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex gap-3 text-white/90 text-sm">
            <MapPin size={16} className="text-[#f7ce83] shrink-0 mt-0.5" />
            <span className="leading-snug">{branch.address}</span>
          </div>
          <div className="flex gap-3 text-white/90 text-sm">
            <Phone size={16} className="text-[#f7ce83] shrink-0" />
            {branch.phone}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
