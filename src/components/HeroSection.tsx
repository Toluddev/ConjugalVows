import bgvideo from '/lovable-uploads/bgvideo.mp4'
import React from 'react';

interface HeroSectionProps {
  videoSrc: string;
  logoLarge?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ videoSrc, logoLarge = true }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="video-bg"
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="overlay"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-6">
        <p className="italic-script mb-2">ESTD 2025</p>
        
        <h1
            className={`font-serif text-white font-light tracking-wider mb-6 
              ${logoLarge ? 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'}`}
          >
            CONJUGATE <br /> VOWS
        </h1>
        
        <h2 className="elegant-heading text-xl md:text-2xl mb-4">FILM MAKER</h2>
        
        <p className="text-gray-200 text-sm md:text-base tracking-wider uppercase mb-8 max-w-2xl mx-auto">
        Educate. Collaborate. Celebrate.
          <br />FOR LUXURY WEDDING FILMMAKING
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
