'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaXmark, FaMagnifyingGlass } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Link Navigasi - Ditambah Cek Pesanan
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Roblox', href: '/roblox' },
    { name: 'Free Fire', href: '/freefire' },
    { name: 'Mobile Legends', href: '/mobilelegends' },
    { name: 'Cek Pesanan', href: '/check-status', highlight: true }, // Highlight untuk pembeda
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-xl border-b border-purple-500/10 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-black border border-purple-500/30 rounded-full p-1.5 group-hover:border-purple-500 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <img 
                  src="/logo.png" 
                  alt="Logo"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>

              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter italic uppercase group-hover:text-purple-500 transition-colors leading-none">
                  LUNAR<span className="text-purple-500 group-hover:text-white transition-colors">STORE</span>
                </span>
                <span className="text-[8px] font-bold tracking-[0.3em] text-gray-500 uppercase">Topup Game Tercepat</span>
              </div>
            </Link>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-[10px] font-black uppercase tracking-[0.15em] transition-all relative group flex items-center gap-2 ${
                    link.highlight ? "text-purple-400" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.highlight && <FaMagnifyingGlass size={10} className="animate-pulse" />}
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <div className="h-6 w-[1px] bg-white/10 ml-4 mr-2"></div>
              <button className="bg-white text-black hover:bg-purple-500 hover:text-white px-6 py-2.5 rounded-xl text-[10px] font-black tracking-widest transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                LOGIN
              </button>
            </div>
          </div>

          {/* --- MOBILE BUTTON --- */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {isOpen && (
        <div className="md:hidden bg-[#050505] border-b border-purple-500/20 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-xs font-black uppercase tracking-widest border-b border-white/5 transition-colors flex items-center justify-between ${
                  link.highlight ? "text-purple-500" : "text-gray-400 hover:text-purple-500"
                }`}
              >
                {link.name}
                {link.highlight && <FaMagnifyingGlass size={14} />}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full bg-purple-600 text-white py-4 rounded-2xl font-black text-xs tracking-widest uppercase shadow-[0_10px_20px_rgba(168,85,247,0.2)]">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;