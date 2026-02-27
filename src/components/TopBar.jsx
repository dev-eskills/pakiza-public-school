import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#373B62] text-white  border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="flex items-center">
          <img
            src="/images/pakizaLogo.png"
            alt="Pakiza Public School"
            className=" h-15 object-contain"
          />
        </Link>

        {/* CBSE Info */}
        <div className="hidden md:block text-center leading-tight">
          <p className="tracking-wider text-[#f7ce83] uppercase">
            Affiliated to CBSE
          </p>
          <p className="text-white">
            Affiliation No. 1031143 · Est. 1999 · Indore, M.P.
          </p>
        </div>

        {/* Contact */}
        <div className="hidden sm:flex items-center gap-6 text-white">
          <div className="flex cursor-pointer text-base items-center gap-2 hover:text-[#f7ce83] transition-colors">
            <Phone size={14} className="text-[#f7ce83]" />
            <a href="tel:+919109908802">+91 9109908802</a>
          </div>

          <div className="flex cursor-pointer text-base items-center gap-2 hover:text-[#f7ce83] transition-colors">
            <Mail size={14} className="text-[#f7ce83]" />
            <a href="mailto:cbsepakizapublicschool@gmail.com">
              cbsepakizapublicschool@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
