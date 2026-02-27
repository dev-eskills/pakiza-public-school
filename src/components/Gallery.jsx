import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Maximize2, Filter } from "lucide-react";
import {
  categories,
  footerImages,
  galleryImages,
} from "../constants/galleryImages";
import FooterImages from "./ui/FooterImages";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [showVideo, setShowVideo] = useState(false);
  const filteredImages =
    filter === "All"
      ? galleryImages.slice(0, 8)
      : galleryImages.filter((img) => img.cat === filter);

  return (
    <div className=" min-h-screen ">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src="/images/campus3.jpg"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom → Top Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl text-white tracking-tight">
            Life At <span className="text-[#f8e2cc] font-black">PAKIZA.</span>
          </h1>

          <p className="text-gray-200 mt-6 max-w-2xl mx-auto text-lg">
            A window into the moments that shape future leaders.
          </p>
        </div>
      </section>

      {/* --- INTERACTIVE FILTER BAR (Sticky) --- */}
      <nav className="sticky top-0 z-30 bg-[#000c45] border-y border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
          {/* Categories */}
          <div className="flex gap-8 relative">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="cursor-pointer relative text-sm font- text-white/60 hover:text-white transition"
              >
                {filter === cat && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#ffedd9]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <span
                  className={`${filter === cat ? "text-white" : ""} transition`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="hidden md:flex items-center gap-2 text-[#ffedd9] text-sm tracking-wider">
            <Filter size={16} />
            {filteredImages.length} MOMENTS
          </div>
        </div>
      </nav>

      {/* --- MASONRY BENTO GALLERY --- */}
      <section className="max-w-400 mx-auto px-4 py-5">
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-md bg-gray-800"
            >
              {/* Image with Parallax-like Zoom */}
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
                src={img.src}
                alt={img.title}
                className="w-full h-50 object-cover rounded-md brightness-90 group-hover:brightness-100 transition-all"
              />

              {/* High-Impact Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div>
                    <span className="text-[#ffedd9] text-xs font-bold">
                      {img.cat}
                    </span>
                    <h3 className="text-white text-xl font-bold">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- CINEMATIC VIDEO SECTION (Fills Space) --- */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-125 rounded-md overflow-hidden group">
            <img
              src="/images/banner4.jpg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowVideo(true)}
                className="w-24 cursor-pointer h-24 bg-white rounded-full flex items-center justify-center text-[#0B1F3B] shadow-lg mb-6"
              >
                <Play fill="currentColor" size={32} />
              </motion.button>
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                Experience the Campus Tour
              </h2>
              <p className="text-white/70 mt-2 font-medium">
                Watch the cinematic journey of Pakiza Public School
              </p>
            </div>
          </div>
        </div>
        {showVideo && (
          <div className="fixed top-5 inset-0 z-50 bg-black/80 flex items-center justify-center px-6">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute cursor-pointer -top-10 right-0 text-white text-sm"
              >
                Close ✕
              </button>

              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  src="/videos/school-hero3.mp4"
                  controls
                  autoPlay
                  controlsList="nodownload"
                  disablePictureInPicture
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* --- DENSE INFO FOOTER --- */}
    <FooterImages/>
    </div>
  );
}
