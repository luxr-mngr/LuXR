
import React from 'react';

const stats = [
  { value: '6+',   label: 'XR Experiences Shipped' },
  { value: '1',    label: 'Authorized UE5 Instructor' },
  { value: '2',    label: 'Countries Deployed' },
  { value: '500+', label: 'Users in XR Experiences' },
];

export const StatsStrip = () => {
  return (
    <div className="bg-slate-950 border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-6 px-4 gap-1
                ${i % 2 !== 0 ? 'border-l border-white/10' : ''}
                ${i < 2 ? 'border-b border-white/10 md:border-b-0' : ''}
                md:border-l md:first:border-l-0
              `}
            >
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent leading-none">
                {stat.value}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
