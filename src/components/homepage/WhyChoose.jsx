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

  return (
    <section className="relative w-full">
      {/* TOP IMAGE SECTION (Fully Visible First) */}
      <div
        className="h-[55vh] md:h-[100vh] bg-fixed bg-center bg-cover relative"
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
      <div className="relative -mt-20 md:-mt-28 flex justify-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            width: "85%",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            width: "100%",
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white 
             rounded-t-[40px] shadow-xl px-4 md:px-10 py-12 
             max-w-7xl"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT SIDE */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 leading-tight">
                Why Parents Choose <br />
                <span className="text-[#c9a227]">Pakiza Public School</span>
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Choosing the right school is one of the most important decisions
                for your child’s future. We combine academic excellence,
                discipline, safety and holistic growth to nurture confident,
                responsible individuals ready for tomorrow.
              </p>

              <button
                className="group mt-4 px-8 py-3 bg-[#021c53] text-white 
             rounded-md transition-all duration-300
             flex items-center gap-2 overflow-hidden"
              >
                <span className="transition-all duration-300">
                  Schedule a Campus Visit
                </span>

                <ArrowRight
                  size={18}
                  className="opacity-0 -translate-x-2 
               transition-all duration-300
               group-hover:opacity-100 
               group-hover:translate-x-0"
                />
              </button>
            </div>

            {/* RIGHT SIDE – Compact Highlights */}
            <div className="space-y-6">
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
