
import React from 'react';

const LuxurySection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white text-black px-6 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-italianno text-5xl md:text-6xl text-black mb-4">Timeless Luxury</p>
          <h2 className="font-serif text-xl md:text-2xl uppercase tracking-wider mb-2">CAPTURING YOUR STORY WITH AN</h2>
          <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wider">UNCOMPROMISING DEDICATION TO QUALITY.</h3>
        </div>
        
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          From your initial inquiry to the delivery of your wedding film, Conjugal Vows is committed to excellence 
          at every step. For those who chase the lifestyle of dreams, value connections between family and 
          friends, and live life celebrating, Conjugal Vows is the film house for you.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-video relative">
            <img 
              src="/lovable-uploads/low-angle-people-celebrating-wedding-nature.jpg" 
              alt="Luxury Wedding Venue" 
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-3 px-4 flex justify-between items-center">
              <span className="text-white text-sm">MASON & JEFF - ASPEN, CO</span>
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div> */}
          </div>
          
          <div className="aspect-video">
            <img 
              src="/lovable-uploads/people-enjoying-burnt-orange-wedding.jpg" 
              alt="Wedding Couple" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxurySection;
