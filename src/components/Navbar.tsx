import React, { useState } from 'react';

const Navbar = ({ activeMenu = "กิจกรรม" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'หน้าแรก', href: '#' },
    { name: 'บทความความรู้', href: '#' },
    { name: 'เมนูสุขภาพ', href: '#' },
    { name: 'กิจกรรม', href: '#' },
  ];

  return (
    <nav className="bg-white px-4 sm:px-8 py-4 flex flex-wrap justify-between items-center border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-blue-500 p-1.5 rounded-lg shadow-sm">
          <div className="text-white fill-current">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </div>
        </div>
        <span className="text-blue-500 font-bold text-xl">Elder care</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`transition-colors duration-200 ${
              activeMenu === link.name 
                ? 'text-blue-600 font-semibold' 
                : 'text-slate-500 hover:text-blue-500'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="w-full md:hidden mt-4 space-y-2 pb-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`block py-2 border-b border-gray-50 ${
                activeMenu === link.name ? 'text-blue-600 font-medium' : 'text-slate-600'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;