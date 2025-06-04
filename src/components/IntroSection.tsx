
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white text-black">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <p className="font-italianno text-4xl md:text-5xl text-black mb-2">CV</p>
        </div>
        
        <h2 data-aos="fade-down"  className="font-serif text-2xl md:text-3xl tracking-wide mb-2"> <em>REDEFINING  THE STANDARD</em></h2>
        <h3 data-aos="fade-down"  className="font-serif text-3xl md:text-4xl tracking-wide uppercase mb-12">ONE WEDDING  FILM AT A TIME</h3>
        
        <div data-aos="fade-up"  className="mb-12 flex justify-center">
          <img 
            src="/lovable-uploads/front-view-bride-groom-posing-outdoors.jpg" 
            alt="Luxury Wedding" 
            className="w-full max-w-[800px] h-auto object-cover rounded-lg"
          />
        </div>
        
        <p className="text-gray-900  leading-relaxed mb-10 max-w-3xl mx-auto text-center text-[18px] sm:text-[15px] md:text-[18px] lg:text-[18px] ">
          We're visual storytellers who specialize in capturing the intersection of love, 
          style, and culture. Our approach goes beyond traditional wedding documentation 
          to create cinematic experiences that reflect not just your special day,<br /> but the essence of your
          relationship itself.
        </p>
        
        <Link to="/about" className="inline-block border-b border-black text-black uppercase tracking-widest text-sm hover:text-gray-600 transition-colors">
          LEARN MORE
          
        </Link>
      </div>
    </section>
  );
};

export default IntroSection;
