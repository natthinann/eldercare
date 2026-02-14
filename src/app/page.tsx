"use client";

import { Heart, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ElderCarePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
      <Navbar activeMenu="กิจกรรม" />

      <header className="flex flex-col md:flex-row items-center justify-between px-20 py-16 bg-blue-50/30">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-black leading-tight mb-6">
            คู่มือการดูแล<br />
          </h1>
          <h1 className="text-5xl font-bold text-blue-600 leading-tight mb-6">
            ผู้สูงอายุด้วยความรัก
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            แหล่งรวมความรู้ และแรงบันดาลใจสำหรับสมาชิกในครอบครัว เพื่อให้คุณ<br />
            ดูแลคนที่คุณรักได้อย่างถูกต้อง มั่นใจ และมีความสุขในทุกๆวัน
          </p>
        </div>
        <div className="relative mt-10 md:mt-0">
          <img
            src="/Elderly.png"
            alt="Elderly couple"
            className="rounded-2xl shadow-2xl w-125 h-87.5 object-cover"
          />
        </div>
      </header>

      <section className="px-20 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">บทความยอดนิยม</h2>
            <p className="text-gray-400">ความรู้ที่คัดสรรมาเพื่อคุณโดยผู้เชี่ยวชาญด้านการดูแลผู้สูงวัย</p>
          </div>
          <a href="#" className="text-blue-900 font-semibold flex items-center gap-1 hover:underline text-sm">
            ดูบทความทั้งหมด <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "10 จุดเสี่ยงในบ้านที่ต้องระวังสำหรับผู้สูงอายุ",
              desc: "เนื่องจากกระดูกของผู้สูงอายุมักจะเปราะและแตกหักง่ายยิ่งถ้าผู้สูงอายุมีโรคประจำตัว...",
              img: "https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?q=80&w=400"
            },
            {
              title: "สุขภาพจิตผู้สูงอายุ เรื่องสำคัญที่ไม่ควรมองข้าม",
              desc: "หลายครั้งพบว่ามีผู้ดูแลและคนใกล้ชิดมาปรึกษาถึงวิธีการรับมือและปรับตัวกับบุคลิกภาพของผู้สูงอายุที่เปลี่ยนแปลงไปจากเดิม...",
              img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400"
            },
            {
              title: "ผู้สูงอายุกับปัญหาการกินยา เรื่องสำคัญไม่ควรมองข้าม",
              desc: "ขั้นตอนการดูแลสุขภาพส่วนตัวนี้จะช่วยให้ทั้งผู้ดูแลและผู้สูงอายุรู้สึกผ่อนคลายและลดอุบัติเหตุ...",
              img: "https://images.unsplash.com/photo-1550572017-ed9a027df9f4?q=80&w=400"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
              <div className="p-6 flex flex-col grow">
                <h3 className="font-bold text-lg mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">{item.desc}</p>
                <a href="#" className="text-blue-500 font-medium text-sm flex items-center gap-2 mt-auto">
                  อ่านต่อ <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50/40 px-20 py-16">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <p className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2">NUTRITIONAL BALANCE</p>
            <h2 className="text-3xl font-bold text-gray-800">เมนูอาหารเพื่อสุขภาพ</h2>
          </div>
          <a href="#" className="text-blue-900 font-semibold flex items-center gap-1 hover:underline text-sm">
            ดูเมนูอื่นเพิ่มเติม <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "ข้าวต้มปลา", tag: "โปรตีนคุณภาพดี ย่อยง่าย", img: "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=300" },
            { name: "แกงจืดเต้าหู้หมูสับ", tag: "โปรตีนคุณภาพดีน้ำซุปช่วยเพิ่มน้ำให้ร่างกาย", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=300" },
            { name: "ต้มยำปลากะพง", tag: "โปรตีนคุณภาพดี กระตุ้นความอยากอาหาร", img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=300" },
            { name: "ไข่ตุ๋นทรงเครื่อง", tag: "โปรตีนและผักหลากหลาย เคี้ยวง่าย", img: "https://images.unsplash.com/photo-1594759842811-134623269bd9?q=80&w=300" },
          ].map((food, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img src={food.img} alt={food.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-1">{food.name}</h4>
                <p className="text-gray-400 text-xs mb-4">{food.tag}</p>
                <button className="w-full border border-blue-200 text-blue-500 py-1.5 rounded-md text-xs font-medium hover:bg-blue-50 transition">
                  ดูสูตรอาหาร
                </button>
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