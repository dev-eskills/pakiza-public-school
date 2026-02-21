import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const messages = [
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
  {
    role: "Chairman",
    name: "Mr. Maqsood Gori",
    link: "/about/#chairman",
    image: "/images/chairmanpakiza.webp",
    text: `Our vision is to build an institution where discipline meets compassion and ambition meets opportunity, shaping responsible global citizens.`,
  },
];

const LeadershipMessage = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-white px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center  mb-12">
          <div className="flex bg-[#0B1F4B]/5 p-1 rounded-sm">
            {messages.map((item, index) => (
              <button
                key={item.role}
                onClick={() => setActive(index)}
                className={`px-6 py-2 text-sm md:text-base rounded-sm transition-all duration-300 font-medium
                  ${
                    active === index
                      ? "bg-[#0B1F4B] text-white shadow-md"
                      : "text-[#0B1F4B] hover:bg-[#0B1F4B]/10"
                  }`}
              >
                {item.role}'s Message
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-sm overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-10"
            >
              <p className="text-gray-600 leading-relaxed text-sm md:text-lg mb-6">
                {messages[active].text}
              </p>

              <h4 className="text-lg font-semibold text-[#0B1F4B]">
                {messages[active].name}
              </h4>
              <h4>{messages[active].role}</h4>

              <button
                onClick={() => navigate(messages[active].link)}
                className="mt-4 text-sm font-medium text-[#fbbd4b] hover:text-[#0B1F4B] transition"
              >
                Read Full Message →
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <div className="h-75 md:h-110">
            <img
              src={messages[active].image}
              alt={messages[active].role}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessage;
