
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';



const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location.pathname === '/';

  // LOGO LOGIC: 
  // Home gets White Logo
  // Subpages (About, Services, Contact) get Colored Logo
  const logoSrc = isHome ? "/assets/PlurimmoLogoWhite.png" : "/assets/PlurimmoLogo.png";

  // HEADER STYLING LOGIC for "Perfect Contrast":
  // On Home: Dark background to pop the White logo.
  // On Subpages: Light background to pop the Colored logo.
  const headerClasses = isHome
    ? scrolled ? 'bg-dark/95 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-6'
    : scrolled ? 'bg-white py-3 shadow-2xl' : 'bg-white py-4 shadow-md';

  const linkClasses = (path: string) => {
    const isActive = location.pathname === path;
    if (isHome) {
      return `text-sm font-bold tracking-widest uppercase transition-all relative py-2 group ${isActive ? 'text-primary' : 'text-gray-300 hover:text-white'}`;
    }
    return `text-sm font-bold tracking-widest uppercase transition-all relative py-2 group ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`;
  };

  const menuToggleColor = isHome ? 'text-white' : 'text-dark';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${headerClasses}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img
            src={logoSrc}
            alt="Plurimmo Limited"
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={linkClasses(item.path)}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className={`cta-button ${isHome ? 'bg-primary text-white hover:bg-white hover:text-dark' : 'bg-primary text-white hover:bg-dark'} shadow-xl`}
          >
            REQUEST A QUOTE
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className={`lg:hidden ${menuToggleColor} p-2 rounded-lg bg-current/5`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-dark z-40 transition-all duration-500 flex flex-col justify-center items-center px-6 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute top-6 right-6">
          <button className="text-white p-2 rounded-lg bg-white/10" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-10">
          <img src="/assets/PlurimmoLogoWhite.png" alt="Plurimmo" className="h-12 w-auto mb-8" />
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-3xl font-black uppercase tracking-tighter ${location.pathname === item.path ? 'text-primary' : 'text-white'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="cta-button bg-primary text-white w-full max-w-xs shadow-2xl"
          >
            GET A QUOTE <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
