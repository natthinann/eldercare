import React from 'react';

const ElderCareArticle: React.FC = () => {
  const safetyPoints = [
    {
      title: "1. บันได",
      content: "บันไดเป็นจุดที่มีปัญหามากที่สุดเป็นอันดับต้น ๆ เนื่องจากผู้สูงอายุโดยมากไม่สามารถยกเท้าให้สูงจากพื้นได้เท่าคนปกติ บางครั้งมีปัญหาเรื่องการทรงตัว หรือมีปัญหาหน้ามืดกะทันหัน โดยปกติควรทำราวจับคู่กับบันไดเพื่อช่วยพยุง และควรติดแผ่นกันลื่นที่ขั้นบันได"
    },
    {
      title: "2. พื้นห้องครัว",
      content: "เนื่องจากพื้นห้องครัวส่วนใหญ่มักปูด้วยกระเบื้อง ทำให้ลื่นและหกล้มได้ง่าย ควรเลือกกระเบื้องที่มีความเสียดทานสูง หรือใช้พรมเช็ดเท้าที่มีแถบกันลื่นเพื่อเพิ่มความปลอดภัย"
    },
    {
      title: "3. ห้องน้ำ",
      content: "50% ของการล้มในบ้านเกิดในห้องน้ำ เพราะพื้นเปียกและลื่นได้ง่าย ควรติดแผ่นยางกันลื่น ติดตั้งราวจับที่ได้มาตรฐาน และปรับความสูงของสุขภัณฑ์ให้พอดีกับผู้สูงอายุ"
    },
    {
      title: "4. ห้องนั่งเล่น",
      content: "สาเหตุหลักคือสายไฟและสายเคเบิลที่วางพาดพื้น ควรใช้รางเก็บสายไฟให้เรียบร้อยเพื่อป้องกันการสะดุดล้ม และจัดวางเฟอร์นิเจอร์ให้มีทางเดินที่กว้างขวาง"
    },
    {
      title: "5. รอบเตียง",
      content: "พื้นที่รอบเตียงหากแคบเกินไปอาจทำให้เกิดอุบัติเหตุได้ ควรมีพื้นที่ว่างอย่างน้อย 90 ซม. และความสูงเตียงควรอยู่ที่ประมาณ 40 ซม. เพื่อให้ขึ้นลงได้สะดวก"
    },
    {
      title: "6. ยกพื้น",
      content: "จุดต่างระดับหรือยกพื้นเล็กน้อยเป็นจุดที่มองเห็นยาก ควรทำทางลาดทดแทน หรือติดแถบสีที่ขอบพื้นเพื่อให้สังเกตได้ชัดเจน"
    },
    {
      title: "7. สวนหย่อม",
      content: "พื้นในสวนอาจมีหลุมบ่อหรือพื้นไม่เรียบจากการขุดของสัตว์หรือน้ำกัดเซาะ ควรหมั่นสำรวจและปรับหน้าดินให้เรียบเสมอ"
    },
    {
      title: "8. ชานบ้าน",
      content: "ชานบ้านที่ปูด้วยไม้หรือกระเบื้องมักมีความลื่นเมื่อเปียกฝน ไม่ควรให้ผู้สูงอายุออกมาเดินเพียงลำพัง และควรสวมรองเท้าที่มีดอกยางกันลื่น"
    },
    {
      title: "9. ถนนในสวนหย่อม",
      content: "ในช่วงโพล้เพล้มักมองเห็นทางเดินไม่ชัดเจน ควรติดตั้งไฟส่องสว่างตามทางเดิน หรือใช้โคมไฟพลังงานแสงอาทิตย์เพื่อเพิ่มความปลอดภัย"
    },
    {
      title: "10. บริเวณที่มีแสงสว่างไม่เพียงพอ",
      content: "สายตาผู้สูงอายุมักพร่ามัว ควรติดตั้งไฟระบบเซนเซอร์ที่จะเปิดอัตโนมัติเมื่อมีการเคลื่อนไหว โดยเฉพาะตามทางเดินและมุมมืดของบ้าน"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white border-b px-4 py-3 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
          <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs">♥</span>
          </div>
          Elder care
        </div>
        <div className="hidden md:flex gap-6 text-sm text-blue-800 font-medium">
          <a href="#">หน้าแรก</a>
          <a href="#">บทความความรู้</a>
          <a href="#">วิดีโอแนะนำ</a>
          <a href="#">เมนูสุขภาพ</a>
          <a href="#">กิจกรรม</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1581578731522-5b176614f359?auto=format&fit=crop&q=80&w=2000" 
          alt="Elderly care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="flex items-baseline gap-4">
              <h1 className="text-red-600 text-8xl font-bold italic">10</h1>
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-1">จุดเสี่ยงในบ้านที่ต้องระวัง</h2>
                <p className="text-3xl font-light">สำหรับผู้สูงอายุ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-10 leading-relaxed">
        <p className="mb-8 text-lg indent-8">
          เนื่องจากกระดูกของผู้สูงอายุจะเปราะและแตกหักง่าย ซึ่งถ้าผู้สูงอายุมีโรคประจำตัว เช่น โรคเบาหวาน อาจทำให้การรักษากระดูกหักทำได้ยากยิ่งขึ้น 
          วันนี้ร้านไทยจราจรได้รวบรวม 10 จุดอันตรายในบ้านที่มักเกิดกับผู้สูงอายุมาเล่าสู่กันฟัง พร้อมด้วยวิธีกรอง่าย ๆ ด้วยตัวคุณเอง ดังนี้
        </p>

        <div className="space-y-8">
          {safetyPoints.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 italic">
            จบกันไปแล้วกับ 10 จุดอันตรายภายในบ้านสำหรับผู้สูงอายุ ไม่ว่าจะเป็นบันได ห้องครัว หรือมุมต่างๆ 
            แต่อุปกรณ์ที่หาซื้อง่ายๆ เพื่อผู้ใหญ่ในบ้านของคุณ หากคุณสนใจสามารถเลือกซื้อได้ที่เว็บไซต์ของร้านไทยจราจร
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xl mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs">♥</span>
              </div>
              Elder care
            </div>
            <p className="text-xs text-gray-400 leading-tight">
              เรามุ่งมั่นที่จะเป็นส่วนหนึ่งในการมอบความรู้<br />
              การเฝ้าระวังในการดูแลผู้สูงอายุ เพื่อคุณภาพชีวิต<br />
              ที่ดีแก่คนคุณรักในครอบครัว
            </p>
          </div>
          <div className="grid grid-cols-1 text-sm text-gray-500 gap-2">
            <h4 className="font-bold text-black">เนื้อหา</h4>
            <a href="#">บทความยอดนิยม</a>
            <a href="#">วิดีโอแนะนำ</a>
            <a href="#">เมนูอาหารเพื่อสุขภาพ</a>
            <a href="#">คลังความรู้</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ElderCareArticle;