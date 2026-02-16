import { FaFacebookF } from "react-icons/fa";
import { RiLineFill } from "react-icons/ri";

const Footer = () => {
    const scrollToSection = (e: React.MouseEvent, id: string) => {
        const element = document.getElementById(id);
        if (element) {
            e.preventDefault();
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

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
                            เรามุ่งสร้างสังคมที่เข้มแข็งผ่านความรู้ ความเข้าใจในการดูแลผู้สูงอายุ เพื่อคุณภาพชีวิตที่ดีขึ้นของทุกคนในครอบครัว
                        </p>
                    </div>

                    <div className="flex flex-col md:items-center">
                        <div>
                            <h4 className="font-bold text-slate-800 mb-6 text-lg">เนื้อหาที่น่าสนใจ</h4>
                            <ul className="grid grid-cols-1 gap-4 text-slate-500 text-sm">
                                <li>
                                    <a href="/populararticle"
                                        className="hover:text-blue-600 transition-colors text-base">
                                        บทความยอดนิยม
                                    </a>
                                </li>
                                <li>
                                    <a href="/healthy_menu"
                                        className="hover:text-blue-600 transition-colors text-base">
                                        เมนูอาหารเพื่อสุขภาพ
                                    </a>
                                </li>
                                <li>
                                    <a href="/daily"
                                        className="hover:text-blue-600 transition-colors text-base">
                                        กิจกรรม
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:items-end">
                        <div className="w-full max-w-xs">
                            <h4 className="font-bold text-slate-800 mb-6 text-lg">ติดต่อเรา</h4>
                            <div className="flex gap-2">
                                <a target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all"><FaFacebookF size={16} /></a>
                                <a target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all"><RiLineFill size={18} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;