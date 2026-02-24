import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const messages = [
  {
    role: "Chairman",
    name: "Mr. Maqsood Gori",
    link: "/about/#chairman",
    image: "/images/chairmanpakiza.webp",
    text: `Our vision is to build an institution where discipline meets compassion and ambition meets opportunity, shaping responsible global citizens.`,
  },
  {
    role: "Principal",
    name: "Mr. Ashraf.P",
    link: "/about/#principal",
    image: "/images/principalpakiza.jpg",
    text: `I firmly believe that every child can exceed and that the cooperation between home and school builds trust and self-esteem in students. Our students use their highest potential to shape their future — and the future of our nation.`,
  },
  {
    role: "Hostel Academic Director",
    name: "Ms. Sohini Jain",
    link: "/about/#director",
    image: "/images/directorpakiza.jpg",
    text: `Education at Pakiza Public School is rooted in values, innovation, and excellence. We prepare learners not just academically, but for life with confidence and integrity.`,
  },
];

const LeadershipMessage = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-white px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-[#0B1F4B]/5 p-1 rounded-md">
            {messages.map((item, index) => (
              <button
                key={item.role}
                onClick={() => setActive(index)}
                className={`px-5 py-2 text-sm rounded-md transition-all duration-300 font-medium
              ${
                active === index
                  ? "bg-[#0B1F4B] text-white shadow"
                  : "text-[#0B1F4B] hover:bg-[#0B1F4B]/10"
              }`}
              >
                {item.role}
              </button>
            ))}
          </div>
        </div>

        {/* Content Box */}
        <div className="grid md:grid-cols-2 items-stretch bg-white rounded-2xl shadow-sm overflow-hidden min-h-95">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-8 flex flex-col justify-between"
            >
              {/* Quote */}
              <div>
                <div className="text-5xl text-[#f7ce83] leading-none mb-4">
                  “
                </div>

                <p className="text-black leading-relaxed text-sm md:text-base mb-6">
                  {messages[active].text}
                </p>

                {/* Extra Content */}
                <ul className="text-sm text-black space-y-2 mb-6">
                  <li>• Commitment to academic excellence</li>
                  <li>• Focus on character & discipline</li>
                  <li>• Encouraging leadership & innovation</li>
                </ul>
              </div>

              {/* Name + CTA */}
              <div>
                <h4 className="text-lg font-semibold text-[#0B1F4B]">
                  {messages[active].name}
                </h4>
                <p className="text-sm text-gray-500 mb-3">
                  {messages[active].role}
                </p>

                <button
                  onClick={() => navigate(messages[active].link)}
                  className="text-sm font-medium text-[#fbbd4b] hover:text-[#0B1F4B] transition"
                >
                  Read Full Message →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <div className="relative">
            <img
              src={messages[active].image}
              alt={messages[active].role}
              className="w-full h-120 object-cover"
            />

            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessage;
