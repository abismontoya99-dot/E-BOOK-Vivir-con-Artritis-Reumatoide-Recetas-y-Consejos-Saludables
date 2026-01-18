
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "¿El e-book es físico o digital?",
    a: "Es 100% digital en formato PDF. Podrás descargarlo inmediatamente después de la compra y leerlo en tu móvil, tablet o computador."
  },
  {
    q: "¿Necesito ingredientes difíciles de encontrar?",
    a: "Para nada. Todas las recetas están diseñadas con ingredientes sencillos que puedes encontrar en cualquier supermercado local."
  },
  {
    q: "¿Es seguro el pago por Hotmart?",
    a: "Totalmente. Hotmart es una de las plataformas más seguras del mundo para productos digitales, con cifrado de datos y garantía de reembolso."
  },
  {
    q: "¿Tengo garantía de devolución?",
    a: "Sí, tienes 7 días de garantía. Si el contenido no cumple tus expectativas, te devolvemos el 100% de tu dinero sin preguntas."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-stone-800 mb-12 serif">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-stone-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-stone-50 transition-colors"
              >
                <span className="font-bold text-stone-800">{faq.q}</span>
                {openIndex === i ? <ChevronUp size={20} className="text-emerald-600" /> : <ChevronDown size={20} className="text-stone-400" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-stone-600 leading-relaxed bg-stone-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
