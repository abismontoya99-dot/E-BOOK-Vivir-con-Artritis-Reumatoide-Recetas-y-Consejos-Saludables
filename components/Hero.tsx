

const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2000" 
          alt="Alimentación saludable y antiinflamatoria" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-stone-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-bold tracking-wide mb-8 backdrop-blur-sm">
            <Sparkles size={16} /> GUÍA RECOMENDADA 2024
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[1.1] serif text-white drop-shadow-md">
            Vivir con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Artritis</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-stone-100 font-light leading-relaxed max-w-xl drop-shadow-lg">
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
            <p className="text-sm font-medium drop-shadow-md">+2,500 lectores satisfechos este mes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
