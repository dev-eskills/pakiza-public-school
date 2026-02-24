import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  GraduationCap,
  Microscope,
  Trophy,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MainCampus() {
  const containerRef = useRef(null);

  // Parallax for the main image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const text = "Indore Ujjain Highway";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    let timeout;

    if (!isDeleting && displayedText.length < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 80);
    } else if (!isDeleting && displayedText.length === text.length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText.length === 0) {
      // Restart typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text]);

  const features = [
    {
      title: "Modern Infrastructure",
      icon: <Microscope className="w-6 h-6" />,
      desc: "Digital classrooms with smart-boards and ergonomic design.",
    },
    {
      title: "Experienced Faculty",
      icon: <Users className="w-6 h-6" />,
      desc: "Mentors from top tier institutions with a focus on character.",
    },
    {
      title: "Academic Excellence",
      icon: <GraduationCap className="w-6 h-6" />,
      desc: "Consistent 100% board results with merit positions.",
    },
    {
      title: "Global Perspective",
      icon: <Globe className="w-6 h-6" />,
      desc: "Curriculum integrated with global standards and coding.",
    },
  ];

  return (
    <div ref={containerRef} className=" text-white overflow-hidden">
      {/* HERO SECTION */}

      <section className="bg-linear-to-l from-white  to-[#fffaf1] ">
        {/* ================= TOP CONTENT BLOCK ================= */}
        <div className="max-w-7xl mx-auto px-6 py-5 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase text-[#0B1F3B]"
          >
            Indore's Premier Institution
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mt-3 leading-tight text-[#0B1F3B]"
          >
            Pakiza Public School
            <br />
            {/* ================= TYPEWRITER TEXT ================= */}
            <span className="inline-flex items-center">
              {displayedText}

              {/* Blinking Cursor */}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-4 text-base text-[#0B1F3B]/70 max-w-xl mx-auto leading-relaxed"
          >
            A structured academic ecosystem where discipline, innovation, and
            character formation shape confident and future-ready leaders.
          </motion.p>
        </div>

        {/* ================= VIDEO BLOCK ================= */}
        <div className="w-full h-[500px] relative overflow-hidden">
          {/* ================= VIDEO ================= */}
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
          >
            <source src="/videos/school-hero3.mp4" type="video/mp4" />
          </motion.video>

          {/* ================= BLACK OVERLAY ================= */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* ================= TEXT CONTENT ================= */}
          <div className="absolute inset-0 flex items-end justify-end z-10 p-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-10">
                A Campus Built for
                <span className="block text-[#ffecda] mt-2">
                  Future Leaders
                </span>
              </h2>
            </motion.div>
          </div>
        </div>
        <div>
          {" "}
          <Link to={"/admission"} className="w-full py-3 flex items-center justify-center gap-2 bg-[#0B1F3B] text-white font-semibold  transition-transform duration-300">
            <span> Admissions Open 2026 – 27</span> <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      {/* --- BENTO GRID HIGHLIGHTS --- */}
      <section className="py-10 bg-white text-[#0B1F3B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 grid-rows-2 gap-4 h-full md:h-100">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              className="lg:col-span-2 bg-[#fdf9f3] py-10 px-5 rounded-md flex flex-col justify-end relative overflow-hidden"
            >
              <Trophy className="absolute top-10 right-10 w-20 h-20 text-black/10" />
              <h3 className="text-3xl font-bold mb-4">Academic Legacy</h3>
              <p className="text-lg opacity-80 max-w-md">
                Our Main Campus has been the flagship of Pakiza Public School,
                delivering excellence for over two decades with a focus on
                holistic pedagogy.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-4 rounded-3xl text-[#0B1F3B]"
            >
              <h3 className="text-5xl font-black mb-2">98%</h3>
              <p className=" tracking-tighter">Average Board Score</p>
              <div className="mt-5 h-1 w-full bg-[#0B1F3B]/20 rounded-md overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-[#0B1F3B]"
                />
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0B1F3B] py-10 px-5 rounded-md text-white flex flex-col justify-between"
            >
              <h3 className="text-2xl font-bold">Smart Campus</h3>
              <p className="text-sm opacity-70">
                Fully Wi-Fi enabled campus with biometric attendance and
                GPS-tracked transport.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              className="lg:col-span-2 bg-gray-100 rounded-md overflow-hidden group"
            >
              <img
                src="/images/banner5.jpg"
                className="w-full h-full object-cover transition-transform duration-700"
                alt="campus"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FEATURE MATRIX (Dense Info) --- */}
      <section className=" ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-0 border border-black/10 rounded-md overflow-hidden">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-10 bg-white border-r border-b border-black/10 hover:bg-[#fffcf6] transition-colors"
              >
                <div className="text-[#f7b365] mb-6">{f.icon}</div>
                <h4 className="text-xl font-bold text-[#0B1F3B] mb-4">
                  {f.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCATION SECTION (Full Width) --- */}
      <section className="py-10 bg-white text-[#0B1F3B]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span>
              <h2 className="text-5xl tracking-tighter">Connect With Us</h2>
            </span>
            <div className="mt-3 h-0.5 bg-linear-to-r from-[#f7ce83] via-[#0B1F4B]/30 to-transparent" />

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-[#0B1F3B] text-white p-2 rounded-md h-fit">
                  <MapPin size={17} />
                </div>
                <div>
                  <h4 className=" text-xl ">Main Gate Address</h4>
                  <p className="text-gray-600 mt-2 max-w-sm">
                    U-Turn from Ankur Rehab Center, Sai Vihar Colony, Gram
                    Jetpura, Ujjain Road, Indore (M.P.)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-100 bg-gray-200 rounded-md overflow-hidden shadow-sm grayscale hover:grayscale-0 transition-all duration-700">
            {/* Replace with actual Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.264609020491!2d75.8646189!3d22.866681600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396304f286c39f39%3A0xeef4fd9fd3918023!2sPakiza%20Public%20School!5e0!3m2!1sen!2sin!4v1771918699478!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition duration-500"
            ></iframe>
          </div>
        </div>
      </section>

      {/* --- CONDENSED FOOTER CTA --- */}
      <section className="bg-[#06183e] py-6 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <h3 className="text-xl font-bold text-white">
            Ready To Join The Legacy?
          </h3>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-8 py-2  text-white font-bold rounded-md 
             flex items-center gap-2 transition-all duration-300"
            >
              Admissions Open 2026 - 27
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
