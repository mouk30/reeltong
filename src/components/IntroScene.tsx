import React from 'react';
import { Compass, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';

export const IntroScene: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B0F17] border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400 font-mono mb-4">
          <span className="text-amber-400 font-semibold">SCENE 02</span>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span>MANIFESTO & FUNDAMENTAL PRINCIPLES</span>
        </div>

        {/* 2-Column Asymmetric Layout (8 / 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Manifesto Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl sm:text-5xl font-black text-white font-editorial tracking-tight leading-[1.2]">
              ‘릴게임 정보 사이트’ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-amber-200">
                잘못 고르면 손해입니다.
              </span>
            </h2>

            <div className="space-y-6 text-slate-300 font-serif-kr text-base sm:text-lg leading-relaxed">
              <p>
                인터넷에 범람하는 수많은 릴게임 정보는 99% 특정 업체의 가입 코드를 유치하기 위한 마케팅 광고입니다. 
                “무조건 잭팟 적중”, “시간대별 필승 연타법”과 같은 비과학적 유혹은 플레이어에게 치명적인 손실과 불필요한 혼란만을 안겨줍니다.
              </p>
              <p>
                <strong>릴통(REELTONG)</strong>은 대한민국 릴게임의 기계식 아케이드 시대부터 최신 모바일 브라우저 무설치 플랫폼까지, 
                릴의 회전 원리와 암호학적 <strong>난수발생기(RNG)</strong> 작동 방식을 공학적으로 해체하여 
                오직 <strong>객관적 사실(Pure Fact)</strong>만을 기록하는 국내 유일의 디지털 아카이브입니다.
              </p>
            </div>

            {/* Mechanics Breakdown Box */}
            <div className="p-6 sm:p-8 rounded-xl bg-slate-900/80 border border-slate-800 space-y-6">
              <div className="flex items-center gap-2.5 text-amber-400 text-xs font-mono uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>릴게임(Reel Game)의 본질적 작동 구조</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400">01. 회전 드럼 (Reel)</div>
                  <h4 className="text-base font-bold text-white">독립 회전과 심볼 배열</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    3개 또는 5개의 세로 드럼이 독립 속도로 회전하며, 멈춰선 심볼의 상대적 좌표에 따라 결과가 판정됩니다.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400">02. 0.001초 난수 (RNG)</div>
                  <h4 className="text-base font-bold text-white">버튼 즉시 결정론</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    릴이 도는 시각적 연출과 무관하게, 시작 버튼을 클릭한 1밀리초 안에 최종 정지 심볼은 수학적으로 이미 결정됩니다.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400">03. 페이라인 (Pay Line)</div>
                  <h4 className="text-base font-bold text-white">유효 조합 매트릭스</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    단일 가로선에서 대각선 및 40개 복합 지그재그 라인까지, 버전마다 완전히 다른 조합 가치를 갖습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Pillar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/90 space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-xs uppercase font-mono tracking-wider text-amber-400">OUR EDITORIAL CODE</span>
                <h3 className="text-lg font-bold text-white font-editorial mt-1">릴통 4대 분석 강령</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-slate-200">광고성 필승법 100% 배제</h5>
                    <p className="text-xs text-slate-400 mt-0.5">외부 조작이 불가능한 RNG 특성을 바탕으로 허위 공략법을 즉각 고발합니다.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-slate-200">버전별 정밀 스펙 명시</h5>
                    <p className="text-xs text-slate-400 mt-0.5">바다이야기 2/3/5, 야마토 2/3/5 등 버전별 페이라인 규격을 가감없이 분리합니다.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-slate-200">무설치 보안 환경 검증</h5>
                    <p className="text-xs text-slate-400 mt-0.5">개인정보 탈취 위험이 없는 순수 브라우저 기반 웹 표준 서비스만 검증합니다.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-slate-200">객관적 용어 및 개념 표준화</h5>
                    <p className="text-xs text-slate-400 mt-0.5">초보자도 혼선 없이 메커니즘을 파악할 수 있도록 릴게임 전문 용어를 정립합니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning callout */}
            <div className="p-4 rounded-lg bg-red-950/30 border border-red-900/40 text-xs text-red-200/90 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-red-300 font-semibold block mb-0.5">주의사항 고지</strong>
                릴게임은 건전한 오락과 수학적 통계 모델로서 이해되어야 하며, 일확천금을 노리는 과도한 몰입은 엄격히 금기시되어야 합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
