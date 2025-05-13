
import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <img 
        src="/lovable-uploads/beautiful-seaside-view-with-ocean.jpg" 
        alt="Ocean View" 
        className="absolute w-full h-full object-cover z-0"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-6 mx-auto">
        <p className="italic-script mb-6">Tolu & Eniola</p>
        
        <blockquote className="mb-8">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-serif mb-4">
            "I'M NOT EVEN SURE WHERE TO BEGIN. THEIR WORK 
            TRULY SPEAKS FOR ITSELF. I HAVE NEVER FELT MORE 
            COMFORTABLE IN FRONT OF THE CAMERA. THE VIDEO 
            THEY CREATED...
          </p>
          <p className="text-white text-xl md:text-2xl leading-relaxed font-serif italic mb-4">
            IT WAS A MASTERPIECE. IT WAS SO 
            PERSONAL TO OUR STORY, OUR RELATIONSHIP, AND 
            JOURNEY.
          </p>
          <p className="text-white text-xl md:text-2xl leading-relaxed font-serif">
            I CANNOT RECOMMEND THEM ENOUGH."
          </p>
        </blockquote>
        
        <button className="elegant-button rounded-[8px]">
          WATCH THE FULL FILM
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
