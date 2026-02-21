import { motion } from "framer-motion";
import { BookOpen, Sprout, Handshake } from "lucide-react";
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
          {/* Section Title */}
          <div className="text-center mb-7">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F4B] mb-4">
              About Pakiza Public School
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              A legacy of transformative education rooted in values, vision, and
              excellence since 1999.
            </p>
          </div>

          {/* Content + Image */}
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

              <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                Founded with a mission to make quality education accessible,
                Pakiza Public School has grown into one of Indore's most trusted
                institutions — serving 1,500+ students with dedication across
                three campuses.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our pedagogy blends academic excellence with moral development,
                preparing students not just for exams, but for life.
              </p>
            </motion.div>

            {/* Right Image */}
            {/* Stats Section with Background Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative my-7 rounded-sm overflow-hidden"
            >
              {/* Background Image */}
              <img
                src="/images/banner1.jpg" // 🔁 Replace with a different image if possible
                alt="School Campus"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 py-14 px-6 text-center">
                {stats.map(([n, l]) => (
                  <div key={l}>
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {n}
                    </div>

                    <div className="w-10 h-[2px] bg-[#f7ce83] mx-auto my-3" />

                    <div className="text-white text-xs md:text-sm uppercase">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
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

                <div className="mt-6 h-px bg-linear-to-r from-[#f7ce83] via-[#0B1F4B]/30 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <LeadershipMessage />
    </>
  );
};

export default About;
