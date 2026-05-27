import Logo from './Logo';
import { WHATSAPP_NUMBERS, EMAIL } from '../data/constants';
import { Phone, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'Destinations', section: 'destinations' },
    { label: 'Safari Day', section: 'safari-timeline' },
    { label: 'Experiences', section: 'experiences' },
    { label: 'About Us', section: 'about' },
    { label: 'Reviews', section: 'reviews' },
    { label: 'Reserve Safari', section: 'booking' },
    { label: 'Contact', section: 'contact' },
  ];

  const safaris = [
    { label: 'Maasai Mara Safari', section: 'destinations' },
    { label: 'Amboseli Explorer', section: 'destinations' },
    { label: 'Lake Nakuru Discovery', section: 'destinations' },
    { label: 'Diani Beach Escape', section: 'destinations' },
    { label: 'Safari & Beach Combo', section: 'destinations' },
    { label: 'Great Migration Special', section: 'destinations' },
  ];

  return (
    <footer className="bg-safari-black pt-12 pb-6">
      <div className="maasai-border-thick mb-12" />
      
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo light className="mb-4" />
            <p
              className="text-safari-cream/40 text-xs leading-relaxed mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Authentic Kenyan safari experiences crafted with care and passion. 
              One journey at a time.
            </p>
            <div className="space-y-1.5">
              <a href={`tel:${WHATSAPP_NUMBERS.primary}`} className="flex items-center gap-2 text-safari-cream/30 hover:text-safari-gold transition-colors duration-200 text-[11px]">
                <Phone size={11} /> {WHATSAPP_NUMBERS.primary}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-safari-cream/30 hover:text-safari-gold transition-colors duration-200 text-[11px]">
                <Mail size={11} /> {EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBERS.primary.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-safari-cream/30 hover:text-safari-gold transition-colors duration-200 text-[11px]"
              >
                <MessageCircle size={11} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-safari-gold text-[9px] tracking-[0.18em] uppercase font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-safari-cream/30 hover:text-safari-gold transition-colors duration-200 text-[11px] cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Safaris */}
          <div>
            <h4 className="text-safari-gold text-[9px] tracking-[0.18em] uppercase font-semibold mb-4">
              Our Safaris
            </h4>
            <ul className="space-y-1.5">
              {safaris.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-safari-cream/30 hover:text-safari-gold transition-colors duration-200 text-[11px] cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-safari-gold text-[9px] tracking-[0.18em] uppercase font-semibold mb-4">
              Ready for Africa?
            </h4>
            <p className="text-safari-cream/30 text-[11px] leading-relaxed mb-4">
              Your unforgettable Kenyan safari is just a conversation away.
            </p>
            <button
              onClick={() => onNavigate('booking')}
              className="btn-safari bg-safari-gold text-safari-black px-5 py-2 text-[9px] font-semibold tracking-[0.12em] uppercase rounded hover:bg-white transition-colors duration-200 cursor-pointer w-full"
            >
              Reserve Your Safari
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-safari-cream/6 pt-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-safari-cream/20 text-[9px]">
            © {new Date().getFullYear()} Moja kwa Moja Tours. All rights reserved. | Nairobi, Kenya
          </p>
          <p className="text-safari-cream/12 text-[9px] italic">
            Crafted with love for the wild
          </p>
        </div>
      </div>
    </footer>
  );
}
