
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Civil Engineering',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: 'Civil Engineering', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-24">
      {/* Hero Banner */}
      <section className="bg-dark py-20 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h4 className="text-primary font-black uppercase tracking-[0.5em] text-[10px] md:text-xs mb-4">Get In Touch</h4>
          <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter mb-4">QUICK CONNECT.</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-sm md:text-base">Ready to discuss your next project? Our team is available for expert consultations.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
            {/* Contact Info Side */}
            <div className="lg:w-1/3 w-full">
              <span className="text-primary font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4 block">Our Channels</span>
              <h2 className="text-3xl md:text-4xl font-black text-dark mb-8 md:mb-10 leading-tight">We're always ready to help you</h2>
              
              <div className="space-y-6 md:space-y-10">
                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    {/* Fix: replaced md:size with Tailwind classes */}
                    <MapPin className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-dark text-base md:text-lg mb-1">Our Address</h5>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">33b Audu Ephekhia Blvd, Off Admiralty Way, Lekki Phase 1, Lagos.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    {/* Fix: replaced md:size with Tailwind classes */}
                    <Phone className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-dark text-base md:text-lg mb-1">Phone Number</h5>
                    <p className="text-sm md:text-base text-gray-500">+234 912 222 2643</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    {/* Fix: replaced md:size with Tailwind classes */}
                    <Mail className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-dark text-base md:text-lg mb-1">Email Address</h5>
                    <p className="text-sm md:text-base text-gray-500">support@plurimmo.com.ng</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    {/* Fix: replaced md:size with Tailwind classes */}
                    <Clock className="text-primary w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-dark text-base md:text-lg mb-1">Working Hours</h5>
                    <p className="text-sm md:text-base text-gray-500">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-2/3 w-full bg-secondary p-8 md:p-16 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 relative">
              <h3 className="text-2xl md:text-3xl font-black text-dark mb-8 md:mb-10 uppercase tracking-tight">Send us a message</h3>
              
              {isSubmitted && (
                <div className="mb-8 p-4 md:p-6 bg-green-100 border border-green-200 text-green-800 rounded-xl flex items-center animate-fade-in-up">
                  {/* Fix: replaced md:size with Tailwind classes */}
                  <CheckCircle className="mr-3 text-green-600 w-5 h-5 md:w-6 md:h-6" />
                  <span className="font-bold text-xs md:text-sm">Message sent successfully!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-dark uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full bg-white border border-gray-200 h-12 md:h-14 px-4 md:px-6 rounded-xl focus:outline-none focus:border-primary text-sm" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-dark uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full bg-white border border-gray-200 h-12 md:h-14 px-4 md:px-6 rounded-xl focus:outline-none focus:border-primary text-sm" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-dark uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..." 
                    className="w-full bg-white border border-gray-200 h-12 md:h-14 px-4 md:px-6 rounded-xl focus:outline-none focus:border-primary text-sm" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-dark uppercase tracking-wider">Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 h-12 md:h-14 px-4 md:px-6 rounded-xl focus:outline-none focus:border-primary text-sm"
                  >
                    <option>Civil Engineering</option>
                    <option>Logistics & Haulage</option>
                    <option>Equipment Rental</option>
                    <option>Vessel Scrapping</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] md:text-xs font-bold text-dark uppercase tracking-wider">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="How can we help you?" 
                    className="w-full bg-white border border-gray-200 p-4 md:p-6 rounded-xl focus:outline-none focus:border-primary text-sm resize-none" 
                    required
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="cta-button bg-primary text-white rounded-md w-full md:w-auto hover:bg-dark group">
                    SEND MESSAGE <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="h-[350px] md:h-[500px] w-full bg-gray-200 relative">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.724771960205!2d3.4735399!3d6.435787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf453c9f2809d%3A0x867331572a1f0a5!2sAdmiralty%20Way%2C%20Lekki%20Phase%201%2C%20Lagos!5e0!3m2!1sen!2sng!4v1715600000000!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            className="w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-700"
          ></iframe>
      </section>
    </div>
  );
};

export default Contact;
