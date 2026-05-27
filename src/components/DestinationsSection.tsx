import { DESTINATIONS, Destination } from '../data/constants';
import { useInView } from '../hooks/useInView';
import DestinationCard from './DestinationCard';

interface Props {
  onSelectDestination: (dest: Destination) => void;
}

export default function DestinationsSection({ onSelectDestination }: Props) {
  const { ref, isInView } = useInView();

  return (
    <section id="destinations" className="relative py-16 md:py-24 bg-safari-warm">
      <div className="absolute top-0 left-0 right-0 maasai-border" />
      
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-14 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium">
            Curated Experiences
          </span>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-safari-charcoal font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Where Will Your <span className="italic text-safari-orange">Story</span> Begin?
          </h2>
          <p
            className="text-base md:text-[17px] text-safari-brown/65 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Every destination has a different rhythm, a different heartbeat. From the thundering plains 
            of the Mara to the tranquil shores of Diani — choose the chapter that calls to you.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-out delay-150 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onClick={() => onSelectDestination(dest)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
