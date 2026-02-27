import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const NavDropdown = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex cursor-pointer items-center gap-1 text-white text-[16px] font-medium tracking-wide duration-300">
        {item.name}
        <ChevronDown size={16} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-3 w-56 bg-white rounded-md shadow-lg overflow-hidden"
          >
            {item.dropdown.map((sub) => {
              const isExternal = sub.isPDF || sub.link.startsWith("http");

              if (isExternal) {
                return (
                  <a
                    key={sub.name}
                    href={sub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-[#000e51] text-sm hover:bg-[#fffbf4] transition cursor-pointer"
                  >
                    {sub.name}
                  </a>
                );
              }

              return (
                <Link
                  key={sub.name}
                  to={sub.link}
                  className="block px-4 py-3 text-[#000e51] text-sm hover:bg-[#fffbf4] transition"
                >
                  {sub.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropdown;
