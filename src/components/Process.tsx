
import React from 'react';
import { motion } from 'framer-motion';

// Simple Icons CDN helper — returns a white logo img
const SI = ({ slug, label }: { slug: string; label: string }) => (
  <img
    src={`https://cdn.simpleicons.org/${slug}/ffffff`}
    alt={label}
    className="w-5 h-5 object-contain"
  />
);

// Fallback custom SVG for techs without a Simple Icons entry
const OpenXRIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75-7.5 3.75-7.5-3.75L12 4.18zM4 8.82l7 3.5v6.88L4 15.7V8.82zm9 10.38v-6.88l7-3.5v6.88l-7 3.5z"/>
  </svg>
);

const PhotogrammetryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2M10 2H14L15.5 4H19A2 2 0 0 1 21 6V18A2 2 0 0 1 19 20H5A2 2 0 0 1 3 18V6A2 2 0 0 1 5 4H8.5L10 2Z"/>
  </svg>
);

const primaryStack = [
  { name: 'Unreal Engine 5',  icon: <SI slug="unrealengine"  label="Unreal Engine 5" /> },
  { name: 'OpenXR',           icon: <OpenXRIcon /> },
  { name: 'Android XR',       icon: <SI slug="android"       label="Android XR" /> },
  { name: 'Meta Quest',       icon: <SI slug="meta"          label="Meta Quest" /> },
  { name: 'Blueprint / C++',  icon: <SI slug="cplusplus"     label="C++" /> },
  { name: 'Vulkan',           icon: <SI slug="vulkan"        label="Vulkan" /> },
  { name: 'Photogrammetry',   icon: <PhotogrammetryIcon /> },
];

const secondaryStack = [
  { name: 'React',            slug: 'react' },
  { name: 'Node.js',          slug: 'nodedotjs' },
  { name: 'Swift',            slug: 'swift' },
  { name: 'Kotlin',           slug: 'kotlin' },
  { name: 'WebXR',            slug: null },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Process = () => {
  return (
    <section id="proceso" className="min-h-screen flex items-center bg-slate-950 py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-xs mb-3 italic">Tech Stack</p>
          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">Technologies We Use</h3>
        </div>

        {/* Primary Tier */}
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 text-center">Core Technologies</p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {primaryStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-300 hover:bg-slate-700 hover:border-cyan-400/60 transition-all duration-300 cursor-default shadow-lg shadow-black/20"
              >
                <span className="text-cyan-400">{tech.icon}</span>
                <span className="font-bold text-sm whitespace-nowrap">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6 max-w-lg mx-auto">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Also</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* Secondary Tier */}
        <div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {secondaryStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-300 transition-all duration-300 cursor-default"
              >
                {tech.slug && (
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}/94a3b8`}
                    alt={tech.name}
                    className="w-4 h-4 object-contain"
                  />
                )}
                <span className="font-semibold text-xs">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
