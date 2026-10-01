import React from 'react';
import { ShieldCheck, ExternalLink, Smartphone, CheckCircle, Lock, Award } from 'lucide-react';

interface FinalCtaSceneProps {
  onOpenPartnerModal: () => void;
}

export const FinalCtaScene: React.FC<FinalCtaSceneProps> = ({ onOpenPartnerModal }) => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#07090E] via-[#0D131F] to-[#07090E] border-t border-slate-800 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-glow-amber opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center space-y-10">
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED SAFE PORTAL PROTOCOL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-editorial tracking-tight leading-tight">
            안전하고 검증된 환경에서 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              정통 릴게임을 경험하십시오
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 font-serif-kr leading-relaxed max-w-2xl mx-auto">
            다운로드 파일 설치 없는 100% 무설치 웹 표준, 
            아이폰 및 안드로이드 모바일 완벽 지원, 철저히 검증된 정식 서비스 라인업을 지금 확인하세요.
          </p>
        </div>

        {/* Feature Check Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300">국내 최대 14종 라인업</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300">무설치 즉시 접속</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300">iOS / Android 최적화</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300">24시간 안전 고객 지원</span>
          </div>
        </div>

        {/* Big Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenPartnerModal}
            className="w-full sm:w-auto px-10 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <ShieldCheck className="w-5 h-5 text-slate-950" />
            <span>릴통 검증 파트너 사이트 바로가기</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        <p className="text-[11px] text-slate-400 font-mono">
          * 릴통은 과도한 사행 행위를 지양하며, 건전한 오락 문화와 사실에 입각한 정보 아카이빙을 지향합니다.
        </p>
      </div>
    </section>
  );
};
