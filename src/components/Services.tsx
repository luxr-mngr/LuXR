
import React from 'react';
import { Glasses, ScanLine, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services = () => {
  return (
    <section id="soluciones" className="min-h-screen flex items-center bg-slate-50/50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 w-full">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-xs mb-3 italic">Capabilities &amp; Tech Stack</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">What We Build</h3>
        </div>

        {/* Grid: lead card on top, two smaller below */}
        <div className="flex flex-col gap-4">

          {/* CARD 1 — Lead (bigger) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="relative overflow-hidden p-7 md:p-8 bg-white rounded-3xl soft-shadow border border-slate-100 group transition-all duration-500"
          >
            <div className="absolute -right-6 -top-6 w-40 h-40 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full group-hover:opacity-60 transition-all" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-6">
              <div className="shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                <Glasses size={32} />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 block">
                  Unreal Engine 5 · OpenXR · Android XR · Meta Quest
                </span>
                <h4 className="text-2xl md:text-3xl font-black mb-2 text-slate-900">XR &amp; VR Experiences</h4>
                <p className="text-slate-500 leading-relaxed font-medium max-w-3xl">
                  Immersive spatial experiences built in Unreal Engine 5 with OpenXR. From cultural heritage platforms to enterprise training simulations — deployed on Meta Quest, Android XR, and wired XR glasses.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARDS 2 & 3 — Secondary (side by side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden p-7 bg-white rounded-3xl soft-shadow border border-slate-100 group transition-all duration-500"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full group-hover:opacity-60 transition-all" />
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                <ScanLine size={24} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">
                Photogrammetry · 3D Scanning · UE5 Pipeline
              </span>
              <h4 className="text-xl font-black mb-2 text-slate-900">3D Digitization &amp; Spatial Content</h4>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                End-to-end photogrammetry pipelines for cultural artifacts, architecture, and physical objects. We digitize, reconstruct, and deploy into interactive XR environments.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden p-7 bg-white rounded-3xl soft-shadow border border-slate-100 group transition-all duration-500"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full group-hover:opacity-60 transition-all" />
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                <Smartphone size={24} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">
                iOS · Android · React · Node
              </span>
              <h4 className="text-xl font-black mb-2 text-slate-900">Apps &amp; Web</h4>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                Native mobile apps and scalable web platforms. Built to support and extend XR deployments — companion apps, dashboards, control interfaces.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
