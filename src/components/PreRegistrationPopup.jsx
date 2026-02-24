import { X } from "lucide-react";
import CustomSelect from "./ui/CustomSelect";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PreRegistrationPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    branch: "",
    class: "",
    source: "",
  });

  const handleSelect = (value, name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-full max-w-2xl rounded-xl shadow-2xl relative p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-[#0B1F3A]"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-2">
              Pre-Registration
            </h2>
            <p className="text-gray-500 mb-6">Admission Inquiry 2026–2027</p>

            {/* Form */}
            <form className="grid md:grid-cols-2 gap-4">
              <CustomSelect
                name="branch"
                options={["Senior", "Junior"]}
                placeholder="Select Branch *"
                value={formData.branch}
                onChange={handleSelect}
              />

              <CustomSelect
                name="class"
                options={["Pre Nursery", "Nursery"]}
                placeholder="Select Class *"
                value={formData.class}
                onChange={handleSelect}
              />

              <input
                type="text"
                placeholder="Student's Name *"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B1F3A] outline-none"
              />

              <input
                type="text"
                placeholder="Father's Name *"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B1F3A] outline-none"
              />

              <input
                type="email"
                placeholder="Email *"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B1F3A] outline-none"
              />

              <input
                type="tel"
                placeholder="Mobile *"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B1F3A] outline-none"
              />

              <CustomSelect
                name="source"
                options={["Reference", "Google", "Social Media"]}
                placeholder="Where did you find Us? *"
                value={formData.source}
                onChange={handleSelect}
              />

              <button className=" cursor-pointer md:col-span-2 bg-[#0B1F3A] text-white py-3 rounded-lg hover:bg-[#142c55] transition">
                Send Enquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
