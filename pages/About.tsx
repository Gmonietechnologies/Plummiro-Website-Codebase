
import React from 'react';
import { Target, ShieldCheck, Award, Users2, History, ChevronRight } from 'lucide-react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 overflow-hidden">
      {/* Dynamic Banner */}
      <section className="relative py-20 md:py-32 bg-dark flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mb-4">Since 2023</h4>
          <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-4">OUR LEGACY.</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-sm md:text-base">Unlocking infrastructure potential with precision and passion.</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
            <div className="lg:w-1/2 w-full">
              <div className="bg-secondary p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] relative">
                <History className="text-primary mb-6 md:mb-8 w-12 h-12 md:w-16 md:h-16" />
                <h2 className="text-3xl md:text-5xl font-black text-dark tracking-tighter mb-6 md:mb-8 leading-tight">Decades of Building Nigeria's Backbone.</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  Registered under CAC number <strong>6940500</strong>, Plurimmo Limited emerged as a focused entity to consolidate decades of collective director experience in the marine and civil engineering sectors.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-3 text-dark font-black text-xs md:text-sm">
                    <ChevronRight className="text-primary w-4 h-4 md:w-5 md:h-5" />
                    <span>Established Infrastructure Authority</span>
                  </div>
                  <div className="flex items-center space-x-3 text-dark font-black text-xs md:text-sm">
                    <ChevronRight className="text-primary w-4 h-4 md:w-5 md:h-5" />
                    <span>$420M Project Capability</span>
                  </div>
                  <div className="flex items-center space-x-3 text-dark font-black text-xs md:text-sm">
                    <ChevronRight className="text-primary w-4 h-4 md:w-5 md:h-5" />
                    <span>Strategic West African Logistics</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <img src="/assets/DIRECTOR LED VISION Image.png" alt="Engineer" className="rounded-2xl md:rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full" />
                <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-primary p-6 md:p-10 rounded-xl md:rounded-2xl shadow-xl">
                  <Users2 className="text-white mb-3 md:mb-4 w-8 h-8 md:w-10 md:h-10" />
                  <p className="text-white font-black text-base md:text-xl leading-none uppercase">DIRECTOR <br className="hidden md:block" /> LED VISION</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To deliver innovative and sustainable infrastructure solutions while exceeding client expectations through technical expertise and HSE commitment.', color: 'bg-primary' },
              { icon: ShieldCheck, title: 'Our Vision', desc: 'To be a leading provider of integrated infrastructure solutions in Nigeria, driving sustainable development and growth across Africa.', color: 'bg-dark' },
              { icon: Award, title: 'Core Values', desc: 'Integrity, Innovation, Teamwork and Customer Satisfaction form the bedrock of every decision we make and every project we build.', color: 'bg-blue-600' }
            ].map((v, i) => (
              <div key={i} className="group bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${v.color} rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg group-hover:rotate-12 transition-transform`}>
                  {/* Fix: replaced md:size with Tailwind classes */}
                  <v.icon className="text-white w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-dark mb-4 md:mb-6 tracking-tighter">{v.title}</h3>
                <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-6">Leadership</h4>
            <h2 className="text-3xl md:text-6xl font-black text-dark tracking-tighter mb-6 md:mb-8">The Minds Behind Plurimmo.</h2>
            <p className="text-gray-500 font-medium text-base md:text-lg">Our leadership team brings together over three decades of combined expertise in architecture, engineering and leadership.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="mb-6 md:mb-8 relative overflow-hidden rounded-[2rem] md:rounded-[3rem] aspect-square shadow-xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-xl md:text-2xl font-black text-dark mb-2 tracking-tight">{member.name}</h4>
                <p className="text-primary font-black uppercase text-[10px] md:text-xs tracking-widest mb-4 md:mb-6">{member.role}</p>
                <p className="text-gray-500 text-xs md:text-sm max-w-xs mx-auto leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 md:py-32 bg-dark text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 md:mb-10 leading-tight">Compliance & <br className="hidden md:block" /> Verification.</h2>
              <p className="text-gray-400 mb-8 md:mb-12 text-base md:text-lg">We maintain the highest levels of transparency and regulatory compliance. Our credentials are available for partner verification.</p>
              <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-sm mx-auto lg:mx-0">
                <div className="border-l-2 border-primary pl-4 md:pl-6 py-2 text-left">
                  <p className="text-2xl md:text-3xl font-black text-white">CAC</p>
                  <p className="text-[9px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">Registered Entitity</p>
                </div>
                <div className="border-l-2 border-primary pl-4 md:pl-6 py-2 text-left">
                  <p className="text-2xl md:text-3xl font-black text-white">ISO</p>
                  <p className="text-[9px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">Quality Standards</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 group">
                <div className="border-2 border-dashed border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] py-20 md:py-32 text-center group-hover:border-primary transition-colors px-6">
                  <Award className="mx-auto text-primary mb-6 w-16 h-16 md:w-20 md:h-20" />
                  <p className="text-white font-black text-lg md:text-xl tracking-tighter uppercase">CERTIFICATE OF REGISTRATION</p>
                  <p className="text-gray-500 uppercase tracking-widest text-[10px] md:text-xs font-bold mt-2">Plurimmo Limited - RC 6940500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
