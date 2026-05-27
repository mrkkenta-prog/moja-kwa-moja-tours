import { useInView } from '../hooks/useInView';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/constants';

export default function ReviewsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="reviews" className="relative py-16 md:py-24 bg-safari-warm safari-pattern">
      <div className="absolute top-0 left-0 right-0 maasai-border" />
      
      <div ref={ref} className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className={`text-center mb-10 md:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium">
            Guest Stories
          </span>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-safari-charcoal font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Guests <span className="italic text-safari-orange">Say</span>
          </h2>
          <p
            className="text-base md:text-[17px] text-safari-brown/65 max-w-lg mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Real stories from real travelers who trusted us with their African adventure.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-5 transition-all duration-700 ease-out delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              <Quote size={28} className="text-safari-sand/20 absolute top-4 right-4" />
              
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-safari-gold fill-safari-gold" />
                ))}
              </div>

              <p
                className="text-safari-brown/70 leading-relaxed mb-4 text-sm"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-safari-charcoal text-sm">{review.name}</p>
                  <p className="text-safari-brown/40 text-[10px]">{review.location}</p>
                </div>
                <span className="text-[9px] text-safari-gold bg-safari-gold/8 px-2 py-0.5 rounded-full">
                  {review.safari}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
