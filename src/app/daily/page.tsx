"use client";

import { useState, useEffect } from 'react';
import {PlusCircle,Sun,Utensils,Users,Flower2,X,Clock,ChevronDown} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DailyRoutine = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
      <Navbar activeMenu="กิจกรรม" />

      <main className="grow max-w-6xl mx-auto py-12 px-6 w-full">
        <div className="mb-2">
          <p className="text-blue-500 font-bold text-sm tracking-wide uppercase">DAILY ROUTINE</p>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h1 className="text-3xl font-bold text-slate-800">ตารางกิจกรรมประจำวัน</h1>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95">
              <PlusCircle size={20} />
              <span>เพิ่มกิจกรรมใหม่</span>
            </button>
          </div>
          <p className="text-slate-400 mt-1">ช่วยส่งเสริมคุณภาพชีวิตที่ดีด้วยตารางกิจกรรมที่ออกแบบมาเพื่อความสุขและสุขภาพ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden self-start">
            {days.map((day, idx) => (
              <div
                key={day}
                className={`px-6 py-4 cursor-pointer transition-colors flex justify-between items-center
                  ${idx === 0 ? 'bg-blue-500 text-white' : 'text-slate-600 hover:bg-slate-50 border-b border-gray-50'}`}>
                <span className="font-medium">{day}</span>
                {idx === 0 && <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded-full">Today</span>}
              </div>
            ))}
          </div>

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

      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center px-8 py-6 border-b border-gray-50">
              <h2 className="text-2xl font-bold text-slate-800">เพิ่มกิจกรรมใหม่</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-[17px] font-bold text-slate-800">ชื่อกิจกรรม</label>
                <input
                  type="text"
                  placeholder="เช่น เดินออกกำลังกายยามเช้า"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300" />
              </div>

              <div className="space-y-2">
                <label className="text-[17px] font-bold text-slate-800">รายละเอียดเพิ่มเติม</label>
                <textarea
                  placeholder="โจ๊กธัญพืชหรืออาหารที่มีกากใยสูง พร้อมผลไม้ตามฤดูกาล"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all h-28 resize-none placeholder:text-slate-300" />
              </div>

              <div className="space-y-2">
                <label className="text-[17px] font-bold text-slate-800">เลือกวัน</label>
                <div className="relative flex items-center">
                  <select className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none cursor-pointer">
                    {days.map(day => <option key={day} value={day}>{day}</option>)}
                  </select>
                  <div className="absolute right-5 pointer-events-none text-slate-400">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[17px] font-bold text-slate-800">เวลาที่เริ่ม</label>
                  <div className="relative flex items-center">
                    <input
                      list="time-options"
                      placeholder="08:00"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-2 focus:ring-blue-500/20 [&::-webkit-calendar-picker-indicator]:hidden" />
                    <div className="absolute right-5 pointer-events-none text-slate-400">
                      <Clock size={18} />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[17px] font-bold text-slate-800">เวลาที่จบ</label>
                  <div className="relative flex items-center">
                    <input
                      list="time-options"
                      placeholder="09:00"
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/30 focus:outline-none focus:ring-2 focus:ring-blue-500/20 [&::-webkit-calendar-picker-indicator]:hidden" />
                    <div className="absolute right-5 pointer-events-none text-slate-400">
                      <Clock size={18} />
                    </div>
                  </div>
                </div>
              </div>

              <datalist id="time-options">
                <option value="06:00" />
                <option value="07:00" />
                <option value="08:00" />
                <option value="09:00" />
                <option value="12:00" />
                <option value="17:00" />
              </datalist>
            </div>

            <div className="px-8 py-6 bg-slate-50/50 flex gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-4 px-6 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-100 transition-all active:scale-95 shadow-sm">
                ยกเลิก
              </button>
              <button className="flex-1 py-4 px-6 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95">
                บันทึกกิจกรรม
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DailyRoutine;