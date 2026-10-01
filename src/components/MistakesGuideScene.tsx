import React from 'react';
import { TOP_6_MISTAKES } from '../data/archiveData';
import { ShieldAlert, CheckCircle, ArrowRight, ShieldCheck, Lock, Smartphone, Globe } from 'lucide-react';

interface MistakesGuideSceneProps {
  onOpenPartnerModal: () => void;
}

export const MistakesGuideScene: React.FC<MistakesGuideSceneProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="mistakes" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#090D14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400 font-mono">
              <span className="text-red-400 font-semibold">SCENE 06</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>COMMON PITFALLS & SECURITY AUDIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-editorial tracking-tight">
              릴게임 이용자들이 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-amber-200">
                가장 많이 범하는 실수 TOP 6
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-sans leading-relaxed">
            경험자들이 공통적으로 후회하는 위험 행동들을 정리했습니다. 이 6가지만 사전에 방지해도 릴게임 포털 이용 시 발생하는 대부분의 피해를 완벽히 차단할 수 있습니다.
          </p>
        </div>

        {/* 6 Mistakes Editorial List (Not uniform card grid; numbered horizontal editorial rows with distinct danger & resolution) */}
        <div className="space-y-6">
          {TOP_6_MISTAKES.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 p-6 sm:p-8 transition-colors space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/60 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-black font-mono text-red-400">
                    {item.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-editorial">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded border border-slate-800 w-fit">
                  {item.evidence}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs sm:text-sm font-sans">
                {/* Danger description */}
                <div className="space-y-1.5 p-4 rounded-xl bg-red-950/20 border border-red-900/30">
                  <div className="flex items-center gap-1.5 text-red-400 font-semibold font-mono text-xs">
                    <ShieldAlert className="w-4 h-4" />
                    <span>위험 요소 및 피해 경로</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-serif-kr">
                    {item.danger}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-1.5 p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold font-mono text-xs">
                    <CheckCircle className="w-4 h-4" />
                    <span>릴통 권장 해결책</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-serif-kr">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big Security Feature Block: 무설치 웹 표준 vs 설치형 프로그램 비교 */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 p-8 sm:p-12 space-y-8 shadow-2xl">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
              WEB SECURITY ESSENTIAL
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-editorial">
              무설치(브라우저 접속) 릴게임이 <br />
              설치형보다 압도적으로 안전한 이유
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif-kr">
              과거 피시방 및 사설 서버에서 배포하던 .exe 또는 .apk 파일은 백도어와 피싱의 통로였습니다. 
              최신 릴통 파트너는 100% W3C 표준 웹 브라우저 샌드박스에서 구동됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">브라우저 샌드박스 보안</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                운영체제 시스템 파일이나 금융 인증서에 접근할 수 없어 해킹 및 악성코드 감염 위험이 원천 차단됩니다.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">아이폰 & 안드로이드 완벽 호환</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                사파리, 크롬, 삼성인터넷 등 모바일 브라우저에서 60fps 무지연 터치 UI로 매끄럽게 구동됩니다.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Globe className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">기기 내 사용 흔적 제로</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                별도의 프로그램 흔적이나 캐시 오염 없이 탭을 닫는 즉시 세션이 종료되어 개인 프라이버시가 보호됩니다.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
            <span className="text-xs text-slate-400 font-sans">
              릴통에서 추천하는 파트너는 정식 SSL 암호화 및 100% 무설치 규격을 통과한 곳만 안내합니다.
            </span>
            <button
              onClick={onOpenPartnerModal}
              className="px-6 py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>검증된 무설치 릴게임 바로가기</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
