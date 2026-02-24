import { motion } from "framer-motion";

export default function AdmissionPage() {
  return (
    <div className="w-full bg-[#f8f5ef] text-[#1c2b4a] overflow-hidden">
      {/* ================= HERO IMAGE ================= */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/school-building.jpg"
          alt="School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Admissions Open 2026–27
          </h1>
          <p className="mt-4 max-w-2xl text-gray-700">
            Admission is open to all students irrespective of caste, creed and
            religion. We focus on holistic growth and academic excellence.
          </p>

          <button className="mt-6 bg-[#1c2b4a] text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
            Download Admission Form
          </button>
        </div>
      </section>

      {/* ================= ELIGIBILITY SECTION ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 border-l-4 border-[#1c2b4a] pl-4">
          Eligibility Criteria
        </h2>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#efe9dd]">
              <tr>
                <th className="p-4">Class</th>
                <th className="p-4">Age as on 1st June</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Nursery</td>
                <td className="p-4">2 Years 6 Months</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">LKG</td>
                <td className="p-4">3 Years 6 Months</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">UKG</td>
                <td className="p-4">4 Years 6 Months</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Grade 1</td>
                <td className="p-4">5 Years 6 Months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= DOCUMENT SECTION ================= */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 border-l-4 border-[#1c2b4a] pl-4">
            Documents Required
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <ul className="space-y-3 list-disc pl-6">
              <li>Birth Certificate (Self Attested)</li>
              <li>Transfer Certificate</li>
              <li>Last Exam Marksheet</li>
              <li>Aadhaar Card Copy</li>
            </ul>
            <ul className="space-y-3 list-disc pl-6">
              <li>Address Proof</li>
              <li>Passport Size Photographs</li>
              <li>Migration Certificate (if applicable)</li>
              <li>Conduct Certificate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= ENVIRONMENT VIDEO SECTION ================= */}
      <section className="py-16 px-6 bg-[#f3efe6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 border-l-4 border-[#1c2b4a] pl-4">
            Explore Our School Environment
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Small Video Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <video
                src="/videos/classroom.mp4"
                controls
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Smart Classrooms</h3>
                <p className="text-sm text-gray-600">
                  Interactive digital learning spaces.
                </p>
              </div>
            </motion.div>

            {/* Small Video Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <video
                src="/videos/playground.mp4"
                controls
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Sports Facilities</h3>
                <p className="text-sm text-gray-600">
                  Spacious playground & sports activities.
                </p>
              </div>
            </motion.div>

            {/* Small Video Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <video
                src="/videos/lab.mp4"
                controls
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Science Labs</h3>
                <p className="text-sm text-gray-600">
                  Well-equipped modern laboratories.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold">
          Begin Your Child’s Journey With Us
        </h2>
        <button className="mt-6 bg-[#1c2b4a] text-white px-8 py-3 rounded-full shadow-md hover:scale-105 transition">
          Click Here for Pre-Registration
        </button>
      </section>
    </div>
  );
}
