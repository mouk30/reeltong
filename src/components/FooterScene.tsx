import React from 'react';
import { Shield } from 'lucide-react';

export const FooterScene: React.FC = () => {
  return (
    <footer className="relative bg-[#05070A] border-t border-slate-900 py-16 px-4 sm:px-6 lg:px-8 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 border-b border-slate-900">
          {/* Brand Wordmark & Mission */}
          <div className="space-y-3 max-w-sm">
            <span className="font-editorial text-2xl font-bold tracking-widest text-white">
              REEL<span className="text-amber-500 font-serif italic">TONG</span>
            </span>
            <p className="text-slate-400 text-xs leading-relaxed font-serif-kr">
              대한민국 정통 릴게임(바다이야기, 오션파라다이스, 손오공, 황금성, 야마토, 알라딘)의 공학적 원리와 난수발생기(RNG) 수학 모델을 객관적으로 분석하는 프리미엄 디지털 정보 포털입니다.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-white font-mono text-[11px] uppercase tracking-wider block">
                GAME ARCHIVE
              </span>
              <ul className="space-y-2 text-xs">
                <li><a href="#featured" className="hover:text-amber-400 transition-colors">바다이야기 심층 분석</a></li>
                <li><a href="#archive" className="hover:text-amber-400 transition-colors">오션파라다이스</a></li>
                <li><a href="#archive" className="hover:text-amber-400 transition-colors">손오공 & 황금성</a></li>
                <li><a href="#archive" className="hover:text-amber-400 transition-colors">야마토 & 알라딘</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-white font-mono text-[11px] uppercase tracking-wider block">
                INTELLIGENCE
              </span>
              <ul className="space-y-2 text-xs">
                <li><a href="#rng-sandbox" className="hover:text-amber-400 transition-colors">RNG 시뮬레이터</a></li>
                <li><a href="#mistakes" className="hover:text-amber-400 transition-colors">초보자 실수 TOP 6</a></li>
                <li><a href="#comparison" className="hover:text-amber-400 transition-colors">종합 스펙 비교표</a></li>
                <li><a href="#glossary" className="hover:text-amber-400 transition-colors">필수 용어사전</a></li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <span className="text-white font-mono text-[11px] uppercase tracking-wider block">
                LEGAL & POLICY
              </span>
              <ul className="space-y-2 text-xs">
                <li><a href="#faq" className="hover:text-amber-400 transition-colors">자주 묻는 질문</a></li>
                <li><span className="text-slate-400">이용약관</span></li>
                <li><span className="text-slate-400">개인정보처리방침</span></li>
                <li><span className="text-slate-400">책임감 있는 게임 수칙</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Corporate Legal Registration Block */}
        <div className="space-y-4 text-[11px] text-slate-400 leading-relaxed font-mono">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>상호: 릴통(REELTONG)</span>
            <span>대표자: 관리자</span>
            <span>소재지: 서울특별시</span>
            <span>고객센터: 0000-0000</span>
            <span>사업자등록번호: 000-00-00000</span>
            <span>통신판매업신고: 0000-0000</span>
            <span>호스팅제공자: 가비아씨엔에스</span>
          </div>

          <p className="text-[11px] text-slate-400 font-sans leading-relaxed pt-2 border-t border-slate-900/80">
            [책임 고지 및 면책사항] 릴통(REELTONG)은 릴게임 정보 및 확률 알고리즘 연구 목적으로 운영되는 중립적 디지털 정보 아카이브입니다. 
            본 사이트는 일체의 불법 사행 행위를 직접 조장하지 않으며, 청소년 유해 매체물로부터 만 19세 미만 청소년을 보호합니다. 
            릴게임은 확률에 기반한 오락이며, 과도한 몰입은 일상생활에 지장을 초래할 수 있으므로 건전한 범위 내에서 즐기시기 바랍니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-slate-400">
            <span>COPYRIGHT (c) 릴통(REELTONG) ALL RIGHTS RESERVED.</span>
            <div className="flex items-center gap-2 text-slate-400">
              <Shield className="w-3.5 h-3.5" />
              <span>SSL 256-BIT ENCRYPTED ARCHIVE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
