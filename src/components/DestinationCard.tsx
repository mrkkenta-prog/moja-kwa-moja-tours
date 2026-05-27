import { useState, useEffect } from 'react';
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react';
import { Destination } from '../data/constants';

interface DestinationCardProps {
  destination: Destination;
  onClick: () => void;
  index: number;
}

export default function DestinationCard({ destination, onClick, index }: DestinationCardProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((p) => (p + 1) % destination.images.length);
    }, 4500 + index * 400);
    return () => clearInterval(timer);
  }, [destination.images.length, index]);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-safari-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-400 hover:-translate-y-1"
    >
      {/* Image Slideshow */}
      <div className="relative aspect-[16/10] overflow-hidden bg-safari-sand/20">
        {destination.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${destination.name} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === imgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => i === 0 && setIsLoaded(true)}
          />
        ))}
        
        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-safari-sand/30 animate-pulse" />
        )}
        
        <div className="absolute inset-0 gradient-safari-dark opacity-50 group-hover:opacity-40 transition-opacity duration-400" />
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-safari-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="text-safari-gold font-semibold text-xs">{destination.price}</span>
        </div>

        {/* Location */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <MapPin size={12} className="text-safari-gold" />
          <span className="text-white/75 text-[10px] tracking-wider uppercase">{destination.name}</span>
        </div>

        {/* Slide Dots */}
        <div className="absolute bottom-3 right-3 flex gap-1">
          {destination.images.map((_, i) => (
            <div
              key={i}
              className={`h-[3px] rounded-full transition-all duration-400 ${
                i === imgIndex ? 'w-4 bg-safari-gold' : 'w-1 bg-white/35'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-safari-orange text-[10px] tracking-[0.18em] uppercase font-medium">
          {destination.tagline}
        </span>
        <h3
          className="text-lg md:text-xl font-bold text-safari-charcoal mt-1.5 mb-2 group-hover:text-safari-orange transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {destination.name}
        </h3>
        <p className="text-safari-brown/65 text-sm leading-relaxed line-clamp-3 mb-3">
          {destination.description}
        </p>

        <div className="flex items-center gap-3 text-[10px] text-safari-brown/50 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {destination.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} />
            {destination.groupSize}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-safari-brown/45">{destination.priceNote}</span>
          <span className="flex items-center gap-1.5 text-safari-gold font-medium text-xs group-hover:gap-2.5 transition-all duration-300">
            Explore <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}
