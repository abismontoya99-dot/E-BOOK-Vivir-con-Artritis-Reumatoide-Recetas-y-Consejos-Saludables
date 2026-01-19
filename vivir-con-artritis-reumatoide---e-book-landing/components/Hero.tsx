import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenPreview: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=2000" 
          alt="Alimentación natural y saludable" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[1.1] serif text-white drop-shadow-2xl">
            Vivir <span className="italic text-emerald-400">sin</span> <br />
            Artritis
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-stone-200 font-light leading-relaxed max-w-xl drop-shadow-lg">
            Descubre el método de nutrición antiinflamatoria que está transformando vidas. Recetas reales para recuperar tu bienestar y movilidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="https://go.hotmart.com/F103807521Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-emerald-500 transition-all shadow-[0_20px_50px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:scale-95 text-center group"
            >
              ¡Empezar mi cambio ahora! <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button 
              onClick={onOpenPreview}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95"
            >
              Ver muestra gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;