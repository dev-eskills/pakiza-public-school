import { motion } from "framer-motion";
const leadershipData = [
  {
    id: 1,
    title: "Chairman’s Message",
    image: "/images/chairmanpakiza.webp",
    message:
      "Education is the cornerstone of a progressive society. At Pakiza Public School, our vision is to cultivate leadership, integrity, and excellence in every student. Through our three branches in Indore, we continue to expand opportunities for quality education and holistic development.",
  },
  {
    id: 2,
    title: "Hostel Academic Director’s Message",
    image: "/images/directorpakiza.jpg",
    message:
      "Our hostel facilities are designed to provide a secure, disciplined, and academically supportive environment. We ensure students receive structured mentorship that fosters independence, responsibility, and strong community values.",
  },
  {
    id: 3,
    title: "Principal’s Message",
    image: "/images/principalpakiza.jpg",
    message:
      "At Pakiza Public School, we strive to inspire excellence and a passion for lifelong learning. With dedicated faculty and modern teaching methodologies, we guide students toward academic success and personal growth.",
  },
];
export default function AboutUs() {
  return (
    <div className="bg-white text-slate-800 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-[#0B1F4B] via-[#102a66] to-[#0d1f4a] text-white py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Excellence in Education, <br />
            <span className="text-[#fddda3]">Leadership for Tomorrow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-lg max-w-3xl text-blue-100 leading-relaxed"
          >
            Pakiza Public School stands as a symbol of discipline, integrity,
            and academic excellence with three thriving branches across Indore.
          </motion.p>
        </div>
      </section>

      {/* ================= SCHOOL INTRO ================= */}
      {/* <section className="py-14 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0B1F4B]">
            About Pakiza Public School
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            With three well-established branches in Indore, Pakiza Public School
            has become a trusted name in quality education. We are committed to
            nurturing young minds through a balanced approach that combines
            academic excellence, moral values, discipline, and modern
            infrastructure.
            <br />
            <br />
            Our institution believes in shaping responsible citizens who are
            confident, knowledgeable, and prepared to face the challenges of the
            future.
          </p>
        </div>
      </section> */}

      {/* ================= BRANCHES HIGHLIGHT ================= */}
      <section
        className="relative py-10 px-6 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner2.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h3 className="text-3xl font-semibold mb-12">
            Our Presence in Indore
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Pakiza School Branch 1 - Manik Bagh",
              "Pakiza School Branch 2 - Khajrana",
              "Pakiza School Branch 3 - Green Park",
            ].map((branch, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <div className="text-6xl  font-bold text-white mb-4">
                  0{index + 1}
                </div>
                <h4 className="text-xl max-w-55 font-semibold">{branch}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 md:px-6 bg-gradient-to-b from-[#faf7f2] to-[#fef6eb] relative">
        <div className="max-w-7xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#0B1F4B]/20"></div>

          <div className="space-y-18">
            {leadershipData.map((leader, index) => {
              const isReverse = index % 2 !== 0;

              return (
                <div
                  key={leader.id}
                  className={`relative flex flex-col md:flex-row ${
                    isReverse ? "md:flex-row-reverse" : ""
                  } items-center gap-14`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-10 w-6 h-6 bg-gradient-to-r from-[#130834] via-[#0B1F4B]/30 to-[#0B1F4B] rounded-full border-4 border-white shadow-md z-10"></div>

                  {/* Image */}
                  <div className="md:w-1/2">
                    <img
                      src={leader.image}
                      alt={leader.title}
                      className="w-full h-[420px] object-contain "
                    />
                  </div>

                  {/* Text */}
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold text-[#0B1F4B] mb-2">
                      {leader.title}
                    </h3>

                    <div className="mt-2 mb-6 h-[1px] bg-gradient-to-r from-[#f3e2c5] via-[#0B1F4B]/30 to-transparent" />

                    <p className="text-slate-700 leading-relaxed text-lg">
                      {leader.message}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FOOTER STATEMENT ================= */}
      <section className="bg-gradient-to-tr from-[#0B1F4B] via-[#102a66] to-[#0d1f4a] py-20 px-6 md:px-16 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-semibold max-w-4xl mx-auto leading-relaxed">
          Empowering Young Minds Across Indore Through Education, Discipline,
          and Excellence.
        </h3>
      </section>
    </div>
  );
}
