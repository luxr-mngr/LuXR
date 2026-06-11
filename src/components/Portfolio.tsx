
import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X, Search, Layers, BarChart3, Sparkles, Box, Building2, PlugZap, Tablet, Eye, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import yuyai1 from '../assets/yuyai1.png';
import yuyai2 from '../assets/yuyai2.png';
import yuyai3 from '../assets/yuyai3.png';
import yuyai4 from '../assets/yuyai4.png';

import museum1 from '../assets/museum1.png';
import museum2 from '../assets/museum2.png';
import museum3 from '../assets/museum3.png';

import oct1 from '../assets/oct1.png';
import oct2 from '../assets/oct2.png';
import oct3 from '../assets/oct3.png';
import oct4 from '../assets/oct4.png';
import oct5 from '../assets/oct5.mp4';
import oct6 from '../assets/oct6.mp4';

import horizon1 from '../assets/horizon1.png';
import horizon2 from '../assets/horizon2.png';
import horizon3 from '../assets/horizon3.png';

import cansat1 from '../assets/cansat1.png';
import cansat2 from '../assets/cansat2.png';
import cansat3 from '../assets/cansat3.png';

const projects = [
  {
    id: 'vestigium',
    featured: true,
    icon: <Box size={20} />,
    title: 'VestigiumXR',
    subtitle: 'Peruvian Archaeological Collections in XR',
    category: 'Cultural Heritage',
    platform: 'Android XR',
    description: 'An XR platform for exploring and manipulating high-fidelity photogrammetry-digitized Peruvian archaeological artifacts that are otherwise unexhibited or physically inaccessible. VestigiumXR brings multiple Peruvian archaeological collections into immersive spatial experiences — allowing users to pick up, examine, and interact with artifacts at full scale in XR.',
    tech: ['Unreal Engine 5', 'OpenXR', 'Photogrammetry Pipeline', 'Android XR'],
    outcome: 'In active development — targeting Android XR / Project Aura',
    gradient: 'from-cyan-500 to-blue-600',
    accentColor: 'cyan',
    media: [museum1, museum2, museum3],
    challenge: 'Peruvian archaeological artifacts are largely unexhibited or physically inaccessible to the public. Museums lack scalable, engaging ways to present these collections.',
    solution: 'A full XR platform leveraging photogrammetry pipelines to digitize artifacts at high fidelity, deployed on Android XR for spatial, hands-on exploration at full scale.',
    impact: 'In active development targeting Android XR / Project Aura — bringing unexhibited Peruvian heritage to immersive spatial environments.',
  },
  {
    id: 'museo',
    featured: false,
    icon: <Building2 size={20} />,
    title: 'Museo Itinerante VR',
    subtitle: 'Mochica Cultural Heritage',
    category: 'Cultural Heritage · Meta Quest',
    platform: 'Meta Quest',
    description: 'A traveling XR experience showcasing 10 photogrammetry-digitized Mochica cultural artifacts, deployed across museums in Lima and festivals in Arequipa.',
    tech: ['Unreal Engine 5', 'Photogrammetry', 'Hand Tracking', 'OpenXR'],
    outcome: 'Live multi-city deployment — Lima & Arequipa, Peru',
    gradient: 'from-indigo-500 to-purple-600',
    accentColor: 'indigo',
    media: [museum1, museum2, museum3],
    challenge: 'Preservar y exhibir el patrimonio arqueológico de la cultura Mochica de forma accesible y atractiva para el público masivo.',
    solution: 'Experiencia inmersiva itinerante con digitalización de artefactos mediante fotogrametría. Presentado en el MALI y Hay Festival.',
    impact: 'Impacto comprobado en cientos de usuarios en ferias culturales a nivel nacional.',
  },
  {
    id: 'sockethub-plugin',
    featured: false,
    icon: <PlugZap size={20} />,
    title: 'SocketHub Plugin — YUYAY',
    subtitle: 'Custom UE5 Plugin',
    category: 'Custom UE5 Plugin · Meta Quest',
    platform: 'Meta Quest',
    description: 'A custom Unreal Engine 5 plugin enabling real-time local WebSocket communication between a command tablet and multiple Meta Quest headsets — handling level transitions, live audio, and multi-user session control.',
    tech: ['Unreal Engine 5', 'Custom UE5 Plugin', 'WebSocket', 'Blueprint/C++'],
    outcome: 'Real-time operator control over multiple simultaneous headsets from a single host device',
    gradient: 'from-blue-500 to-cyan-600',
    accentColor: 'blue',
    media: [yuyai1, yuyai2, yuyai3, yuyai4],
    challenge: 'Operators needed centralized real-time control over multiple VR headsets simultaneously during live cultural experiences.',
    solution: 'Custom UE5 plugin with WebSocket server/client architecture enabling live level transitions, audio transmission and session control from a single tablet.',
    impact: 'Real-time operator control over multiple simultaneous headsets from a single host device.',
  },
  {
    id: 'sockethub-app',
    featured: false,
    icon: <Tablet size={20} />,
    title: 'SocketHub App — YUYAY',
    subtitle: 'Companion App · Tablet',
    category: 'Companion App · Tablet',
    platform: 'Tablet',
    description: 'A companion tablet application serving as the host server for YUYAY\'s immersive cultural heritage experiences — allowing operators to manage multiple Meta Quest clients simultaneously and transmit live audio commands.',
    tech: ['WebSocket', 'Mobile App', 'Real-time Networking'],
    outcome: 'Centralized session control dashboard for multi-headset VR deployments',
    gradient: 'from-violet-500 to-indigo-600',
    accentColor: 'violet',
    media: [yuyai1, yuyai2, yuyai3, yuyai4],
    challenge: 'Managing multiple VR headsets simultaneously required an intuitive, reliable host interface for non-technical operators.',
    solution: 'A dedicated tablet app acting as WebSocket host, providing real-time session management, level control, and live audio for all connected headsets.',
    impact: 'Centralized session control dashboard enabling smooth multi-headset deployments at cultural venues.',
  },
  {
    id: 'oct',
    featured: false,
    icon: <Eye size={20} />,
    title: 'OCT VR',
    subtitle: 'Optical Coherence Tomography Interactive Experience',
    category: 'Medical Simulation · XR',
    platform: 'XR',
    description: 'A didactic XR experience that teaches users how to operate an OCT device — allowing them to interact with fictional eye models, perform simulated measurements, and visualize real-time results.',
    tech: ['Unreal Engine 5', 'Interactive Simulation', 'Blueprint', 'OpenXR'],
    outcome: 'Deployed at international academic and research events representing PUCP\'s biomedical engineering research',
    gradient: 'from-purple-500 to-pink-600',
    accentColor: 'purple',
    media: [oct1, oct2, oct3, oct4, oct5, oct6],
    challenge: 'Capacitar personal técnico en el uso de Tomógrafos de Coherencia Óptica sin riesgo de daño a equipos médicos costosos.',
    solution: 'Gemelo digital interactivo en XR con desglose mecánico y simulación educativa. Permite visualización de principios de funcionamiento del hardware en entorno seguro.',
    impact: 'Ganador de la Medalla de Oro 2025 en la Feria de Inventos de Ginebra.',
  },
  {
    id: 'horizon',
    featured: false,
    icon: <GraduationCap size={20} />,
    title: 'Horizon PUCP',
    subtitle: 'University Research Showcase',
    category: 'Institutional XR · Meta Quest',
    platform: 'Meta Quest',
    description: 'A multi-disciplinary XR showcase presenting research projects from PUCP\'s schools of Mechatronics, Psychology, Civil Engineering, Physics, and Archaeology — giving event attendees an immersive window into the university\'s research capabilities.',
    tech: ['Unreal Engine 5', 'Multi-scene Architecture', 'Blueprint'],
    outcome: 'Live deployment at multiple PUCP institutional and public events',
    gradient: 'from-emerald-500 to-cyan-600',
    accentColor: 'emerald',
    media: [horizon1, horizon2, horizon3],
    challenge: 'PUCP needed a compelling, unified showcase to present diverse research departments to the public at institutional events.',
    solution: 'Multi-scene XR architecture allowing attendees to immersively explore research from 5 different university schools in a single experience.',
    impact: 'Live deployment at multiple PUCP institutional and public events — showcasing university research capabilities to thousands of attendees.',
  },
];

