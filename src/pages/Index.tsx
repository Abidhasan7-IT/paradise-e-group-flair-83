import { Navigation } from '@/components/Navigation';
import { HeroSlider } from '@/components/HeroSlider';
import { AboutSection, ServicesSection, PortfolioSection, ContactSection } from '@/components/Sections';
import { Footer } from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Paradise Interior & Exterior - Premium Interior Design Services in Dhaka, Bangladesh | E-Group"
        description="Transform your space with Paradise Interior & Exterior. Award-winning interior design services in Dhaka, Bangladesh. Residential & commercial design, renovation & remodeling."
        keywords="interior design, interior designer, Dhaka, Bangladesh, residential design, commercial interior, renovation, remodeling, home decoration, office design, luxury interior, modern design, E-Group, Paradise Interior"
        image="/src/assets/hero-slide-1.jpg"
        url="https://paradise-interior.com"
        type="website"
      />
      <Navigation />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
