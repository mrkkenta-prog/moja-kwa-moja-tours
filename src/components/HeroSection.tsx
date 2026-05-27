import { useState, useEffect, useCallback } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { HERO_SLIDES } from '../data/constants';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((p) => (p + 1) % HERO_SLIDES.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 500);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 5500);
    return () => clearInterval(timer);
  }, [goToNext]);

  const slide = HERO_SLIDES[current];

  const handleSlideClick = (index: number) => {
    if (index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover animate-slow-pan"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 overlay-cinematic" />
      <div className="absolute inset-0 gradient-safari-dark" />
      
      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ boxShadow: 'inset 0 0 100px rgba(0,0,0,0.3)' }} 
      />
      
      {/* Maasai Pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 maasai-border-thick" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 md:px-8 text-center">
        <div
          className={`transition-all duration-500 ease-out ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={13} className="text-safari-gold" />
            <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium">
              {slide.location}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] mb-4 text-shadow-hero max-w-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {slide.title}
          </h1>

          <p
            className="text-base md:text-lg lg:text-xl text-safari-cream/70 max-w-2xl mx-auto mb-8 leading-relaxed text-shadow-soft"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {slide.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onNavigate('destinations')}
              className="btn-safari bg-safari-gold text-safari-black px-8 py-3 text-[11px] font-semibold tracking-[0.12em] uppercase rounded hover:bg-white transition-colors duration-300 cursor-pointer"
            >
              Explore Our Safaris
            </button>
            <button
              onClick={() => onNavigate('safari-timeline')}
              className="btn-safari border border-safari-cream/30 text-safari-cream px-8 py-3 text-[11px] font-semibold tracking-[0.12em] uppercase rounded hover:bg-safari-cream/10 transition-colors duration-300 cursor-pointer"
            >
              A Day on Safari
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSlideClick(i)}
              className={`h-[3px] rounded-full transition-all duration-400 cursor-pointer ${
                i === current ? 'w-7 bg-safari-gold' : 'w-2.5 bg-white/25 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down */}
        <button
          onClick={() => onNavigate('intro')}
          className="absolute bottom-22 md:bottom-20 left-1/2 -translate-x-1/2 text-safari-cream/35 hover:text-safari-gold transition-colors duration-300 cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown size={26} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
