import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 px-8 border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-500 p-1 rounded-lg text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <span className="text-slate-800 font-bold text-xl">Elder care</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            เรามุ่งสร้างสังคมที่เข้มแข็งผ่านความรู้ ความเข้าใจในการดูแลผู้สูงอายุ เพื่อคุณภาพชีวิตที่ดีขึ้นของทุกคนในครอบครัว
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-1 gap-4">
          <h4 className="font-bold text-slate-800">เนื้อหา</h4>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 text-slate-400 text-sm">
            <a href="#" className="hover:text-blue-500">บทความยอดนิยม</a>
            <a href="#" className="hover:text-blue-500">วิดีโอแนะนำ</a>
            <a href="#" className="hover:text-blue-500">เมนูอาหารเพื่อสุขภาพ</a>
            <a href="#" className="hover:text-blue-500">คลังความรู้</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200">
        <p className="text-[10px] text-slate-300 uppercase tracking-tight">
          2026 ELDERCARE สร้างสรรค์เพื่อความสุขที่ยั่งยืน.
        </p>
      </div>
    </footer>
  );
};

export default Footer;