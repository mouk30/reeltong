import React from 'react';
import { ShieldCheck, ExternalLink, X, Smartphone, Globe, Lock, Check } from 'lucide-react';

interface PartnerAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerAccessModal: React.FC<PartnerAccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const partnerUrl = 'https://xoreel.net';

  const handleOpenPartner = () => {
    window.open(partnerUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0B0F17] border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/80 cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>VERIFIED PARTNER ADVISORY</span>
          </div>
          <h3 className="text-2xl font-black text-white font-editorial">
            릴통 공식 인증 파트너 <br />
            <span className="text-amber-400">‘릴천지’</span> 바로가기
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-serif-kr">
            릴통의 3대 안전 검증 규격(100% 무설치 브라우저, SSL 256-bit 암호화, 14종 정통 게임 구동)을 통과한 파트너 플랫폼으로 이동합니다.
          </p>
        </div>

        {/* Audit list */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-xs font-sans">
          <div className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>무설치 보안 실행 (No Download)</span>
            </span>
            <span className="text-emerald-400 font-mono font-bold">인증 통과</span>
          </div>

          <div className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
              <span>아이폰(iOS) & 안드로이드 모바일 최적화</span>
            </span>
            <span className="text-emerald-400 font-mono font-bold">인증 통과</span>
          </div>

          <div className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>바다이야기·야마토 등 최대 14종 탑재</span>
            </span>
            <span className="text-emerald-400 font-mono font-bold">인증 통과</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={handleOpenPartner}
            className="w-full py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>검증 파트너 사이트 안전 접속 (새 창)</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            아카이브 계속 둘러보기
          </button>
        </div>
      </div>
    </div>
  );
};
