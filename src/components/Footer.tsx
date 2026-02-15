import { FaFacebookF } from "react-icons/fa";
import { RiLineFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="w-full bg-slate-50 pt-20 pb-10 px-8 border-t border-gray-100 ">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">

                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-blue-500 p-1.5 rounded-lg text-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                            </div>
                            <span className="text-slate-900 font-extrabold text-2xl tracking-tight">Elder Care</span>
                        </div>
                        <p className="text-slate-500 text-base leading-relaxed">
                            เรามุ่งสร้างสังคมที่เข้มแข็งผ่านความรู้ ความเข้าใจในการดูแลผู้สูงอายุ
                            เพื่อคุณภาพชีวิตที่ดีขึ้นของทุกคนในครอบครัวอย่างยั่งยืน
                        </p>
                    </div>

                    <div className="flex flex-col md:items-center">
                        <div>
                            <h4 className="font-bold text-slate-800 mb-6 text-lg">เนื้อหาที่น่าสนใจ</h4>
                            <ul className="grid grid-cols-1 gap-4 text-slate-500 text-sm">
                                <li><a href="#" className="hover:text-blue-600 transition-colors">บทความยอดนิยม</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">เมนูอาหารเพื่อสุขภาพ</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">คลังความรู้ผู้สูงอายุ</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:items-end">
                        <div className="w-full max-w-xs">
                            <h4 className="font-bold text-slate-800 mb-6 text-lg">ติดต่อเรา</h4>
                            <p className="text-slate-500 text-sm mb-4">ติดตามข่าวสารและสาระดีๆ เพื่อคนที่คุณรัก</p>

                            <div className="flex gap-2">
                                <a
                                    href="https://facebook.com/yourpage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300">
                                    <FaFacebookF size={16} />
                                </a>

                                <a
                                    href="https://line.me/ti/p/~yourid"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-300">
                                    <RiLineFill size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400 uppercase tracking-widest text-center md:text-left">
                        © 2026 ELDERCARE สร้างสรรค์เพื่อความสุขที่ยั่งยืน.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;