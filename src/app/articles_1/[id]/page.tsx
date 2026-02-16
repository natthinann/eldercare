"use client";

import { useParams } from 'next/navigation';
import { articlesData } from '../data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft, Calendar, Link as LinkIcon } from 'lucide-react'; 
import Link from 'next/link';

const ArticleDetail = () => {
  const params = useParams();
  const id = params.id as string;

  const article = articlesData[id as keyof typeof articlesData];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-slate-800">ไม่พบเนื้อหาบทความนี้</h1>
        <Link href="/populararticle" className="px-6 py-2 bg-blue-500 text-white rounded-lg">กลับไปหน้าบทความ</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeMenu="บทความ" />

      <main className="max-w-6xl mx-auto py-10 px-6 grow">
        
        {/* ปุ่มย้อนกลับรูปแบบที่คุณต้องการ */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/populararticle" className="p-1 bg-blue-400 rounded-md text-white hover:bg-blue-500 transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <span className="text-slate-500 text-sm font-medium uppercase tracking-wide">ย้อนกลับ</span>
        </div>

        {/* รูปภาพ Banner แบบคลีน */}
        <div className="relative rounded-2xl overflow-hidden mb-10 shadow-md">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-auto object-cover max-h-125"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4" /> {article.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {article.title}
            </h1>
          </header>

          {/* เนื้อหาข้อความ */}
          <div className="text-slate-700">
            {article.content.split('\n').map((line, index) => {
              const trimmedLine = line.trim();
              if (trimmedLine === "") return <br key={index} />;

              // ปรับส่วนอ้างอิงให้อยู่บรรทัดเดียวกันพร้อมไอคอน
              if (trimmedLine.startsWith("อ้างอิง:")) {
                const url = trimmedLine.replace("อ้างอิง:", "").trim();
                return (
                  <div key={index} className="mt-12 pt-6 border-t border-slate-100">
                    <a 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors group"
                    >
                      <LinkIcon size={16} className="text-slate-400 group-hover:text-blue-500" />
                      <span className="text-sm font-medium">อ่านข้อมูลเพิ่มเติมจากแหล่งที่มา</span>
                    </a>
                  </div>
                );
              }

              return (
                <p key={index} className="text-lg leading-[1.8] mb-6">
                  {trimmedLine}
                </p>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;