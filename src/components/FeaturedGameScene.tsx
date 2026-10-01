import React, { useState } from 'react';
import { Waves, Sparkles, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { GAMES_ARCHIVE } from '../data/archiveData';

interface FeaturedGameSceneProps {
  onOpenPartnerModal: () => void;
}

export const FeaturedGameScene: React.FC<FeaturedGameSceneProps> = ({ onOpenPartnerModal }) => {
  const seaStory = GAMES_ARCHIVE[0]; // 바다이야기
  const [activeVersionIndex, setActiveVersionIndex] = useState(0);

  const versionDetails = [
    {
      title: '바다이야기 2 (Classic)',
      tag: 'ORIGINAL STANDARD',
      reels: '3릴 1열 기본형',
      paylines: '단일 수평 페이라인 (1 Line)',
      tempo: '가장 느긋함 (Relaxed 4.2s)',
      desc: '기본 심볼에 충실한 대한민국 릴게임의 영원한 클래식. 상어, 가오리, 해파리, 거북이 등 단순 명료한 심볼과 3개의 릴이 천천히 회전하여 초심자가 당첨 룰을 한눈에 식별하기에 가장 완벽합니다.',
      symbolAura: '오리지널 청상어 & 황금거북이'
    },
    {
      title: '바다이야기 3 (Gold Edition)',
      tag: 'BONUS ENHANCED',
      reels: '3릴 3열 그리드',
      paylines: '5 페이라인 (수평 3 + 대각선 2)',
      tempo: '균형 잡힌 리듬 (Balanced 3.5s)',
      desc: '황금물고기(Gold Fish) 보너스 심볼이 새롭게 도입되어 보너스 모드 발동 빈도가 높아진 에디션. 릴 정지 시 황금물고기 실루엣이 번쩍이며 심해 동굴로 이동하는 시각적 쾌감이 극대화되었습니다.',
      symbolAura: '황금물고기 & 심해 잠수함'
    },
    {
      title: '바다이야기 5 (Multi-Line)',
      tag: 'MULTI MATRIX',
      reels: '5릴 3열 매트릭스',
      paylines: '15 멀티 페이라인 (Multi 15 Lines)',
      tempo: '다채로운 연출 (Dynamic 3.0s)',
      desc: '5개의 릴로 확장되고 대각선 및 지그재그를 포괄하는 15 페이라인이 적용된 현대적 진화형. 여러 라인에서 동시 당첨이 발생할 수 있어 정밀한 배당 계산과 화려한 고래 군무 연출을 즐길 수 있습니다.',
      symbolAura: '대형 혹등고래 & 심해 진주'
    }
  ];

  return (
    <section id="featured" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07090E] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 ambient-glow-blue opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-12">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400 font-mono">
            <span className="text-sky-400 font-semibold">SCENE 03</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span>FEATURED MASTER ARCHIVE</span>
          </div>
          <span className="text-xs text-sky-400/80 font-mono hidden sm:inline-block">
            20 YEARS LEGACY CHRONICLE
          </span>
        </div>

        {/* 7/5 Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (7 cols): Thematic Visual & 4 Deep Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-2xl shadow-sky-950/40 group">
              <img
                src={seaStory.image}
                alt="바다이야기 심해 아카이브 비주얼"
                className="w-full aspect-[16/10] object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase text-sky-400 font-semibold">
                    01 / FEATURED GAME PROFILE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-editorial mt-1">
                    바다이야기 (Sea Story)
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-200/80 font-serif-kr mt-1">
                    신비로운 심해 블루, 20년 동안 검색량 1위를 지킨 대한민국 릴게임의 상징
                  </p>
                </div>
                <button
                  onClick={onOpenPartnerModal}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-md transition-all flex items-center gap-1.5 shrink-0 ml-4 cursor-pointer"
                >
                  <span>체험 접속</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 4 Deep Historical Insights */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white font-editorial flex items-center gap-2">
                <Waves className="w-4 h-4 text-sky-400" />
                <span>바다이야기가 20년 넘게 사랑받은 4대 구조적 이유</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-sky-400 font-semibold">INSIGHT 01</div>
                  <h5 className="text-sm font-bold text-white">"바다" 테마의 심리적 안정감</h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    짙은 남청색 수중 배경과 유유히 유영하는 해양 생물 애니메이션은 플레이어의 시각 피로도를 낮추어 타 게임 대비 차분한 분석을 가능케 합니다.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-sky-400 font-semibold">INSIGHT 02</div>
                  <h5 className="text-sm font-bold text-white">단계별 버전 진화 (v2, v3, v5)</h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    단일 3릴 클래식에서 5릴 15 멀티 페이라인까지 계단식으로 발전하여 초보자와 숙련자 모두에게 명확한 선택지를 제공합니다.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-sky-400 font-semibold">INSIGHT 03</div>
                  <h5 className="text-sm font-bold text-white">황금고래 보너스 게임 메커니즘</h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    보너스 모드에 진입하면 승수 확률 구조가 유리하게 일시 재설정되는 투명한 보너스 컷씬을 통해 극적인 오락적 희열을 구현합니다.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-sky-400 font-semibold">INSIGHT 04</div>
                  <h5 className="text-sm font-bold text-white">모바일 터치 최적화 무설치 환경</h5>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    별도 앱 다운로드 없이 스마트폰 사파리·크롬 브라우저에서 동일한 RNG 확률로 즉시 회전하는 웹 표준 편의성을 확보했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Version Architecture Inspector */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs uppercase font-mono tracking-wider text-sky-400">VERSION SPECIFICATION</span>
                <h3 className="text-xl font-bold text-white font-editorial mt-1">
                  바다이야기 버전별 스펙 해부
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  버전별로 릴 개수와 페이라인이 완전히 상이하므로 플레이 전 필히 확인하십시오.
                </p>
              </div>

              {/* Version Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800">
                {versionDetails.map((v, idx) => (
                  <button
                    key={v.title}
                    onClick={() => setActiveVersionIndex(idx)}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all text-center cursor-pointer ${
                      activeVersionIndex === idx
                        ? 'bg-sky-500 text-slate-950 shadow-md font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {`버전 ${idx === 0 ? '2' : idx === 1 ? '3' : '5'}`}
                  </button>
                ))}
              </div>

              {/* Active Version Detailed Spec Sheet */}
              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white font-editorial">
                    {versionDetails[activeVersionIndex].title}
                  </h4>
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-800/40">
                    {versionDetails[activeVersionIndex].tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif-kr">
                  {versionDetails[activeVersionIndex].desc}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/40 font-mono">
                    <span className="text-slate-400">릴 및 그리드 구조:</span>
                    <span className="text-white font-semibold">{versionDetails[activeVersionIndex].reels}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/40 font-mono">
                    <span className="text-slate-400">유효 페이라인:</span>
                    <span className="text-amber-400 font-semibold">{versionDetails[activeVersionIndex].paylines}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/40 font-mono">
                    <span className="text-slate-400">1회차 회전 템포:</span>
                    <span className="text-sky-300 font-semibold">{versionDetails[activeVersionIndex].tempo}</span>
                  </div>
                  <div className="flex justify-between py-1.5 font-mono">
                    <span className="text-slate-400">핵심 연출 심볼:</span>
                    <span className="text-white">{versionDetails[activeVersionIndex].symbolAura}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenPartnerModal}
                    className="w-full py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-300 hover:to-sky-200 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>{versionDetails[activeVersionIndex].title} 안전 무설치 플레이</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Pro-Tip Callout */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 font-sans leading-relaxed">
              <span className="text-sky-400 font-semibold">릴통 분석팀 조언:</span> 처음 접하는 플레이어는 심볼 조합 판정이 가장 정직하고 직관적인 바다이야기 2부터 시작하여 기본 회전 원리를 충분히 체감한 후 5릴 버전으로 확장하는 것이 가장 합리적입니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
