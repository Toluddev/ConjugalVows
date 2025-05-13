
import React from 'react';
import { Link } from 'react-router-dom';

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white text-black">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <p className="font-italianno text-4xl md:text-5xl text-black mb-2">CV</p>
        </div>
        
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-2">THE <em>RE-IMAGINED STANDARD</em> IN</h2>
        <h3 className="font-serif text-3xl md:text-4xl tracking-wide uppercase mb-12">QUALITY WEDDING FILMMAKING</h3>
        
        <div className="mb-12 flex justify-center">
          <img 
            src="/lovable-uploads/front-view-bride-groom-posing-outdoors.jpg" 
            alt="Luxury Wedding" 
            className="w-full max-w-[800px] h-auto object-cover rounded-lg"
          />
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto text-center">
        Conjugal Vows is committed to producing stunning wedding films for couples who want to celebrate their love 
        with elegance and adventure. From capturing intimate moments to documenting grand love stories in 
        breathtaking destinations like Venice, we create timeless films for those who value style, emotion, and 
        unforgettable memories.
        </p>
        
        <Link to="/about" className="inline-block border-b border-black text-black uppercase tracking-widest text-sm hover:text-gray-600 transition-colors">
          LEARN MORE
        </Link>
      </div>
    </section>
  );
};

export default IntroSection;
