import React from 'react';
import { X, CheckCircle, ArrowRight, Activity, Utensils, ShieldCheck } from 'lucide-react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-fade-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-stone-100 hover:bg-stone-200 rounded-full text-stone-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Sidebar / Preview Info */}
        <div className="md:w-1/3 bg-purple-50 p-8 md:p-12 flex flex-col justify-between border-r border-purple-100">
          <div>
            <span className="text-[#420b58] font-bold uppercase tracking-widest text-xs mb-4 block">Muestra Gratuita</span>
            <h3 className="text-3xl font-bold text-stone-800 mb-6 serif">
              Explora el <span className="text-gradient expressive">Contenido</span>
            </h3>
            <p className="text-stone-600 mb-8 font-light leading-relaxed">
              Estás viendo una selección exclusiva de recetas y consejos. El e-book completo contiene más de 120 páginas de contenido transformador.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-stone-700">
                <CheckCircle className="text-[#420b58] w-5 h-5 shrink-0" />
                <span>50+ Recetas Antiinflamatorias</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-700">
                <CheckCircle className="text-[#420b58] w-5 h-5 shrink-0" />
                <span>Guía de estiramientos diarios</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-700">
                <CheckCircle className="text-[#420b58] w-5 h-5 shrink-0" />
                <span>Lista de compras inteligente</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <a 
              href="https://go.hotmart.com/F103807521Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#420b58] text-white py-4 rounded-xl font-bold text-center hover:bg-[#5a0f75] transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              Deseo mi guía completa <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center justify-center gap-2 text-stone-500">
              <ShieldCheck size={16} className="text-green-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest">7 Días de Garantía</span>
            </div>
          </div>
        </div>

        {/* Main Preview Content */}
        <div className="md:w-2/3 overflow-y-auto p-4 sm:p-8 bg-stone-100/50">
          <div className="space-y-12">
            {/* Page 1: Table of Contents Preview */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
                <span className="font-bold text-stone-500 text-xs uppercase tracking-wider">PÁGINA 05 - ÍNDICE</span>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center border-b border-stone-50 pb-2">
                  <span className="text-stone-800 font-medium">Capítulo 1: La inflamación y tus articulaciones</span>
                  <span className="text-stone-400 italic">12</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-50 pb-2">
                  <span className="text-stone-800 font-medium expressive text-[#420b58]">Capítulo 2: Superalimentos para la Artritis</span>
                  <span className="text-stone-400 italic">28</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-50 pb-2">
                  <span className="text-stone-800 font-medium">Capítulo 3: Recetario Antiinflamatorio</span>
                  <span className="text-stone-400 italic">45</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-50 pb-2">
                  <span className="text-stone-800 font-medium">Capítulo 4: Rutinas de Movilidad</span>
                  <span className="text-stone-400 italic">85</span>
                </div>
              </div>
            </div>

            {/* Page 2: Recipe 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#420b58]" />
                  <span className="font-bold text-[#420b58] text-xs uppercase tracking-wider">ALMUERZO: Salmón al Limón y Cúrcuma</span>
                </div>
                <span className="text-stone-400 text-xs">PÁGINA 42</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-stone-800 serif italic expressive">Ingredientes Clave</h4>
                  <ul className="space-y-2 text-sm text-stone-600 font-light">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div> 2 filetes de salmón fresco</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div> 1 cda de Cúrcuma de alta calidad</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div> Zumo de medio limón</li>
                  </ul>
                  <p className="text-xs italic text-stone-500 border-t pt-4">Tip: El omega-3 es el <span className="font-bold text-[#420b58]">lubricante natural</span>.</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600" 
                  alt="Salmón saludable" 
                  className="rounded-lg shadow-md object-cover h-full w-full min-h-[160px]"
                />
              </div>
            </div>

            {/* Page 3: Recipe 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-stone-200">
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#420b58]" />
                  <span className="font-bold text-[#420b58] text-xs uppercase tracking-wider">DESAYUNO: Pudding de Chía</span>
                </div>
                <span className="text-stone-400 text-xs">PÁGINA 48</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                <div className="relative order-2 md:order-1">
                   <img 
                    src="https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&q=80&w=600" 
                    alt="Pudding de chía" 
                    className="rounded-lg shadow-md object-cover h-full w-full min-h-[160px]"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <h4 className="text-xl font-bold text-stone-800 serif expressive text-gradient">Energía Vital</h4>
                  <ul className="space-y-2 text-sm text-stone-600 font-light">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div> 3 cdas de chía</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div> Puñado de arándanos</li>
                  </ul>
                  <p className="text-sm text-stone-600 font-light leading-relaxed">
                    Ideal para reducir la <span className="italic text-[#420b58]">rigidez matutina</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA in Modal */}
            <div className="text-center py-12 px-8 bg-purple-900 text-white rounded-3xl">
              <h4 className="text-3xl font-bold mb-4 serif italic expressive">¿Te ha gustado lo que has visto?</h4>
              <p className="mb-8 text-purple-100 max-w-lg mx-auto font-light">
                Estas son solo 5 páginas de las 120 que incluye la edición premium. ¡Consigue el resto ahora y empieza a sentirte mejor!
              </p>
              <div className="flex flex-col items-center gap-6">
                <a 
                  href="https://go.hotmart.com/F103807521Y" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#420b58] px-12 py-5 rounded-2xl font-bold text-xl hover:bg-stone-100 transition-all shadow-xl"
                >
                  Sí, quiero empezar a <span className="expressive text-gradient">sentirme mejor</span> <ArrowRight size={22} />
                </a>
                
                <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl border border-white/10">
                   <div className="w-10 h-10 rounded-full border-2 border-yellow-500 flex flex-col items-center justify-center text-yellow-500 scale-90">
                       <span className="text-[6px] font-black leading-none uppercase">7 Días</span>
                       <ShieldCheck size={14} className="my-0.5" />
                       <span className="text-[6px] font-black leading-none uppercase">Garantía</span>
                    </div>
                    <p className="text-xs text-purple-100 font-bold uppercase tracking-widest">Devolución garantizada en 7 días</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;