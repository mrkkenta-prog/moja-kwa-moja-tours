import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { WHATSAPP_NUMBERS } from '../data/constants';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const navLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'Destinations', section: 'destinations' },
    { label: 'Safari Day', section: 'safari-timeline' },
    { label: 'Experiences', section: 'experiences' },
    { label: 'About', section: 'about' },
    { label: 'Reviews', section: 'reviews' },
    { label: 'Contact', section: 'contact' },
  ];

  const handleClick = (section: string) => {
    setIsMobileOpen(false);
    // Small delay to allow menu to close first
    setTimeout(() => {
      onNavigate(section);
    }, 100);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-safari-black/95 backdrop-blur-md shadow-xl py-2.5'
            : 'bg-gradient-to-b from-safari-black/60 via-safari-black/30 to-transparent py-4'
        }`}
        style={{ willChange: 'transform, background-color' }}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleClick('hero')} 
            className="cursor-pointer relative z-10 flex-shrink-0"
            aria-label="Go to home"
          >
            <Logo light className="transform hover:scale-105 transition-transform duration-300" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleClick(link.section)}
                className="text-safari-cream/85 hover:text-safari-gold text-[11px] xl:text-xs tracking-[0.15em] uppercase transition-colors duration-300 cursor-pointer font-medium py-2"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${WHATSAPP_NUMBERS.primary}`}
              className="text-safari-cream/60 hover:text-safari-gold transition-colors p-2"
              aria-label="Call us"
            >
              <Phone size={16} />
            </a>
            <button
              onClick={() => handleClick('booking')}
              className="btn-safari bg-safari-gold text-safari-black px-5 py-2 text-[10px] xl:text-[11px] font-semibold tracking-[0.12em] uppercase rounded cursor-pointer hover:bg-white transition-colors"
            >
              Reserve Safari
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-safari-cream p-2 cursor-pointer relative z-[60]"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Separate from nav for proper z-index handling */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-400 ${
          isMobileOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-safari-black/98 backdrop-blur-lg"
          onClick={() => setIsMobileOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative z-10 h-full flex flex-col items-center justify-center gap-5 px-6 transition-transform duration-400 ${
          isMobileOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          <Logo light className="mb-6" />
          
          {navLinks.map((link, index) => (
            <button
              key={link.section}
              onClick={() => handleClick(link.section)}
              className="text-safari-cream text-lg tracking-[0.2em] uppercase hover:text-safari-gold transition-colors cursor-pointer py-1"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                transitionDelay: isMobileOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {link.label}
            </button>
          ))}
          
          <button
            onClick={() => handleClick('booking')}
            className="mt-6 btn-safari bg-safari-gold text-safari-black px-8 py-3 text-sm font-semibold tracking-[0.15em] uppercase rounded cursor-pointer hover:bg-white transition-colors"
          >
            Reserve Your Safari
          </button>
          
          <div className="mt-4 text-safari-cream/40 text-xs tracking-wider">
            {WHATSAPP_NUMBERS.primary}
          </div>
        </div>
      </div>
    </>
  );
}
