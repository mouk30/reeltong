import React from 'react';
import { ArrowDown, Shield, Cpu, Activity, ExternalLink } from 'lucide-react';

interface HeroSceneProps {
  onOpenPartnerModal: () => void;
  onExploreArchive: () => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ onOpenPartnerModal, onExploreArchive }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#07090E]">
      {/* Background Image Layer with atmospheric vignette & grain */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_reel_cinematic_1790810357834.jpg"
          alt="릴통 프리미엄 아카이브 비주얼"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-screen scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend seamlessly into background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-[#07090E]/60 to-[#07090E]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090E] via-transparent to-[#07090E]/90" />
        <div className="absolute inset-0 ambient-glow-amber opacity-40 pointer-events-none" />
      </div>

      {/* Floating Category Kicker */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6">
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-widest uppercase text-slate-400 font-mono">
          <span className="text-amber-400 font-semibold">VOLUME 01</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>THE KOREAN CLASSIC REEL CHRONICLE</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-300">EST. 2026 ARCHIVE</span>
        </div>
      </div>

      {/* Main Hero Visual Statement */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Main Title & Editorial Headline (Col 1-8) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-amber-400/90 font-mono font-medium">
                통기계 매장 그대로 · Comprehensive Digital Intelligence
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white font-editorial leading-[1.05]">
                REELTONG <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                  ARCHIVE PORTAL
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-serif-kr max-w-2xl leading-relaxed">
              오프라인 통기계 매장의 손맛과 연출 감성을 온라인에 그대로. <br className="hidden sm:inline" />
              <strong className="text-white font-semibold">바다이야기·야마토·손오공·황금성·알라딘</strong> 6대 릴게임의 공학적 메커니즘과 객관적 정보만을 전달합니다.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPartnerModal}
                className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>검증된 무설치 파트너 접속</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreArchive}
                className="px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>6대 게임 아카이브 열람</span>
                <ArrowDown className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Right Floating Editorial Spec Column (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-5 sm:p-6 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400">ARCHIVE SPEC</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AUTHENTIC DATA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">COVERED TITLES</div>
                  <div className="text-xl font-bold text-white font-mono mt-0.5">6 MAJOR</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">CORE ALGORITHM</div>
                  <div className="text-xl font-bold text-cyan-400 font-mono mt-0.5">RNG 0.001ms</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">WEB SECURITY</div>
                  <div className="text-xl font-bold text-amber-400 font-mono mt-0.5">100% 무설치</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">VERIFIED DATA</div>
                  <div className="text-xl font-bold text-white font-mono mt-0.5">16 Q&A DOCS</div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 border-t border-slate-800/80 leading-relaxed font-sans">
                릴통은 광고성 가입 유도나 허위 잭팟 보장을 엄격히 배제하며, 오직 릴의 회전 공학과 수학적 독립시행 원리에 근거합니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Anchor Ribbon */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>암호학적 난수 독립 시행</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>HTML5 브라우저 무설치 표준</span>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <Activity className="w-4 h-4 text-amber-400" />
            <span>도박사의 오류 과학적 반증</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
          <span>SCROLL TO EXPLORE</span>
          <span className="w-4 h-px bg-slate-600" />
          <span className="text-amber-400 font-bold">01 / 10 SCENES</span>
        </div>
      </div>
    </section>
  );
};
