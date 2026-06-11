
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { AffiliationsStrip } from './components/AffiliationsStrip';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="selection:bg-indigo-600 selection:text-white">
      <Navbar />
      <Hero />
      <StatsStrip />
      <Services />
      <Process />
      <Portfolio />
      <Team />
      <AffiliationsStrip />
      <Contact />
      <Footer />
    </div>
  );
}
