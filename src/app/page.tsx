"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articlesData } from '@/app/articles_1/data';

const ElderCarePage = () => {
  const articlesList = Object.keys(articlesData)
    .map((key) => ({
      id: key,
      ...(articlesData as any)[key],
    }))
    .slice(0, 3);

  const foodMenus = [
    {
      name: "ข้าวต้มปลา",
      tag: "โปรตีนคุณภาพดี ย่อยง่าย",
      img: "https://www.thammculture.com/wp-content/uploads/2023/03/Untitled-402.jpg",
      url: "https://www.wongnai.com/recipes/boiled-rice-with-fish"
    },
    {
      name: "แกงจืดเต้าหู้หมูสับ",
      tag: "โปรตีนคุณภาพดีน้ำซุปช่วยเพิ่มน้ำให้ร่างกาย",
      img: "https://img.wongnai.com/p/1920x0/2019/01/20/95d74f441c1448a6a352de4a10744d14.jpg",
      url: "https://www.wongnai.com/recipes/soup-with-egg-tofu-and-mine-pork"
    },
    {
      name: "ต้มยำปลากะพง",
      tag: "โปรตีนคุณภาพดี กระตุ้นความอยากอาหาร",
      img: "https://assets.unileversolutions.com/recipes-v2/117752.jpg",
      url: "https://www.knorr.com/th/r/%E0%B8%95%E0%B9%89%E0%B8%A1%E0%B8%A2%E0%B8%B3%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%81%E0%B8%B0%E0%B8%9E%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%83%E0%B8%AA.html/117752"
    },
    {
      name: "ไข่ตุ๋นทรงเครื่อง",
      tag: "โปรตีนและผักหลากหลาย เคี้ยวง่าย",
      img: "https://images.aws.nestle.recipes/original/12f17c7de982b57fdf3e4c9091cd3b29_steamed-egg-with-minced-pork.jpeg",
      url: "https://www.wongnai.com/mali/recipes/steamed-egg"
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-700 flex flex-col">
      <Navbar activeMenu="หน้าแรก" />

      <header style={{ backgroundColor: '#EEF3F8' }} className="flex flex-col md:flex-row items-center justify-between px-20 py-16">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-black leading-tight mb-2">คู่มือการดูแล</h1>
          <h1 className="text-5xl font-bold text-blue-600 leading-tight mb-6">ผู้สูงอายุด้วยความรัก</h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            แหล่งรวมความรู้ และแรงบันดาลใจเพื่อให้คุณดูแลคนที่คุณรักได้อย่างถูกต้อง มั่นใจ และมีความสุข
          </p>
        </div>
        <div className="relative mt-10 md:mt-0 text-center">
          <img src="/Elderly.png" alt="Elderly" className="rounded-2xl shadow-2xl w-full max-w-md object-cover" />
        </div>
      </header>

      <section className="bg-white px-20 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">บทความยอดนิยม</h2>
            <p className="text-gray-400">ความรู้ที่คัดสรรมาเพื่อคุณโดยผู้เชี่ยวชาญด้านการดูแลผู้สูงวัย</p>
          </div>
          <Link href="/populararticle" className="text-blue-900 font-bold hover:underline flex items-center gap-1">
            ดูบทความทั้งหมด <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesList.map((item) => (
            <div key={item.id} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col grow">
                <span className="text-blue-600 text-[10px] font-bold uppercase mb-2">{item.category}</span>
                <h3 className="font-bold text-lg mb-3 leading-snug group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {item.content}
                </p>
                <Link
                  href={`/articles_1/${item.id}`}
                  className="text-blue-500 font-medium text-sm flex items-center gap-2 mt-auto">
                  อ่านต่อ <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: '#E7F2FD' }} className="px-20 py-16">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <p className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2">NUTRITIONAL BALANCE</p>
            <h2 className="text-3xl font-bold text-gray-800">เมนูอาหารเพื่อสุขภาพ</h2>
          </div>
          <Link href="/healthy_menu" className="text-blue-900 font-bold hover:underline flex items-center gap-1">
            ดูเมนูอื่นเพิ่มเติม <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {foodMenus.map((food, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <img src={food.img} alt={food.name} className="h-44 w-full object-cover" />
              <div className="p-4 flex flex-col grow">
                <h4 className="font-bold text-gray-800 mb-1">{food.name}</h4>
                <p className="text-gray-400 text-xs mb-4">{food.tag}</p>
                <a
                  href={food.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 border border-blue-400 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors text-center">
                  ดูสูตรอาหาร
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElderCarePage;