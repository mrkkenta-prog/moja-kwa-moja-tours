import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { WHATSAPP_NUMBERS, EMAIL } from '../data/constants';

export default function ContactSection() {
  const { ref, isInView } = useInView();

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: `${WHATSAPP_NUMBERS.primary}`, href: `tel:${WHATSAPP_NUMBERS.primary}` },
    { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with our team', href: `https://wa.me/${WHATSAPP_NUMBERS.primary.replace('+', '')}` },
    { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Daily: 7AM – 9PM EAT', href: '#' },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-safari-warm">
      <div ref={ref} className="max-w-[1000px] mx-auto px-5 md:px-10">
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-safari-gold text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-medium">
            Get In Touch
          </span>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-safari-charcoal font-bold mt-3 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We'd Love to <span className="italic text-safari-orange">Hear From You</span>
          </h2>
          <p
            className="text-base md:text-[17px] text-safari-brown/65 max-w-xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Have questions? Want a custom itinerary? Reach out — we respond personally to every message.
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 transition-all duration-700 ease-out delay-150 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {contactInfo.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white rounded-lg p-4 md:p-5 text-center hover:shadow-md transition-all duration-300 block"
              >
                <div className="w-10 h-10 bg-safari-gold/10 rounded-full flex items-center justify-center mx-auto mb-2.5 group-hover:bg-safari-gold/20 transition-colors duration-300">
                  <Icon size={16} className="text-safari-gold" />
                </div>
                <h4 className="font-semibold text-safari-charcoal text-[10px] uppercase tracking-wider mb-0.5">{item.label}</h4>
                <p className="text-safari-brown/55 text-[11px]">{item.value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
