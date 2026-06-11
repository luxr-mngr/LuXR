
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// 👇 CONFIGURA TUS LINKS AQUÍ
const CONTACT_CONFIG = {
  whatsapp: {
    url: 'https://wa.me/51946411109', // Cambia este número de WhatsApp
    name: 'Marcelo Jara',
    initials: 'MJ',
    title: 'Direct Contact',
    description: "Let's talk about your project"
  }
};

export const Contact = () => {
  return (
    <section id="contacto" className="min-h-screen flex items-center bg-slate-950 relative py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="bg-slate-900 p-5 md:p-16 relative overflow-hidden text-white shadow-2xl flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-600/5 blur-[120px]"></div>
          
          <div className="max-w-4xl w-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/20 text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-6 italic border border-indigo-500/30"
            >
              Let's Build Together
            </motion.div>

            <h3 className="text-3xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.95]">
              Start your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 italic pl-3 pr-3">XR</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 italic pr-3">Project.</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
              <motion.a 
                href={CONTACT_CONFIG.whatsapp.url}
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="relative group block md:col-span-2 mx-auto w-full max-w-2xl"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative flex flex-col sm:flex-row items-center gap-6 bg-slate-800/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 text-left">
                <div className="relative shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg">{CONTACT_CONFIG.whatsapp.initials}</div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-slate-800 rounded-full animate-pulse shadow-md"></div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.15em] mb-1">{CONTACT_CONFIG.whatsapp.name}</h4>
                    <p className="text-xl md:text-2xl font-black text-white tracking-wide mb-2">{CONTACT_CONFIG.whatsapp.title}</p>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-xs font-medium">{CONTACT_CONFIG.whatsapp.description}</span>
                    </div>
                  </div>
                  <div className="shrink-0 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#18d185] transition-all">
                    <MessageCircle size={24} className="text-indigo-400 group-hover:text-white" />
                  </div>
                </div>
              </motion.a>

              <div className="md:col-span-2 flex justify-center mt-2">
                {/* Social Media moved to Footer */}
              </div>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em] italic">Exclusive XR engineering for technology visionaries.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
