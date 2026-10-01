import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Cpu } from 'lucide-react';

interface NavbarProps {
  onOpenPartnerModal: () => void;
  onOpenSandbox: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPartnerModal, onOpenSandbox }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07090E]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl shadow-black/40'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group text-left"
            aria-label="릴통 홈으로 이동"
          >
            <span className="font-editorial text-xl sm:text-2xl font-bold tracking-widest text-white group-hover:text-amber-400 transition-colors">
              REEL<span className="text-amber-500 font-serif italic">TONG</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-slate-400 border-l border-slate-700/80 pl-3 font-mono">
              Digital Archive
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#about"
              className="hover:text-amber-400 transition-colors py-1"
            >
              소개 및 원리
            </a>
            <a
              href="#featured"
              className="hover:text-amber-400 transition-colors py-1"
            >
              바다이야기
            </a>
            <a
              href="#archive"
              className="hover:text-amber-400 transition-colors py-1"
            >
              6대 컬렉션
            </a>
            <a
              href="#rng-sandbox"
              className="hover:text-amber-400 transition-colors py-1 flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>RNG 시뮬레이터</span>
            </a>
            <a
              href="#mistakes"
              className="hover:text-amber-400 transition-colors py-1"
            >
              실수 가이드
            </a>
            <a
              href="#comparison"
              className="hover:text-amber-400 transition-colors py-1"
            >
              스펙 비교
            </a>
            <a
              href="#faq"
              className="hover:text-amber-400 transition-colors py-1"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSandbox}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>릴 검증기</span>
            </button>
            <button
              onClick={onOpenPartnerModal}
              className="px-4 py-1.5 text-xs font-medium text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-md shadow-sm transition-all whitespace-nowrap flex items-center gap-1.5 font-semibold cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
              <span>검증 사이트 바로가기</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPartnerModal}
              className="px-2.5 py-1 text-xs font-semibold text-slate-950 bg-amber-400 rounded-md"
            >
              검증 사이트
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="메뉴 열기/닫기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-[#07090E]/95 backdrop-blur-xl rounded-b-xl px-2 space-y-2">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400 rounded-md hover:bg-slate-800/50"
            >
              소개 및 원리
            </a>
            <a
              href="#featured"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400 rounded-md hover:bg-slate-800/50"
            >
              바다이야기 심층 분석
            </a>
            <a
              href="#archive"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400 rounded-md hover:bg-slate-800/50"
            >
              6대 릴게임 아카이브
            </a>
            <a
              href="#rng-sandbox"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-cyan-300 hover:text-cyan-200 rounded-md hover:bg-slate-800/50 flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>인터랙티브 RNG 시뮬레이터</span>
            </a>
            <a
              href="#mistakes"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400 rounded-md hover:bg-slate-800/50"
            >
              초보자 실수 TOP 6
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400 rounded-md hover:bg-slate-800/50"
            >
              게임별 종합 비교표
            </a>
            <a
              href="#glossary"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400 rounded-md hover:bg-slate-800/50"
            >
              릴게임 필수 용어사전
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-amber-400 rounded-md hover:bg-slate-800/50"
            >
              자주 묻는 질문 (FAQ)
            </a>
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSandbox();
                }}
                className="w-full py-2.5 text-center text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>릴 시뮬레이터 직접 체험</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartnerModal();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
                <span>릴통 파트너 릴게임사이트 바로가기</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
