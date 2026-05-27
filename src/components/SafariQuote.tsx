import { useInView } from '../hooks/useInView';

interface Props {
  quote: string;
  author: string;
}

export default function SafariQuote({ quote, author }: Props) {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-10 md:py-14 bg-safari-cream">
      <div className="woven-border mb-8" />
      <div ref={ref} className={`max-w-2xl mx-auto px-5 text-center transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="safari-diamond-sep mb-5">
          <div className="diamond" />
        </div>
        <blockquote
          className="text-lg md:text-xl lg:text-2xl text-safari-charcoal font-medium leading-relaxed mb-3 italic"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          "{quote}"
        </blockquote>
        <p className="text-safari-brown/40 text-[9px] tracking-[0.18em] uppercase">— {author}</p>
        <div className="safari-diamond-sep mt-5">
          <div className="diamond" />
        </div>
      </div>
      <div className="woven-border mt-8" />
    </section>
  );
}
