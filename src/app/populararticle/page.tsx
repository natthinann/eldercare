import React from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  overlayText: string;
  overlayColor: string;
}

const ARTICLE_DATA: Article[] = [
  {
    id: 1,
    title: "10 จุดเสี่ยงในบ้านที่ต้องระวังสำหรับผู้สูงอายุ",
    excerpt: "เนื่องจากกระดูกของผู้สูงอายุมักจะเปราะและแตกหักง่ายยิ่งถ้าผู้สูงอายุมีโรคประจำตัว...",
    image: "https://images.unsplash.com/photo-1513159419869-1133c33dfa22?auto=format&fit=crop&q=80&w=500",
    overlayText: "10 จุดเสี่ยงในบ้านที่ต้องระวังสำหรับผู้สูงอายุ",
    overlayColor: "bg-red-700/50"
  },
  {
    id: 2,
    title: "สุขภาพจิตผู้สูงอายุ เรื่องสำคัญที่ไม่ควรมองข้าม",
    excerpt: "หลายครั้งพบว่านี่ผู้ดูแลและคนใกล้ชิดมักปรึกษาถึงวิธีการรับมือและปรับตัวกับบุคลิกภาพของผู้สูงอายุ...",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500",
    overlayText: "สุขภาพจิตผู้สูงอายุ เรื่องสำคัญที่ไม่ควรมองข้าม",
    overlayColor: "bg-blue-400/50"
  },
  {
    id: 3,
    title: "ผู้สูงอายุกับปัญหาการกินยา เรื่องสำคัญไม่ควรมองข้าม",
    excerpt: "ขั้นตอนการดูแลสุขภาพส่วนตัวที่จะช่วยให้ทั้งผู้ดูแลและผู้สูงอายุรู้สึกผ่อนคลายและลดอุบัติเหตุ...",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=500",
    overlayText: "ผู้สูงอายุกับปัญหาการกินยา เรื่องสำคัญไม่ควรมองข้าม",
    overlayColor: "bg-teal-500/50"
  },
  {
    id: 4,
    title: "ผู้สูงอายุสุขภาพดี เริ่มที่การดูแลสุขภาพช่องปาก",
    excerpt: "การดูแลสุขภาพช่องปากผู้สูงอายุเป็นสิ่งที่สำคัญต่อสุขภาพร่างกายและการดำเนินชีวิตประจำวัน...",
    image: "https://images.unsplash.com/photo-1581578731522-7b7547c6a21f?auto=format&fit=crop&q=80&w=500",
    overlayText: "ผู้สูงอายุสุขภาพดี เริ่มที่การดูแลสุขภาพช่องปาก",
    overlayColor: "bg-emerald-600/50"
  },
  {
    id: 5,
    title: "กลืนลำบาก สำลักบ่อย หนึ่งในปัญหาของผู้สูงอายุที่พบบ่อย",
    excerpt: "หนึ่งในปัญหาของผู้สูงอายุที่พบน้อย คือ ความสามารถในการกลืนอาหารและน้ำนั้นลดลง...",
    image: "https://images.unsplash.com/photo-1516307364728-25b1ea4c6c74?auto=format&fit=crop&q=80&w=500",
    overlayText: "กลืนลำบาก สำลักบ่อย หนึ่งในปัญหาของผู้สูงอายุที่พบบ่อย",
    overlayColor: "bg-sky-500/50"
  },
  {
    id: 6,
    title: "การดูแลผู้สูงอายุที่มีอาการหลงลืมที่บ้านอย่างไรให้เหมาะสมและปลอดภัย",
    excerpt: "ผู้สูงอายุที่มีอาการหลงลืม จึงทำให้การดูแลผู้สูงอายุกลายเป็นเรื่องกังวลใจของหลายคน...",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=500",
    overlayText: "การดูแลผู้สูงอายุที่มีอาการหลงลืมที่บ้านอย่างไรให้เหมาะสมและปลอดภัย",
    overlayColor: "bg-green-800/50"
  },
  {
    id: 7,
    title: "เตรียมตัวอย่างไรเมื่อต้องเป็น \"ผู้ดูแลผู้สูงอายุในครอบครัว\"",
    excerpt: "เพราะผู้สูงอายุ คือ บุคคลอันเป็นที่รักของทุกครอบครัว ไม่ว่าจะเป็นการเปลี่ยนแปลงไปมากแค่ไหน...",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=500",
    overlayText: "เตรียมตัวอย่างไรเมื่อต้องเป็น \"ผู้ดูแลผู้สูงอายุในครอบครัว\"",
    overlayColor: "bg-slate-500/50"
  },
  {
    id: 8,
    title: "ปัญหาของผู้สูงอายุที่พบบ่อย หากปล่อยไว้กระทบคุณภาพชีวิต",
    excerpt: "ปัญหาของผู้สูงอายุ เมื่ออายุเพิ่มขึ้นสภาพร่างกายและระบบการทำงานของระบบต่างๆ ในร่างกาย...",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=500",
    overlayText: "ปัญหาของผู้สูงอายุที่พบบ่อย หากปล่อยไว้กระทบคุณภาพชีวิต",
    overlayColor: "bg-indigo-900/50"
  },
  {
    id: 9,
    title: "วัคซีนป้องกันไข้หวัดใหญ่ผู้สูงอายุ Flu High-Dose ประสิทธิภาพที่ดียิ่งขึ้น",
    excerpt: "โรคไข้หวัดใหญ่สามารถป้องกันได้ด้วยการฉีดวัคซีนไข้หวัดใหญ่ปีละ 1 ครั้ง เป็นประจำทุกปี...",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500",
    overlayText: "วัคซีนป้องกันไข้หวัดใหญ่ผู้สูงอายุ Flu High-Dose ประสิทธิภาพที่ดียิ่งขึ้น",
    overlayColor: "bg-blue-400/50"
  }
];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-shadow duration-300">
    <div className="relative h-48 sm:h-56">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 ${article.overlayColor} flex items-center justify-center p-6 text-center`}>
        <span className="text-white font-bold text-base md:text-lg leading-tight drop-shadow-sm">
          {article.overlayText}
        </span>
      </div>
    </div>

    <div className="p-6 flex flex-col grow">
      <h3 className="text-[#334155] font-bold text-lg mb-3 line-clamp-2 leading-snug">
        {article.title}
      </h3>
      <p className="text-[#64748b] text-sm mb-6 line-clamp-3 leading-relaxed">
        {article.excerpt}
      </p>
      <div className="mt-auto">
        <button className="text-[#3b82f6] font-bold text-sm flex items-center group-hover:gap-2 transition-all duration-300">
          อ่านต่อ <span className="ml-1 text-lg">→</span>
        </button>
      </div>
    </div>
  </div>
);

const ArticlePage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20 font-['Sarabun',sans-serif]">
      <div className="h-16 bg-white border-b border-gray-100 mb-12"></div>

      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-[#1e293b] mb-2">บทความยอดนิยม</h1>
          <p className="text-[#64748b] text-base">
            ความรู้ที่คัดสรรมาเพื่อคุณโดยผู้เชี่ยวชาญด้านการดูแลผู้สูงอายุ
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {ARTICLE_DATA.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;