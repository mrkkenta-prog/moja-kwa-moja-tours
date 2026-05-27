import { useInView } from '../hooks/useInView';
import { SAFARI_TIMELINE } from '../data/constants';

function TimelineItem({ item, index }: { item: typeof SAFARI_TIMELINE[0]; index: number }) {
  const { ref, isInView } = useInView();
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      <div
        className={`grid md:grid-cols-2 gap-0 items-stretch transition-all duration-700 ease-out ${
          isInView 
            ? 'opacity-100 translate-x-0' 
            : isEven ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
        }`}
      >
        {/* Image */}
        <div className={`relative overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[380px] ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover animate-ken-burns"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-safari-black/30 to-transparent" />
          
          {/* Time Badge */}
          <div className="absolute top-5 left-5 md:top-8 md:left-8">
            <div className="bg-safari-gold/90 backdrop-blur-sm px-4 py-2 rounded">
              <span
                className="text-safari-black font-bold text-lg md:text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.time}
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div
          className={`flex flex-col justify-center p-6 md:p-10 lg:p-12 ${
            isEven ? 'md:order-2 bg-safari-charcoal' : 'md:order-1 bg-safari-brown'
          }`}
        >
          <span className="text-safari-gold text-[10px] tracking-[0.25em] uppercase mb-2">
            {item.time}
          </span>
          <h3
            className="text-xl md:text-2xl text-safari-cream font-bold mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.title}
          </h3>
          <div className="maasai-border w-12 mb-4" />
          <p
            className="text-safari-cream/60 text-sm leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SafariTimeline() {
  const { ref, isInView } = useInView();

  return (
    <section id="safari-timeline" className="relative bg-safari-black">
      <div ref={ref} className={`text-center py-12 md:py-18 px-5 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium">
          The Safari Experience
        </span>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl text-safari-cream font-bold mt-3 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What a Safari Day <span className="italic text-safari-gold">Feels Like</span>
        </h2>
        <p
          className="text-base md:text-[17px] text-safari-cream/50 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Close your eyes. Breathe in the scent of wild grass and morning dew. 
          Let us walk you through a single, extraordinary day in the African bush.
        </p>
      </div>

      <div className="space-y-0">
        {SAFARI_TIMELINE.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
      
      <div className="maasai-border-thick" />
    </section>
  );
}
