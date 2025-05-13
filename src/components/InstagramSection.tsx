
import React from 'react';

const InstagramSection: React.FC = () => {
  const images = [
    "/lovable-uploads/people-enjoying-burnt-orange-wedding.jpg",
    "/lovable-uploads/low-angle-people-celebrating-wedding-nature.jpg",
    "/lovable-uploads/michael-guertin-Qz0JbU7zCPM-unsplash.jpg",
    "/lovable-uploads/beautiful-woman-long-red-dress-walks-around-city-with-her-husband.jpg",
    "/lovable-uploads/front-view-bride-groom-posing-outdoors.jpg",
    "/lovable-uploads/full-shot-couple-posing-wedding.jpg",
    "/lovable-uploads/romantic-black-couple-sitting-restaurant-wearing-elegant-clothes.jpg",
    "/lovable-uploads/lesbian-couple-celebrating-their-wedding-day-with-guests-friends.jpg"
  ];

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {images.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img 
                  src={img}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-95 py-8 px-10 text-center">
              <a 
                href="https://instagram.com/conjugalvows" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-300"
              >
                <p className="font-serif text-black uppercase tracking-widest text-sm mb-4">JOIN OUR ADVENTURES</p>
                <p className="font-serif text-black uppercase tracking-widest text-sm">ON INSTAGRAM</p>
                <div className="w-16 h-0.5 bg-black mx-auto mt-4"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
