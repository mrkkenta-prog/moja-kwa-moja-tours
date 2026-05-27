import { useState, useCallback } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import DestinationsSection from './components/DestinationsSection';
import SafariTimeline from './components/SafariTimeline';
import ExperiencesSection from './components/ExperiencesSection';
import LandscapeSection from './components/LandscapeSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import PricingSection from './components/PricingSection';
import SafariQuote from './components/SafariQuote';
import WhySection from './components/WhySection';
import Footer from './components/Footer';
import DestinationDetail from './components/DestinationDetail';
import { Destination } from './data/constants';

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-safari-warm">
      <Navigation onNavigate={scrollToSection} />
      
      <main>
        <HeroSection onNavigate={scrollToSection} />
        <IntroSection />
        <DestinationsSection onSelectDestination={setSelectedDestination} />
        <SafariQuote
          quote="There is something about safari life that makes you forget all your sorrows and feel as if you had drunk half a bottle of champagne."
          author="Isak Dinesen, Out of Africa"
        />
        <SafariTimeline />
        <ExperiencesSection />
        <LandscapeSection onNavigate={scrollToSection} />
        <WhySection />
        <AboutSection />
        <ReviewsSection />
        <PricingSection onSelectDestination={setSelectedDestination} />
        <BookingSection />
        <ContactSection />
      </main>

      <Footer onNavigate={scrollToSection} />

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <DestinationDetail
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </div>
  );
}
