import React from 'react';
import { MapPin, Heart, Sparkles, Star } from 'lucide-react';

const AuthorSection: React.FC = () => {
  return (
    <section id="autor" className="py-24 bg-[#f3ede4] relative overflow-hidden">
      {/* Fondos decorativos sutiles en sintonía con la calidez de la foto */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-yellow-200 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-100 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado de la Imagen - Foto Oficial de Hotmart */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            <div className="relative w-full max-w-[550px] aspect-square group">
              
              {/* Resplandor dorado suave que emana de la foto */}
              <div className="absolute inset-10 rounded-full bg-yellow-500/20 blur-[100px] group-hover:bg-yellow-500/30 transition-all duration-1000"></div>

              {/* Contenedor de la foto principal */}
              <div className="relative z-10 w-full h-full transform transition-all duration-1000 hover:scale-[1.02]">
                <img 
                  src="https://static-media.hotmart.com/Usanmyitn-3fklcglIqF0EzCZAg=/filters:quality(100):format(webp)/klickart-prod/uploads/media/file/7958376/diseo_sin_ttulo_(13).png" 
                  alt="Yanni Barrera - Experta en Artritis" 
                  className="w-full h-full object-contain drop-shadow-[0_20px_80px_rgba(184,134,11,0.25)]"
                />
              </div>

              {/* Badge de Ubicación Estilizado */}
              <div className="absolute -bottom-2 right-8 bg-white/95 backdrop-blur-md px-7 py-4 rounded-[2.5rem] shadow-2xl border border-yellow-200 flex items-center gap-4 z-20 transform hover:-translate-y-2 transition-transform duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] font-black text-stone-400 leading-none mb-1.5">Escritora en</p>
                  <p className="font-bold text-stone-900 text-base">Montevideo, Uruguay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Biografía de Yanni */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-yellow-100/60 text-yellow-800 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-yellow-200/50 shadow-sm">
              <Sparkles size={16} className="text-yellow-600 animate-pulse" /> Conoce a la autora
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold text-stone-900 mb-8 serif italic leading-tight tracking-tighter">
              Yanni <br /><span className="text-gradient expressive">Barrera</span>
            </h2>
            
            <div className="space-y-8 text-xl text-stone-600 font-light leading-relaxed">
              <p>
                Desde su hogar en <span className="font-semibold text-stone-800 italic border-b-2 border-yellow-400">Montevideo, Uruguay</span>, Yanni ha creado este e-book como una obra especial para aquellos que buscan vivir plenamente a pesar de los desafíos de esta enfermedad.
              </p>
              
              <p>
                Yanni es una autoridad en el bienestar que siente una gran pasión por ayudar a quienes conviven con la <span className="text-[#420b58] font-bold">Artritis Reumatoide</span>. Basada en su propia experiencia personal y conocimiento profundo, ofrece estrategias de manejo, recetas nutritivas y consejos de estilo de vida bajo un enfoque <span className="italic">holístico y práctico</span>.
              </p>
              
              <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] border-l-[12px] border-yellow-500 italic shadow-2xl shadow-stone-200/60 relative overflow-hidden group">
                <div className="relative z-10 text-stone-800 text-2xl font-medium leading-snug">
                  "Mi misión es que descubras cómo mejorar y disfrutar de una mejor calidad de vida a través de mi guía meticulosa."
                </div>
                <div className="absolute -bottom-8 -right-8 text-yellow-100 rotate-12 transition-transform group-hover:rotate-45 duration-1000">
                  <Star size={120} fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-purple-100 rounded-3xl flex items-center justify-center text-[#420b58] transform group-hover:rotate-6 transition-transform">
                  <Heart size={28} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-stone-900 text-lg leading-none">Pasión</p>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Vocación de Ayuda</p>
                </div>
              </div>
              <div className="w-px h-12 bg-stone-300 hidden sm:block"></div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-yellow-100 rounded-3xl flex items-center justify-center text-yellow-600 transform group-hover:-rotate-6 transition-transform">
                  <Star size={28} fill="currentColor" />
                </div>
                <div>
                  <p className="font-bold text-stone-900 text-lg leading-none">Experiencia</p>
                  <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Enfoque Personal</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthorSection;