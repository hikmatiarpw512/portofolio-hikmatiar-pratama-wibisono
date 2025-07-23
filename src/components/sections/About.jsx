import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mahasiswa dengan semangat kewirausahaan yang tinggi, aktif menyeimbangkan perjalanan akademik dengan pengalaman membangun bisnis serta ketertarikan pada pengembangan teknologi dan inovasi digital.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              alt="Suasana warung kopi yang nyaman"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl" src="/assets/hero.png" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Wirausaha & Kepemimpinan</h3>
              <p className="text-gray-300">
                Pemilik dan pengelola dua warung kopi, berpengalaman dalam manajemen tim dan strategi operasional. Fokus pada peningkatan layanan pelanggan dan efisiensi bisnis.


              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Akademik & Teknologi</h3>
              <p className="text-gray-300">
              Mahasiswa yang aktif mengembangkan kemampuan di bidang teknologi, khususnya pengembangan web. Terlibat dalam berbagai proyek digital yang menekankan aspek fungsionalitas dan desain.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Visi Profesional</h3>
              <p className="text-gray-300">
               Menggabungkan pemahaman praktis dari dunia usaha dengan keterampilan teknis untuk menciptakan solusi digital yang berdampak, efisien, dan bernilai secara bisnis.


              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;