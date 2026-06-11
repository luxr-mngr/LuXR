import React from 'react';
import { Linkedin, Instagram, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import logoSvg from '../assets/logo.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const linkVariants = {
    initial: { x: 0, color: '#94a3b8' }, // slate-400
    hover: { x: 5, color: '#818cf8' }    // indigo-400
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 space-y-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <img src={logoSvg} alt="LuXR Logo" className="h-10 w-auto" />
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              XR & VR studio building the next generation of immersive experiences.
            </p>
            <p className="text-slate-600 text-xs font-medium tracking-wide">
              Unreal Engine 5 · OpenXR · Android XR · Lima, Peru
            </p>
            
            <div className="flex gap-4">
              <motion.a 
                href="https://www.linkedin.com/company/luxrdotpe/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: '#4f46e5', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/luxr.pe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: '#db2777', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Links Column 1 */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-indigo-600 inline-block"></span>
              Company
            </h4>
            <ul className="space-y-4">
              {['About', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <span>{item}</span>
                    <motion.span 
                      variants={{ initial: { opacity: 0, x: -5 }, hover: { opacity: 1, x: 0 } }}
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links Column 2 */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-indigo-600 inline-block"></span>
              Legal
            </h4>
            <ul className="space-y-4">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    variants={linkVariants}
                    initial="initial"
                    whileHover="hover"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <span>{item}</span>
                    <motion.span 
                      variants={{ initial: { opacity: 0, x: -5 }, hover: { opacity: 1, x: 0 } }}
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-slate-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-slate-500 text-xs font-medium text-center md:text-left tracking-wide">
            © {currentYear} LUXR TECHNOLOGIES SAC.
          </p>
          
          <div className="flex items-center gap-3 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800/50 backdrop-blur-sm">
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full z-10 relative"></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping absolute inset-0"></div>
            </div>
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              All Systems Operational
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
