import React, { useState } from 'react';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/archiveData';
import { BookOpen, Search, Filter } from 'lucide-react';

export const GlossaryScene: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', '기본 구조', '확률 / 수치', '심볼 / 기능'];

  const filteredTerms = GLOSSARY_TERMS.filter(term => {
    const matchesCategory = selectedCategory === 'ALL' || term.category === selectedCategory;
    const matchesSearch = term.term.includes(searchTerm) ||
      term.termEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="glossary" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#090D14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-slate-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400 font-mono">
              <span className="text-amber-400 font-semibold">SCENE 08</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>ENCYCLOPEDIC TERMINOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-editorial tracking-tight">
              모르면 손해 보는 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                릴게임 핵심 용어 사전
              </span>
            </h2>
          </div>

          {/* Search Bar & Category Filter */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="용어 검색 (예: 릴, RTP, 와일드)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/80 transition-colors"
              />
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat === 'ALL' ? '전체' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Glossary Grid (2 Columns, Editorial Catalog Presentation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.map((term, index) => (
            <div
              key={term.term}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-3"
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl font-bold text-white font-editorial">
                    {term.term}
                  </h3>
                  <span className="text-xs text-amber-400/90 font-mono">
                    ({term.termEn})
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                  {term.category}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-semibold text-slate-200 font-sans leading-relaxed">
                  {term.definition}
                </p>
                <p className="text-xs text-slate-400 font-serif-kr leading-relaxed pt-1">
                  {term.details}
                </p>
              </div>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="col-span-2 text-center py-16 text-slate-400 space-y-2">
              <p className="text-base font-serif-kr">검색어와 일치하는 용어가 없습니다.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('ALL'); }}
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
