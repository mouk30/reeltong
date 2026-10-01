import React, { useState } from 'react';
import { GAMES_ARCHIVE } from '../data/archiveData';
import { SlidersHorizontal, ArrowUpDown, ShieldCheck, Check } from 'lucide-react';

interface ComparisonMatrixSceneProps {
  onOpenPartnerModal: () => void;
}

export const ComparisonMatrixScene: React.FC<ComparisonMatrixSceneProps> = ({ onOpenPartnerModal }) => {
  const [filterTempo, setFilterTempo] = useState<string>('ALL');

  const filteredGames = filterTempo === 'ALL'
    ? GAMES_ARCHIVE
    : GAMES_ARCHIVE.filter(g => g.tempo.includes(filterTempo));

  return (
    <section id="comparison" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07090E] border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400 font-mono">
              <span className="text-amber-400 font-semibold">SCENE 07</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>TECHNICAL COMPARATIVE AUDIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-editorial tracking-tight">
              6대 릴게임 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                종합 스펙 비교 매트릭스
              </span>
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900 rounded-xl border border-slate-800">
            <span className="text-xs font-mono text-slate-400 px-2 hidden sm:inline">템포 필터:</span>
            {['ALL', '느긋함', '스피디', '스토리형', '다이내믹'].map((tempo) => (
              <button
                key={tempo}
                onClick={() => setFilterTempo(tempo)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  filterTempo === tempo
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tempo === 'ALL' ? '전체 보기' : tempo}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Table with horizontal scroll container */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-6 font-semibold">게임 명칭 (타이틀)</th>
                  <th className="py-4 px-4 font-semibold">릴 & 그리드 구성</th>
                  <th className="py-4 px-4 font-semibold">페이라인 수</th>
                  <th className="py-4 px-4 font-semibold">회전 템포</th>
                  <th className="py-4 px-6 font-semibold">보너스 게임 트리거</th>
                  <th className="py-4 px-6 font-semibold">추천 플레이어</th>
                  <th className="py-4 px-4 text-center font-semibold">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-sans">
                {filteredGames.map((game) => (
                  <tr
                    key={game.id}
                    className="hover:bg-slate-900/50 transition-colors group"
                  >
                    {/* Game Title & Badge */}
                    <td className="py-4 px-6 font-medium text-white whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-amber-400 font-bold">
                          {game.number}
                        </span>
                        <div>
                          <div className="font-bold text-white group-hover:text-amber-400 transition-colors">
                            {game.nameKo}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono">
                            {game.nameEn}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Reels */}
                    <td className="py-4 px-4 font-mono text-slate-300 whitespace-nowrap">
                      {game.reels}
                    </td>

                    {/* Paylines */}
                    <td className="py-4 px-4 font-mono text-amber-400 font-semibold whitespace-nowrap">
                      {game.paylines}
                    </td>

                    {/* Tempo */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-900 border border-slate-700/80 text-slate-300">
                        {game.tempo.split(' ')[0]}
                      </span>
                    </td>

                    {/* Bonus Feature */}
                    <td className="py-4 px-6 text-slate-300 text-xs font-serif-kr max-w-xs">
                      {game.bonusTrigger}
                    </td>

                    {/* Target Player */}
                    <td className="py-4 px-6 text-slate-400 text-xs max-w-xs font-serif-kr">
                      {game.recommendedFor}
                    </td>

                    {/* Direct action button */}
                    <td className="py-4 px-4 text-center whitespace-nowrap">
                      <button
                        onClick={onOpenPartnerModal}
                        className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all cursor-pointer inline-flex items-center gap-1"
                      >
                        <ShieldCheck className="w-3 h-3" />
                        <span>접속</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Matrix Footnote Ribbon */}
          <div className="p-4 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-400 font-sans flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>* 모든 6종 게임의 확률과 페이라인 판정은 W3C 웹 표준 무설치 환경에서 동일하게 보장됩니다.</span>
            <span className="font-mono text-slate-400">TOTAL 6 TITLES AUDITED</span>
          </div>
        </div>
      </div>
    </section>
  );
};
