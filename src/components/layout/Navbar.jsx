
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Desain', href: '#designs' },
    { name: 'Kontak', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Portofolio | Hikmatiar Pratama Wibisono
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-8"
          >
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-white hover:text-purple-300 transition-colors">
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;