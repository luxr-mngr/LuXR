import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Linkedin, ExternalLink } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const team = [
  {
    name: 'Marcelo Jara',
    role: 'Co-Founder & XR Lead',
    bio: 'Authorized Unreal Engine 5 instructor with hands-on experience shipping XR experiences across cultural heritage, education, and enterprise sectors.',
    initials: 'MJ',
    color: 'from-cyan-500 to-blue-600',
    linkedin: 'https://www.linkedin.com/company/luxrdotpe/',
    tags: ['Unreal Engine 5', 'OpenXR', 'Blueprint/C++'],
  },
  {
    name: 'LuXR Team',
    role: 'Engineers & Designers',
    bio: 'A multidisciplinary crew of 3D artists, software engineers, and interaction designers building next-generation immersive experiences in Lima, Peru.',
    initials: 'LX',
    color: 'from-indigo-500 to-violet-600',
    linkedin: 'https://www.linkedin.com/company/luxrdotpe/',
    tags: ['Photogrammetry', 'React', 'Android XR'],
  },
];

export const Team = () => {
  return (
    <section id="team" className="min-h-screen flex items-center bg-slate-50/50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-cyan-400 text-[10px] font-black tracking-widest uppercase mb-4 border border-white/10">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            People Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">
              LuXR
            </span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl text-sm leading-relaxed">
            A focused team of XR specialists building production-grade immersive experiences with Unreal Engine 5 and Android XR.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-black text-lg shadow-lg`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base">{member.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{member.role}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.bio}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-500 transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn
                <ExternalLink size={12} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex items-center gap-4"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wide hover:bg-indigo-600 transition-colors"
          >
            Work With Us
            <ExternalLink size={13} />
          </a>
          <a
            href="https://www.linkedin.com/company/luxrdotpe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-600 text-xs font-bold tracking-wide hover:border-indigo-400 hover:text-indigo-500 transition-colors"
          >
            <Linkedin size={13} />
            Follow on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};
