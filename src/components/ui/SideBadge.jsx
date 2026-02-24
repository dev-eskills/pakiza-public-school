import { Phone, GraduationCap, Send } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SideBadge = () => {
  const [openForm, setOpenForm] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* ===== SIDE BADGES ===== */}
      <div className="fixed right-0 -translate-y-1/5 top-1/2 z-50 flex flex-col">
        {/* Contact Badge */}
        <motion.div className="bg-[#000e51] text-white shadow-lg">
          <Link
            to="/contact"
            className="flex flex-col items-center gap-2 px-4 py-3"
          >
            <Phone size={18} />
            <span className="rotate-180 [writing-mode:vertical-rl] text-sm tracking-widest">
              Contact
            </span>
          </Link>
        </motion.div>

        {/* Admission Badge */}
        <motion.div
          onClick={() => {
            setOpenForm(true);
            navigate("/admission");
          }}
          className="bg-[#0f172a] text-white shadow-lg cursor-pointer"
        >
          <div className="flex flex-col items-center gap-2 px-4 py-3">
            <GraduationCap size={18} />
            <span className="rotate-180 [writing-mode:vertical-rl] text-sm tracking-wider">
              Admissions
            </span>
          </div>
        </motion.div>
      </div>

      {/* ===== ADMISSION POPUP FORM ===== */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
    fixed 
    bottom-4 right-4
    sm:bottom-6 sm:right-6
    z-50 
    bg-white
    rounded-2xl 
    shadow-2xl 
    w-[72%] 
    sm:w-[320px]
    max-w-[95vw]
    p-6
  "
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-4 right-4 text-gray-500 text-sm hover:text-black transition"
            >
              ✕
            </button>

            {/* Heading */}
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              Please fill the form below. Once we receive the details,
              <span className="text-red-500">
                {" "}
                we shall contact you within 24 hrs.
              </span>
            </p>

            <p className="text-red-500 text-sm mb-4">
              *All fields are mandatory
            </p>

            {/* Form */}
            <div className="flex flex-col gap-3 pb-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-100 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1e2a5a]/40 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-100 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1e2a5a]/40 transition"
              />
              <input
                type="text"
                placeholder="Phone No."
                className="bg-gray-100 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1e2a5a]/40 transition"
              />
              <textarea
                placeholder="Write comments"
                rows={3}
                className="bg-gray-100 rounded-md px-4 py-2 text-sm outline-none resize-none focus:ring-2 focus:ring-[#1e2a5a]/40 transition"
              />
            </div>

            {/* Floating Submit Button */}
            <button
              className="
      absolute 
      bottom-17 right-4 
      bg-[#1e2a5a] 
      text-white 
      w-12 h-12 
      rounded-full 
      flex items-center justify-center 
      shadow-lg 
      hover:scale-105 
      active:scale-95 
      transition
    "
            >
              <Send size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBadge;
