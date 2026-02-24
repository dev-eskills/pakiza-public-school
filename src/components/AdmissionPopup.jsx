import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Phone, School, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const AdmissionPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal Wrapper */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 overflow-y-auto"
          >
            <div
              className="
                relative bg-white 
                w-full max-w-md sm:max-w-lg md:max-w-xl
                rounded-xl shadow-2xl 
                overflow-hidden
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 cursor-pointer  right-3 text-gray-600 hover:text-black transition"
              >
                <X size={22} />
              </button>

              {/* Content */}
              <div className="px-5 sm:px-8 py-8 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="bg-[#f7ce83]/20 p-3 sm:p-4 rounded-full">
                    <GraduationCap size={32} className="text-[#000e51]" />
                  </div>
                </div>

                {/* Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                  Admissions Open 2026–27
                </h2>

                {/* Description */}
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                  Join{" "}
                  <span className="font-semibold text-black">
                    Pakiza Public School
                  </span>{" "}
                  — where we nurture{" "}
                  <span className="font-semibold">Academic Excellence</span>,{" "}
                  <span className="font-semibold">Leadership</span>, and{" "}
                  <span className="font-semibold">Strong Values</span>.
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <School size={16} />3 Branches
                  </div>

                  <div className="flex items-center gap-1">
                    <CalendarDays size={16} />
                    Est. 1999
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/admissions"
                    className="
                      flex-1 flex items-center justify-center gap-2
                      bg-[#000e51] text-white font-semibold 
                      py-3 rounded-lg
                      hover:bg-[#1e2a65] transition duration-300
                      text-sm sm:text-base
                    "
                  >
                    <GraduationCap size={18} />
                    Apply Now
                  </Link>

                  <Link
                    to="/contact"
                    className="
                      flex-1 flex items-center justify-center gap-2
                      border border-gray-300 
                      py-3 rounded-lg
                      hover:bg-gray-100 transition duration-300
                      text-sm sm:text-base
                    "
                  >
                    <Phone size={18} />
                    Book Campus Visit
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AdmissionPopup;
