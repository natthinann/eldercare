"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ElderCareArticle: React.FC = () => {
  const safetyPoints = [
    { title: "1. บันได", content: "บันไดเป็นจุดที่มีปัญหามากที่สุดเป็นอันดับต้น ๆ เนื่องจากผู้สูงอายุโดยมากไม่สามารถยกเท้าให้สูงจากพื้นได้เท่าคนปกติ การทำทางลาดคู่กับบันได หรือติดตั้งราวจับและเทปกันลื่นจะช่วยลดอุบัติเหตุได้" },
    { title: "2. พื้นห้องครัว", content: "พื้นห้องครัวส่วนใหญ่มักปูด้วยกระเบื้อง ทำให้ลื่นได้ง่าย ควรปูกระเบื้องที่มีแรงเสียดทานสูง และให้ผู้สูงอายุสวมรองเท้าเดินในบ้านเสมอ" },
    { title: "3. ห้องน้ำ", content: "50% ของการลื่นล้มเกิดในห้องน้ำ ควรติดแผ่นยางกันลื่น มีราวจับที่ได้มาตรฐาน และติดตั้งที่แขวนผ้าเช็ดตัวในระดับความสูงที่เหมาะสม" },
    { title: "4. ห้องนั่งเล่น", content: "ระวังการสะดุดสายไฟบนพื้นห้อง แนะนำให้ใช้ยางป้องกันสายเคเบิ้ลแบบหลังเต่าเพื่อให้เดินข้ามได้อย่างปลอดภัย" },
    { title: "5. รอบเตียง", content: "ควรมีพื้นที่ว่างรอบเตียงอย่างน้อย 90 เซนติเมตร เพื่อป้องกันการล้มฟาดขอบเตียง และตัวเตียงควรสูงประมาณ 40 เซนติเมตร" },
    { title: "6. ยกพื้น", content: "ยกพื้นเป็นจุดอันตราย ควรสร้างทางลาดหรือใช้ยางปีนไต่ฟุตปาทเพื่อช่วยในการเคลื่อนที่" },
    { title: "7. สวนหย่อม", content: "หมั่นกลบหลุมบ่อในสวนให้เรียบเสมอ เพื่อป้องกันการสะดุดล้มขณะเดินพักผ่อน" },
    { title: "8. ชานบ้าน", content: "ระวังพื้นไม้ที่ไม่สม่ำเสมอ และควรสวมรองเท้าที่มีดอกยางยึดพื้นได้ดีเมื่อเดินบนพื้นกระเบื้องชานบ้าน" },
    { title: "9. ถนนในสวนหย่อม", content: "ติดตั้งหมุดถนนโซลาร์เซลล์เพื่อส่องสว่างบริเวณรอยต่อถนนกับสนามหญ้าในช่วงเวลาโพล้เพล้" },
    { title: "10. บริเวณที่มีแสงสว่างไม่เพียงพอ", content: "ติดโคมไฟเซนเซอร์หรือไฟโซลาร์เซลล์ในจุดอับสายตา และใช้หลอดไฟ Daylight ภายในบ้านเพื่อให้มองเห็นชัดเจน" }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-700 flex flex-col">
      <Navbar activeMenu="บทความ" />

      <div className="max-w-5xl mx-auto md:mt-4 md:px-6">
        <img
          src="/10-risk-points.png"
          alt="10 จุดเสี่ยงสำหรับผู้สูงอายุ"
          className="w-full h-auto block md:rounded-xl shadow-sm border border-gray-100"
        />
      </div>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
          10 จุดเสี่ยงในบ้านที่มักเกิดอุบัติเหตุกับผู้สูงอายุ
        </h1>

        <p className="mb-10 text-lg text-gray-600 leading-relaxed">
          ความปลอดภัยในบ้านเป็นสิ่งสำคัญที่สุดสำหรับผู้สูงอายุ วันนี้เรามีแนวทางปรับปรุง 10 จุดเสี่ยงเพื่อป้องกันการหกล้มมาฝากกันครับ
        </p>

        <div className="space-y-8">
          {safetyPoints.map((item, index) => (
            <div key={index} className="group border-b border-gray-50 pb-6 last:border-0">
              <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-900">
                <span className="text-blue-600 mr-2">{item.title}</span>
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-gray-100 text-sm text-gray-400">
          อ้างอิง: <a 
            href="https://www.trafficthai.com/content_blog-51.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            https://www.trafficthai.com/content_blog-51.html
          </a>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default ElderCareArticle;