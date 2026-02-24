import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  Users,
  HeartHandshake,
  School,
  BookOpenCheck,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const ParentPromise = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      desc: "Structured CBSE curriculum focused on clarity, depth and outstanding board performance.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Disciplined Environment",
      desc: "24/7 security monitoring and a culture of respect and responsibility.",
    },
    {
      icon: Users,
      title: "Experienced & Caring Faculty",
      desc: "Qualified educators who mentor, guide and inspire every child personally.",
    },
    {
      icon: School,
      title: "Modern Learning Facilities",
      desc: "Smart classrooms, advanced labs and activity spaces.",
    },
    {
      icon: HeartHandshake,
      title: "Value-Based Education",
      desc: "We build character, confidence and leadership — not just marks.",
    },
    {
      icon: BookOpenCheck,
      title: "Individual Attention",
      desc: "Ensuring your child is never just a number.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <section className="relative w-full">
      {/* TOP IMAGE SECTION (Fully Visible First) */}
      <div
        className="h-[55vh] md:h-screen bg-fixed bg-center bg-cover relative"
        style={{ backgroundImage: `url('/images/banner5.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center ">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -12, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              opacity: { duration: 1 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            A Promise to Every Parent at <br />
            <span className="text-[#ffeea2]">Pakiza Public School</span>
          </motion.h2>
        </div>
      </div>

      {/* parallax */}
      <div className="relative -mt-20 md:-mt-38 flex justify-center">
        <motion.div
          initial={!isMobile ? { opacity: 0, y: 80, width: "85%" } : false}
          whileInView={{ opacity: 1, y: 0, width: "100%" }}
          transition={!isMobile ? { duration: 0.9, ease: "easeInOut" } : {}}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white 
             rounded-t-[40px] px-4 md:px-10 py-5 sm:py-12 
             max-w-7xl"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT SIDE */}
            <div
              className="relative h-120 rounded-t-3xl sm:rounded-tl-3xl py-10 px-6 md:px-16 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/whychooseus.jpg')" }}
            ></div>

            {/* RIGHT SIDE – Compact Highlights */}
            <div className="space-y-7">
              {features.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center 
                            rounded-full bg-[#0B1F4B]/5 text-[#0B1F4B] hover:bg-[#0B1F4B] transition-all duration-300 ease-out hover:text-white"
                  >
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-black">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParentPromise;
