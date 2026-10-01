import React, { useState } from 'react';
import { GAMES_ARCHIVE, GameProfile } from '../data/archiveData';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Compass, Info, Check, Eye } from 'lucide-react';

interface ArchiveCollectionSceneProps {
  onOpenPartnerModal: () => void;
  onSelectGameForInspection: (gameId: string) => void;
}

export const ArchiveCollectionScene: React.FC<ArchiveCollectionSceneProps> = ({
  onOpenPartnerModal,
  onSelectGameForInspection
}) => {
  const [selectedGameModal, setSelectedGameModal] = useState<GameProfile | null>(null);

  // We have games 0 to 5 in GAMES_ARCHIVE
  const oceanParadise = GAMES_ARCHIVE[1];
  const sonGoku = GAMES_ARCHIVE[2];
  const goldenCastle = GAMES_ARCHIVE[3];
  const yamato = GAMES_ARCHIVE[4];
  const aladdin = GAMES_ARCHIVE[5];

  return (
    <section id="archive" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#090D14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400 font-mono">
              <span className="text-amber-400 font-semibold">SCENE 04</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>THE 6 PILLARS COLLECTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-editorial tracking-tight">
              대한민국 6대 릴게임 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                독립 아카이브 프로필
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-sans leading-relaxed">
            모든 게임은 각기 고유한 역사, 릴 매트릭스 규격, 템포 및 보너스 발동 수식을 갖습니다. 천편일률적인 카드가 아닌 각 타이틀의 정체성을 담은 에디토리얼 프로필을 확인하세요.
          </p>
        </div>

        {/* =========================================================================
            PROFILE 02: 오션파라다이스 (Option B: Left Image / Right Content Split)
           ========================================================================= */}
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-900/40 p-6 sm:p-10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 ambient-glow-blue opacity-25 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image (6 cols) */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden group border border-cyan-500/20">
              <img
                src={oceanParadise.image}
                alt="오션파라다이스 트로피컬 비주얼"
                className="w-full aspect-[4/3] object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-cyan-300 border border-cyan-800/40">
                02 / TROPICAL LUXURY
              </div>
            </div>

            {/* Right Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                  {oceanParadise.tagline}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-editorial">
                  {oceanParadise.nameKo} <span className="text-lg text-slate-400 font-sans font-normal">({oceanParadise.nameEn})</span>
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-serif-kr leading-relaxed">
                {oceanParadise.summary}
              </p>

              <div className="space-y-2.5 pt-2 text-xs">
                {oceanParadise.characteristics.map((char, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                    <span>{char}</span>
                  </div>
                ))}
              </div>

              {/* Spec ribbon */}
              <div className="grid grid-cols-3 gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center font-mono text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] block">REELS</span>
                  <span className="text-white font-bold">{oceanParadise.reels}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">PAYLINES</span>
                  <span className="text-cyan-400 font-bold">{oceanParadise.paylines}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">TEMPO</span>
                  <span className="text-white font-bold">다이내믹</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setSelectedGameModal(oceanParadise)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  <span>심층 스펙 열람</span>
                </button>
                <button
                  onClick={onOpenPartnerModal}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
                  <span>오션파라다이스 안전 플레이</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROFILE 03: 손오공 (Option G: Asymmetric Oriental Composition)
           ========================================================================= */}
        <div className="relative rounded-2xl bg-gradient-to-bl from-slate-900 via-[#120B0B] to-[#07090E] border border-red-900/30 p-6 sm:p-10 overflow-hidden shadow-2xl">
          <div className="absolute -bottom-10 -left-10 w-96 h-96 ambient-glow-crimson opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono tracking-widest text-red-400 uppercase font-semibold">
                    03 / NARRATIVE FANTASY
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs font-mono text-slate-400">서유기 대서사 연출</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-editorial">
                  {sonGoku.nameKo} <span className="text-lg text-slate-400 font-sans font-normal">({sonGoku.nameEn})</span>
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-serif-kr leading-relaxed">
                {sonGoku.summary}
              </p>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-red-950/80 space-y-2 text-xs">
                <div className="text-red-400 font-mono font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>고유 보너스 피처: 요괴 격퇴 미니 스테이지</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-sans">
                  {sonGoku.bonusTrigger}. 저팔계와 사오정이 등장할 때마다 승수 배율이 증가하는 시네마틱 애니메이션을 탑재했습니다.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center font-mono text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] block">REELS</span>
                  <span className="text-white font-bold">{sonGoku.reels}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">PAYLINES</span>
                  <span className="text-red-400 font-bold">{sonGoku.paylines}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">RECOMMENDED</span>
                  <span className="text-white font-bold">스토리 선호형</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setSelectedGameModal(sonGoku)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-red-400" />
                  <span>심층 스펙 열람</span>
                </button>
                <button
                  onClick={onOpenPartnerModal}
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>손오공 무설치 바로가기</span>
                </button>
              </div>
            </div>

            {/* Right Image (6 cols) */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden group border border-red-500/20 order-1 lg:order-2">
              <img
                src={sonGoku.image}
                alt="손오공 동양 판타지 비주얼"
                className="w-full aspect-[4/3] object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-red-200">
                GOLDEN ENERGY & DRAGON CLOUD MOTIF
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROFILE 04 & 05: 황금성 & 야마토 (Option C & Option D Asymmetric Duo)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* PROFILE 04: 황금성 (Option C: 5 cols Dark Luxury Treasury) */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#141008] to-[#0A0703] border border-amber-500/30 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-amber-950/60 pb-3">
                <span className="text-xs font-mono text-amber-400 tracking-wider">04 / GOLDEN CASTLE</span>
                <span className="text-[11px] font-mono text-slate-400">40 PAYLINES MATRIX</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white font-editorial">
                  {goldenCastle.nameKo}
                </h3>
                <p className="text-xs text-amber-300 font-mono">{goldenCastle.tagline}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-serif-kr leading-relaxed">
                {goldenCastle.summary}
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                {goldenCastle.characteristics.map((c, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">·</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-amber-950/80">
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono bg-black/40 p-2.5 rounded-lg border border-amber-950">
                <div>
                  <span className="text-slate-400 text-[10px] block">REELS</span>
                  <span className="text-white font-bold">{goldenCastle.reels}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">LINES</span>
                  <span className="text-amber-400 font-bold">{goldenCastle.paylines}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">ACCENT</span>
                  <span className="text-white font-bold">골드 룰렛</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedGameModal(goldenCastle)}
                  className="flex-1 py-2 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-700 transition-colors"
                >
                  상세 스펙
                </button>
                <button
                  onClick={onOpenPartnerModal}
                  className="flex-1 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
                  <span>황금성 바로가기</span>
                </button>
              </div>
            </div>
          </div>

          {/* PROFILE 05: 야마토 (Option D: 6 cols Cosmic Battleship High-Tempo) */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#0B0F1A] to-[#07090E] border border-indigo-500/30 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-indigo-950/60 pb-3">
                <span className="text-xs font-mono text-indigo-400 tracking-wider">05 / SPACE BATTLESHIP</span>
                <span className="text-[11px] font-mono text-slate-400">RAPID CYCLE (초고속 회차)</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white font-editorial">
                  {yamato.nameKo} <span className="text-base text-slate-400 font-sans font-normal">({yamato.nameEn})</span>
                </h3>
                <p className="text-xs text-indigo-300 font-mono">{yamato.tagline}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-serif-kr leading-relaxed">
                {yamato.summary}
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                {yamato.characteristics.map((c, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">·</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-indigo-950/80">
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono bg-black/40 p-2.5 rounded-lg border border-indigo-950">
                <div>
                  <span className="text-slate-400 text-[10px] block">REELS</span>
                  <span className="text-white font-bold">{yamato.reels}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">SPEED</span>
                  <span className="text-indigo-400 font-bold">회차당 2.1s</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">FEATURE</span>
                  <span className="text-white font-bold">파동포 보너스</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedGameModal(yamato)}
                  className="flex-1 py-2 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-700 transition-colors"
                >
                  상세 스펙
                </button>
                <button
                  onClick={onOpenPartnerModal}
                  className="flex-1 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span>야마토 무설치 바로가기</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PROFILE 06: 알라딘 (Option A: Large Panoramic Editorial Showcase)
           ========================================================================= */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-[#07090E] border border-purple-900/40 p-6 sm:p-10 space-y-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-purple-400 uppercase">
                <span>06 / ARABIAN NIGHTS MYSTIQUE</span>
                <span className="text-slate-600">/</span>
                <span>UNIQUE WORLDVIEW</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white font-editorial">
                {aladdin.nameKo} <span className="text-base text-slate-400 font-sans font-normal">({aladdin.nameEn})</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-serif-kr leading-relaxed max-w-3xl">
                {aladdin.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-sans text-slate-300">
                <div className="p-3 bg-purple-950/20 border border-purple-900/30 rounded-lg">
                  <span className="text-purple-300 font-semibold block mb-1">마법 램프 지니 3대 소원</span>
                  <span>보너스 컷씬 진입 시 무작위 배율 룰렛 선택형 보상 체계</span>
                </div>
                <div className="p-3 bg-purple-950/20 border border-purple-900/30 rounded-lg">
                  <span className="text-purple-300 font-semibold block mb-1">양탄자 와일드 비행</span>
                  <span>릴 회전 도중 무작위로 여러 칸을 와일드 심볼로 변환</span>
                </div>
                <div className="p-3 bg-purple-950/20 border border-purple-900/30 rounded-lg">
                  <span className="text-purple-300 font-semibold block mb-1">무설치 60fps 최적화</span>
                  <span>화려한 마법 이펙트가 모바일에서도 버벅임 없이 구동</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end gap-4">
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-center w-full max-w-xs font-mono text-xs space-y-2">
                <div className="text-slate-400 text-[11px]">PAYLINE SPECS</div>
                <div className="text-2xl font-bold text-purple-300">15 MULTI LINES</div>
                <div className="text-slate-400 text-[11px] pt-1 border-t border-slate-800">5-REEL 3-ROW MATRIX</div>
              </div>

              <div className="flex flex-col w-full max-w-xs gap-2">
                <button
                  onClick={() => setSelectedGameModal(aladdin)}
                  className="w-full py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                >
                  알라딘 상세 프로필 확인
                </button>
                <button
                  onClick={onOpenPartnerModal}
                  className="w-full py-2.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>알라딘 안전 접속</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal for in-depth profile exploration */}
      {selectedGameModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0B0F17] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  GAME ARCHIVE PROFILE {selectedGameModal.number}
                </span>
                <h3 className="text-2xl font-black text-white font-editorial mt-0.5">
                  {selectedGameModal.nameKo} ({selectedGameModal.nameEn})
                </h3>
              </div>
              <button
                onClick={() => setSelectedGameModal(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/80 cursor-pointer"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-sans">
              <div>
                <strong className="text-white block mb-1">핵심 테마 및 정체성</strong>
                <p className="text-slate-400 leading-relaxed font-serif-kr">{selectedGameModal.summary}</p>
              </div>

              <div>
                <strong className="text-white block mb-1">역대 주요 세대 및 버전 체계</strong>
                <div className="space-y-2">
                  {selectedGameModal.versions.map((ver, i) => (
                    <div key={i} className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                      <span className="text-amber-400 font-semibold block">{ver.version}</span>
                      <span className="text-slate-400 text-xs">{ver.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <strong className="text-white block mb-1">보너스 트리거 알고리즘</strong>
                <p className="text-slate-400 leading-relaxed">{selectedGameModal.bonusTrigger}</p>
              </div>

              <div>
                <strong className="text-white block mb-1">릴통 추천 플레이어</strong>
                <p className="text-slate-400 leading-relaxed">{selectedGameModal.recommendedFor}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedGameModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg"
              >
                닫기
              </button>
              <button
                onClick={() => {
                  setSelectedGameModal(null);
                  onOpenPartnerModal();
                }}
                className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>해당 게임 무설치 바로가기</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
