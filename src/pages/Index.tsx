
import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import TestimonialSection from '../components/TestimonialSection';
import FoundersSection from '../components/FoundersSection';
import LuxurySection from '../components/LuxurySection';
import InstagramSection from '../components/InstagramSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroSection videoSrc="https://player.vimeo.com/progressive_redirect/playback/821680596/rendition/720p/file.mp4?loc=external&signature=0ed1beed4ef0b5997b504be234bd1607477cd7f54c41220743786385406bbf49" />
        
        {/* Introduction Section */}
        <IntroSection />
        
        {/* Testimonial Section */}
        <TestimonialSection />
        
        {/* Founders Section */}
        <FoundersSection />
        
        {/* Luxury Section */}
        <LuxurySection />
        
        {/* Instagram Section */}
        <InstagramSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
