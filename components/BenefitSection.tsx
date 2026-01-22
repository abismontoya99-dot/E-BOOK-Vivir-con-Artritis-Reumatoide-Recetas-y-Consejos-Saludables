import React from 'react';
import { Flame, Leaf, Move, Utensils, CheckCircle, ShieldCheck } from 'lucide-react';

const solutions = [
  { 
    icon: <Flame className="w-6 h-6" />, 
    title: "Combate la Raíz", 
    text: "Atacamos la inflamación celular, no solo el síntoma, para un alivio real." 
  },
  { 
    icon: <Leaf className="w-6 h-6" />, 
    title: "Nutrición Consciente", 
    text: "Alimentos que actúan como medicina natural en tu torrente sanguíneo." 
  },
  { 
    icon: <Move className="w-6 h-6" />, 
    title: "Libertad de Giro", 
    text: "Rutinas adaptadas para que tus articulaciones recuperen su elasticidad." 
  },
  { 
    icon: <Utensils className="w-6 h-6" />, 
    title: "Protocolo de 30 Días", 
    text: "Un paso a paso claro para que no tengas que adivinar qué comer hoy." 
  }
];

const BenefitSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 serif leading-tight">
              Entendemos que <br/><span className="text-gradient expressive">no es tu culpa</span>
            </h2>
            <p className="text-xl text-stone-600 mb-8 font-light leading-relaxed">
              Vivir con Artritis puede ser agotador, pero el dolor no tiene por qué ser tu única realidad. Este método funciona porque se basa en la **Nutrición Funcional**: limpiar tu organismo para que él mismo pueda desinflamarse.
            </p>
            
            <div className="space-y-5">
              {[
                "Reduce la rigidez matutina en tus manos y pies",
                "Evita los picos de dolor mediante una dieta alcalina",
                "Recupera la energía que la inflamación te roba",
                "Acompañamiento claro y fácil de seguir"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-stone-800 font-semibold text-lg">
                  <CheckCircle size={24} className="text-green-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {solutions.map((item, index) => (
              <div key={index} className="p-8 rounded-[2.5rem] bg-stone-50 border border-stone-100 hover:border-purple-200 transition-all hover:shadow-2xl group">
                <div className="w-14 h-14 bg-purple-100 text-[#420b58] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#420b58] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3 serif">{item.title}</h4>
                <p className="text-stone-600 font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;