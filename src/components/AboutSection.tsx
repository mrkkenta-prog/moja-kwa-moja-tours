import { useInView } from '../hooks/useInView';
import { Shield, Heart, MapPin, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Personal Touch',
    text: 'Every safari is crafted personally. We know our guests by name.',
  },
  {
    icon: MapPin,
    title: 'Local Knowledge',
    text: 'Our guides grew up in these landscapes.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    text: 'Licensed, insured, and fully committed.',
  },
  {
    icon: Users,
    title: 'Small Groups',
    text: 'Intimate groups for better experiences.',
  },
];

export default function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative py-16 md:py-24 bg-safari-charcoal overflow-hidden">
      <div className="absolute inset-0 safari-pattern opacity-20" />
      
      <div ref={ref} className="relative max-w-[1100px] mx-auto px-5 md:px-10">
        <div className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/6299632/pexels-photo-6299632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=640"
                alt="Maasai woman with traditional beadwork, Kenya"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-safari-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 border border-safari-gold/20 rounded-lg" />
            <div className="absolute -top-2 -left-2 w-14 h-14 border border-safari-gold/15 rounded-lg" />
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 ease-out delay-150 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium mb-3 block">
              Our Story
            </span>
            <h2
              className="text-2xl md:text-3xl text-safari-cream font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Growing With Every <br />
              <span className="italic text-safari-gold">Journey We Share</span>
            </h2>
            <div className="maasai-border w-16 mb-5" />
            <p
              className="text-sm md:text-base text-safari-cream/60 leading-relaxed mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Moja kwa Moja Tours was born from a simple belief: that the best safaris are the ones 
              where you feel truly cared for. We started as a small team of passionate Kenyan guides 
              who wanted to share our homeland with the world.
            </p>
            <p className="text-xs text-safari-cream/40 leading-relaxed mb-6">
              We're still growing, and we're honest about that. But growing means we're attentive 
              and determined to make every single safari extraordinary.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i}>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={14} className="text-safari-gold" />
                      <h4 className="text-safari-cream font-semibold text-xs">{v.title}</h4>
                    </div>
                    <p className="text-safari-cream/35 text-[10px] leading-relaxed">{v.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
