import bgvideo from '/lovable-uploads/bgvideo.mp4'
import React from 'react';

const FoundersSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-white px-6 md:px-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-square">
          <img 
            src="/lovable-uploads/IMG_54F2AB6023F4-1.jpeg" 
            alt="Founder of Conjugal Vows" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="md:pl-8">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">MEET THE <br />FOUNDER</h2>
          <div className="w-20 h-0.5 bg-white mb-8"></div>
          
          <h3 className="text-xl md:text-2xl mb-6 tracking-wider">TOLUWANIMI OLUDIPE</h3>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            Toluwanimi founded Conjugal Vows through a shared 
            passion for storytelling and filmmaking. What began as a 
            collaborative journey <br/>evolved into a platform for capturing 
            adventurous love stories.
          </p>
          
          <button className="elegant-button">
            ABOUT THE TEAM
          </button>
          
          {/* <div className="mt-12">
            <p className="uppercase text-sm tracking-widest text-gray-400 mb-4">Featured In</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <div className="grayscale hover:grayscale-0 transition-all">
                <img src="https://via.placeholder.com/120x40" alt="People Magazine" className="max-h-8" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img src="https://via.placeholder.com/120x40" alt="Wedvibes" className="max-h-8" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img src="https://via.placeholder.com/120x40" alt="Style Me Pretty" className="max-h-8" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img src="https://via.placeholder.com/120x40" alt="Brides" className="max-h-8" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
