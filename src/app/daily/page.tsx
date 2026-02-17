"use client";

import { useState, useEffect } from 'react';
import {
  PlusCircle, Sun, Utensils, X, Clock, ChevronDown, Activity, Calendar as CalendarIcon, Users
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DailyRoutine = () => {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('วันจันทร์');

  const days = ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์', 'วันอาทิตย์'];

  const getCategoryTheme = (category: any) => {
    switch (category) {
      case 'อาหาร':
        return { icon: <Utensils className="text-orange-500 w-6 h-6" />, bgColor: 'bg-orange-100' };
      case 'กีฬา':
        return { icon: <Activity className="text-red-500 w-6 h-6" />, bgColor: 'bg-red-100' };
      case 'สันทนาการ':
        return { icon: <Users className="text-purple-500 w-6 h-6" />, bgColor: 'bg-purple-100' };
      case 'สุขภาพ':
      default:
        return { icon: <Sun className="text-green-500 w-6 h-6" />, bgColor: 'bg-green-100' };
    }
  };

  const [schedule, setSchedule] = useState([
    {
      day: 'วันจันทร์',
      time: '07:00-08:00',
      title: 'กายบริหารยามเช้า',
      description: 'ยืดเหยียดเบาๆ เพื่อกระตุ้นการไหลเวียนโลหิตและเตรียมความพร้อมของร่างกาย',
      icon: <Sun className="text-green-500 w-6 h-6" />,
      bgColor: 'bg-green-100'
    },
    {
      day: 'วันจันทร์',
      time: '08:30-09:30',
      title: 'รับประทานอาหารเช้าเพื่อสุขภาพ',
      description: 'โจ๊กธัญพืชหรืออาหารที่มีกากใยสูง พร้อมผลไม้ตามฤดูกาล',
      icon: <Utensils className="text-orange-500 w-6 h-6" />,
      bgColor: 'bg-orange-100'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'สุขภาพ',
    day: 'วันจันทร์',
    startTime: '08:00',
    endTime: '09:00'
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredSchedule = schedule.filter(item => item.day === selectedDay);

  const handleSave = () => {
    if (!formData.title) return alert("กรุณากรอกชื่อกิจกรรม");

    const theme = getCategoryTheme(formData.category);

    const newActivity = {
      day: formData.day,
      time: `${formData.startTime}-${formData.endTime}`,
      title: formData.title,
      description: formData.description,
      icon: theme.icon,
      bgColor: theme.bgColor
    };

    setSchedule([...schedule, newActivity]);
    setIsModalOpen(false);
    setSelectedDay(formData.day);
    setFormData({ title: '', description: '', category: 'สุขภาพ', day: 'วันจันทร์', startTime: '08:00', endTime: '09:00' });
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 flex flex-col">
      <Navbar activeMenu="กิจกรรม" />

      <main className="grow max-w-6xl mx-auto py-12 px-6 w-full">
        <div className="mb-8">
          <p className="text-blue-500 font-bold text-sm tracking-wide uppercase">DAILY ROUTINE</p>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold text-slate-800">ตารางกิจกรรมประจำวัน</h1>
              <p className="text-sm text-[#616D7D]">ช่วยส่งเสริมคุณภาพชีวิตที่ดีด้วยตารางกิจกรรมที่ออกแบบมาเพื่อความสุขและสุขภาพ</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95">
              <PlusCircle size={20} />
              <span>เพิ่มกิจกรรมใหม่</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden self-start sticky top-24">
            <div className="p-4 bg-slate-50 border-b border-gray-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">เลือกวัน</span>
            </div>
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`w-full px-6 py-4 transition-all flex justify-between items-center group
                  ${selectedDay === day
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-50 last:border-0'}`}>
                <span className="font-medium">{day}</span>
                {selectedDay === day && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
              </button>
            ))}
          </div>

          <div className="lg:col-span-9 min-h-100">
            <div className="mb-6 flex items-center gap-2">
              <CalendarIcon className="text-slate-400" size={20} />
              <h2 className="text-xl font-bold text-slate-700">กิจกรรมสำหรับ {selectedDay}</h2>
            </div>

            {filteredSchedule.length > 0 ? (
              <div className="relative">
                <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-slate-100 z-0 hidden md:block"></div>
                <div className="space-y-6">
                  {filteredSchedule.map((item, index) => (
                    <div key={index} className="flex gap-4 md:gap-8 items-start relative z-10">
                      <div className={`${item.bgColor} p-4 rounded-full shadow-sm ring-4 ring-white shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <span className="text-blue-600 font-bold text-sm bg-blue-50 px-2 py-1 rounded-md">{item.time}</span>
                        <h3 className="text-lg font-bold text-slate-800 mt-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border-2 border-dashed border-slate-200 p-16 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                  <CalendarIcon className="text-slate-300 w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">ยังไม่มีกิจกรรมใน{selectedDay}</h3>
                <p className="text-slate-400 mt-2 max-w-xs">ลองเพิ่มกิจกรรมใหม่เพื่อเริ่มต้นวันอย่างมีคุณภาพ</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center px-8 py-6 border-b border-slate-50">
              <h2 className="text-2xl font-bold text-slate-800">เพิ่มกิจกรรมใหม่</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-5 max-h-[80vh] overflow-y-auto">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase ml-1">ชื่อกิจกรรม</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="เช่น เดินออกกำลังกายยามเช้า"
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-lg transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase ml-1">หมวดหมู่กิจกรรม</label>
                <div className="relative">
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 appearance-none cursor-pointer focus:ring-2 focus:ring-blue-500/20 text-lg transition-all pr-12"
                  >
                    <option value="สุขภาพ">สุขภาพ </option>
                    <option value="อาหาร">อาหาร </option>
                    <option value="กีฬา">กีฬา </option>
                    <option value="สันทนาการ">สันทนาการ </option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase ml-1">เลือกวันที่ต้องการบันทึก</label>
                <div className="relative">
                  <select
                    value={formData.day}
                    onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 appearance-none cursor-pointer focus:ring-2 focus:ring-blue-500/20 text-lg pr-12"
                  >
                    {days.map((day) => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase ml-1">เวลาที่เริ่ม</label>
                  <input
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500/20 text-lg" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase ml-1">เวลาที่จบ</label>
                  <input
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500/20 text-lg" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase ml-1">รายละเอียดเพิ่มเติม</label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="รายละเอียดสั้นๆ..."
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500/20 text-lg" />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-4 bg-slate-100 text-slate-500 font-bold text-lg rounded-2xl hover:bg-slate-200 transition-all active:scale-95">
                  ยกเลิก
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 py-4 bg-blue-600 text-white font-bold text-lg rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95">
                  บันทึกกิจกรรม
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DailyRoutine;