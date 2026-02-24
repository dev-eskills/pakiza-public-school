import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white flex flex-col overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url('/images/banner3.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight md:leading-[4rem] mb-6"
          >
            Connect With <br />
            <span className="text-[#fddda3]">Pakiza Public School</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-blue-100"
          >
            We’re here to answer your questions, guide admissions, and help you
            become part of our learning community.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="relative z-20 -mt-10 md:-mt-14 pb-16 md:pb-24 px-4 sm:px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white max-w-6xl mx-auto rounded-t-[30px] md:rounded-t-[40px] 
          pt-12 md:pt-20 pb-12 md:pb-16 px-5 sm:px-8 md:px-16"
        >
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            {/* ================= CONTACT INFO ================= */}
            <div className="bg-[#0B1F4B] text-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-md space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>

              <div className="text-sm sm:text-base space-y-6 text-blue-100">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-[#fddda3] mt-1 shrink-0" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+919876543210"
                      className="hover:text-white transition"
                    >
                      +91 98765 43210
                    </a>
                    <a
                      href="tel:+919109992299"
                      className="hover:text-white transition"
                    >
                      +91 9109992299
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail size={18} className="text-[#fddda3] mt-1 shrink-0" />
                  <a
                    href="mailto:cbsepakizapublicschool@gmail.com"
                    className="hover:text-white transition break-all"
                  >
                    cbsepakizapublicschool@gmail.com
                  </a>
                </div>

                {/* Addresses */}
                {[
                  {
                    title: "Main Campus (Jetpura)",
                    address: `U-Turn from Ankur Rehab Center,
Sai Vihar Colony, Gram Jetpura,
Near Dharampuri, Ujjain Road, Indore (M.P.)`,
                  },
                  {
                    title: "Branch 1 (Manik Bagh)",
                    address: `Opp. Choithram Hospital, Manik Bagh Road,
Indore, 452014 (M.P.)`,
                  },
                  {
                    title: "Branch 2 (Khajrana)",
                    address: `70, Habib Colony, Khajrana,
Indore, 452016 (M.P.)`,
                  },
                  {
                    title: "Branch 3 (Green Park)",
                    address: `Near 5000 Multi, Green Park Colony,
Indore, 452002 (M.P.)`,
                  },
                ].map((branch, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <MapPin
                      size={18}
                      className="text-[#fddda3] mt-1 shrink-0"
                    />
                    <p className="whitespace-pre-line">
                      <strong>{branch.title}:</strong>
                      <br />
                      {branch.address}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-blue-700">
                <p className="text-xs sm:text-sm text-blue-200">
                  Office Hours: Monday – Saturday | 8:00 AM – 2:00 PM
                </p>
              </div>
            </div>

            {/* ================= CONTACT FORM ================= */}
            <div>
              <h2 className="text-2xl md:text-3xl tracking-tight font-bold text-[#0B1F4B] mb-6 md:mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-5 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <input
                    type="text"
                    required
                    placeholder="First Name *"
                    className="w-full border border-slate-300 focus:border-[#0B1F4B]
                    rounded-md px-3 sm:px-4 py-2.5 sm:py-3
                    outline-none bg-white text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name *"
                    className="w-full border border-slate-300 focus:border-[#0B1F4B]
                    rounded-md px-3 sm:px-4 py-2.5 sm:py-3
                    outline-none bg-white text-sm sm:text-base"
                  />
                </div>

                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="w-full border border-slate-300 focus:border-[#0B1F4B]
                  rounded-md px-3 sm:px-4 py-2.5 sm:py-3
                  outline-none bg-white text-sm sm:text-base"
                />

                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  className="w-full border border-slate-300 focus:border-[#0B1F4B]
                  rounded-md px-3 sm:px-4 py-2.5 sm:py-3
                  outline-none bg-white text-sm sm:text-base"
                />

                <textarea
                  rows="4"
                  required
                  placeholder="Your Message *"
                  className="w-full border border-slate-300 focus:border-[#0B1F4B]
                  rounded-md px-3 sm:px-4 py-2.5 sm:py-3
                  outline-none bg-white resize-none text-sm sm:text-base"
                />

                <p className="text-xs sm:text-sm text-gray-500">
                  * All fields are mandatory
                </p>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 
                  bg-[#0B1F4B] text-white font-semibold py-3 rounded-md 
                  hover:bg-[#102a66] transition duration-300 text-sm sm:text-base"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
