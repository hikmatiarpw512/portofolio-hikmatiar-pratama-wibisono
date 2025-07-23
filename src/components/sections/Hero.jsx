import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToastHandler } from '@/hooks/useToastHandler';


const Hero = () => {
  const handleFeatureClick = useToastHandler();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Kiri - Teks dan Tombol */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
             Entrepreneur
            </span>
            <br />
            <span className="text-white">Frontend & Visual Designer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl"
          >
           Saya membangun bisnis dan pengalaman digital. Sebagai mahasiswa dan pemilik dua warung kopi, saya menggabungkan semangat wirausaha dengan kreativitas dan pemanfaatan teknologi.
          </motion.p>

          {/* Tombol CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
           <a 
  href="https://wa.me/6281389201764" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button
    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
  >
    Hubungi Saya
  </Button>
</a>
            <a href="/cv-tiar.pdf" download>
              <Button
                variant="outline"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </motion.div>

          {/* Ikon Sosial Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center lg:justify-start space-x-6 mt-8"
          >
            <a href="https://github.com/hikmatiarpw512" onClick={handleFeatureClick} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/hikmatiar-pratama-b96796375/" onClick={handleFeatureClick} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:hikmatiarpw512@gmail.com" onClick={handleFeatureClick} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/hikmatiarrpratama/?hl=id" onClick={handleFeatureClick} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Kanan - Foto Profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src='/assets/icon.png'
                alt="Potret seorang pengusaha muda dan developer"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
