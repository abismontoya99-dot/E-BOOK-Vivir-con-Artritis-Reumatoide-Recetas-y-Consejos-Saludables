
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Elena Rodríguez",
    role: "Diagnosticada hace 5 años",
    content: "Las recetas de este e-book han cambiado mi energía por las mañanas. La inflamación ha bajado notablemente y los ejercicios son muy fáciles de seguir.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Ricardo Sanz",
    role: "Paciente de Artritis",
    content: "Buscaba algo práctico y directo. El plan de 30 días me ayudó a organizar mi dieta sin complicaciones. Totalmente recomendado.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Carmen Méndez",
    role: "Entusiasta de la cocina sana",
    content: "No solo son recetas, es una guía de vida. Me encanta que explique el 'por qué' de cada ingrediente. ¡El salmón al limón es mi favorito!",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4 serif">Lo que dicen nuestros lectores</h2>
          <p className="text-stone-600 font-light italic">Historias reales de personas que ya han tomado el control.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-emerald-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-700 mb-8 italic leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-stone-900">{t.name}</h4>
                  <p className="text-xs text-emerald-600 font-semibold uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
