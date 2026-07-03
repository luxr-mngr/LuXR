import { useState, useCallback } from 'react';

export interface Tweaks {
  theme: 'Midnight' | 'Daylight';
  accent: string;
  displayFont: string;
  tagline: string;
  tagStyle: string;
  heroMotion: string;
  eyebrowStyle: string;
  lightIntensity: number;
}

export const DEFAULTS: Tweaks = {
  theme: 'Daylight',
  accent: 'Electric',
  displayFont: 'Cormorant',
  tagline: 'Light into worlds.',
  tagStyle: 'Underline',
  heroMotion: 'Headline shimmer',
  eyebrowStyle: 'Wide',
  lightIntensity: 90,
};

export const TAGLINES = [
  'Light into worlds.',
  'Step into the unreal.',
  'Reality, reimagined.',
  'Enter elsewhere.',
  'We build immersive XR.',
];

export function useTweaks(defaults: Tweaks) {
  const [vals, setVals] = useState<Tweaks>(() => {
    try {
      return { ...defaults, ...JSON.parse(localStorage.getItem('luxr-tweaks') || '{}') };
    } catch {
      return { ...defaults };
    }
  });

  const set = useCallback(<K extends keyof Tweaks>(key: K, val: Tweaks[K]) => {
    setVals(prev => {
      const next = { ...prev, [key]: val };
      try {
        localStorage.setItem('luxr-tweaks', JSON.stringify(next));
      } catch {
        /* ignore write failures (private mode, quota, etc.) */
      }
      return next;
    });
  }, []);

  return [vals, set] as const;
}
