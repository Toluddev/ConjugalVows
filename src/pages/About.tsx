
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FoundersSection from '../components/FoundersSection';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        {/* Hero Section with smaller logo */}
        <HeroSection 
          videoSrc="https://player.vimeo.com/progressive_redirect/playback/825219251/rendition/720p/file.mp4?loc=external&signature=4e6295bdd3af0520e6f8a4a45d072a982610579d1618ec7a7575c3550af946dd" 
          logoLarge={false}
        />
        
        {/* About Content */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-white text-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">Our Story</h2>
            
            <div className="prose prose-lg mx-auto">
              <p>
                Conjugal Vows was founded with a simple yet powerful mission: to create cinematic wedding films that 
                capture the authentic emotions and unique stories of each couple we work with. We believe that your 
                wedding film should be more than just a documentation of events—it should be a piece of art that 
                transports you back to those precious moments every time you watch it.
              </p>
              
              <p>
                Our approach is rooted in a deep appreciation for storytelling, cinematography, and the beautiful 
                complexity of human relationships. We don't just film weddings; we craft visual narratives that 
                celebrate love in its most authentic form.
              </p>
              
              <p>
                Beyond our work with couples, we're passionate about elevating the art of wedding filmmaking. 
                Through education and community-building, we aim to inspire the next generation of filmmakers 
                to approach their craft with creativity, intentionality, and excellence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Founders Section */}
        <FoundersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
