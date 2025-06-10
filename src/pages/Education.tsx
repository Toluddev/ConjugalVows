
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Education = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        {/* Hero Section with smaller logo */}
        <HeroSection 
          videoSrc="https://player.vimeo.com/progressive_redirect/playback/821680622/rendition/720p/file.mp4?loc=external&signature=36a3a3a5db372a97081c29e612ef2b4af93be7cf9d41da1ba1b68f80e1a7c995" 
          logoLarge={false}
        />
        
        {/* Education Content */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-white text-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Education</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
              {/* Workshop 1 */}
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551092868-2c62e1e9af37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Workshop" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-2xl mb-2">Destination Wedding Masterclass</h3>
                <p className="text-gray-600 mb-4">Learn how to shoot and edit stunning destination wedding films.</p>
                <a href="#" className="font-serif underline">Learn More</a>
              </div>
              
              {/* Workshop 2 */}
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Workshop" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-2xl mb-2">Cinematic Storytelling</h3>
                <p className="text-gray-600 mb-4">Master the art of narrative-driven wedding films.</p>
                <a href="#" className="font-serif underline">Learn More</a>
              </div>
              
              {/* Workshop 3 */}
              <div className="group">
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                    alt="Workshop" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-2xl mb-2">Business of Wedding Filmmaking</h3>
                <p className="text-gray-600 mb-4">Build a sustainable and profitable film business.</p>
                <a href="#" className="font-serif underline">Learn More</a>
              </div>
            </div>
            
            <div className="bg-gray-100 p-10 md:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="font-serif text-3xl mb-6">Mentorship Program</h3>
                <p className="text-gray-700 mb-8">
                  Join our exclusive mentorship program and receive personalized guidance to elevate your 
                  filmmaking skills and grow your business. Limited spots available.
                </p>
                <button className="elegant-button bg-black text-white border-black hover:bg-white hover:text-black">
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
