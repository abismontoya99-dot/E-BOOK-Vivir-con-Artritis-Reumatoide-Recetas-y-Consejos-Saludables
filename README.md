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
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        @keyframes fade-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f5f5f4; }
        ::-webkit-scrollbar-thumb { background: #d6d3d1; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #a8a29e; }
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

    <script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@19.0.0",
    "react-dom": "https://esm.sh/react-dom@19.0.0",
    "react-dom/client": "https://esm.sh/react-dom@19.0.0/client",
    "lucide-react": "https://esm.sh/lucide-react@0.460.0",
    "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
    "react/": "https://esm.sh/react@^19.2.3/"
  }
}
</script>
</head>
<body class="bg-stone-50 text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
    <div id="root"></div>
    <script type="module" src="./index.tsx"></script>
</body>
</html>
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenPreview: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2000" 
          alt="Alimentación saludable y antiinflamatoria" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/30 to-stone-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-bold tracking-wide mb-8 backdrop-blur-sm">
            <Sparkles size={16} /> GUÍA RECOMENDADA 2024
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[1.1] serif text-white drop-shadow-sm">
            Vivir con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Artritis</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-stone-100 font-light leading-relaxed max-w-xl drop-shadow-md">
            Descubre el método de nutrición antiinflamatoria que está ayudando a miles de personas a recuperar su movilidad y alegría.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="https://go.hotmart.com/F103807521Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-emerald-500 transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:-translate-y-1 active:scale-95 text-center group"
            >
              ¡Comprar E-book Ahora! <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={onOpenPreview}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95"
            >
              Ver muestra gratuita
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-stone-200">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-stone-800 shadow-lg" alt="Lector" />
              ))}
            </div>
            <p className="text-sm font-medium drop-shadow-sm">+2,500 lectores satisfechos este mes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
