import React, { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'glass py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-[#420b58] p-2.5 rounded-2xl shadow-lg transform transition-transform hover:rotate-3">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-none tracking-tight serif ${scrolled ? 'text-[#420b58]' : 'text-white'}`}>
                Artritis <span className="text-purple-300 italic">Salud</span>
              </span>
              <span className={`text-[9px] uppercase tracking-[0.3em] font-black ${scrolled ? 'text-[#420b58]' : 'text-purple-200/90'}`}>
                Edición Premium
              </span>
            </div>
          </div>

          {/* Botón de compra eliminado a petición del usuario */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;