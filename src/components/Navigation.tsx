import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import egroupLogo from '@/assets/ee.png';
import paradiseLogo from '@/assets/paralogo.png';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-sm border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logos */}
          <div className="flex items-center space-x-4">
            <a href="/" className='flex items-center space-x-4'>
            <img 
              src={egroupLogo} 
              alt="E-Group Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="w-px h-8 bg-white/30"></div>
            <img 
              src={paradiseLogo} 
              alt="Paradise Interior Logo" 
              className="h-10 w-auto object-contain"
            />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                  className="text-nav-text font-bold hover:text-nav-text-hover transition-colors duration-300 tracking-wide cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-accent"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-card/80 backdrop-blur-md rounded-lg p-4 slide-in-left">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block text-nav-text font-bold hover:text-nav-text-hover transition-colors duration-300 font-light tracking-wide py-2 w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};