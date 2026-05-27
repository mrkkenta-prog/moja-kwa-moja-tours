import { useInView } from '../hooks/useInView';
import { Sparkles, Shield, Compass, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Personal, Not Corporate',
    text: 'When you call, a real person answers — someone who has walked the Mara and camped under African stars. Your safari is personal to us.',
  },
  {
    icon: Compass,
    title: 'Born in Kenya',
    text: 'We\'re locals who know every dusty road, every hidden watering hole, and every sunrise viewpoint. This is our home.',
  },
  {
    icon: Shield,
    title: 'Honest & Transparent',
    text: 'No hidden fees. No bait-and-switch pricing. What we show you is exactly what you get — sometimes even better.',
  },
  {
    icon: Sparkles,
    title: 'Growing With Purpose',
    text: 'We\'re a growing company, which means every guest matters more. Your experience helps us build something meaningful.',
  },
];

export default function WhySection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-16 md:py-24 bg-safari-warm overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safari-sand/30 to-transparent" />
      
      <div ref={ref} className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className={`text-center mb-10 md:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium">
            Why Choose Us
          </span>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-safari-charcoal font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why <span className="italic text-safari-orange">Moja kwa Moja?</span>
          </h2>
          <p
            className="text-base md:text-[17px] text-safari-brown/65 max-w-lg mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            We may not be the biggest, but we might just be the most heartfelt.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-4 md:gap-5 transition-all duration-700 ease-out delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-safari-sand/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-safari-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-safari-gold/15 transition-colors duration-300">
                    <Icon size={18} className="text-safari-gold" />
                  </div>
                  <div>
                    <h3
                      className="text-base md:text-lg text-safari-charcoal font-bold mb-1.5"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {reason.title}
                    </h3>
                    <p className="text-safari-brown/55 text-sm leading-relaxed">
                      {reason.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
