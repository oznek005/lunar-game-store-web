'use client';

import React from 'react';
import Link from 'next/link';
import { FaDiscord, FaInstagram, FaWhatsapp, FaShieldHalved } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-purple-600/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-red-500 rounded-full flex items-center justify-center font-black italic text-lg shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                L
              </div>
              <span className="text-2xl font-black tracking-tighter italic uppercase group-hover:text-purple-500 transition-colors">
                LUNAR<span className="text-purple-500 group-hover:text-white transition-colors">STORE</span>
              </span>
            </Link>
            <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed max-w-sm">
              Platform top-up game tercepat, teraman, dan terpercaya di Indonesia. Otomatisasi 24/7 untuk pengalaman gaming tanpa batas.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#5865F2] hover:text-white transition-all">
                <FaDiscord size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <FaWhatsapp size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-purple-500 pl-4">Navigasi</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              <li><Link href="/" className="hover:text-purple-500 transition-colors">Home</Link></li>
              <li><Link href="/check-status" className="hover:text-purple-500 transition-colors">Lacak Pesanan</Link></li>
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-purple-500 transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-purple-500 pl-4">Dukungan</h4>
            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-4 leading-relaxed">
                Ada kendala? Hubungi Customer Service kami yang siap membantu 24/7.
              </p>
              <Link href="https://wa.me/628123456789" className="text-[9px] font-black text-purple-400 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                WhatsApp Admin <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>

        {/* --- PAYMENT METHODS (UPDATED: VISIBLE QRIS & PAYPAL) --- */}
        <div className="border-y border-white/5 py-10 mb-10">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-x-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* QRIS - Di-invert menjadi putih agar terlihat jelas */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg" 
              alt="QRIS" 
              className="h-6 md:h-7 object-contain invert brightness-[10]" 
            />
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg" alt="DANA" className="h-4 md:h-5 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg" alt="GOPAY" className="h-4 md:h-5 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Ovo_logo.svg" alt="OVO" className="h-4 md:h-5 object-contain" />
            
            {/* PayPal - Menggunakan filter kontras tinggi agar terbaca */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
              alt="PayPal" 
              className="h-5 md:h-6 object-contain brightness-125" 
            />
          </div>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.4em] text-center md:text-left leading-relaxed">
            © {currentYear} LUNAR STORE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-[9px] font-black text-gray-700 uppercase tracking-widest">
            <FaShieldHalved className="text-purple-500/50" /> Secure Payment Gateway
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;