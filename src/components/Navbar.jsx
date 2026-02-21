import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NAV = [
  { name: "About", link: "/about" },
  { name: "Campus", link: "campus" },
  { name: "Academics", link: "/Academics" },
  { name: "Branches", link: "/Branches" },
  { name: "Gallery", link: "/Gallery" },
  { name: "Staff", link: "/Staff" },
  { name: "Students", link: "/Students" },
  { name: "Admission", link: "/Admission" },
  { name: "Campus", link: "/Campus" },
  { name: "Fees", link: "/Fees" },
  { name: "Privacy", link: "/Privacy" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goto = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="w-full bg-[#000e51] sticky top-0 z-50 shadow-md transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo appears only after scroll */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 1 : 0 }}
          className={`${scrolled ? "block" : "hidden"} flex items-center`}
        >
          <img
            src="/images/pakizaLogoCropped.png"
            alt="Pakiza Public School"
            className="h-10 object-contain"
          />
        </motion.div> */}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 mx-auto">
          {NAV.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              className="relative text-white text-sm font-medium tracking-wide hover:text-[#f7ce83] transition-colors duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f7ce83] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
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
            className="lg:hidden bg-[#0B1F4B] border-t border-white/10"
          >
            {NAV.map((item) => (
              <button
                key={item}
                onClick={() => goto(item)}
                className="block w-full text-left px-6 py-3 text-white/80 hover:bg-[#f7ce83]/10 hover:text-[#f7ce83] transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
