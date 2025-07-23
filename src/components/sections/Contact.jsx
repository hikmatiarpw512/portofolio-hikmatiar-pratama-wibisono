import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToastHandler } from '@/hooks/useToastHandler';

const ContactInfo = ({ icon: Icon, title, value }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300">{value}</p>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  const handleFeatureClick = useToastHandler();
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
    >
      <form className="space-y-6">
        <div>
          <label className="block text-white font-semibold mb-2">Nama</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="Nama Anda"
          />
        </div>
        
        <div>
          <label className="block text-white font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
            placeholder="email@example.com"
          />
        </div>
        
        <div>
          <label className="block text-white font-semibold mb-2">Pesan</label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
            placeholder="Ceritakan tentang ide atau kolaborasi..."
          />
        </div>
        
        <Button
          onClick={handleFeatureClick}
          type="button"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg text-lg font-semibold"
        >
          Kirim Pesan
        </Button>
      </form>
    </motion.div>
  );
};

const Contact = () => {
  const contactDetails = [
    { icon: Mail, title: 'Email', value: 'hikmatiarpw512@gmail.com' },
    { icon: Phone, title: 'Telepon', value: '+62 813-8920-1764' },
    { icon: MapPin, title: 'Lokasi', value: 'cileungsi,bogor,indonesia.' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
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
              Mari Berkolaborasi
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Punya ide bisnis atau proyek digital? Saya siap membantu mewujudkannya. Mari kita diskusikan!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactDetails.map((detail, index) => (
              <ContactInfo key={index} icon={detail.icon} title={detail.title} value={detail.value} />
            ))}
          </motion.div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;