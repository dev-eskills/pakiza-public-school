import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomSelect({
  options = [],
  placeholder = "Select Option",
  value,
  onChange,
  name,
}) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative w-full">
      {/* Select Button */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full p-3 border border-gray-300 rounded-lg 
        flex justify-between items-center cursor-pointer 
        hover:border-[#0B1F3A] focus:ring-2 focus:ring-[#0B1F3A]"
      >
        <span className="text-gray-700">{value || placeholder}</span>
        <ChevronDown
          size={18}
          className={`text-[#0B1F3A] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Options */}
      {open && (
        <div
          className="absolute mt-2 w-full bg-white border border-gray-200 
          rounded-lg shadow-lg overflow-hidden z-50"
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onChange && onChange(option, name);
                setOpen(false);
              }}
              className="px-4 py-2 border border-gray-100 cursor-pointer 
              hover:bg-[#0B1F3A] hover:text-white transition"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
