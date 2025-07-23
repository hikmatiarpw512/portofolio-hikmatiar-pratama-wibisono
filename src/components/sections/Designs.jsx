import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useToastHandler } from '@/hooks/useToastHandler';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DesignCard = ({ design, index }) => {
  const handleFeatureClick = useToastHandler();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-2xl cursor-pointer"
        >
          <img
            src={design.image}
            alt={design.title}
            className="w-full aspect-[9/16] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center text-white p-4">
              <Eye className="h-12 w-12 mx-auto mb-2" />
              <h3 className="text-xl font-bold">{design.title}</h3>
              <p>{design.category}</p>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-slate-900/80 backdrop-blur-lg border-purple-500 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-purple-400">{design.title}</DialogTitle>
          <DialogDescription className="text-gray-400">{design.category}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img
            src={design.image}
            alt={design.title}
            className="w-full rounded-lg object-cover"
          />
          <p className="text-sm text-gray-300 mt-2">{design.imageDesc}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Designs = () => {
  const designsData = [
    {
      title: "Poster Nobar",
      category: "Desain Promosi",
      image: "/assets/banner1.JPG",
      imageDesc: "",
    },
    {
      title: "Poster komunitas",
      category: "desain promosi",
      image: "/assets/gowes.png",
      imageDesc: "",
    },
    {
      title: "Poster Nobar'",
      category: "Desain Promosi",
      image: "/assets/banner2.JPG",
      imageDesc: "",
    },
    {
      title: "Poster Nobar",
      category: "Desain Promosi",
      image: "/assets/banner3.JPG",
      imageDesc: "",
    },
    {
      title: "Poster Nobar",
      category: "Desain Promosi",
      image: "/assets/banner4.JPG",
      imageDesc: "",
    },
    {
      title: "Poster Nobar",
      category: "Desain Promosi",
      image: "/assets/banner5.JPG",
      imageDesc: "",
    },
  ];

  return (
    <section id="designs" className="py-20 px-4">
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
              Galeri Desain 
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kumpulan karya visual yang saya buat untuk mendukung promosi, branding, dan media sosial usaha saya.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designsData.map((design, index) => (
            <DesignCard key={index} design={design} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Designs;
