
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { toast } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    weddingDate: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This would be replaced with your actual API endpoint for sending emails
      // For demo purposes, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        weddingDate: '',
        message: ''
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        {/* Hero Section with smaller logo */}
        <HeroSection 
          videoSrc="https://player.vimeo.com/progressive_redirect/playback/821680631/rendition/720p/file.mp4?loc=external&signature=68b0fb939c9642eba5c8cf63b233eb7e407d7b1bd84e0827f52599fcde77ae11" 
          logoLarge={false}
        />
        
        {/* Contact Content */}
        <section className="py-20 md:py-32 px-6 md:px-12 bg-white text-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">Get In Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="font-serif text-2xl mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:toluwalaseoludipe7@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                      conjugalvows@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-black transition-colors">
                      +(234) 567-890-010
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-1">Instagram</p>
                    <a href="https://instagram.com/ruvows" className="text-gray-600 hover:text-black transition-colors">
                      @conjugalows
                    </a>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-serif text-2xl mb-6">Office</h3>
                  <address className="text-gray-600 not-italic">
                    123 Sunset lane<br />
                    Lagos, PMB 90001<br />
                    Nigeria
                  </address>
                </div>
              </div>
              
              <div>
                <h3 className="font-serif text-2xl mb-6">Send a Message</h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 bg-white border p-3 focus:ring-0 focus:border-black"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 bg-white border p-3 focus:ring-0 focus:border-gray-300"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="weddingDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Wedding Date
                    </label>
                    <Input
                      type="date"
                      id="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleInputChange}
                      className="w-full border-gray-300  bg-white border p-3 focus:ring-0 focus:border-gray-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 bg-white border p-3 focus:ring-0 focus:border-gray-300"
                      placeholder="Tell us about your wedding plans"
                      required
                    ></Textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="elegant-button bg-black text-white hover:bg-white hover:text-black border border-black transition-colors duration-300 px-6 py-3 w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
