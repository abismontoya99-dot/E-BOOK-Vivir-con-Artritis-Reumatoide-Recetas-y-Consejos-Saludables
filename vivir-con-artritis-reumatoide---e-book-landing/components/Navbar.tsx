import React, { useState, useEffect } from 'react';
import { BookOpen, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
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

          <div className="flex items-center">
            <a 
              href="https://go.hotmart.com/F103807521Y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-xl font-bold hover:bg-emerald-500 transition-all shadow-xl hover:scale-105 active:scale-95 text-sm md:text-base"
            >
              <ShoppingCart size={18} className="hidden md:block" /> Comprar E-book
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;