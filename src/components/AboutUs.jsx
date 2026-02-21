import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const leadershipData = [
  {
    id: 1,
    slug: "chairman",
    title: "Chairman’s Message",
    image: "/images/chairmanpakiza.webp",
    name: "Mr. Maqsood Gori",
    message: `
Chairman of Pakiza Public School, believes that education is the most powerful instrument of social transformation. With a clear vision and unwavering dedication, he has guided the institution to become a pillar of academic excellence and moral integrity in Indore.

He strongly believes that true education goes beyond textbooks — it shapes character, builds resilience, and cultivates leadership. Under his guidance, Pakiza Public School continues to expand its horizons while remaining deeply rooted in values, discipline, and cultural heritage.

His vision is to nurture responsible global citizens who are not only academically proficient but also compassionate, confident, and committed to contributing positively to society.
    `,
  },
  {
    id: 2,
    slug: "director",
    title: "Hostel Academic Director’s Message",
    image: "/images/directorpakiza.jpg",
    name: "Ms. Sohini Jain",
    message: `
 Hostel Academic Director, envisions a learning environment where discipline meets encouragement and structure supports growth. She believes that a secure and nurturing residential environment plays a crucial role in shaping independent and responsible young individuals.

Her approach combines academic mentorship with personal guidance, ensuring that students develop confidence, emotional intelligence, and a strong sense of responsibility. She is committed to creating a safe, inclusive, and academically enriching atmosphere within the hostel community.

Through structured routines, academic supervision, and moral guidance, she strives to empower students to excel not only in examinations but also in life.
    `,
  },
  {
    id: 3,
    slug: "principal",
    title: "Principal’s Message",
    image: "/images/principalpakiza.jpg",
    name: "Mr. Ashraf P.",
    message: `
 Principal of Pakiza Public School, firmly believes that every child possesses immense potential waiting to be nurtured. He advocates for a collaborative partnership between parents and educators to build trust, confidence, and a strong foundation for lifelong learning.

He emphasizes academic rigor combined with moral values, ensuring that students grow into thoughtful, disciplined, and ambitious individuals. With modern teaching methodologies and a dedicated faculty team, he continues to lead the institution toward higher standards of excellence.

His philosophy centers on inspiring curiosity, encouraging critical thinking, and preparing students to confidently shape their future — and the future of the nation.
    `,
  },
];
export default function AboutUs() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        const yOffset = -100; // adjust for fixed navbar
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  return (
    <div className="bg-white  overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-linear-to-br from-[#0B1F4B] via-[#032472] to-[#081c4b] text-white py-12 px-6 md:px-16">
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
      <section className="py-24 px-6 md:px-6 bg-linear-to-b from-white to-[#fffefb] relative">
        <div className="max-w-7xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#0b1f4b71]"></div>

          <div className="space-y-18">
            {leadershipData.map((leader, index) => {
              const isReverse = index % 2 !== 0;

              return (
                <motion.div
                  key={leader.id}
                  id={leader.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row ${
                    isReverse ? "md:flex-row-reverse" : ""
                  } items-center gap-14 scroll-mt-28`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-10 w-6 h-6 bg-blue-950 rounded-full border-4 border-white z-10"></div>

                  {/* Image */}
                  <div className="md:w-1/2">
                    <img
                      src={leader.image}
                      alt={leader.title}
                      className="w-full h-105 object-contain "
                    />
                  </div>

                  {/* Text */}
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold text-black mb-2">
                      {leader.title}
                    </h3>

                    <h2 className="text-xl font-bold text-[#0B1F4B] px-1">
                      {leader?.name}
                    </h2>

                    <div className="mt-2 mb-6 h-px bg-linear-to-r from-[#f3e2c5] via-[#0B1F4B]/30 to-transparent" />

                    <p className="text-slate-700 leading-relaxed text-lg">
                      {leader.message}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FOOTER STATEMENT ================= */}
      <section className="bg-linear-to-tr from-[#0B1F4B] via-[#102a66] to-[#0d1f4a] py-20 px-6 md:px-16 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-semibold max-w-4xl mx-auto leading-relaxed">
          Empowering Young Minds Across Indore Through Education, Discipline,
          and Excellence.
        </h3>
      </section>
    </div>
  );
}
