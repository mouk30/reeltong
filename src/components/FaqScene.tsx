import React, { useState } from 'react';
import { FAQS_DATA, FaqItem } from '../data/archiveData';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqScene: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedId, setExpandedId] = useState<number | null>(1); // 1st opened by default

  const categories = ['ALL', '기기 및 환경', '확률 및 기술', '게임 선택', '안전 수칙'];

  const filteredFaqs = FAQS_DATA.filter(faq => {
    const matchesCat = activeCategory === 'ALL' || faq.category === activeCategory;
    const matchesSearch = faq.question.includes(searchTerm) ||
      faq.directAnswer.includes(searchTerm) ||
      faq.detailedExplanation.includes(searchTerm);
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#07090E] border-t border-slate-800">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400 font-mono">
              <span className="text-amber-400 font-semibold">SCENE 09</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>KNOWLEDGE & FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-editorial tracking-tight">
              이용자들이 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                가장 많이 묻는 16가지 질문
              </span>
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="질문 검색 (예: 아이폰, 조작, 야마토)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat === 'ALL' ? '전체 (16)' : cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List (Structured for AEO: Question -> Direct Answer -> Detailed Explanation) */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-amber-400 font-bold">
                      Q{faq.id < 10 ? `0${faq.id}` : faq.id}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-editorial">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-4 bg-slate-950/60">
                    {/* Direct Answer Box (AEO Highlight) */}
                    <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs sm:text-sm">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
                        핵심 요약 답변 (DIRECT ANSWER)
                      </div>
                      <p className="text-white font-semibold leading-relaxed font-sans">
                        {faq.directAnswer}
                      </p>
                    </div>

                    {/* Detailed Explanation */}
                    <div className="text-xs sm:text-sm text-slate-300 font-serif-kr leading-relaxed space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        상세 기술적 해설
                      </div>
                      <p>{faq.detailedExplanation}</p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-slate-900">
                      <span>분류: {faq.category}</span>
                      <span>VERIFIED FACTUAL RECORD</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16 text-slate-400 space-y-2">
              <p className="text-base font-serif-kr">검색어와 일치하는 질문이 없습니다.</p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('ALL'); }}
                className="text-xs text-amber-400 underline cursor-pointer"
              >
                검색 조건 초기화
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
