
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const footerServices = [
    'Civil Engineering',
    'Logistics & Haulage',
    'Equipment Rental',
    'Vessel Scrapping'
  ];

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-8">
              <img 
                src="Plurimmo Logo (white).png" 
                alt="Plurimmo Limited" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Plurimmo is a leading Nigerian company delivering complex infrastructure projects, logistics solutions and equipment rental services.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  onClick={handleSocialClick}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-dark transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2">→</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">Our Services</h4>
            <ul className="space-y-4">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2">→</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">33b Audu Ephekhia Blvd, Off Admiralty Way, Lekki Phase 1, Lagos.</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400">+234 912 222 2643</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400">support@plurimmo.com.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Plurimmo Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
