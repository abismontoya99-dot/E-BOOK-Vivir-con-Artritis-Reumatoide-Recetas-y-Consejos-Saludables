import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, Sparkles, Lock } from 'lucide-react';

const PurchaseCTA: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(14400); // 4 horas en segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 14400));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      h: h.toString().padStart(2, '0'),
      m: m.toString().padStart(2, '0'),
      s: s.toString().padStart(2, '0')
    };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative bg-gradient-to-br from-[#1a0423] via-[#420b58] to-[#2d083b] rounded-[4rem] p-8 md:p-16 lg:p-24 text-white shadow-[0_40px_100px_rgba(66,11,88,0.4)] overflow-hidden border border-white/10">
          
          {/* Elementos Decorativos de Fondo */}
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-yellow-400/30 animate-pulse">
                <Sparkles size={14} /> ¡ÚLTIMOS CUPOS CON DESCUENTO!
              </div>
              
              <h2 className="text-4xl md:text-7xl font-bold mb-8 serif italic leading-tight tracking-tight">
                Vuelve a vivir <br />sin <span className="text-yellow-400">límites</span>
              </h2>

              {/* Contador de Oferta */}
              <div className="mb-12">
                <p className="text-purple-200 text-xs uppercase tracking-[0.4em] font-black mb-6">Esta oferta expira en:</p>
                <div className="flex justify-center lg:justify-start gap-4">
                  {[
                    { val: h, label: "HORAS" },
                    { val: m, label: "MINS" },
                    { val: s, label: "SEGS" }
                  ].map((unit, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-black text-yellow-400 shadow-xl">
                        {unit.val}
                      </div>
                      <span className="text-[9px] font-black tracking-widest mt-2 text-purple-300">{unit.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 text-left max-w-sm mx-auto lg:mx-0">
                {["Acceso instantáneo a los 4 bonos", "Lectura disponible offline", "Actualizaciones gratuitas"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-purple-100/90 font-light">
                    <CheckCircle2 size={18} className="text-yellow-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Caja de Precio y Acción */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] p-10 md:p-14 border border-white/10 text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Clock size={120} className="rotate-12" />
              </div>

              <p className="text-purple-300 text-xs uppercase tracking-[0.3em] font-black mb-4">Inversión única:</p>
              
              <div className="flex items-center gap-4 mb-2">
                <span className="text-2xl text-purple-300/40 line-through font-light">$64.00</span>
                <span className="text-7xl md:text-8xl font-black text-white serif tracking-tighter">$12<span className="text-3xl">.99</span></span>
              </div>
              
              <p className="text-yellow-400 font-bold text-sm mb-12 tracking-[0.2em] uppercase italic bg-yellow-400/10 px-6 py-2 rounded-full border border-yellow-400/20">
                Ahorras un 80% hoy
              </p>
              
              <div className="w-full space-y-4">
                <a 
                  href="https://go.hotmart.com/F103807521Y" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-4 bg-yellow-400 text-[#420b58] px-10 py-7 rounded-[1.5rem] font-black text-xl hover:bg-white hover:scale-105 transition-all shadow-[0_20px_50px_rgba(234,179,8,0.3)] btn-shimmer group"
                >
                  ¡COMPRA AHORA! <ArrowRight size={26} className="group-hover:translate-x-2 transition-transform" />
                </a>
                
                <div className="flex items-center justify-center gap-2 text-purple-300 text-[10px] font-bold uppercase tracking-widest opacity-60">
                  <Lock size={12} /> Pago Seguro Protegido por SSL
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12 w-full pt-10 border-t border-white/10">
                <div className="flex flex-col items-center gap-2">
                  <ShieldCheck size={28} className="text-green-400" />
                  <span className="text-[10px] uppercase font-black text-purple-200 tracking-tighter text-center">7 Días de Garantía Total</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" alt="PayPal" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Mastercard" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseCTA;