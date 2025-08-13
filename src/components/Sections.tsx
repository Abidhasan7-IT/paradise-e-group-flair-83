import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, Palette, Wrench } from 'lucide-react';
import interior1 from '@/assets/interior-1.jpg';
import interior2 from '@/assets/interior-2.jpg';
import interior3 from '@/assets/interior-3.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-light mb-8">
              About <span className="text-primary">Paradise Interior</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Under the E-Group umbrella, Paradise Interior & Exterior has been transforming 
              spaces with exceptional design and unparalleled craftsmanship for over a decade. 
              We specialize in creating stunning residential and commercial interiors that 
              reflect our clients' unique personalities and lifestyle.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Award-winning interior design team",
                "Complete project management",
                "Premium quality materials and finishes",
                "Timely delivery and exceptional service"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Learn More About Us
            </Button>
          </div>

          <div className="slide-in-right">
            <img
              src={interior1}
              alt="Modern Interior Design"
              className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home makeovers, from concept to completion, creating spaces that perfectly reflect your lifestyle."
    },
    {
      icon: Palette,
      title: "Commercial Interiors",
      description: "Professional office and retail space design that enhances productivity and customer experience."
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Expert renovation services that transform existing spaces into modern, functional environments."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive interior design services that transform your vision into reality, 
            backed by E-Group's commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300 slide-in-up">
              <service.icon className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PortfolioSection = () => {
  const projects = [
    {
      image: interior1,
      title: "Modern Living Space",
      category: "Residential"
    },
    {
      image: interior2,
      title: "Luxury Bedroom Suite",
      category: "Residential"
    },
    {
      image: interior3,
      title: "Contemporary Kitchen",
      category: "Residential"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects showcasing the finest in interior design and craftsmanship, 
            each uniquely tailored to our clients' vision and needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer slide-in-up">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space? Get in touch with our expert design team 
            and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="slide-in-left">
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-muted-foreground">
                  E-Group Corporate Center<br />
                  Paradise Interior & Exterior Division<br />
                  Dhaka, Bangladesh
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-muted-foreground">+880 1XXX-XXXXXX</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">info@paradiseinterior.com</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Working Hours</h4>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="slide-in-right">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};