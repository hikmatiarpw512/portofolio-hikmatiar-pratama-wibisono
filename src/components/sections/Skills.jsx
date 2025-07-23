
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Edit3, Briefcase, GraduationCap, Share2 } from 'lucide-react';

const SkillCard = ({ icon: Icon, name, level, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
  >
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
        />
      </div>
      <span className="text-purple-300 font-semibold">{level}%</span>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillsData = [
    { name: 'Frontend Development', icon: Code, level: 70 },
    { name: 'Desain Grafis (Canva)', icon: Edit3, level: 80 },
    { name: 'Manajemen Bisnis', icon: Briefcase, level: 85 },
    { name: 'Manajemen Media Sosial', icon: Share2, level: 80}
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
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
              Keahlian Saya
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Perpaduan unik antara keahlian teknis, kreativitas desain, dan naluri bisnis yang terasah dari pengalaman nyata.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} level={skill.level} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;