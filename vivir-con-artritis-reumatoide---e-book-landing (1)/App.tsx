
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import FeatureSection from './components/FeatureSection.tsx';
import GallerySection from './components/GallerySection.tsx';
import VideoSection from './components/VideoSection.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Newsletter from './components/Newsletter.tsx';
import Footer from './components/Footer.tsx';
import PreviewModal from './components/PreviewModal.tsx';

const App: React.FC = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero onOpenPreview={() => setIsPreviewOpen(true)} />
        <FeatureSection />
        <GallerySection />
        <VideoSection />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <PreviewModal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </div>
  );
};

export default App;
