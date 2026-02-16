"use client";

import Link from 'next/link';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articlesData } from '@/app/articles_1/data';

const AllArticlesPage = () => {
    const articlesList = Object.keys(articlesData).map((key) => ({
        id: key,
        ...(articlesData as any)[key],
    }));

    return (
        <div className="min-h-screen bg-white">
            <Navbar activeMenu="บทความ" />

            <main className="container mx-auto px-6 py-16">
                <Link href="/" className="flex items-center text-blue-600 mb-6 font-bold text-sm">
                    <ChevronLeft className="w-4 h-4 mr-1" /> กลับหน้าหลัก
                </Link>

                <h1 className="text-3xl font-bold mb-10 text-center">บทความทั้งหมด</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articlesList.map((item) => (
                        <div key={item.id} className="border rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all">
                            <div className="h-52 overflow-hidden">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col grow">
                                <span className="text-blue-600 text-xs font-bold mb-2 uppercase">{item.category}</span>
                                <h3 className="font-bold text-lg mb-3 line-clamp-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-3">{item.content}</p>
                                <Link href={`/articles_1/${item.id}`} className="text-blue-500 font-bold text-sm flex items-center mt-auto">
                                    อ่านต่อ <ArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AllArticlesPage;