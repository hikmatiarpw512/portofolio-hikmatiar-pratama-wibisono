import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToastHandler } from '@/hooks/useToastHandler';

const Footer = () => {
  const handleFeatureClick = useToastHandler();

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio | Hikmatiar Pratama Wibisono
          </span>
          <p className="text-gray-400 mt-4">
            © 2025 Hikmatiar Pratama Wibisono.

          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" onClick={handleFeatureClick} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" onClick={handleFeatureClick} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" onClick={handleFeatureClick} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;