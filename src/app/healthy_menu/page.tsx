import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface FoodCardProps {
  image: string;
  title: string;
  description: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ image, title, description }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full border border-gray-100">
    <div className="aspect-4/3 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-5 flex flex-col grow text-left">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6 grow">{description}</p>
      <button className="w-full py-2 px-4 border border-blue-400 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
        ดูสูตรอาหาร
      </button>
    </div>
  </div>
);

const HealthyMenuPage: React.FC = () => {
  const menuItems = [
    { title: "ข้าวต้มปลา", description: "โปรตีนคุณภาพดี ย่อยง่าย", image: "/api/placeholder/400/300" },
    { title: "แกงจืดเต้าหู้หมูสับ", description: "โปรตีนคุณภาพดี น้ำซุปช่วยเพิ่มน้ำให้ร่างกาย", image: "/api/placeholder/400/300" },
    { title: "ต้มยำปลากะพง", description: "โปรตีนคุณภาพดี กระตุ้นความอยากอาหาร", image: "/api/placeholder/400/300" },
    { title: "ไข่ตุ๋นทรงเครื่อง", description: "โปรตีนและผักหลากหลาย เคี้ยวง่าย", image: "/api/placeholder/400/300" },
    { title: "แกงส้มชะอมไข่", description: "แคลเซียมและวิตามินสูง", image: "/api/placeholder/400/300" },
    { title: "แกงเลียงกุ้งสด", description: "ผักหลากหลาย โปรตีนจากกุ้ง", image: "/api/placeholder/400/300" },
    { title: "โจ๊กข้าวโอ๊ต", description: "คาร์โบไฮเดรตเชิงซ้อน อิ่มนานกว่าข้าวขาว ช่วยลดคอเลสเตอรอล", image: "/api/placeholder/400/300" },
    { title: "ต้มเลือดหมู", description: "แหล่งธาตุเหล็กชั้นดีจากเลือดและตับ", image: "/api/placeholder/400/300" },
    { title: "ต้มจับฉ่ายน่องไก่", description: "รวมมิตรผักใบเขียวจนเปื่อยนุ่ม กินง่าย", image: "/api/placeholder/400/300" },
    { title: "ปลานึ่งสมุนไพร", description: "โปรตีนคุณภาพดีที่สุด ย่อยง่าย ไร้น้ำมัน", image: "/api/placeholder/400/300" },
    { title: "ทอดมันปลา", description: "โปรตีนจากเนื้อปลาเน้นๆ มีสมุนไพรจากพริกแกงและถั่วฝักยาว", image: "/api/placeholder/400/300" },
    { title: "ผัดดอกกุยช่ายกุ้ง", description: "ช่วยระบบขับถ่ายได้โปรตีนไขมันต่ำจากกุ้ง", image: "/api/placeholder/400/300" },
  ];

  return (
    <div className="min-h-screen bg-[#EBF4FF] font-sans">
      {/* Header */}
      <header className="bg-white px-6 py-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
          <div className="bg-blue-600 p-1 rounded-md">
            <div className="text-white text-xs">💙</div>
          </div>
          Elder care
        </div>
        <nav className="flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">หน้าแรก</a>
          <a href="#" className="hover:text-blue-600">บทความความรู้</a>
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">เมนูสุขภาพ</a>
          <a href="#" className="hover:text-blue-600">กิจกรรม</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-10 px-6">
        <div className="flex items-center gap-4 mb-2">
          <button className="p-1 bg-blue-400 rounded-md text-white">
            <ChevronLeft size={20} />
          </button>
          <span className="text-blue-500 font-semibold tracking-wide text-sm uppercase">Nutritional Balance</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-10">เมนูอาหารเพื่อสุขภาพ</h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <FoodCard key={index} {...item} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-20 pt-16 pb-10 border-t">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xl mb-4">
              <div className="bg-blue-600 p-1 rounded-md">
                <div className="text-white text-xs">💙</div>
              </div>
              Elder care
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              เรามุ่งสร้างสังคมที่เข้มแข็งผ่านความรู้ ความเข้าใจในการดูแลผู้สูงอายุ เพื่อคุณภาพชีวิตที่ดีขึ้นของทุกคนในครอบครัว
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <h4 className="font-bold text-gray-800 text-lg">เนื้อหา</h4>
            <ul className="text-gray-500 space-y-3">
              <li><a href="#" className="hover:text-blue-600">บทความยอดนิยม</a></li>
              <li><a href="#" className="hover:text-blue-600">วิดีโอแนะนำ</a></li>
              <li><a href="#" className="hover:text-blue-600">เมนูอาหารเพื่อสุขภาพ</a></li>
              <li><a href="#" className="hover:text-blue-600">คลังความรู้</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-6 border-t border-gray-100">
          <p className="text-gray-400 text-xs">2023 ElderCare สร้างสรรค์เพื่อความสุขที่ยั่งยืน</p>
        </div>
      </footer>
    </div>
  );
};

export default HealthyMenuPage;