import { useInView } from '../hooks/useInView';

interface LandscapeSectionProps {
  onNavigate: (section: string) => void;
}

export default function LandscapeSection({ onNavigate }: LandscapeSectionProps) {
  const { ref, isInView } = useInView();

  return (
    <section className="relative h-[50vh] md:h-[65vh] overflow-hidden">
      <img
        src="https://images.pexels.com/photos/29093739/pexels-photo-29093739.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
        alt="Mount Kilimanjaro under starry skies, Kenya"
        className="absolute inset-0 w-full h-full object-cover animate-slow-pan"
        loading="lazy"
      />
      <div className="absolute inset-0 overlay-cinematic" />
      
      <div ref={ref} className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-5 md:px-8 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-medium mb-3">
          The Call of the Wild
        </span>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4 text-shadow-hero max-w-3xl leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Some Landscapes Change <br />
          <span className="italic">the Way You See the World</span>
        </h2>
        <p
          className="text-base md:text-[17px] text-safari-cream/60 max-w-xl mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Kenya's wilderness stretches beyond the horizon — vast, ancient, and untouched. 
          Stand where the earth meets the sky.
        </p>
        <button
          onClick={() => onNavigate('booking')}
          className="btn-safari bg-safari-gold text-safari-black px-8 py-3 text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase rounded hover:bg-white transition-colors duration-300 cursor-pointer"
        >
          Begin Your Journey
        </button>
      </div>
    </section>
  );
}
