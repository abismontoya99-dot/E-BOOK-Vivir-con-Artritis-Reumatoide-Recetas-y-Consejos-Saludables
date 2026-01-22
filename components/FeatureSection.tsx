import React from 'react';
import { Book, Ban, UtensilsCrossed, CakeSlice, Zap, Sparkles, Gift } from 'lucide-react';

const bonuses = [
  { 
    id: "BONO 1", 
    icon: <Ban size={32} />, 
    title: "Alimentos que Deben Evitarse", 
    desc: "O consumirse con moderación para evitar brotes inesperados.",
    value: "$10" 
  },
  { 
    id: "BONO 2", 
    icon: <UtensilsCrossed size={32} />, 
    title: "15 Recetas Saludables", 
    desc: "Desayunos, almuerzos y cenas rápidas y deliciosas.",
    value: "$15" 
  },
  { 
    id: "BONO 3", 
    icon: <CakeSlice size={32} />, 
    title: "20 Recetas de Postres", 
    desc: "Date un gusto sin inflamar tus articulaciones.",
    value: "$12" 
  },
  { 
    id: "BONO 4", 
    icon: <Zap size={32} />, 
    title: "13 Platillos con Curry y Jengibre", 
    desc: "El kit de oro para una desinflamación potente.",
    value: "$10",
    highlight: true 
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="bonos" className="py-24 bg-[#1a0423] text-white relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-yellow-600/5 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em] mb-6 border border-yellow-400/20 shadow-inner">
            <Gift size={16} /> Regalos de Valor Incalculable
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 serif italic">Tu Pack de Transformación <span className="text-gradient">Total</span></h2>
          <p className="text-purple-200/60 max-w-3xl mx-auto font-light text-xl leading-relaxed">
            No es solo un libro, es un ecosistema completo diseñado para que <span className="text-white font-medium">nunca más te sientas perdido</span> en tu alimentación.
          </p>
        </div>

        {/* Libro Principal */}
        <div className="mb-20 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-2xl border border-white/10 rounded-[4rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 shadow-2xl group transition-all">
          <div className="relative w-56 h-72 shrink-0">
             <div className="absolute inset-0 bg-yellow-400/30 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-purple-400 via-[#420b58] to-black rounded-r-2xl shadow-[30px_30px_60px_rgba(0,0,0,0.6)] flex items-center justify-center border-y border-r border-white/20 transform group-hover:scale-105 transition-transform duration-700 overflow-hidden">
              <Book size={80} className="text-white/30 absolute -bottom-4 -right-4 rotate-12" />
              <div className="text-center p-4">
                <p className="text-[10px] font-black tracking-widest uppercase mb-2">E-book Oficial</p>
                <p className="serif italic text-xl font-bold">Vivir con <br/> Artritis</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-6 serif italic text-white group-hover:text-yellow-400 transition-colors">Vivir con Artritis Reumatoide: Recetas y Consejos</h3>
            <p className="text-purple-100/70 font-light mb-8 text-xl leading-relaxed">
              El pilar central de tu recuperación. Aprende la ciencia detrás de cada alimento y cómo configurar tu cocina para el éxito a largo plazo.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl border border-white/5">
              <span className="text-sm font-bold uppercase tracking-widest text-purple-300 italic">Valor Real: $27.00 USD</span>
            </div>
          </div>
        </div>
        
        {/* Grid de Bonos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus, i) => (
            <div key={i} className={`group relative p-10 rounded-[3rem] border transition-all duration-700 hover:-translate-y-4 flex flex-col items-center text-center ${bonus.highlight ? 'bg-gradient-to-b from-yellow-400/10 via-[#1a0423] to-[#1a0423] border-yellow-400/30' : 'bg-white/5 border-white/10'}`}>
              
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-2xl transform group-hover:rotate-12 transition-transform duration-500 bg-gradient-to-br from-white/10 to-transparent">
                <div className={`${bonus.highlight ? 'text-yellow-400' : 'text-purple-300'}`}>
                   {bonus.icon}
                </div>
              </div>

              <div className="text-[10px] font-black tracking-[0.4em] text-yellow-500 mb-4 uppercase">
                {bonus.id}
              </div>

              <h4 className="text-2xl font-bold mb-4 serif leading-tight h-16 flex items-center">{bonus.title}</h4>
              <p className="text-purple-200/50 text-sm font-light mb-8 leading-relaxed">
                {bonus.desc}
              </p>
              
              <div className="mt-auto w-full">
                 <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
                <span className="text-xs uppercase tracking-widest text-yellow-400/60 font-black italic">GRATIS HOY</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-lg uppercase tracking-[0.5em] text-purple-400 font-black mb-4 opacity-50">VALOR TOTAL DEL PACK</p>
          <p className="text-6xl md:text-8xl font-black serif italic text-white/5 tracking-tighter">$74.00 USD</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;