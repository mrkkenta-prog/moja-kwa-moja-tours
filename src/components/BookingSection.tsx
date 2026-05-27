import { useState } from 'react';
import { Send, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { DESTINATIONS, generateWhatsAppLink, WHATSAPP_NUMBERS, EMAIL } from '../data/constants';

interface BookingSectionProps {
  preselectedDestination?: string;
}

export default function BookingSection({ preselectedDestination }: BookingSectionProps) {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({
    name: '',
    destination: preselectedDestination || '',
    dates: '',
    guests: '',
    requests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppLink(form);
    window.open(link, '_blank');
  };

  return (
    <section id="booking" className="relative py-16 md:py-24 bg-safari-charcoal overflow-hidden">
      <div className="absolute inset-0 safari-pattern opacity-12" />
      <div className="absolute top-0 left-0 right-0 maasai-border-thick" />
      
      <div ref={ref} className="relative max-w-[1100px] mx-auto px-5 md:px-10">
        <div className={`grid lg:grid-cols-2 gap-10 md:gap-14 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Info */}
          <div>
            <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium mb-3 block">
              Reserve Your Safari
            </span>
            <h2
              className="text-2xl md:text-3xl text-safari-cream font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Adventure <br />
              <span className="italic text-safari-gold">Starts Here</span>
            </h2>
            <div className="maasai-border w-16 mb-5" />
            
            <p
              className="text-sm md:text-base text-safari-cream/55 leading-relaxed mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Fill in the details and continue on WhatsApp. Our safari team will personally guide 
              you through every step — no automated systems, just real people who care.
            </p>

            <div className="space-y-2.5 mb-6">
              {[
                'Personal safari concierge service',
                'Direct communication with specialists',
                'Tailored itinerary just for you',
                'Flexible payment arrangements',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-safari-gold flex-shrink-0" />
                  <span className="text-safari-cream/45 text-xs">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-safari-gold/10 rounded-full flex items-center justify-center">
                  <Phone size={14} className="text-safari-gold" />
                </div>
                <div>
                  <p className="text-safari-cream/35 text-[9px] uppercase tracking-wider">Call Us</p>
                  <a href={`tel:${WHATSAPP_NUMBERS.primary}`} className="text-safari-cream hover:text-safari-gold transition-colors text-xs">
                    {WHATSAPP_NUMBERS.primary}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-safari-gold/10 rounded-full flex items-center justify-center">
                  <Mail size={14} className="text-safari-gold" />
                </div>
                <div>
                  <p className="text-safari-cream/35 text-[9px] uppercase tracking-wider">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-safari-cream hover:text-safari-gold transition-colors text-xs">
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-safari-gold/10 rounded-full flex items-center justify-center">
                  <MessageCircle size={14} className="text-safari-gold" />
                </div>
                <div>
                  <p className="text-safari-cream/35 text-[9px] uppercase tracking-wider">WhatsApp</p>
                  <span className="text-safari-cream/50 text-xs">Available daily, 7AM – 9PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className={`bg-safari-brown/20 backdrop-blur-sm rounded-xl p-5 md:p-7 border border-safari-sand/8 transition-all duration-700 ease-out delay-150 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3
              className="text-lg md:text-xl text-safari-cream font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Reservation Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-safari-cream/40 text-[9px] uppercase tracking-wider block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-safari-black/30 border border-safari-sand/12 rounded-lg px-3.5 py-2.5 text-safari-cream placeholder-safari-cream/20 focus:border-safari-gold focus:outline-none transition-colors duration-200 text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="text-safari-cream/40 text-[9px] uppercase tracking-wider block mb-1">
                  Preferred Safari *
                </label>
                <select
                  required
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                  className="w-full bg-safari-black/30 border border-safari-sand/12 rounded-lg px-3.5 py-2.5 text-safari-cream focus:border-safari-gold focus:outline-none transition-colors duration-200 text-sm"
                >
                  <option value="">Select a safari experience</option>
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} — {d.price}
                    </option>
                  ))}
                  <option value="Custom Safari">Custom Safari</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-safari-cream/40 text-[9px] uppercase tracking-wider block mb-1">
                    Travel Dates *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.dates}
                    onChange={(e) => setForm({ ...form, dates: e.target.value })}
                    className="w-full bg-safari-black/30 border border-safari-sand/12 rounded-lg px-3.5 py-2.5 text-safari-cream placeholder-safari-cream/20 focus:border-safari-gold focus:outline-none transition-colors duration-200 text-sm"
                    placeholder="e.g. Aug 15-20"
                  />
                </div>
                <div>
                  <label className="text-safari-cream/40 text-[9px] uppercase tracking-wider block mb-1">
                    Guests *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full bg-safari-black/30 border border-safari-sand/12 rounded-lg px-3.5 py-2.5 text-safari-cream placeholder-safari-cream/20 focus:border-safari-gold focus:outline-none transition-colors duration-200 text-sm"
                    placeholder="e.g. 2 adults"
                  />
                </div>
              </div>

              <div>
                <label className="text-safari-cream/40 text-[9px] uppercase tracking-wider block mb-1">
                  Special Requests
                </label>
                <textarea
                  value={form.requests}
                  onChange={(e) => setForm({ ...form, requests: e.target.value })}
                  rows={2}
                  className="w-full bg-safari-black/30 border border-safari-sand/12 rounded-lg px-3.5 py-2.5 text-safari-cream placeholder-safari-cream/20 focus:border-safari-gold focus:outline-none transition-colors duration-200 text-sm resize-none"
                  placeholder="Any preferences or special needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-safari bg-safari-gold text-safari-black py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase rounded-lg hover:bg-white transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <Send size={14} />
                Continue on WhatsApp
              </button>

              <p className="text-safari-cream/20 text-[9px] text-center leading-relaxed">
                We'll respond within 2 hours during business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
