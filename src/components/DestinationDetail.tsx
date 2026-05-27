import { useState, useEffect } from 'react';
import { X, Clock, Users, MapPin, Calendar, CheckCircle, ArrowRight, Send, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Destination, generateWhatsAppLink, WHATSAPP_NUMBERS } from '../data/constants';

interface Props {
  destination: Destination;
  onClose: () => void;
}

export default function DestinationDetail({ destination, onClose }: Props) {
  const [imgIndex, setImgIndex] = useState(0);
  const [showBooking, setShowBooking] = useState(false);
  const [form, setForm] = useState({
    name: '',
    destination: destination.name,
    dates: '',
    guests: '',
    requests: '',
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((p) => (p + 1) % destination.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [destination.images.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppLink(form);
    window.open(link, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-safari-black/95 overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-[110] bg-safari-black/50 backdrop-blur-sm p-2.5 rounded-full text-safari-cream hover:text-safari-gold transition-colors cursor-pointer"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Hero Image */}
      <div className="relative h-[45vh] md:h-[60vh] overflow-hidden">
        {destination.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${destination.name} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === imgIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 gradient-safari-dark" />
        <div className="absolute inset-0 overlay-cinematic opacity-35" />
        
        {/* Navigation Arrows */}
        <button
          onClick={() => setImgIndex((p) => (p - 1 + destination.images.length) % destination.images.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-safari-black/35 backdrop-blur-sm p-1.5 rounded-full text-white hover:bg-safari-gold hover:text-safari-black transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setImgIndex((p) => (p + 1) % destination.images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-safari-black/35 backdrop-blur-sm p-1.5 rounded-full text-white hover:bg-safari-gold hover:text-safari-black transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="flex items-center gap-1.5 mb-3">
            <MapPin size={12} className="text-safari-gold" />
            <span className="text-safari-gold text-[10px] tracking-[0.25em] uppercase">{destination.tagline}</span>
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 text-shadow-hero"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {destination.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 md:gap-5 text-xs text-safari-cream/60">
            <span className="flex items-center gap-1.5"><Clock size={13} /> {destination.duration}</span>
            <span className="flex items-center gap-1.5"><Users size={13} /> {destination.groupSize}</span>
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {destination.bestTime}</span>
            <span className="text-safari-gold font-bold text-base">{destination.price}</span>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-6 md:right-12 flex gap-1.5">
          {destination.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setImgIndex(i)}
              className={`h-1 rounded-full transition-all duration-400 cursor-pointer ${
                i === imgIndex ? 'w-6 bg-safari-gold' : 'w-1.5 bg-white/30'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="maasai-border-thick" />

      {/* Content */}
      <div className="max-w-[1000px] mx-auto px-5 md:px-10 py-12 md:py-14">
        {/* Overview */}
        <div className="mb-12">
          <h2
            className="text-xl md:text-2xl text-safari-cream font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Experience
          </h2>
          <p
            className="text-safari-cream/60 text-sm md:text-base leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {destination.longDescription}
          </p>
        </div>

        {/* Highlights & Inclusions */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div className="bg-safari-brown/15 rounded-lg p-6 border border-safari-sand/10">
            <h3
              className="text-lg text-safari-gold font-bold mb-4 flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <Star size={16} /> Highlights
            </h3>
            <ul className="space-y-2">
              {destination.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-safari-cream/55 text-xs">
                  <CheckCircle size={13} className="text-safari-gold mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-safari-brown/15 rounded-lg p-6 border border-safari-sand/10">
            <h3
              className="text-lg text-safari-gold font-bold mb-4 flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <CheckCircle size={16} /> What's Included
            </h3>
            <ul className="space-y-2">
              {destination.inclusions.map((inc, i) => (
                <li key={i} className="flex items-start gap-2 text-safari-cream/55 text-xs">
                  <CheckCircle size={13} className="text-safari-olive mt-0.5 flex-shrink-0" />
                  {inc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Itinerary */}
        <div className="mb-12">
          <h2
            className="text-xl md:text-2xl text-safari-cream font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Itinerary
          </h2>
          <div className="space-y-4">
            {destination.itinerary.map((day, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-safari-brown/10 rounded-lg p-5 border-l-3 border-safari-gold"
              >
                <div className="bg-safari-gold/10 px-3 py-1.5 rounded flex-shrink-0">
                  <span className="text-safari-gold font-bold text-xs">{day.day}</span>
                </div>
                <div>
                  <h4 className="text-safari-cream font-semibold text-sm mb-1">{day.title}</h4>
                  <p className="text-safari-cream/45 text-xs leading-relaxed">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities & Accommodation */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div>
            <h3
              className="text-lg text-safari-cream font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Activities
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.activities.map((a, i) => (
                <span key={i} className="bg-safari-gold/10 text-safari-gold px-3 py-1.5 rounded-full text-xs">
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3
              className="text-lg text-safari-cream font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Accommodation
            </h3>
            <p className="text-safari-cream/55 text-xs mb-1">{destination.accommodation}</p>
            <p className="text-safari-cream/35 text-[10px]">Best Time to Visit: {destination.bestTime}</p>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="bg-gradient-to-r from-safari-gold/8 to-safari-orange/8 rounded-xl p-6 md:p-10 border border-safari-gold/15 text-center mb-12">
          <h3
            className="text-2xl md:text-3xl text-safari-cream font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {destination.price}
          </h3>
          <p className="text-safari-cream/45 text-xs mb-1">{destination.priceNote} • {destination.duration}</p>
          <p className="text-safari-cream/30 text-[10px] mb-6">{destination.groupSize} • {destination.accommodation}</p>
          
          {!showBooking ? (
            <button
              onClick={() => setShowBooking(true)}
              className="btn-safari bg-safari-gold text-safari-black px-10 py-3 text-[11px] font-semibold tracking-[0.15em] uppercase rounded-lg hover:bg-white transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              Reserve This Safari <ArrowRight size={15} />
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3 text-left">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-safari-black/35 border border-safari-sand/15 rounded-lg px-4 py-2.5 text-safari-cream placeholder-safari-cream/25 focus:border-safari-gold focus:outline-none text-sm"
                placeholder="Your full name"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={form.dates}
                  onChange={(e) => setForm({ ...form, dates: e.target.value })}
                  className="w-full bg-safari-black/35 border border-safari-sand/15 rounded-lg px-4 py-2.5 text-safari-cream placeholder-safari-cream/25 focus:border-safari-gold focus:outline-none text-sm"
                  placeholder="Travel dates"
                />
                <input
                  type="text"
                  required
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-safari-black/35 border border-safari-sand/15 rounded-lg px-4 py-2.5 text-safari-cream placeholder-safari-cream/25 focus:border-safari-gold focus:outline-none text-sm"
                  placeholder="Number of guests"
                />
              </div>
              <textarea
                value={form.requests}
                onChange={(e) => setForm({ ...form, requests: e.target.value })}
                rows={2}
                className="w-full bg-safari-black/35 border border-safari-sand/15 rounded-lg px-4 py-2.5 text-safari-cream placeholder-safari-cream/25 focus:border-safari-gold focus:outline-none text-sm resize-none"
                placeholder="Special requests (optional)"
              />
              <button
                type="submit"
                className="w-full btn-safari bg-safari-gold text-safari-black py-3 text-[11px] font-semibold tracking-[0.15em] uppercase rounded-lg hover:bg-white transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Send size={15} /> Continue on WhatsApp
              </button>
              <p className="text-safari-cream/25 text-[10px] text-center">
                Our team at {WHATSAPP_NUMBERS.primary} will personally assist you.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
