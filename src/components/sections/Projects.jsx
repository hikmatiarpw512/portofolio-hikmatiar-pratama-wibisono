import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToastHandler } from '@/hooks/useToastHandler';

const ProjectCard = ({ project, index }) => {
  const handleFeatureClick = useToastHandler();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.imageAlt}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
       <a 
  href={projects.url} 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button
    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full"
  >
    <ExternalLink className="mr-2 h-4 w-4" />
    Lihat Detail
  </Button>
</a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: 'Warung Kopi "Enjoy Aman"',
      description: 'Usaha warung kopi pertama saya, berfokus pada kopi lokal berkualitas dan suasana komunitas yang hangat.',
      imageAlt: 'Interior Warung Kopi Sinergi Rasa',
      imageDesc: 'Interior of a cozy coffee shop Sinergi Rasa',
      imageUrl: '/assets/warkops.png',
      tech: ['Manajemen Bisnis', 'Layanan Pelanggan', 'Manajemen Stok'],
      url: 'https://www.instagram.com/enjoyaman.id/?hl=id'
    },
    {
      title: 'Angkringan "Enjoy Aman"',
      description: 'Cabang kedua dengan konsep modern, menargetkan para profesional muda dan mahasiswa.',
      imageAlt: 'Tampilan depan Warung Kopi Titik Temu',
      imageDesc: 'Modern facade of Titik Temu coffee shop',
      imageUrl: '/assets/angks.png',
      tech: ['Ekspansi Bisnis', 'Pemasaran Digital', 'Manajemen Tim'],
       url: 'https://www.instagram.com/enjoyaman.id/?hl=id'
    },
    {
      title: 'web e-commerce sederhana',
      description: 'Membangun situs web e-commerce dasar sebagai sarana pembelajaran dan simulasi penjualan produk secara online. Termasuk fitur katalog produk, keranjang belanja, serta perhitungan total harga dan stok barang.',
      imageAlt: 'Antarmuka aplikasi kasir',
      imageDesc: 'User interface of a web-based POS application',
      imageUrl: '/assets/web.png',
      tech: ['React', 'JavaScript', 'Frontend','mongodb','postman','express.js','node.js'],
       url: 'hhttps://www.instagram.com/enjoyaman.id/?hl=id'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
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
              Usaha & Proyek Saya
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kombinasi antara dunia nyata dalam membangun bisnis dan dunia digital dalam menciptakan solusi teknologi.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
