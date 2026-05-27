import { useInView } from '../hooks/useInView';
import { Compass, Camera, Sunrise, Mountain, Tent, Heart } from 'lucide-react';

const experiences = [
  {
    icon: Compass,
    title: 'Game Drives',
    description: 'Track the Big Five across vast golden plains with expert local guides who read the bush like a book.',
    image: 'https://images.pexels.com/photos/5521696/pexels-photo-5521696.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: Sunrise,
    title: 'Balloon Safaris',
    description: 'Float silently above the Maasai Mara at dawn, watching the savannah wake up from a bird\'s-eye view.',
    image: 'https://images.pexels.com/photos/15994203/pexels-photo-15994203.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: Heart,
    title: 'Cultural Immersion',
    description: 'Step into a Maasai village, share stories around the fire, and learn traditions passed down through generations.',
    image: 'https://images.pexels.com/photos/31151819/pexels-photo-31151819.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: Camera,
    title: 'Wildlife Photography',
    description: 'Capture the raw beauty of Africa with guidance from guides who know the perfect angles and golden hours.',
    image: 'https://images.pexels.com/photos/28884379/pexels-photo-28884379.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: Mountain,
    title: 'Nature Walks',
    description: 'Walk the ancient trails with armed guides, learning about the smallest creatures and the oldest trees.',
    image: 'https://images.pexels.com/photos/32382761/pexels-photo-32382761.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
  {
    icon: Tent,
    title: 'Bush Dining',
    description: 'Dine under a canopy of stars as a campfire crackles nearby and the African night serenades you.',
    image: 'https://images.pexels.com/photos/17381216/pexels-photo-17381216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
  },
];

export default function ExperiencesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="experiences" className="relative py-16 md:py-24 bg-safari-cream safari-pattern">
      <div ref={ref} className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-14 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium">
            Beyond the Ordinary
          </span>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-safari-charcoal font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experiences That <span className="italic text-safari-orange">Stay With You</span>
          </h2>
          <p
            className="text-base md:text-[17px] text-safari-brown/65 max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A safari is not just about seeing animals. It's about feeling the earth beneath your feet, 
            hearing the silence of the savannah, and carrying a piece of Africa in your heart forever.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ease-out delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <div
                key={i}
                className="group relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-safari-black/70 via-safari-black/20 to-transparent group-hover:from-safari-black/80 transition-all duration-400" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <div className="bg-safari-gold/15 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:bg-safari-gold/25 transition-colors duration-300">
                    <Icon size={18} className="text-safari-gold" />
                  </div>
                  <h3
                    className="text-lg md:text-xl text-white font-bold mb-1.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-safari-cream/60 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
