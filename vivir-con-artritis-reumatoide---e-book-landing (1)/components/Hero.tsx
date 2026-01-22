import React from 'react';
import { ArrowRight, Star, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenPreview: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2000&auto=format&fit=crop" 
          alt="Variedad de vegetales y platos saludables en una mesa de cocina" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0423]/95 via-[#420b58]/85 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 px-4 py-1.5 rounded-full mb-8 text-yellow-200 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md">
            <Zap size={14} className="text-yellow-400 animate-pulse" /> Método Probado y Natural
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] serif italic">
            Vuelve a <span className="text-yellow-400">moverte</span> con libertad <span className="text-purple-300">y sin dolor</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-stone-200 font-light leading-relaxed max-w-2xl">
            Descubre el protocolo de nutrición que está ayudando a miles de personas a <span className="text-white font-bold underline decoration-yellow-400 underline-offset-8">desinflamar sus articulaciones</span> y recuperar su calidad de vida en tiempo récord.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a 
              href="https://go.hotmart.com/F103807521Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 bg-yellow-400 text-[#420b58] px-12 py-6 rounded-2xl text-xl font-black hover:bg-white hover:scale-105 transition-all shadow-[0_20px_50px_rgba(234,179,8,0.3)] btn-shimmer"
            >
              ¡SÍ, QUIERO EL LIBRO! <ArrowRight size={24} />
            </a>
            <button 
              onClick={onOpenPreview}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-6 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all"
            >
              Ver muestra gratis
            </button>
          </div>

          <div className="flex items-center gap-6 p-4 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 inline-flex">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} className="w-12 h-12 rounded-full border-2 border-[#420b58] object-cover shadow-xl" src={`https://i.pravatar.cc/150?u=artritis${i}`} alt="lector" />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-400 gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-stone-300 font-medium">Únete a <span className="text-white font-bold">+5,400 alumnos</span> satisfechos</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;