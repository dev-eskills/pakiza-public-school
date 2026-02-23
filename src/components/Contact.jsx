import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  GraduationCap,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white flex flex-col overflow-hidden">
      {/*  PARALLAX HERO  */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/banner3.jpg')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/40 via-black/50 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold leading-16 mb-6"
          >
            Connect With <br />
            <span className="text-[#fddda3]">Pakiza Public School</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100"
          >
            We’re here to answer your questions, guide admissions, and help you
            become part of our learning community.
          </motion.p>
        </div>
      </section>

      {/*  CONTACT SECTION */}
      {/* CONTACT SECTION */}
      <section className="relative z-20 -mt-14 pb-24 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white max-w-6xl mx-auto rounded-t-[40px] pt-20 pb-16 px-6 md:px-16"
        >
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="bg-[#0B1F4B] text-white p-10 rounded-2xl shadow-md space-y-8">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

              <div className=" text-base space-y-6 text-blue-100">
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-[#fddda3]" />
                  <a
                    href="tel:+919109908802"
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
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-[#fddda3]" />
                  <a
                    href="mailto:info@pakizapublicschool.com"
                    className="hover:text-white transition"
                  >
                    cbsepakizapublicschool@gmail.com
                  </a>
                </div>
                <div className="flex  items-center gap-4">
                  <MapPin size={18} className="text-[#fddda3]" />
                  <p>
                    <strong>Main Campus (Jetpura):</strong>
                    <br />
                    U-Turn from Ankur Rehab Center, <br />
                    Sai Vihar Colony, Gram Jetpura,
                    <br />
                    Near Dharampuri, Ujjain Road, Indore (M.P.)
                  </p>
                </div>
                <div className="flex  items-center gap-4">
                  <MapPin size={18} className="text-[#fddda3]" />
                  <p>
                    <strong>Branch 1 (Manik Bagh):</strong>
                    <br />
                    Opp. Choithram Hospital, Manik Bagh Road,
                    <br />
                    Indore, 452014 (M.P.)
                  </p>
                </div>
                <div className="flex  items-center gap-4">
                  <MapPin size={18} className="text-[#fddda3]" />
                  <p>
                    <strong>Branch 2 (Khajrana):</strong>
                    <br />
                    70, Habib Colony, Khajrana,
                    <br />
                    Indore, 452016 (M.P.)
                  </p>
                </div>
                <div className="flex  items-center gap-4">
                  <MapPin size={18} className="text-[#fddda3]" />
                  <p>
                    <strong>Branch 3 (Green Park):</strong>
                    <br />
                    Near 5000 Multi, Green Park Colony,
                    <br />
                    Indore, 452002 (M.P.)
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-blue-700">
                <p className="text-sm text-blue-200">
                  Office Hours: Monday – Saturday | 8:00 AM – 2:00 PM
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl tracking-tight font-bold text-[#0B1F4B] mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    required
                    placeholder="First Name *"
                    className="w-full border border-slate-300 focus:border-[#0B1F4B] rounded-md px-4 py-3 outline-none bg-white"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name *"
                    className="w-full border border-slate-300 focus:border-[#0B1F4B] rounded-md px-4 py-3 outline-none bg-white"
                  />
                </div>

                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="w-full border border-slate-300 focus:border-[#0B1F4B] rounded-md px-4 py-3 outline-none bg-white"
                />

                <input
                  type="tel"
                  required
                  placeholder="Phone Number *"
                  className="w-full border border-slate-300 focus:border-[#0B1F4B] rounded-md px-4 py-3 outline-none bg-white"
                />

                <textarea
                  rows="4"
                  required
                  placeholder="Your Message *"
                  className="w-full border border-slate-300 focus:border-[#0B1F4B] rounded-md px-4 py-3 outline-none bg-white resize-none"
                />

                <p className="text-sm text-gray-500">
                  * All fields are mandatory
                </p>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 
            bg-[#0B1F4B] text-white font-semibold py-3 rounded-md 
            hover:bg-[#102a66] transition duration-300"
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
