import { PlusCircle, Sun, Utensils, Users, Flower2 } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700">
      <header className="bg-white px-8 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 p-1.5 rounded-lg">
            <div className="text-white fill-current">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
          </div>
          <span className="text-blue-500 font-bold text-xl">Elder care</span>
        </div>
        <nav className="flex gap-8 font-medium">
          <a href="#" className="hover:text-blue-500">หน้าแรก</a>
          <a href="#" className="hover:text-blue-500">บทความความรู้</a>
          <a href="#" className="hover:text-blue-500">วิดีโอแนะนำ</a>
          <a href="#" className="hover:text-blue-500 text-slate-900">เมนูสุขภาพ</a>
          <a href="#" className="text-blue-500">กิจกรรม</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-6">
        <div className="mb-2">
          <p className="text-blue-500 font-bold text-sm tracking-wide uppercase">DAILY ROUTINE</p>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-slate-800">ตารางกิจกรรมประจำวัน</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-200 transition-all">
              <PlusCircle size={20} />
              <span>เพิ่มกิจกรรมใหม่</span>
            </button>
          </div>
          <p className="text-slate-400 mt-1">ช่วยส่งเสริมคุณภาพชีวิตที่ดีด้วยตารางกิจกรรมที่ออกแบบมาเพื่อความสุขและสุขภาพ</p>
        </div>

        <div className="grid grid-cols-12 gap-8 mt-10">
          <div className="col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden self-start">
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

          <div className="col-span-9 relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-slate-100 z-0"></div>

            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div key={index} className="flex gap-8 items-start relative z-10">
                  <div className={`${item.bgColor} p-4 rounded-full shadow-sm ring-4 ring-white`}>
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

      <footer className="bg-slate-50 pt-20 pb-10 px-8 border-t border-gray-100 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-500 p-1 rounded-lg text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <span className="text-slate-800 font-bold text-xl">Elder care</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              เรามุ่งสร้างสังคมที่เข้มแข็งผ่านความรู้ ความเข้าใจในการดูแลผู้สูงอายุ เพื่อคุณภาพชีวิตที่ดีขึ้นของทุกคนในครอบครัว
            </p>
          </div>
          <div className="col-span-7 grid grid-cols-1 gap-4">
            <h4 className="font-bold text-slate-800">เนื้อหา</h4>
            <div className="grid grid-cols-1 gap-3 text-slate-400 text-sm">
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
    </div>
  );
};

export default DailyRoutine;