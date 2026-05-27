import { useInView } from '../hooks/useInView';
import { Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { DESTINATIONS, Destination } from '../data/constants';

interface Props {
  onSelectDestination: (dest: Destination) => void;
}

export default function PricingSection({ onSelectDestination }: Props) {
  const { ref, isInView } = useInView();

  const featured = [DESTINATIONS[0], DESTINATIONS[1], DESTINATIONS[4]]; // Mara, Amboseli, Combo

  return (
    <section className="relative py-16 md:py-24 bg-safari-black safari-pattern overflow-hidden">
      <div className="absolute inset-0 opacity-12 safari-pattern" />
      
      <div ref={ref} className="relative max-w-[1100px] mx-auto px-5 md:px-10">
        <div className={`text-center mb-10 md:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium">
            Safari Packages
          </span>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-safari-cream font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Find Your <span className="italic text-safari-gold">Perfect Safari</span>
          </h2>
          <p
            className="text-base md:text-[17px] text-safari-cream/50 max-w-lg mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Transparent pricing, no hidden fees. Every package is fully customizable.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-4 md:gap-5 transition-all duration-700 ease-out delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {featured.map((dest, i) => (
            <div
              key={dest.id}
              className={`relative rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 cursor-pointer group ${
                i === 2
                  ? 'border-safari-gold/30 bg-gradient-to-b from-safari-gold/6 to-safari-brown/12'
                  : 'border-safari-sand/10 bg-safari-brown/8'
              }`}
              onClick={() => onSelectDestination(dest)}
            >
              {i === 2 && (
                <div className="absolute top-0 left-0 right-0 bg-safari-gold py-1 text-center">
                  <span className="text-safari-black text-[8px] font-bold tracking-[0.12em] uppercase">Most Popular</span>
                </div>
              )}
              
              <div className={`p-5 ${i === 2 ? 'pt-9' : ''}`}>
                <h3
                  className="text-base md:text-lg text-safari-cream font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {dest.name}
                </h3>
                <p className="text-safari-cream/30 text-[9px] mb-4">{dest.tagline}</p>

                <div className="mb-4">
                  <span
                    className="text-2xl md:text-3xl text-safari-gold font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {dest.price}
                  </span>
                  <p className="text-safari-cream/30 text-[9px] mt-0.5">{dest.priceNote}</p>
                </div>

                <div className="flex items-center gap-3 text-[9px] text-safari-cream/30 mb-4 pb-4 border-b border-safari-sand/8">
                  <span className="flex items-center gap-1">
                    <Clock size={10} className="text-safari-gold" /> {dest.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={10} className="text-safari-gold" /> {dest.groupSize}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-5">
                  {dest.highlights.slice(0, 4).map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-safari-cream/50 text-[11px]">
                      <CheckCircle size={11} className="text-safari-gold mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-safari bg-safari-gold/10 border border-safari-gold/20 text-safari-gold py-2 text-[10px] font-semibold tracking-wider uppercase rounded-lg hover:bg-safari-gold hover:text-safari-black transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 group-hover:bg-safari-gold group-hover:text-safari-black">
                  View Details <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
