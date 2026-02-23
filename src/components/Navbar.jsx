import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

const NAV = [
  { name: "About", link: "/about" },
  {
    name: "Campus",
    dropdown: [
      { name: "Pakiza Main Campus", link: "/branches/main" },
      { name: "Pakiza Branch II", link: "/branches/manik-bagh" },
      { name: "Pakiza Branch III", link: "/campus/branch-3" },
    ],
  },
  { name: "Academics", link: "/Academics" },
  { name: "Branches", link: "/Branches" },
  { name: "Gallery", link: "/Gallery" },
  { name: "Staff", link: "/Staff" },
  { name: "Students", link: "/Students" },
  { name: "Admission", link: "/Admission" },
  { name: "Fees", link: "/Fees" },
  { name: "Privacy", link: "/Privacy" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="w-full bg-[#000e51] sticky top-0 z-50 shadow-md transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo appears only after scroll */}
        <Link to={"/"}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolled ? 1 : 0 }}
            className={`${scrolled ? "block" : "hidden"} flex items-center`}
          >
            <img
              src="/images/pakizaLogo.png"
              alt="Pakiza Public School"
              className="h-10 object-contain"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 mx-auto">
          {NAV.map((item) =>
            item.dropdown ? (
              <NavDropdown key={item.name} item={item} />
            ) : (
              <Link
                to={item.link}
                key={item.name}
                className="relative text-white text-[16px] font-medium tracking-wide hover:text-[#f7ce83] transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f7ce83] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ),
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden bg-[#0B1F4B] border-t border-white/10 
             max-h-[80vh] overflow-y-auto"
          >
            {NAV.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="border-b border-white/5">
                  {/* Dropdown Header */}
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name,
                      )
                    }
                    className="w-full flex items-center justify-between 
                     px-6 py-3 text-white hover:bg-[#f7ce83]/10 
                     transition"
                  >
                    <span>{item.name}</span>

                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Items */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-[#091a3d]"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.link}
                            onClick={() => {
                              setOpen(false);
                              setActiveDropdown(null);
                            }}
                            className="block px-10 py-3 text-white/80 
                             hover:text-[#f7ce83] hover:bg-[#f7ce83]/5 
                             transition"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-white/80 
                   hover:bg-[#f7ce83]/10 hover:text-[#f7ce83] 
                   transition-all duration-300 border-b border-white/5"
                >
                  {item.name}
                </Link>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
