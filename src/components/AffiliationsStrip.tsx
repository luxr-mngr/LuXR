
import React from 'react';
import pucpLogo from '../assets/LOGOS/PUCP-LOGO.png';
import ueLogo from '../assets/LOGOS/UE-LOGO.png';
import avatarLogo from '../assets/LOGOS/GRUPOAVATOR-LOGO.jpg';
import metaLogo from '../assets/LOGOS/meta-quest-1.svg';
import androidXrLogo from '../assets/LOGOS/Android-XR-logo.jpg';

const affiliations = [
  { name: 'PUCP',              src: pucpLogo,       whiteBg: false },
  { name: 'Unreal Engine 5',   src: ueLogo,         whiteBg: false },
  { name: 'Grupo Avatar PUCP', src: avatarLogo,     whiteBg: true  },
  { name: 'Meta Quest',        src: metaLogo,       whiteBg: false },
  { name: 'Android XR',        src: androidXrLogo,  whiteBg: true  },
];

export const AffiliationsStrip = () => {
  return (
    <div className="bg-slate-950 border-y border-white/8 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.35em] text-slate-600 mb-8">
          Affiliated With &amp; Built For
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {affiliations.map((a) => (
            <div
              key={a.name}
              className="opacity-75 hover:opacity-100 transition-opacity duration-300"
              title={a.name}
            >
              <img
                src={a.src}
                alt={a.name}
                className="h-14 w-auto max-w-[180px] object-contain"
                style={{
                  filter: a.whiteBg
                    ? 'invert(1) grayscale(1) brightness(1.8)'
                    : 'brightness(0) invert(1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