const isVideo = (url: string) => ['.mp4', '.webm', '.mov'].some(e => url.toLowerCase().endsWith(e));

export const Portfolio = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const [imgIdx, setImgIdx] = useState(0);

  const featured = projects[0];
  const rest = projects.slice(1);

  const openModal = (p: typeof projects[0]) => { setSelected(p); setImgIdx(0); };
  const closeModal = () => setSelected(null);
  const nextImg = () => selected && setImgIdx(i => (i + 1) % selected.media.length);
  const prevImg = () => selected && setImgIdx(i => (i - 1 + selected.media.length) % selected.media.length);

  return (
    <section id="casos" className="min-h-screen flex items-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative py-16 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="text-indigo-400" size={13} />
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Portfolio</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Projects &amp;{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Impact</span>
          </h3>
        </div>

        {/* FEATURED CARD — VestigiumXR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => openModal(featured)}
          className="group mb-4 cursor-pointer w-full"
        >
          <div className="grid gap-4 items-center p-5 md:p-6 rounded-2xl bg-slate-800/60 border border-cyan-500/40 hover:border-cyan-400/80 hover:bg-slate-800/80 transition-all duration-200"
            style={{ gridTemplateColumns: '48px 1fr auto' }}>
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center text-cyan-400 shrink-0">
              {featured.icon}
            </div>
            {/* Content */}
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white font-bold text-sm leading-tight">{featured.title}</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-[9px] font-black uppercase tracking-wider">Featured</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{featured.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {featured.tech.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-slate-700 border border-slate-600 text-slate-400 text-[10px] font-semibold">{t}</span>
                ))}
              </div>
            </div>
            {/* Meta */}
            <div className="text-right shrink-0 flex flex-col items-end gap-2">
              <span className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-slate-500">{featured.category}</span>
              <span className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-slate-500">{featured.platform}</span>
              <ArrowRight size={16} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </motion.div>

        {/* REMAINING 5 CARDS — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {rest.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => openModal(p)}
              className="group cursor-pointer"
            >
              <div className="grid gap-4 items-center p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-500 hover:bg-slate-800/70 transition-all duration-150 h-full"
                style={{ gridTemplateColumns: '40px 1fr auto' }}>
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-slate-700/80 border border-slate-600/50 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors shrink-0">
                  {p.icon}
                </div>
                {/* Content */}
                <div className="min-w-0">
                  <span className="text-white font-bold text-sm leading-tight block mb-0.5">{p.title}</span>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{p.description}</p>
                </div>
                {/* Meta */}
                <div className="text-right shrink-0 flex flex-col items-end gap-1.5">
                  <span className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-slate-600 leading-tight">{p.category}</span>
                  <ArrowRight size={14} className="text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/10"
            >
              <button onClick={closeModal} className="absolute top-5 right-5 z-20 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                <X size={18} />
              </button>

              {/* Media */}
              <div className="md:w-3/5 h-64 md:h-auto overflow-hidden relative group bg-slate-950">
                {isVideo(selected.media[imgIdx]) ? (
                  <video src={selected.media[imgIdx]} className="w-full h-full object-contain" controls autoPlay loop muted />
                ) : (
                  <img src={selected.media[imgIdx]} alt={selected.title} className="w-full h-full object-contain" />
                )}
                {selected.media.length > 1 && (
                  <>
                    <button onClick={e => { e.stopPropagation(); prevImg(); }} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all">
                      <ChevronLeft size={18} />
                    </button>
                    <button onClick={e => { e.stopPropagation(); nextImg(); }} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all">
                      <ChevronRight size={18} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {selected.media.map((_: any, idx: number) => (
                        <button key={idx} onClick={e => { e.stopPropagation(); setImgIdx(idx); }} className={`h-1.5 rounded-full transition-all ${idx === imgIdx ? 'bg-white w-6' : 'bg-white/40 w-1.5'}`} />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Detail */}
              <div className="md:w-2/5 p-5 md:p-8 overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-950">
                <span className={`text-[10px] font-black uppercase tracking-widest mb-3 block bg-clip-text text-transparent bg-gradient-to-r ${selected.gradient}`}>{selected.category}</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">{selected.title}</h3>
                <p className="text-slate-500 text-xs mb-6">{selected.subtitle}</p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className={`shrink-0 w-9 h-9 bg-gradient-to-br ${selected.gradient} rounded-lg flex items-center justify-center text-white`}><Search size={15} /></div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Challenge</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selected.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className={`shrink-0 w-9 h-9 bg-gradient-to-br ${selected.gradient} rounded-lg flex items-center justify-center text-white`}><Layers size={15} /></div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Solution</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selected.solution}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className={`shrink-0 w-9 h-9 bg-gradient-to-br ${selected.gradient} rounded-lg flex items-center justify-center text-white`}><BarChart3 size={15} /></div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">Outcome</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{selected.impact}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.tech.map((t: string) => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-white/70 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
