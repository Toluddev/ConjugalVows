
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/Conjugal Vows_2.jpg-1.PNG" 
              alt="Conjugal Vows Logo" 
              className="h-[150px] w-[200px] " 
            />
          </div>
          
          <p className="text-white text-center max-w-2xl mb-8">
            An international film house for luxury weddings and fostering a 
            community of learning and inspiration for filmmakers.
          </p>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300">
              <Instagram size={20} />
            </a>
            <a href="mailto:info@conjugalvows.com" className="text-white hover:text-gray-300">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Conjugal Vows Film House. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
