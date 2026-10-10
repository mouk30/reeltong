import React, { useState } from 'react';
import { GAMES_ARCHIVE } from '../data/archiveData';
import { Play, Coins, TrendingUp, Check, ExternalLink, ShieldCheck } from 'lucide-react';

interface ArchiveCollectionSceneProps {
  onOpenPartnerModal: () => void;
  onSelectGameForInspection?: (gameId: string) => void;
}

export const ArchiveCollectionScene: React.FC<ArchiveCollectionSceneProps> = ({
  onOpenPartnerModal
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'classic' | 'rapid' | 'narrative'>('all');

  const filteredGames = GAMES_ARCHIVE.filter(game => {
    if (activeFilter === 'classic') return game.tempo.includes('느긋함');
    if (activeFilter === 'rapid') return game.tempo.includes('스피디');
    if (activeFilter === 'narrative') return game.tempo.includes('스토리형');
    return true;
  });

  return (
    <section id="archive" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#07090E] border-t border-slate-800/80">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] ambient-glow-amber opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="border-b border-slate-800/90 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-slate-400 font-mono">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30 font-bold">
                SCENE 02
              </span>
              <span className="text-slate-600">/</span>
              <span>THE 6 PILLARS ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-editorial tracking-tight">
              대한민국 6대 정통 릴게임 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                통기계 매장 원형 컬렉션
              </span>
            </h2>
          </div>
          <div className="space-y-2 max-w-md">
            <p className="text-xs sm:text-sm text-slate-300 font-serif-kr leading-relaxed">
              이미지나 하단 바로가기 버튼을 누르면 100% 무설치(No Download) 브라우저 공식 검증 플랫폼으로 즉시 안전하게 연결됩니다.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>전 기종 공식 인증 파트너 (reelkings.kr) 즉시 접속 지원</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 p-1 bg-slate-900/90 rounded-xl border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer font-semibold ${
                activeFilter === 'all'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              전체 6대 기종 ({GAMES_ARCHIVE.length})
            </button>
            <button
              onClick={() => setActiveFilter('classic')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer font-semibold ${
                activeFilter === 'classic'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              정통 클래식
            </button>
            <button
              onClick={() => setActiveFilter('rapid')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer font-semibold ${
                activeFilter === 'rapid'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              고속 템포
            </button>
            <button
              onClick={() => setActiveFilter('narrative')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer font-semibold ${
                activeFilter === 'narrative'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              스토리·서사형
            </button>
          </div>

          <span className="text-xs text-amber-400/90 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>이미지 또는 버튼 클릭 시 새 창으로 즉시 실행</span>
          </span>
        </div>

        {/* Master 3-Column Grid with Expanded Images & Prominent Action Button */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="group rounded-2xl bg-[#0B0F19]/95 border border-slate-800 hover:border-amber-500/60 transition-all duration-300 shadow-2xl hover:shadow-amber-500/10 flex flex-col p-4 sm:p-5 space-y-4"
            >
              {/* Card Top Meta Row (Matching Reference) */}
              <div className="flex items-center justify-between text-xs font-mono">
                {/* Category Badge */}
                <span className="px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold">
                  {game.categoryBadge}
                </span>

                {/* Active user count with pulsing green dot */}
                <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{game.userCount}</span>
                </div>

                {/* Status Pill Badge */}
                <span
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                    game.statusType === 'purple'
                      ? 'bg-purple-950/80 text-purple-300 border-purple-800/60'
                      : game.statusType === 'red'
                      ? 'bg-red-950/80 text-red-300 border-red-800/60'
                      : 'bg-amber-950/80 text-amber-300 border-amber-800/60'
                  }`}
                >
                  {game.statusBadge}
                </span>
              </div>

              {/* Large Image Showcase (Square Aspect Ratio - Clickable to Partner) */}
              <div
                onClick={onOpenPartnerModal}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onOpenPartnerModal();
                  }
                }}
                className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group-hover:border-amber-500/50 cursor-pointer transition-all shadow-inner group/img"
                title={`${game.nameKo} 무설치 바로가기 (reelkings.kr)`}
              >
                <img
                  src={game.image}
                  alt={`${game.nameKo} 대표 이미지`}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 brightness-95 group-hover/img:brightness-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Hover Play Button Overlay Badge */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-2xl transform scale-90 group-hover/img:scale-100 transition-transform">
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>클릭하여 무설치 플레이</span>
                  </div>
                </div>

                {/* Bottom-right quick click hint */}
                <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-amber-300 border border-amber-400/30 flex items-center gap-1 opacity-90">
                  <ExternalLink className="w-3 h-3" />
                  <span>reelkings.kr</span>
                </div>
              </div>

              {/* Game Info Details Block */}
              <div className="space-y-3 pt-1">
                {/* Title & RTP Row */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white font-editorial tracking-tight truncate">
                    {game.nameKo}
                  </h3>
                  <span className="shrink-0 px-2 py-0.5 rounded bg-slate-800/80 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
                    {game.rtp}
                  </span>
                </div>

                {/* Tagline / Subtitle */}
                <p className="text-xs text-amber-400/90 font-sans font-semibold line-clamp-1">
                  {game.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 font-serif-kr leading-relaxed line-clamp-2">
                  {game.summary}
                </p>

                {/* Live Jackpot & Volatility Metrics Row */}
                <div className="py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800/90 space-y-1.5 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                      <Coins className="w-3.5 h-3.5 text-amber-400" />
                      <span>누적 잭팟:</span>
                    </span>
                    <span className="text-amber-400 font-black text-xs sm:text-sm tracking-tight">
                      {game.jackpot}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-900 pt-1.5">
                    <span className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                      <span>변동성 지수:</span>
                    </span>
                    <span className="text-white font-bold text-xs">
                      {game.volatility}
                    </span>
                  </div>
                </div>

                {/* Feature Check Bullets (2 items) */}
                <div className="grid grid-cols-2 gap-1.5 pt-0.5 text-[11px] font-sans">
                  {game.featureBullets.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1 truncate"
                    >
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expanded Giant Full-Width Action Button (No Secondary Detail Spec Button) */}
              <div className="pt-2 mt-auto">
                <button
                  onClick={onOpenPartnerModal}
                  className="w-full py-4 px-6 rounded-xl font-black text-slate-950 text-base sm:text-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer font-sans"
                >
                  <Play className="w-5 h-5 fill-slate-950 text-slate-950 shrink-0" />
                  <span>무설치 바로가기</span>
                  <ExternalLink className="w-4 h-4 text-slate-950 shrink-0 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>100% NO-DOWNLOAD HTML5 VERIFIED PLATFORM</span>
            </div>
            <h4 className="text-base sm:text-lg font-black text-white font-editorial">
              PC & 모바일 전 기종 무설치 원클릭 바로가기
            </h4>
            <p className="text-xs text-slate-400 font-serif-kr">
              별도의 프로그램 설치 없이 사파리(Safari), 크롬(Chrome) 브라우저에서 즉시 실행됩니다.
            </p>
          </div>

          <button
            onClick={onOpenPartnerModal}
            className="w-full md:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-black text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/25 hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>검증 사이트 (reelkings.kr) 즉시 접속</span>
          </button>
        </div>
      </div>
    </section>
  );
};
