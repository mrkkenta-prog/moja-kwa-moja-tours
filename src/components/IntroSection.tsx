import { useInView } from '../hooks/useInView';

export default function IntroSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="intro" className="relative py-20 md:py-24 safari-pattern overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-safari-sand/30 to-transparent" />
      
      <div ref={ref} className="max-w-[1300px] mx-auto px-5 md:px-10">
        <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Text */}
          <div>
            <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium mb-3 block">
              Welcome to
            </span>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl text-safari-charcoal font-bold mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Journey Through <br />
              <span className="text-safari-orange italic">Wild Kenya</span>
            </h2>
            <div className="maasai-border w-20 mb-6" />
            <p
              className="text-base md:text-[17px] text-safari-brown/75 leading-relaxed mb-5"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Moja kwa Moja means "one by one" in Swahili — and that's exactly how we craft each safari. 
              One guest at a time, one moment at a time, one unforgettable memory at a time. We are a growing 
              Kenyan safari company built on genuine passion for this land and the incredible stories it holds.
            </p>
            <p className="text-sm text-safari-brown/60 leading-relaxed mb-7">
              We don't claim to be the biggest. We pride ourselves on being personal, attentive, and deeply 
              connected to the places we take you. Our guides are local experts who grew up walking these 
              plains. Your safari will be designed around you — because that's what "moja kwa moja" truly means.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="text-center">
                <span className="text-2xl font-bold text-safari-gold" style={{ fontFamily: "'Playfair Display', serif" }}>6+</span>
                <p className="text-[10px] text-safari-brown/50 uppercase tracking-wider mt-1">Destinations</p>
              </div>
              <div className="w-px h-10 bg-safari-sand/25" />
              <div className="text-center">
                <span className="text-2xl font-bold text-safari-gold" style={{ fontFamily: "'Playfair Display', serif" }}>100%</span>
                <p className="text-[10px] text-safari-brown/50 uppercase tracking-wider mt-1">Personal Touch</p>
              </div>
              <div className="w-px h-10 bg-safari-sand/25" />
              <div className="text-center">
                <span className="text-2xl font-bold text-safari-gold" style={{ fontFamily: "'Playfair Display', serif" }}>24/7</span>
                <p className="text-[10px] text-safari-brown/50 uppercase tracking-wider mt-1">Support</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className={`grid grid-cols-2 gap-3 transition-all duration-700 ease-out delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-3">
              <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.pexels.com/photos/7637397/pexels-photo-7637397.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=450"
                  alt="Maasai cultural experience"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-safari-black/25 to-transparent" />
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-[3/2]">
                <img
                  src="https://images.pexels.com/photos/26729463/pexels-photo-26729463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=450"
                  alt="Giraffe at waterhole"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-3 pt-6">
              <div className="relative rounded-lg overflow-hidden aspect-[3/2]">
                <img
                  src="https://images.pexels.com/photos/28708299/pexels-photo-28708299.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=450"
                  alt="Safari vehicles on adventure"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.pexels.com/photos/32382761/pexels-photo-32382761.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=450"
                  alt="Kenyan savannah landscape"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
