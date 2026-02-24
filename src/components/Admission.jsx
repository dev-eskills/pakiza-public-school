import { motion } from "framer-motion";
import PreRegistrationPopup from "./PreRegistrationPopup";
import { useEffect, useState } from "react";

export default function AdmissionPage() {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  return (
    <div className="w-full bg-[#f8f5ef] text-[#1c2b4a] overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="/images/library.jpg"
          alt="Pakiza Public School"
          className="w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Admissions Open 2026–27
          </motion.h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Give your child the foundation of excellence at
            <span className="font-semibold text-white">
              {" "}
              Pakiza Public School
            </span>
            . Where learning meets values and future leaders are shaped.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="border cursor-pointer border-white px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:bg-white hover:text-[#1c2b4a] transition"
            >
              Pre-Register Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-6 sm:py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto items-center flex flex-col ">
          <h2 className="text-4xl max-w-lg font-bold text-center mb-6">
            Why Parents Choose Us
            <div className="mt-2 h-0.5 bg-linear-to-r from-[#f7ce83] via-[#0B1F4B]/30 to-transparent" />
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE BIG FEATURE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="border-l-2 border-[#1c2b4a] pl-3">
                <h3 className="text-xl font-semibold mb-3">
                  Academic Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain consistently outstanding board results with a
                  strong focus on conceptual clarity, discipline and structured
                  learning.
                </p>
              </div>

              <div className="border-l-2 border-[#1c2b4a] pl-3">
                <h3 className="text-xl font-semibold mb-3">
                  Modern Infrastructure
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Smart classrooms, advanced laboratories, well-stocked library
                  and a fully secured campus environment.
                </p>
              </div>

              <div className="border-l-2 border-[#1c2b4a] pl-3">
                <h3 className="text-xl font-semibold mb-3">
                  Holistic Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Equal focus on academics, sports, arts, leadership and
                  personality development for well-rounded growth.
                </p>
              </div>
            </motion.div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/growth.jpg"
                alt="Students"
                className="rounded-md shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#1c2b4a] text-white px-8 py-6 rounded-2xl shadow-lg">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm">Parent Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= CAMPUS LIFE (VIDEO AUTOPLAY LOOP) ================= */}
      <section className="py-10 px-6 bg-white text-white">
        <div className="max-w-7xl mx-auto">
          {/* GRID LAYOUT */}
          <div className="grid md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* LARGE FEATURED VIDEO */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative md:col-span-1 row-span-2 rounded-md overflow-hidden  group"
            >
              <video
                src="/videos/review2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-semibold">
                  Sports & Leadership Activities
                </h3>
                <p className="text-sm text-gray-200 mt-2 max-w-md">
                  Encouraging teamwork, discipline and confidence through
                  structured physical development programs.
                </p>
              </div> */}
            </motion.div>

            {/* SMART CLASSROOM IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative rounded-md overflow-hidden shadow-md group"
            >
              <img
                src="/images/smartclassroms.jpg"
                alt="Smart Classroom"
                className="w-full h-full object-cover  transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-4 left-4">
                <h3 className="font-semibold text-lg">Smart Classrooms</h3>
              </div>
            </motion.div>

            {/* LAB VIDEO */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src="/images/sciencelab.png"
                alt="Smart Classroom"
                className="w-full h-full object-cover  transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-4 left-4">
                <h3 className="font-semibold text-lg">Advanced Laboratories</h3>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 text-[#1c2b4a]  flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold mb-4">
                A Place Where Futures Are Built .
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                At Pakiza Public School, we focus on nurturing young minds
                through innovation, discipline and value-based education. Our
                environment encourages curiosity, creativity and confidence.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                <div>
                  <p className="text-2xl font-bold text-[#1c2b4a]">50+</p>
                  <p className="text-gray-600">Qualified Teachers</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#1c2b4a]">1500+</p>
                  <p className="text-gray-600">Happy Students</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="py-10 px-6 bg-[#fffbf4]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/images/students.jpg"
            alt="Students"
            className="rounded-md shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              A Safe & Nurturing Environment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Pakiza Public School, we believe every child is unique. Our
              caring teachers, structured curriculum and disciplined environment
              ensure that your child grows academically, emotionally and
              socially.
            </p>

            <ul className="space-y-3 font-medium">
              <li>✔ 100% Safe & Secured Campus</li>
              <li>✔ Experienced & Qualified Faculty</li>
              <li>✔ Focus on Moral & Ethical Values</li>
              <li>✔ Parent-Teacher Collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-[#02143a] text-center text-white">
        <h2 className="text-4xl font-bold">
          Secure Your Child’s Bright Future Today
        </h2>
        <p className="mt-4 text-gray-300">
          Limited seats available for the academic session 2026–27
        </p>

        <button className="mt-8 bg-white text-[#1c2b4a] px-10 py-2 sm:py-4 rounded-md font-semibold hover:scale-105 transition">
          Apply for Admission
        </button>
      </section>
      <PreRegistrationPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
