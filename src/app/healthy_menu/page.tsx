"use client";

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FoodCardProps {
  image: string;
  title: string;
  description: string;
}

const FoodCard: React.FC<FoodCardProps> = ({ image, title, description }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-md transition-shadow group">
    <div className="aspect-4/3 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-5 flex flex-col grow text-left">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6 grow">{description}</p>
      <button className="w-full py-2 px-4 border border-blue-400 text-blue-500 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
        ดูสูตรอาหาร
      </button>
    </div>
  </div>
);

const HealthyMenuPage: React.FC = () => {
  const menuItems = [
    { title: "ข้าวต้มปลา", description: "โปรตีนคุณภาพดี ย่อยง่าย", image: "https://www.thammculture.com/wp-content/uploads/2023/03/Untitled-402.jpg" },
    { title: "แกงจืดเต้าหู้หมูสับ", description: "โปรตีนคุณภาพดี น้ำซุปช่วยเพิ่มน้ำให้ร่างกาย", image: "https://img.wongnai.com/p/1920x0/2019/01/20/95d74f441c1448a6a352de4a10744d14.jpg" },
    { title: "ต้มยำปลากะพง", description: "โปรตีนคุณภาพดี กระตุ้นความอยากอาหาร", image: "https://assets.unileversolutions.com/recipes-v2/117752.jpg" },
    { title: "ไข่ตุ๋นทรงเครื่อง", description: "โปรตีนและผักหลากหลาย เคี้ยวง่าย", image: "https://images.aws.nestle.recipes/original/12f17c7de982b57fdf3e4c9091cd3b29_steamed-egg-with-minced-pork.jpeg" },
    { title: "แกงส้มชะอมไข่", description: "แคลเซียมและวิตามินสูง", image: "https://kin-keng.com/wp-content/uploads/2024/03/%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%B8%E0%B8%94%E0%B8%B4%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AA%E0%B9%89%E0%B8%A1-819x1024.jpg" },
    { title: "แกงเลียงกุ้งสด", description: "ผักหลากหลาย โปรตีนจากกุ้ง", image: "https://www.ajinomoto.co.th/storage/photos/shares/Recipe/Menu/04gangliang/614b190b4e14d.jpg" },
    { title: "โจ๊กข้าวโอ๊ต", description: "คาร์โบไฮเดรตเชิงซ้อน อิ่มนานกว่าข้าวขาว ช่วยลดคอเลสเตอรอล", image: "https://img.wongnai.com/p/1920x0/2017/09/21/92bba405fb1f4e0399c1188a6653268a.jpg" },
    { title: "ต้มเลือดหมู", description: "แหล่งธาตุเหล็กชั้นดีจากเลือดและตับ", image: "https://f.ptcdn.info/368/087/000/m887tilbi7rjboK7P72-o.jpg" },
    { title: "ต้มจับฉ่ายน่องไก่", description: "รวมมิตรผักใบเขียวจนเปื่อยนุ่ม กินง่าย", image: "https://img.wongnai.com/p/1920x0/2019/03/26/de66b8d0a19248088a3465272c5a18e0.jpg" },
    { title: "ปลานึ่งสมุนไพร", description: "โปรตีนคุณภาพดีที่สุด ย่อยง่าย ไร้น้ำมัน", image: "https://img.wongnai.com/p/1920x0/2017/08/31/50dda4de43c047659c7ebd97899dcd1d.jpg" },
    { title: "ทอดมันปลา", description: "โปรตีนจากเนื้อปลาเน้นๆ มีสมุนไพรจากพริกแกงและถั่วฝักยาว", image: "https://img.wongnai.com/p/1920x0/2019/03/24/03eca72140ef425f95655aed1af68c86.jpg" },
    { title: "ผัดดอกกุยช่ายกุ้ง", description: "ช่วยระบบขับถ่ายได้โปรตีนไขมันต่ำจากกุ้ง", image: "https://img.wongnai.com/p/1920x0/2020/03/02/0486361c74b14206b9cd9938bfd2487b.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#EBF4FF] font-sans flex flex-col">
      <Navbar activeMenu="เมนูสุขภาพ" />

      <main className="max-w-6xl mx-auto py-10 px-6 grow">
        <div className="flex items-center gap-4 mb-2">
          <Link href="/" className="p-1 bg-blue-400 rounded-md text-white hover:bg-blue-500 transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <span className="text-blue-500 font-semibold tracking-wide text-sm uppercase">Nutritional Balance</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-10">เมนูอาหารเพื่อสุขภาพ</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <FoodCard key={index} {...item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HealthyMenuPage;