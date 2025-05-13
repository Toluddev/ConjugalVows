
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import LuxurySection from '../components/LuxurySection';
import TestimonialSection from '../components/TestimonialSection';

const Experience = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        {/* Hero Section with smaller logo */}
        <HeroSection 
          videoSrc="https://player.vimeo.com/progressive_redirect/playback/821680612/rendition/720p/file.mp4?loc=external&signature=99acb0cc19ef1e0cfad9e0b90e29e2cff8053bd4f9d9836ce48c99b7d2dd1b9e" 
          logoLarge={false}
        />
        
        {/* Portfolio Grid */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-white text-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Featured Films</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Film Item 1 */}
              <div className="group">
                <div className="aspect-video relative overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Wedding Film" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white bg-opacity-90 rounded-full p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2">Emma & James</h3>
                <p className="text-gray-600">Tuscany, Italy</p>
              </div>
              
              {/* Film Item 2 */}
              <div className="group">
                <div className="aspect-video relative overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1511285560929-80b456951857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                    alt="Wedding Film" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white bg-opacity-90 rounded-full p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2">Sophia & Michael</h3>
                <p className="text-gray-600">Santorini, Greece</p>
              </div>
              
              {/* Film Item 3 */}
              <div className="group">
                <div className="aspect-video relative overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Wedding Film" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white bg-opacity-90 rounded-full p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2">Olivia & William</h3>
                <p className="text-gray-600">Lake Como, Italy</p>
              </div>
              
              {/* Film Item 4 */}
              <div className="group">
                <div className="aspect-video relative overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1511285560929-80b456951857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                    alt="Wedding Film" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white bg-opacity-90 rounded-full p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2">Isabella & Alexander</h3>
                <p className="text-gray-600">Barcelona, Spain</p>
              </div>
            </div>
            
            <div className="text-center">
              <button className="elegant-button bg-white text-black border-black hover:bg-black hover:text-white">
                VIEW ALL FILMS
              </button>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <TestimonialSection />
        
        {/* Luxury Section */}
        <LuxurySection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Experience;
