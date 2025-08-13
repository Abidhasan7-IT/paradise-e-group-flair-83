import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';

const slides = [
  {
    id: 1,
    image: heroSlide1,
    title: "PROFESSIONAL & MODERN",
    subtitle: "We Build Excellence",
    description: "Leading corporate solutions for the modern world",
  },
  {
    id: 2,
    image: heroSlide2,
    title: "INNOVATIVE & RELIABLE",
    subtitle: "We Deliver Success",
    description: "Transforming businesses with cutting-edge technology",
  },
  {
    id: 3,
    image: heroSlide3,
    title: "TRUSTED & PROGRESSIVE",
    subtitle: "We Shape Future",
    description: "Building tomorrow's solutions today",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 100);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 100);
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'var(--hero-gradient)' }}
          />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-6">
          {/* Slide Number */}
          <div className={`text-6xl font-light mb-4 opacity-30 ${!isTransitioning ? 'slide-in-left' : ''}`}>
            {String(slides[currentSlide].id).padStart(2, '0')}
          </div>

          {/* Main Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light mb-6 text-glow ${!isTransitioning ? 'fade-in-up' : ''}`}>
            {slides[currentSlide].title}
          </h1>

          {/* Subtitle */}
          <h2 className={`text-2xl md:text-4xl lg:text-5xl font-extralight mb-8 ${!isTransitioning ? 'slide-in-right' : ''}`}>
            {slides[currentSlide].subtitle}
          </h2>

          {/* Description */}
          <p className={`text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto opacity-90 ${!isTransitioning ? 'fade-in-up' : ''}`}>
            {slides[currentSlide].description}
          </p>

          {/* CTA Button */}
          <Button 
            variant="outline" 
            size="lg"
            className={`border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 ${!isTransitioning ? 'fade-in-up' : ''}`}
          >
            More About Us
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20 w-12 h-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20 w-12 h-12"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Social Media Links - Right Side */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-4">
        <div className="text-white text-sm font-light tracking-wider transform rotate-90 origin-center mb-8">
          Instagram
        </div>
        <div className="text-white text-sm font-light tracking-wider transform rotate-90 origin-center mb-8">
          Twitter
        </div>
        <div className="text-white text-sm font-light tracking-wider transform rotate-90 origin-center mb-8">
          Facebook
        </div>
      </div>
    </div>
  );
};