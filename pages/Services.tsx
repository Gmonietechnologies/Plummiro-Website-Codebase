
import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Truck, Wrench, Anchor, ArrowRight, CheckCircle, Building2 } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24 overflow-hidden">
      {/* Header Banner */}
      <section className="bg-dark py-20 md:py-32 text-center relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80')] bg-cover"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mb-4">Our Expertise</h4>
          <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-4">POWERING DEVELOPMENT.</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-sm md:text-base">Specialized engineering and logistics services tailored for the expanding infrastructure in Africa.</p>
        </div>
      </section>

      {/* Detailed Service List */}
      <div className="space-y-0">
        {SERVICES.map((service, idx) => (
          <section key={service.id} className={`py-20 md:py-32 relative ${idx % 2 === 0 ? 'bg-white' : 'bg-secondary/30'}`}>
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <div className={`flex flex-col lg:flex-row items-center gap-12 md:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 w-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl md:rounded-3xl mb-6 md:mb-10 text-primary">
                    {/* Fix: replaced md:size with Tailwind classes */}
                    {service.icon === 'HardHat' && <HardHat className="w-8 h-8 md:w-10 md:h-10" />}
                    {service.icon === 'Truck' && <Truck className="w-8 h-8 md:w-10 md:h-10" />}
                    {service.icon === 'Wrench' && <Wrench className="w-8 h-8 md:w-10 md:h-10" />}
                    {service.icon === 'Anchor' && <Anchor className="w-8 h-8 md:w-10 md:h-10" />}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-dark mb-6 md:mb-8 tracking-tighter">{service.title}</h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-10 font-medium">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
                    {['Strategic Execution', 'Modern Asset Management', 'Safety First Protocol', 'Full Compliance'].map((item) => (
                       <div key={item} className="flex items-center space-x-3">
                          {/* Fix: replaced md:size with Tailwind classes */}
                          <CheckCircle className="text-primary w-[18px] h-[18px] md:w-5 md:h-5" />
                          <span className="text-dark font-bold text-[10px] md:text-sm uppercase">{item}</span>
                       </div>
                    ))}
                  </div>

                  <Link to="/contact" className="cta-button bg-dark text-white hover:bg-primary transition-all shadow-xl group w-full sm:w-auto">
                    GET A SERVICE QUOTE <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
                
                <div className="lg:w-1/2 w-full relative">
                  <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative group h-[300px] md:h-[500px] lg:h-[600px]">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                  <div className="absolute -z-10 -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-full h-full bg-secondary rounded-[2rem] md:rounded-[3rem]"></div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Impact Stats */}
      <section className="py-20 md:py-32 bg-dark text-white relative">
         <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
               {[
                 { label: 'Truck Fleet', val: '42+' },
                 { label: 'Projects', val: '150+' },
                 { label: 'States', val: '24+' },
                 { label: 'Volume Moved', val: '0.5M+' }
               ].map((s, i) => (
                  <div key={i} className="text-center group">
                     <p className="text-4xl md:text-6xl font-black text-primary mb-3 group-hover:scale-110 transition-transform inline-block">{s.val}</p>
                     <p className="text-[9px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-500">{s.label}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Ultimate CTA */}
      <section className="py-20 md:py-32 bg-white text-center">
         <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-secondary p-10 md:p-24 rounded-[2.5rem] md:rounded-[4rem] shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-10 hidden sm:block">
                  <Building2 className="w-20 h-20 md:w-40 md:h-40" />
               </div>
               <h2 className="text-3xl md:text-6xl font-black text-dark tracking-tighter mb-6 md:mb-8 leading-tight">READY FOR THE NEXT <br className="hidden md:block" /> BIG MOVE?</h2>
               <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12 font-medium">Plurimmo Limited provides the scale and reliability you need to execute world-class projects.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                  <Link to="/contact" className="cta-button bg-primary text-white shadow-xl w-full sm:w-auto">REQUEST PROPOSAL</Link>
                  <Link to="/contact" className="cta-button bg-dark text-white w-full sm:w-auto">CONTACT AN EXPERT</Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Services;
