import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroScene } from './components/HeroScene';
import { IntroScene } from './components/IntroScene';
import { FeaturedGameScene } from './components/FeaturedGameScene';
import { ArchiveCollectionScene } from './components/ArchiveCollectionScene';
import { RngInspectionScene } from './components/RngInspectionScene';
import { MistakesGuideScene } from './components/MistakesGuideScene';
import { ComparisonMatrixScene } from './components/ComparisonMatrixScene';
import { GlossaryScene } from './components/GlossaryScene';
import { FaqScene } from './components/FaqScene';
import { FinalCtaScene } from './components/FinalCtaScene';
import { FooterScene } from './components/FooterScene';
import { PartnerAccessModal } from './components/PartnerAccessModal';

export default function App() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const TARGET_URL = 'https://xoreel.net';

  const handleOpenPartner = () => {
    window.open(TARGET_URL, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenPartnerModal={handleOpenPartner}
        onOpenSandbox={() => handleScrollToSection('rng-sandbox')}
      />

      <main className="relative">
        {/* SCENE 01: Cinematic Hero */}
        <HeroScene
          onOpenPartnerModal={handleOpenPartner}
          onExploreArchive={() => handleScrollToSection('featured')}
        />

        {/* SCENE 02: Introduction & Manifesto */}
        <IntroScene />

        {/* SCENE 03: Featured Master Game (바다이야기) */}
        <FeaturedGameScene
          onOpenPartnerModal={handleOpenPartner}
        />

        {/* SCENE 04: 6 Pillars Game Archive Collection */}
        <ArchiveCollectionScene
          onOpenPartnerModal={handleOpenPartner}
          onSelectGameForInspection={() => handleScrollToSection('rng-sandbox')}
        />

        {/* SCENE 05 & 10: RNG Mathematical Architecture & Live Inspection Sandbox */}
        <RngInspectionScene />

        {/* SCENE 06: Common Mistakes TOP 6 & Security Guide */}
        <MistakesGuideScene
          onOpenPartnerModal={handleOpenPartner}
        />

        {/* SCENE 07: 6-Game Comprehensive Comparison Matrix */}
        <ComparisonMatrixScene
          onOpenPartnerModal={handleOpenPartner}
        />

        {/* SCENE 08: Encyclopedic Glossary */}
        <GlossaryScene />

        {/* SCENE 09: FAQ (16 Verified Q&As structured for AEO) */}
        <FaqScene />

        {/* SCENE 11: Final Verified Portal CTA */}
        <FinalCtaScene
          onOpenPartnerModal={handleOpenPartner}
        />
      </main>

      {/* SCENE 12: Editorial Archival Footer */}
      <FooterScene />

      {/* Verified Partner Exit Modal */}
      <PartnerAccessModal
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />
    </div>
  );
}
