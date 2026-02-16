"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articlesData } from '@/app/articles_1/data';

const ArticleCard = ({ id, article }: { id: string; article: any }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300">
    <div className="relative h-48 sm:h-56 overflow-hidden">
      <img
        src={article.img}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
    </div>

    <div className="p-6 flex flex-col grow">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
          {article.category}
        </span>
        <span className="text-[10px] text-slate-400 flex items-center gap-1">
          <Calendar className="w-3 h-3" /> {article.date}
        </span>
      </div>

      <h3 className="text-[#334155] font-bold text-lg mb-3 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
        {article.title}
      </h3>

      <p className="text-[#64748b] text-sm mb-6 line-clamp-3 leading-relaxed">
        {article.content}
      </p>

      <div className="mt-auto">
        <Link 
          href={`/articles_1/${id}`} 
          className="text-[#3b82f6] font-bold text-sm flex items-center group-hover:gap-2 transition-all duration-300">
          อ่านต่อ <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
);

const AllArticlesPage = () => {
  const articlesArray = Object.entries(articlesData).map(([id, data]) => ({ 
    id, 
    ...data as any 
  }));

  const [activeCategory, setActiveCategory] = useState("ทั้งหมด");

  const categories = ["ทั้งหมด", ...Array.from(new Set(articlesArray.map(item => item.category)))];

  const filteredArticles = activeCategory === "ทั้งหมด"
    ? articlesArray
    : articlesArray.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen font-sans text-slate-700 flex flex-col bg-[#f8fafc]">
      <Navbar activeMenu="บทความ" />

      <main className="max-w-6xl mx-auto py-10 px-6 grow w-full">

        <header className="mb-10">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="p-1.5 bg-blue-400 rounded-md text-white hover:bg-blue-500 transition-colors shadow-sm inline-flex items-center justify-center">
              <ChevronLeft size={20} />
            </Link>
            <h1 className="text-3xl font-bold text-[#1e293b]">บทความสุขภาพ</h1> 
          </div> <br/>
          <h1 className="text-sm ml-10 text-[#616D7D]">ความรู้ที่คัดสรรมาเพื่อการดูแลที่ถูกต้องและปลอดภัย</h1>
        </header>

        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold border transition-all duration-200 ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((item) => (
              <ArticleCard key={item.id} id={item.id} article={item} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-slate-400">
            ไม่พบข้อมูลบทความในหมวดหมู่นี้
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AllArticlesPage;