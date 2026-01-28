import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white font-display mb-2">Jake Ice</h3>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium">
            <Link to="about" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">About</Link>
            <Link to="skills" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">Skills</Link>
            <Link to="experience" smooth={true} duration={500} className="hover:text-primary cursor-pointer transition-colors">Experience</Link>
          </div>

          <Link 
            to="hero" 
            smooth={true} 
            duration={800} 
            className="p-3 bg-slate-900 rounded-full hover:bg-primary hover:text-white transition-all cursor-pointer group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
