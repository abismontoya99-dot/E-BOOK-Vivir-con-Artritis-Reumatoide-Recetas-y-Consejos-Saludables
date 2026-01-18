<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vivir con Artritis Reumatoide - E-book</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, .serif { font-family: 'Playfair Display', serif; }
        .glass {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        @keyframes fade-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.8s ease-out forwards; }
    </style>
    
    <!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1229066425745052');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=1229066425745052&ev=PageView&noscript=1"
    /></noscript>

    <script type="importmap">
    {
      "imports": {
        "react/": "https://esm.sh/react@^19.2.3/",
        "react": "https://esm.sh/react@^19.2.3",
        "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
        "lucide-react": "https://esm.sh/lucide-react@^0.562.0"
      }
    }
    </script>
</head>
<body class="bg-stone-50 text-stone-900">
    <div id="root"></div>
</body>import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import GallerySection from './components/GallerySection';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import PreviewModal from './components/PreviewModal';

const App: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero onOpenPreview={() => setIsPreviewOpen(true)} />
        <FeatureSection />
        <GallerySection />
        <VideoSection />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <PreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </div>
  );
};

export default App;

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenPreview: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000" 
          alt="Pareja de adultos mayores sanos" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Vivir con <br />
            <span className="text-emerald-400">Artritis Reumatoide</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 font-light leading-relaxed">
            Descubre cómo transformar tu calidad de vida a través de recetas antiinflamatorias y hábitos que realmente funcionan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://go.hotmart.com/F103807521Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-all shadow-xl hover:scale-105 active:scale-95 text-center"
            >
              Obtener mi E-book <ArrowRight size={20} />
            </a>
            <button 
              onClick={onOpenPreview}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
            >
              Ver una muestra gratuita
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
