
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.5) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.5) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.5) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#18d185]/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen">
          {/* Main Content - Centered Vertically */}
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6"
            >
              <Sparkles className="text-[#18d185]" size={14} fill="currentColor" />
              <span className="text-xs font-bold text-white/90">
                Web · Mobile · XR
              </span>
            </motion.div>

            {/* Main Headline - Smaller */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-5 leading-[1.05] tracking-tight"
            >
              <span className="text-white">Sistemas que hacen</span>
              <br />
              <span className="relative inline-block mt-1">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-[#18d185] animate-gradient-flow">
                  vender y escalar
                </span>
              </span>
            </motion.h1>

            {/* Subheadline - Smaller */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-medium"
            >
              Soluciones digitales completas: <span className="text-white font-bold">Web, Apps y XR</span> integradas para resultados reales
            </motion.p>

            {/* CTAs - Smaller */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center"
            >
              <button 
                onClick={() => scrollToSection('contacto')}
                className="group relative px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden text-sm"
              >
                <span className="relative z-10">Agendar demo</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button 
                onClick={() => scrollToSection('casos')}
                className="px-8 py-3.5 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm"
              >
                Ver casos
              </button>
            </motion.div>
          </div>

          {/* Visual Product Showcase - Compact - Positioned Absolutely */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          >
            {/* Center - VR Headset (HERO ELEMENT) */}
            <motion.div
              className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 z-30"
              animate={{ 
                y: [0, -15, 0],
                rotateY: [0, 8, 0, -8, 0],
                rotateX: [0, 3, 0, -3, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative w-full h-full group cursor-pointer">
                {/* Glassmorphism Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">
                  {/* VR Headset */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl md:text-8xl filter drop-shadow-2xl">🥽</div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-[#18d185]/30 opacity-60"></div>
                  
                  {/* Animated Border Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-[#18d185] rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Tech Label */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                    <span className="text-white font-bold text-xs">VR / MR / AR</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Top Right - Mobile App (SMALLER) */}
            <motion.div
              className="absolute top-8 right-4 md:right-16 w-32 h-56 md:w-40 md:h-64 z-20"
              animate={{ 
                y: [0, -12, 0],
                rotate: [10, 14, 10],
                x: [0, 8, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="relative w-full h-full group cursor-pointer">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] shadow-2xl border-[5px] border-slate-900 overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-slate-950 rounded-b-2xl z-10"></div>
                  
                  {/* Screen Content */}
                  <div className="absolute inset-1.5 bg-white rounded-[1.5rem] overflow-hidden">
                    <div className="p-4 pt-8 space-y-3">
                      <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-3/4"></div>
                      <div className="h-2 bg-slate-200 rounded-full w-full"></div>
                      <div className="h-2 bg-slate-200 rounded-full w-5/6"></div>
                      
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg"></div>
                        <div className="h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl shadow-lg"></div>
                        <div className="h-16 bg-gradient-to-br from-[#18d185] to-green-600 rounded-xl shadow-lg col-span-2"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2rem] blur-lg opacity-40 group-hover:opacity-60 transition-opacity -z-10"></div>
                </div>
                
                {/* Tech Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 whitespace-nowrap">
                  <span className="text-white font-bold text-[10px]">Mobile Apps</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom Left - Dashboard (SMALLER) */}
            <motion.div
              className="absolute bottom-8 left-4 md:left-16 w-48 h-36 md:w-56 md:h-40 z-10"
              animate={{ 
                y: [0, 12, 0],
                rotate: [-8, -11, -8],
                x: [0, -8, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="relative w-full h-full group cursor-pointer">
                {/* Browser Window */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden">
                  {/* Browser Bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-slate-100 border-b border-slate-200 flex items-center px-2 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-3 pt-8 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#18d185] to-green-600 rounded-lg shadow-lg"></div>
                      <div className="flex-1 space-y-1">
                        <div className="h-2 bg-slate-300 rounded-full w-3/4"></div>
                        <div className="h-1.5 bg-slate-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      <div className="h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-end p-1.5">
                        <div className="w-full h-3/4 bg-blue-500 rounded-sm shadow-sm"></div>
                      </div>
                      <div className="h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-end p-1.5">
                        <div className="w-full h-4/5 bg-indigo-500 rounded-sm shadow-sm"></div>
                      </div>
                      <div className="h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-end p-1.5">
                        <div className="w-full h-2/3 bg-[#18d185] rounded-sm shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#18d185] to-blue-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
                </div>
                
                {/* Tech Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 whitespace-nowrap">
                  <span className="text-white font-bold text-[10px]">Web Apps</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% auto;
          animation: gradient-flow 4s ease infinite;
        }
      `}</style>
    </section>
  );
};
