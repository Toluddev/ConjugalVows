
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { toast } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

const Contact = () => {
  const [userType, setUserType] = useState<'couples' | 'planners'>('couples');
  const [formData, setFormData] = useState({
    // Common fields
    name: '',
    email: '',
    
    // Couples specific fields
    partnerName: '',
    instagramHandle: '',
    projectDate: '',
    location: '',
    eventType: '',
    weddingPlanner: '',
    weddingPhotographer: '',
    videographyBudget: '',
    weddingDescription: '',
    howDidYouHear: '',
    referredBy: '',
    bookingProcess: '',
    projectDetails: '',
    
    // Planners specific fields
    companyName: '',
    typeOfEvent: '',
    eventDate: '',
    budget: '',
    additionalInfo: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
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
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        partnerName: '',
        instagramHandle: '',
        projectDate: '',
        location: '',
        eventType: '',
        weddingPlanner: '',
        weddingPhotographer: '',
        videographyBudget: '',
        weddingDescription: '',
        howDidYouHear: '',
        referredBy: '',
        bookingProcess: '',
        projectDetails: '',
        companyName: '',
        typeOfEvent: '',
        eventDate: '',
        budget: '',
        additionalInfo: ''
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
          <div className="max-w-4xl mx-auto">
            {/* Toggle Buttons */}
            <div className="flex justify-center mb-16">
              <div className="flex border border-gray-300">
                <button
                  onClick={() => setUserType('couples')}
                  className={`px-8 py-3 text-sm font-medium transition-colors ${
                    userType === 'couples' 
                      ? 'bg-gray-200 text-black' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  FOR COUPLES
                </button>
                <button
                  onClick={() => setUserType('planners')}
                  className={`px-8 py-3 text-sm font-medium transition-colors border-l border-gray-300 ${
                    userType === 'planners' 
                      ? 'bg-gray-200 text-black' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  FOR PLANNERS
                </button>
              </div>
            </div>
            
            {/* Centered Form */}
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Common Fields */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {userType === 'couples' ? 'Your Full Name' : 'Your Name'} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                    placeholder="Your name here  "
                    required
                  />
                </div>

                {/* Couples specific fields */}
                {userType === 'couples' && (
                  <>
                    <div>
                      <label htmlFor="partnerName" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Partner's Full Name
                      </label>
                      <Input
                        type="text"
                        id="partnerName"
                        value={formData.partnerName}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-grey-300"
                        placeholder="John Smith"
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
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        placeholder="E.g. myemail@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="instagramHandle" className="block text-sm font-medium text-gray-700 mb-1">
                        Instagram Handle <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        id="instagramHandle"
                        value={formData.instagramHandle}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="projectDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Project date
                      </label>
                      <Input
                        type="text"
                        id="projectDate"
                        value={formData.projectDate}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        placeholder="MM/DD/YY"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location | Venue
                      </label>
                      <Input
                        type="text"
                        id="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        placeholder="Amalfi Coast, Italy"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        What type of event are you planning? <span className="text-red-500">*</span>
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('eventType', value)}>
                        <SelectTrigger className="w-full bg-white border-gray-300 border p-3">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem  value="wedding">Wedding</SelectItem>
                          <SelectItem value="elopement">Elopement</SelectItem>
                          <SelectItem value="engagement">Engagement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="weddingPlanner" className="block text-sm font-medium text-gray-700 mb-1">
                          Wedding Planner?
                        </label>
                        <Input
                          type="text"
                          id="weddingPlanner"
                          value={formData.weddingPlanner}
                          onChange={handleInputChange}
                          className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                          placeholder="Name and Instagram Handle"
                        />
                      </div>
                      <div>
                        <label htmlFor="weddingPhotographer" className="block text-sm font-medium text-gray-700 mb-1">
                          Wedding Photographer
                        </label>
                        <Input
                          type="text"
                          id="weddingPhotographer"
                          value={formData.weddingPhotographer}
                          onChange={handleInputChange}
                          className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                          placeholder="Name and Instagram Handle"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        What is your videography budget? <span className="text-red-500">*</span>
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('videographyBudget', value)}>
                        <SelectTrigger className="w-full bg-white border-gray-300 border p-3">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-15k">$10,000 - $15,000</SelectItem>
                          <SelectItem value="15k-plus">$15,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="weddingDescription" className="block text-sm font-medium text-gray-700 mb-1">
                        Tell us more about the wedding you are planning! We want to hear everything! <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="weddingDescription"
                        rows={5}
                        value={formData.weddingDescription}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('howDidYouHear', value)}>
                        <SelectTrigger className="w-full bg-white border-gray-300 border p-3">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="google">Google</SelectItem>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="referredBy" className="block text-sm font-medium text-gray-700 mb-1">
                        If you were referred to us by another Vendor, tell us who to thank!
                      </label>
                      <Input
                        type="text"
                        id="referredBy"
                        value={formData.referredBy}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        placeholder="You were referred by my photographer, Kortney!"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Where are you at in the process of booking a videographer? <span className="text-red-500">*</span>
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('bookingProcess', value)}>
                        <SelectTrigger className="w-full bg-white border-gray-300 border p-3">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="just-starting">Just starting to look</SelectItem>
                          <SelectItem value="researching">Actively researching</SelectItem>
                          <SelectItem value="ready-to-book">Ready to book</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">
                        Tell me more about this project
                      </label>
                      <Textarea
                        id="projectDetails"
                        rows={4}
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                      />
                    </div>
                  </>
                )}

                {/* Planners specific fields */}
                {userType === 'planners' && (
                  <>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
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
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        placeholder="E.g. myemail@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type of Event <span className="text-red-500">*</span>
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('typeOfEvent', value)}>
                        <SelectTrigger className="w-full bg-white border-gray-300 border p-3">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="elopement">Elopement</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location & Venue
                      </label>
                      <Input
                        type="text"
                        id="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        placeholder="Amalfi Coast, Italy"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Event date
                      </label>
                      <Input
                        type="text"
                        id="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        placeholder="MM/DD/YY"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Budget for Wedding Videography <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        id="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        placeholder="USD"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <Textarea
                        id="additionalInfo"
                        rows={5}
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        className="w-full bg-white border-gray-300 border p-3 focus:ring-0 focus:border-black"
                        placeholder="Anything that will help us put together a proposal for you! How many days/hours of coverage, etc"
                      />
                    </div>
                  </>
                )}
                
                <button 
                  type="submit" 
                  className="elegant-button bg-black text-white hover:bg-white hover:text-black border border-black transition-colors duration-300 px-6 py-3 w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND'}
                </button>
              </form>
              
              {/* Contact Information Section */}
              <div className="mt-20 pt-20 border-t border-gray-200">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">LOCATION</p>
                    <p className="text-black font-medium">
                      Runaway Vows Film House<br />
                      Luxury Wedding Videography
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 text-sm mb-2">TAGLINE</p>
                    <p className="text-black font-medium italic">
                      Videography is poetry
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 text-sm mb-2">CONTACT</p>
                    <p className="text-black font-medium">
                      contact@runawayvows.com<br />
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
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
