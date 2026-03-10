'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { 
  FaCube, FaFire, FaShieldHalved, FaRocket, FaCheck, 
  FaStar, FaShieldHeart, FaBoltLightning, FaHeadset, FaDiscord 
} from 'react-icons/fa6';

// --- KOMPONEN RUNNING ORDER ---
const RunningOrder = () => {
  const orders = [
    "💎 86 Diamonds sukses dikirim ke ID 123*** (2026)",
    "📦 1000 Robux sukses dikirim ke User Lunar***",
    "🔥 355 Diamonds sukses dikirim ke ID 992*** (8821)",
    "💎 706 Diamonds sukses dikirim ke ID 441*** (2102)",
    "📦 500 Robux sukses dikirim ke User Gaming***",
  ];

  return (
    <div className="w-full bg-purple-600/5 backdrop-blur-md border-y border-purple-500/10 py-3 overflow-hidden whitespace-nowrap relative z-20">
      <div className="flex animate-marquee gap-10 items-center">
        {[...orders, ...orders].map((order, i) => (
          <span key={i} className="text-[9px] font-black uppercase tracking-[0.2em] text-purple-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
            {order}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default function Home() {
  // --- DATA GAME UTAMA (HANYA 3 - NO UNIPIN) ---
  const games = [
    { name: "Roblox", slug: "/roblox", image: "/Roblox.png", icon: <FaCube className="text-3xl text-red-500" />, border: "hover:border-red-500/50", desc: "Robux Murah & Legal", badge: "Best Seller" },
    { name: "Free Fire", slug: "/freefire", image: "/ff.png", icon: <FaFire className="text-3xl text-orange-500" />, border: "hover:border-orange-500/50", desc: "Diamond FF Instant 24/7", badge: "Promo" },
    { name: "Mobile Legends", slug: "/mobilelegends", image: "/ml.png", icon: <FaShieldHalved className="text-3xl text-purple-500" />, border: "hover:border-purple-500/50", desc: "Diamond MLBB Hemat", badge: "Populer" }
  ];

  const otherServices = [
    { name: "Valorant", cat: "PC Game", benefit: "Region ID Instant", color: "bg-red-500", link: "https://discord.gg/UhPXEpPe" },
    { name: "Point Blank", cat: "PC Game", benefit: "Stok Selalu Ready", color: "bg-blue-400", link: "https://discord.gg/UhPXEpPe" },
    { name: "Blood Strike", cat: "Mobile", benefit: "Instan via ID", color: "bg-yellow-500", link: "https://discord.gg/UhPXEpPe" },
    { name: "PUBG Mobile", cat: "Mobile", benefit: "UC via ID / Login", color: "bg-green-500", link: "https://discord.gg/UhPXEpPe" },
    { name: "COD Mobile", cat: "Mobile", benefit: "Garena Region", color: "bg-white", link: "https://discord.gg/UhPXEpPe" },
    { name: "Genshin Impact", cat: "Multi", benefit: "Crystal & Blessing", color: "bg-blue-300", link: "https://discord.gg/UhPXEpPe" },
    { name: "Steam Wallet", cat: "PC Apps", benefit: "Voucher IDR/Global", color: "bg-slate-400", link: "https://discord.gg/UhPXEpPe" },
  ];

  const testimonials = [
    { name: "Arkan Ganteng", role: "MLBB Player", text: "Gila sih, baru klik konfirmasi di web, eh 2 menit kemudian Diamond ML langsung masuk. Adminnya juga ramah banget!", color: "text-purple-500", bg: "bg-purple-500/10", initials: "AG" },
    { name: "Kenzo Blox", role: "Roblox Trader", text: "Awalnya ragu karena harganya murah banget, ternyata emang legit parah. Robux langsung landing aman bosku!", color: "text-red-500", bg: "bg-red-500/10", initials: "KB" },
    { name: "Fajar Fire", role: "Free Fire Pro", text: "Tampilan webnya simpel dan ga ribet. Pilihan pembayaran QRIS-nya lancar jaya. Langganan terus di LunarStore!", color: "text-orange-500", bg: "bg-orange-500/10", initials: "FF" }
  ];

  return (
    <>
      <div className="pt-20 bg-[#050505]">
        <RunningOrder />
      </div>

      <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center p-6 pt-16 relative overflow-hidden font-sans">
        
        {/* Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full -z-10 animate-pulse"></div>

        {/* --- 1. HERO SECTION --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-28">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-purple-400 mb-6">
            <FaRocket className="animate-bounce" /> Official Gaming Partner
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter uppercase italic bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent leading-none">
            LUNAR<span className="text-purple-500">GAME</span>
          </h1>
          <p className="text-gray-500 font-medium max-w-lg mx-auto text-sm md:text-base px-4">
            Platform top up game tercepat, terpercaya, dan paling hemat se-Indonesia.
          </p>
        </motion.div>

        {/* --- 2. GRID UTAMA (BIG THREE) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl relative mb-40 z-10 px-4">
          {games.map((game, index) => (
            <motion.div key={game.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Link href={game.slug} className="group relative block">
                <div className="absolute -top-3 -right-3 z-30 bg-purple-600 text-[10px] font-bold px-4 py-1.5 rounded-xl shadow-lg uppercase tracking-tighter">{game.badge}</div>
                <div className={`bg-[#0c0c0c]/60 rounded-[3rem] border border-white/5 transition-all duration-500 backdrop-blur-xl group-hover:-translate-y-5 overflow-hidden ${game.border}`}>
                  <div className="w-full h-80 relative overflow-hidden">
                    <img src={game.image} alt={game.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent"></div>
                    <div className="absolute bottom-6 left-8 p-4 bg-black/60 backdrop-blur-lg rounded-2xl border border-white/10">{game.icon}</div>
                  </div>
                  <div className="p-10 pt-4">
                    <h2 className="text-3xl font-black text-white mb-2 uppercase italic group-hover:text-purple-400 transition-colors">{game.name}</h2>
                    <p className="text-sm text-gray-500 mb-10 leading-relaxed font-medium">{game.desc}</p>
                    <div className="flex items-center gap-2 text-purple-500 text-[11px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                      Top Up Sekarang <FaCheck className="animate-bounce" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* --- 3. BENTO GRID OTHER SERVICES --- */}
        <section className="w-full max-w-6xl mx-auto px-4 mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em] mb-2">More Collection</h2>
              <h3 className="text-4xl font-black italic uppercase tracking-tighter">Other <span className="text-white/50">Services</span></h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="group relative block bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] overflow-hidden backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-purple-500/5 h-full">
                  <div className="relative z-10">
                    <div className={`${item.color} w-8 h-1 rounded-full mb-4 shadow-[0_0_10px_currentColor]`}></div>
                    <h4 className="text-lg font-black italic uppercase tracking-tighter text-white group-hover:text-purple-400 transition-colors">{item.name}</h4>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1 mb-6">{item.cat}</p>
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] font-medium text-gray-400 italic">&quot;{item.benefit}&quot;</span>
                       <FaDiscord className="text-gray-600 group-hover:text-white transition-colors text-xl" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}

            {/* KARTU JOIN DISCORD LUNAR */}
            <motion.a 
              href="https://discord.gg/UhPXEpPe" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }} 
              className="relative group overflow-hidden bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-8 rounded-[2.5rem] flex flex-col justify-center border border-purple-500/30 backdrop-blur-xl h-full"
            >
              <div className="relative z-10 text-center">
                <div className="bg-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform">
                  <FaDiscord className="text-white text-2xl" />
                </div>
                <h4 className="text-lg font-black uppercase tracking-tighter italic text-white mb-2">Game Tidak Ada?</h4>
                <p className="text-[10px] text-purple-300 font-bold uppercase tracking-widest leading-relaxed">
                  Request & Order Manual via <br/>
                  <span className="text-white underline decoration-purple-500 underline-offset-4 font-black">Discord Lunar</span>
                </p>
              </div>
            </motion.a>
          </div>
        </section>

        {/* --- 4. TESTIMONI --- */}
        <section className="w-full max-w-7xl mx-auto px-4 mb-40">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em] mb-4">Customer Experience</h2>
            <h3 className="text-5xl font-black italic uppercase tracking-tighter">Apa Kata <span className="text-purple-500">Customer Kami?</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testi, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="bg-[#0f0f0f]/50 p-10 rounded-[3rem] border border-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all group relative">
                <div className="flex gap-1 mb-8 text-yellow-500/80">
                  <FaStar size={12} /><FaStar size={12} /><FaStar size={12} /><FaStar size={12} /><FaStar size={12} />
                </div>
                <p className="text-gray-400 text-sm italic mb-10 leading-relaxed font-medium">&quot;{testi.text}&quot;</p>
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 ${testi.bg} rounded-full flex items-center justify-center font-black ${testi.color} text-lg border border-white/5`}>{testi.initials}</div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest">{testi.name}</h4>
                    <p className="text-[9px] text-gray-700 font-bold uppercase tracking-[0.2em]">{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}