
import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2 rounded-xl shadow-lg">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-none tracking-tight ${scrolled ? 'text-stone-900' : 'text-white'}`}>
                Artritis Reumatoide
              </span>
              <span className={`text-[10px] uppercase tracking-widest font-bold ${scrolled ? 'text-emerald-600' : 'text-emerald-400'}`}>
                Vida & Salud
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {['Inicio', 'Contenido', 'Recetas', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase() === 'faq' ? 'faq' : item.toLowerCase()}`} 
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${scrolled ? 'text-stone-600 hover:text-emerald-600' : 'text-stone-200 hover:text-white'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://go.hotmart.com/F103807521Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-500 transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <ShoppingCart size={18} /> Comprar
            </a>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-xl transition-colors ${scrolled ? 'text-stone-900 hover:bg-stone-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-stone-900 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
            <X size={32} />
          </button>
          <div className="space-y-8 text-center">
            {['Inicio', 'Contenido', 'Recetas', 'FAQ'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase() === 'faq' ? 'faq' : item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="block text-4xl font-bold text-white hover:text-emerald-400 transition-colors serif"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <a 
              href="https://go.hotmart.com/F103807521Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white px-6 py-5 rounded-2xl font-bold text-xl text-center block shadow-2xl"
            >
              Comprar E-book (7 días garantía)
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
