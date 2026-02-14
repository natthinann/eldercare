"use client";

import { PlusCircle, Sun, Utensils, Users, Flower2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DailyRoutine = () => {
  const days = ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์', 'วันอาทิตย์'];
  
  const schedule = [
    {
      time: '07:00-08:00',
      title: 'กายบริหารยามเช้า',
      description: 'ยืดเหยียดเบาๆ เพื่อกระตุ้นการไหลเวียนโลหิตและเตรียมความพร้อมของร่างกาย',
      icon: <Sun className="text-green-500 w-6 h-6" />,
      bgColor: 'bg-green-100'
    },
    {
      time: '08:30-09:30',
      title: 'รับประทานอาหารเช้าเพื่อสุขภาพ',
      description: 'โจ๊กธัญพืชหรืออาหารที่มีกากใยสูง พร้อมผลไม้ตามฤดูกาล',
      icon: <Utensils className="text-orange-500 w-6 h-6" />,
      bgColor: 'bg-orange-100'
    },
    {
      time: '10:00-11:30',
      title: 'ชั่วโมงกิจกรรมสันทนาการ',
      description: 'พบปะเพื่อนฝูง หรือทำกิจกรรมงานฝีมือเพื่อฝึกสมอง',
      icon: <Users className="text-blue-500 w-6 h-6" />,
      bgColor: 'bg-blue-100'
    },
    {
      time: '14:00-15:00',
      title: 'พักผ่อนและทำสมาธิ',
      description: 'การงีบหลับสั้นๆ หรือฝึกหายใจลึกๆ เพื่อผ่อนคลายความเครียด',
      icon: <Flower2 className="text-purple-500 w-6 h-6" />,
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
      <Navbar activeMenu="กิจกรรม" />

      <main className="grow max-w-6xl mx-auto py-12 px-6 w-full">
        <div className="mb-2">
          <p className="text-blue-500 font-bold text-sm tracking-wide uppercase">DAILY ROUTINE</p>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h1 className="text-3xl font-bold text-slate-800">ตารางกิจกรรมประจำวัน</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95">
              <PlusCircle size={20} />
              <span>เพิ่มกิจกรรมใหม่</span>
            </button>
          </div>
          <p className="text-slate-400 mt-1">ช่วยส่งเสริมคุณภาพชีวิตที่ดีด้วยตารางกิจกรรมที่ออกแบบมาเพื่อความสุขและสุขภาพ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          {/* Sidebar */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden self-start">
            {days.map((day, idx) => (
              <div 
                key={day} 
                className={`px-6 py-4 cursor-pointer transition-colors flex justify-between items-center
                  ${idx === 0 ? 'bg-blue-500 text-white' : 'text-slate-600 hover:bg-slate-50 border-b border-gray-50'}`}
              >
                <span className="font-medium">{day}</span>
                {idx === 0 && <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded-full">Today</span>}
              </div>
            ))}
          </div>

          {/* Timeline Content */}
          <div className="lg:col-span-9 relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-slate-100 z-0"></div>
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div key={index} className="flex gap-4 md:gap-8 items-start relative z-10">
                  <div className={`${item.bgColor} p-4 rounded-full shadow-sm ring-4 ring-white shrink-0`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-orange-500 font-bold text-sm">{item.time}</span>
                    <h3 className="text-lg font-bold text-slate-800 mt-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DailyRoutine;