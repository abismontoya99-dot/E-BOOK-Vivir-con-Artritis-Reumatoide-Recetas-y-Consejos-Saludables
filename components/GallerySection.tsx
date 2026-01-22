import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=600"
];

const GallerySection: React.FC = () => {
  return (
    <section id="recetas" className="py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-stone-800 serif">Recetas que <span className="text-gradient underline italic">sanan</span></h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl shadow-md group">
              <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Receta" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;