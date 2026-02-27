import React from 'react'
import { footerImages } from '../../constants/galleryImages'

const FooterImages = () => {
  return (
     <footer className="bg-[#000a3b] ">
          <div className="max-w-7xl mx-auto px-20 py-10 grid md:grid-cols-3 gap-12 text-white">
            <div>
              <h4 className="text-white font-bold mb-4 tracking-wide">
                #PakizaExcellence
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Our gallery is updated weekly. Follow our official platforms for
                student achievements, campus life, and events.
              </p>
            </div>
  
            <div className="grid grid-cols-3 gap-3">
              {footerImages.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square cursor-pointer bg-white/5 rounded-md overflow-hidden grayscale hover:grayscale-0 transition"
                >
                  <img
                    src={img}
                    alt="Campus"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
  
            <div className="flex flex-col justify-center items-end text-right">
              <h3 className="text-white text-xl font-semibold mb-3">
                Experience the Pakiza Culture
              </h3>
              <p className="text-white/60 text-sm max-w-[280px] leading-relaxed">
                Our doors are always open for parents to explore our world-class
                facilities and witness our unique pedagogical approach in action
                during school hours.
              </p>
              <div className="mt-4 flex items-center gap-2 text-[#f7ce83] text-xs font-medium">
                <span className="w-8 h-[1px] bg-[#f7ce83]/30"></span>
                Monday — Saturday • 9:00 AM - 3:00 PM
              </div>
            </div>
          </div>
        </footer>
  )
}

export default FooterImages
