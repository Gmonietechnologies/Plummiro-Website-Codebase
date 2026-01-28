
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  Construction, 
  Truck,
  Wrench,
  Anchor,
  Star,
  Quote
} from 'lucide-react';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative h-[90vh] md:h-screen flex items-center overflow-hidden bg-dark">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-40 md:opacity-50"
          >
            <source 
              src="https://player.vimeo.com/external/494252666.hd.mp4?s=2f5c786729007c08e5033c46b5d9095642d991b1&profile_id=175&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
          </video>
        </div>

        {/* Text Readability Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl animate-fade-in-up mt-12 md:mt-0">
            <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30 mb-6 md:mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-widest">Engineering Excellence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] md:leading-[0.9] mb-6 md:mb-8">
              UNLOCKING <br className="hidden sm:block" />
              <span className="text-primary">GREAT POTENTIAL</span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-2xl font-medium">
              Plurimmo Limited is a titan of civil engineering, strategic logistics and marine services, unlocking the true economic potential of West Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link to="/services" className="cta-button bg-primary text-white shadow-[0_20px_40px_-10px_rgba(155,103,204,0.5)] w-full sm:w-auto">
                OUR SERVICES <ArrowRight className="ml-2" />
              </Link>
              <Link to="/contact" className="cta-button border-2 border-white/20 text-white backdrop-blur-sm hover:bg-white hover:text-dark w-full sm:w-auto">
                DISCUSS A PROJECT
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Stats Bar - Optimized for Mobile (Vertical/Horizontal Grid) */}
        <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/10 z-20">
           <div className="container mx-auto px-4 md:px-12 py-6 md:py-8 grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-center text-white">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-1 md:space-y-0 md:space-x-4">
                 <span className="text-2xl md:text-4xl font-black text-primary">N46B</span>
                 <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Coastal Road <br className="hidden md:block"/> Logistics</span>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-1 md:space-y-0 md:space-x-4 border-l border-white/10 pl-6 md:pl-0 md:border-l-0">
                 <span className="text-2xl md:text-4xl font-black text-primary">$150M</span>
                 <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">Active Joint <br className="hidden md:block"/> Ventures</span>
              </div>
              <div className="hidden lg:flex items-center space-x-4">
                 <span className="text-4xl font-black text-primary">30+</span>
                 <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Years of Leaders <br/> Experience</span>
              </div>
           </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center">
            <div className="lg:w-1/2 relative w-full">
              <div className="relative z-10 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1591768793355-74d7c5040179?auto=format&fit=crop&q=80" 
                  alt="Sinotruk 30-ton tipper truck" 
                  className="w-full h-[300px] md:h-[550px] object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="absolute -top-6 -left-6 md:-top-12 md:-left-12 w-32 h-32 md:w-64 md:h-64 bg-secondary rounded-full -z-10 opacity-50"></div>
              <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-dark p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl z-20">
                <p className="text-primary font-black text-4xl md:text-6xl mb-1">98%</p>
                <p className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest">Client Satisfaction</p>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4 md:mb-6 flex items-center">
                <span className="w-8 md:w-10 h-0.5 bg-primary mr-3 md:mr-4"></span>
                Who We Are
              </h4>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-dark mb-6 md:mb-8 leading-tight tracking-tighter">Leading with Integrity and Precision.</h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed font-medium">
                Plurimmo Limited isn't just a construction firm; we are strategic partners in national development. From complex civil engineering to multinational logistics, we bridge the gap between vision and reality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                {[
                  { title: 'Quality Assurance', desc: 'ISO 9001:2015 Standards' },
                  { title: 'HSE Focus', desc: 'Zero-incident environment' },
                  { title: 'Expert Team', desc: 'Global certifications' },
                  { title: 'Modern Fleet', desc: 'State-of-the-art machinery' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                       {/* Fix: replaced md:size with Tailwind classes */}
                       <CheckCircle2 className="text-primary w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h5 className="font-black text-dark text-xs md:text-sm uppercase">{item.title}</h5>
                      <p className="text-[10px] md:text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="cta-button bg-dark text-white rounded-md inline-flex w-full sm:w-auto">
                LEARN OUR STORY <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-20 md:py-32 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Strategic Value</h4>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Why Global Leaders <br className="hidden md:block"/> Trust Plurimmo.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="group bg-white/5 border border-white/10 p-8 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] hover:bg-primary transition-all duration-500 cursor-default">
              {/* Fix: replaced md:size with Tailwind classes */}
              <Globe className="text-primary group-hover:text-white mb-6 md:mb-8 transition-colors w-8 h-8 md:w-12 md:h-12" />
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4">International Partnership</h3>
              <p className="text-sm md:text-base text-gray-400 group-hover:text-white/90 leading-relaxed transition-colors">
                Proud partner of <strong>2iUK Ltd</strong>, co-executing massive $90 million infrastructure developments that redefine urban living.
              </p>
            </div>

            <div className="group bg-primary p-8 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl md:scale-105 z-10 cursor-default">
              {/* Fix: replaced md:size with Tailwind classes */}
              <TrendingUp className="text-white mb-6 md:mb-8 w-8 h-8 md:w-12 md:h-12" />
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4">High-Scale Logistics</h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                Currently managing a <strong>N46 Billion</strong> haulage project for <strong>Hitech Construction</strong> on the Lagos-Calabar Coastal Road.
              </p>
            </div>

            <div className="group bg-white/5 border border-white/10 p-8 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] hover:bg-primary transition-all duration-500 cursor-default">
              {/* Fix: replaced md:size with Tailwind classes */}
              <ShieldCheck className="text-primary group-hover:text-white mb-6 md:mb-8 transition-colors w-8 h-8 md:w-12 md:h-12" />
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4">Unmatched Compliance</h3>
              <p className="text-sm md:text-base text-gray-400 group-hover:text-white/90 leading-relaxed transition-colors">
                Rigorous adherence to international safety protocols and local regulatory requirements ensures project longevity and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick View */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <div className="max-w-2xl mb-6 md:mb-0">
              <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Our Expertise</h4>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-dark tracking-tighter">Comprehensive Solutions.</h2>
            </div>
            <Link to="/services" className="text-primary font-black uppercase tracking-widest text-[10px] md:text-sm flex items-center group">
               EXPLORE ALL <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: Construction, 
                title: 'Civil Engineering', 
                desc: 'We offer roads, bridges and infrastructure development in West Africa.',
                color: 'bg-blue-500' 
              },
              { 
                icon: Truck, 
                title: 'Logistics & Haulage', 
                desc: 'We handle strategic transportation across West Africa with ease.',
                color: 'bg-primary' 
              },
              { 
                icon: Wrench, 
                title: 'Equipment Rental', 
                desc: 'We have modern fleet of trucks and heavy construction machinery for rent.',
                color: 'bg-dark' 
              },
              { 
                icon: Anchor, 
                title: 'Vessel Scrapping', 
                desc: 'We offer vessel scrapping and recycling of decommissioned vessels in Nigeria.',
                color: 'bg-purple-400' 
              },
            ].map((s, i) => (
              <div key={i} className="group relative p-8 md:p-10 rounded-2xl md:rounded-3xl border border-gray-100 hover:border-primary transition-all duration-500 hover:shadow-xl text-center flex flex-col items-center">
                 <div className={`w-16 h-16 md:w-20 md:h-20 ${s.color} rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
                    {/* Fix: replaced md:size with Tailwind classes */}
                    <s.icon className="text-white w-7 h-7 md:w-9 md:h-9" />
                 </div>
                 <h3 className="text-lg md:text-xl font-black text-dark mb-3 md:mb-4">{s.title}</h3>
                 <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
           <div className="text-center mb-12 md:mb-16">
              <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Portfolio</h4>
              <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter">Our Landmark Projects.</h2>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {PROJECTS.map((project, idx) => (
                <div key={idx} className="group relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden aspect-[4/5] shadow-xl bg-dark">
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-6 md:p-10">
                      <p className="text-primary font-black uppercase text-[10px] tracking-widest mb-2">{project.category}</p>
                      <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{project.title}</h3>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 p-10 md:p-20 opacity-5">
           {/* Fix: replaced md:size with Tailwind classes */}
           <Quote className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
           <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8 md:mb-10">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary w-5 h-5 md:w-6 md:h-6" />
                 ))}
              </div>
              <div className="text-center italic text-xl md:text-4xl font-black text-dark tracking-tight leading-snug mb-10 md:mb-12">
                "Plurimmo's capacity to deliver logistics services to the Lagos-Calabar coastal road project has been transformative. Their fleet reliability and strategic coordination are unmatched in the West African market."
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent mb-4 border-2 border-primary overflow-hidden">
                    <img src="https://picsum.photos/id/177/100/100" alt="Client" />
                 </div>
                 <h5 className="font-black text-dark uppercase tracking-widest text-[10px] md:text-sm">Project Director</h5>
                 <p className="text-gray-500 font-bold text-[9px] md:text-xs uppercase tracking-widest">Hitech Construction / Termal Ltd</p>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-6">Support</h4>
              <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter mb-6 md:mb-8">Got Questions? <br className="hidden md:block"/> We Have Answers.</h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10">
                Transparent communication is at the core of our business. If you don't find what you're looking for, our consultants are ready to help.
              </p>
              <div className="bg-dark p-6 md:p-8 rounded-2xl md:rounded-3xl text-white inline-block w-full sm:w-auto">
                 <p className="font-bold mb-2 text-sm md:text-base">Call for urgent inquiries:</p>
                 <p className="text-xl md:text-2xl font-black text-primary">+234 912 222 2643</p>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              {[
                { q: 'What is Plurimmo’s primary area of focus?', a: 'We specialize in high-capacity civil engineering, including road and bridge construction, and large-scale haulage logistics for national projects.' },
                { q: 'Is Plurimmo equipped for international projects?', a: 'Absolutely. Through our JV with 2iUK Ltd and our West African logistics network, we are fully capable of executing multi-national infrastructure projects.' },
                { q: 'What safety standards do you follow?', a: 'We adhere to global HSE guidelines, ensuring zero-incident project sites and comprehensive risk management.' },
                { q: 'How does Plurimmo ensure project timelines?', a: 'We utilize advanced project management frameworks and maintain direct control over our logistics and equipment assets to mitigate supply chain risks.' },
                { q: 'What is the process for requesting a proposal?', a: 'You can initiate a request through our contact portal. We typically conduct a feasibility review and preliminary site assessment within 48 to 72 hours.' }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl md:rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                  <summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-black text-dark list-none text-sm md:text-base">
                    {faq.q}
                    <span className="w-6 h-6 md:w-8 md:h-8 bg-secondary rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                      <ArrowRight size={14} className="rotate-90" />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-500 font-medium text-xs md:text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bold CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
          <h2 className="text-3xl md:text-7xl font-black text-white mb-8 md:mb-10 tracking-tighter leading-tight md:leading-none">READY TO START YOUR <br className="hidden md:block" /> NEXT PROJECT?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link to="/contact" className="cta-button bg-primary text-dark rounded-md w-full md:w-auto hover:bg-dark hover:text-white">
               REQUEST A CONSULTATION <ArrowRight className="ml-2" />
            </Link>
            <Link to="/services" className="cta-button border-2 border-white text-white rounded-md w-full md:w-auto hover:bg-white hover:text-dark">
               VIEW OUR CAPABILITIES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
