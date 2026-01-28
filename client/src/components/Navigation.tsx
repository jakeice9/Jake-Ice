import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="text-xl font-bold font-display tracking-tight cursor-pointer uppercase"
        >
          Jake <span className="text-primary">Ice</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" size="sm" className="transition-all duration-300 hover:bg-accent hover:scale-105 active:scale-95" asChild>
             <a href="https://www.linkedin.com/in/jake-ice/" target="_blank" rel="noopener noreferrer">
               LinkedIn
             </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-lg font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <Button variant="default" className="w-full" asChild>
               <a href="https://www.linkedin.com/in/jake-ice/" target="_blank" rel="noopener noreferrer">
                 Connect on LinkedIn
               </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
