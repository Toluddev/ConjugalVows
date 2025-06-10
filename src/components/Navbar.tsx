
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Mail, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full px-6 md:px-12 py-6 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-50 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/" className="text-white">
          <img src="/lovable-uploads/Conjugal Vows_2.jpg-1.PNG" alt="Logo" className="h-20 w-25" />
        </Link>
        
        {/* Navigation links in the center - hidden on mobile */}
        <div className="hidden md:flex justify-center flex-1">
          <nav className="flex space-x-8 items-center">
            <Link to="/" className={location.pathname === '/' ? 'active-nav-link' : 'nav-link'}>
              HOME
            </Link>
            {/* <Link to="/experience" className={location.pathname === '/experience' ? 'active-nav-link' : 'nav-link'}>
              EXPERIENCE
            </Link> */}
            <Link to="/about" className={location.pathname === '/about' ? 'active-nav-link' : 'nav-link'}>
              ABOUT
            </Link>
            {/* <Link to="/education" className={location.pathname === '/education' ? 'active-nav-link' : 'nav-link'}>
              EDUCATION
            </Link> */}
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-nav-link' : 'nav-link'}>
              CONTACT
            </Link>
          </nav>
        </div>
        
        {/* Instagram icon on the right - hidden on mobile */}
        <div className="hidden md:block">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300">
            <Instagram size={25} />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm px-6 py-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className={location.pathname === '/' ? 'active-nav-link' : 'nav-link'} onClick={() => setMobileMenuOpen(false)}>
              HOME
            </Link>
            {/* <Link to="/experience" className={location.pathname === '/experience' ? 'active-nav-link' : 'nav-link'} onClick={() => setMobileMenuOpen(false)}>
              EXPERIENCE
            </Link> */}
            <Link to="/about" className={location.pathname === '/about' ? 'active-nav-link' : 'nav-link'} onClick={() => setMobileMenuOpen(false)}>
              ABOUT
            </Link>
            {/* <Link to="/education" className={location.pathname === '/education' ? 'active-nav-link' : 'nav-link'} onClick={() => setMobileMenuOpen(false)}>
              EDUCATION
            </Link> */}
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-nav-link' : 'nav-link'} onClick={() => setMobileMenuOpen(false)}>
              CONTACT
            </Link>
            <div className="pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-gray-300 inline-flex items-center">
                <Instagram size={18} className="mr-2" /> Instagram
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
