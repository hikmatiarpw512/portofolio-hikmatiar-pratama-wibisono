
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import Designs from '@/components/sections/Designs';

function App() {
  return (
    <>
      <Helmet>
        <title>Portfolio - Pengusaha &amp; Frontend Developer</title>
        <meta name="description" content="Portfolio seorang pengusaha, mahasiswa, dan frontend developer dengan semangat untuk menciptakan solusi digital inovatif." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Designs />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;