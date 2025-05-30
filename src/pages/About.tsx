
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
            <h2 data-aos="fade-right"  className="font-serif text-4xl md:text-5xl text-center mb-12">ABOUT</h2>
            
            <div className="prose prose-lg mx-auto">
              <p>
              We're visual storytellers who specialize in capturing the intersection of love, style, and culture. Our approach goes beyond traditional
              wedding documentation to create cinematic experiences that reflect not just your 
              special day, but the essence of your relationship itself.<br />
              <div className="w-20 h-0.5 bg-black mt-3 mb-5"></div>
              <em>At Conjugal Vows, we believe every couple has a narrative worth celebrating. </em>
              <br />
              </p>
              <div className="w-20 h-0.5 bg-black mt-3 mb-5"></div>
              <p>
              Every couple brings their own rhythm, their own aesthetic, their own way of moving through
              the world together. We take time to understand what makes your love story distinctive.
              </p>
              
              <p>
              From our first meeting to the moment you receive your completed films, we're dedicated to 
              being present, professional, and genuinely excited about bringing your vision to life.
              </p>
              <p>
              Because at the end of the day, we're not just
               capturing your wedding. We're preserving the beginning of your forever.
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
