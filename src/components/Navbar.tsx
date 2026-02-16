"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = ({ activeMenu }: { activeMenu?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'หน้าแรก', href: '/' },
    { name: 'บทความ', href: '/populararticle' },
    { name: 'เมนูสุขภาพ', href: '/healthy_menu' },
    { name: 'กิจกรรม', href: '/daily' },
  ];

  const isActive = (linkHref: string, linkName: string) => {
    return pathname === linkHref || activeMenu === linkName;
  };

  return (
    <nav className="bg-white px-4 sm:px-8 py-4 flex flex-wrap justify-between items-center border-b border-gray-100 sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div className="bg-blue-500 p-1.5 rounded-lg shadow-sm">
          <div className="text-white fill-current">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        </div>
        <span className="text-blue-500 font-bold text-xl">Elder care</span>
      </Link>

      <div className="hidden md:flex gap-8 font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`transition-colors duration-200 ${isActive(link.href, link.name)
                ? 'text-blue-600 font-semibold'
                : 'text-slate-500 hover:text-blue-500'
              }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
        </svg>
      </button>

      {isOpen && (
        <div className="w-full md:hidden mt-4 space-y-2 pb-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded-lg border-b border-gray-50 last:border-0 ${isActive(link.href, link.name)
                  ? 'text-blue-600 bg-blue-50 font-medium'
                  : 'text-slate-600 hover:bg-slate-50'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;