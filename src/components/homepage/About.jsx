import { motion } from "framer-motion";
import { BookOpen, Sprout, Handshake, Home } from "lucide-react";
import LeadershipMessage from "./LeaderShipMessage";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const About = () => {
  const stats = [
    ["1500+", "Students Enrolled"],
    ["85+", "Expert Faculty"],
    ["3", "City Branches"],
    ["25+", "Years of Excellence"],
  ];

  const vals = [
    {
      icon: BookOpen,
      t: "Academic Rigor",
      d: "CBSE curriculum with depth, clarity and consistently strong board results.",
    },
    {
      icon: Sprout,
      t: "Holistic Growth",
      d: "Sports, arts, and character-building woven throughout daily school life.",
    },
    {
      icon: Handshake,
      t: "Inclusive Community",
      d: "A welcoming environment where every student belongs and thrives.",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="py-14 border border-b border-gray-200 bg-white px-4 md:px-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* ================= TITLE ================= */}
          <div className="text-center mb-7">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4B] mb-4">
              About Pakiza Public School
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              A legacy of transformative education rooted in values, vision, and
              excellence since 1999.
            </p>

            {/* ⭐ Hostel Highlight Badge */}
            <div className="mt-5 inline-flex items-center gap-2 bg-[#f7ce83]/20 text-[#0B1F4B] px-5 py-2 rounded-full text-xs md:text-sm font-semibold">
              <Home size={16} />
              Indore’s First School with Modern Hostel Facility
            </div>
          </div>

          {/* ================= CONTENT + IMAGE ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-7">
            {/* Left Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-[#0B1F4B] mb-4">
                Shaping Tomorrow's Leaders
              </h3>

              <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base">
                Established in 1999, Pakiza Public School has grown into one of
                Indore’s most respected CBSE institutions. With over 25 years of
                academic excellence, we are committed to nurturing confident,
                disciplined, and responsible global citizens.
              </p>

              <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base">
                Proudly recognized as{" "}
                <span className="font-semibold text-[#0B1F4B]">
                  Indore’s first school to introduce a dedicated hostel facility
                </span>
                , we provide a safe, structured, and nurturing residential
                environment for students from across the region.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our campuses combine modern infrastructure, experienced faculty,
                and value-based education to create a balanced learning
                environment where students excel academically while developing
                strong moral character.
              </p>
            </motion.div>

            {/* ================= STATS SECTION ================= */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative my-7 rounded-sm overflow-hidden"
            >
              <img
                src="/images/banner1.jpg"
                alt="School Campus"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 py-14 px-6 text-center">
                {stats.map(([n, l]) => (
                  <div key={l}>
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {n}
                    </div>

                    <div className="w-10 h-[2px] bg-[#f7ce83] mx-auto my-3" />

                    <div className="text-white text-xs md:text-sm uppercase tracking-wide">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ================= VALUES ================= */}
          <div className="grid md:grid-cols-3 gap-10 mt-7">
            {vals.map((v, i) => (
              <motion.div
                key={v.t}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#0B1F4B]/5 text-[#0B1F4B] group-hover:bg-[#0B1F4B] group-hover:text-white transition-all duration-300">
                    <v.icon size={24} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#0B1F4B] mb-2">
                      {v.t}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {v.d}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-px bg-gradient-to-r from-[#f7ce83] via-[#0B1F4B]/30 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* ================= MISSION & VISION ================= */}
          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#0B1F4B] text-white p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                To provide holistic education rooted in discipline, integrity,
                and academic rigor — empowering students to become responsible
                citizens and future leaders.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#f7ce83]/10 p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-[#0B1F4B] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To be a center of excellence in education, fostering innovation,
                character development, and academic brilliance in every child.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <LeadershipMessage />
    </>
  );
};

export default About;
