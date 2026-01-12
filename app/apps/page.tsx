"use client";

import { useState } from "react";

export default function AppsPage() {
  const [activeTab, setActiveTab] = useState<"BASE" | "ARC" | null>(null);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#171717] text-white flex flex-col items-center">
      
      {/* BAŞLIK */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">CSN APPS</h1>
        <p className="text-gray-400 uppercase tracking-widest text-sm">Select an ecosystem to explore</p>
      </div>

      {/* --- SEÇİM BUTONLARI (TABLAR) --- */}
      <div className="flex flex-col md:flex-row gap-6 mb-16 w-full max-w-2xl">
        
        {/* BASE BUTONU */}
        <button 
          onClick={() => setActiveTab("BASE")}
          className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-4 group ${
            activeTab === "BASE" 
              ? "bg-blue-600/10 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]" 
              : "bg-[#121212] border-white/10 hover:border-blue-500/50 hover:bg-white/5"
          }`}
        >
          {/* BASE LOGO (RESİM) */}
          <img 
            src="/base.png" 
            alt="BASE" 
            className={`w-16 h-16 object-contain transition-transform duration-300 ${activeTab === "BASE" ? "scale-110 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" : "group-hover:scale-110 grayscale group-hover:grayscale-0"}`}
          />
          <span className={`font-black text-xl tracking-widest ${activeTab === "BASE" ? "text-blue-400" : "text-gray-400 group-hover:text-white"}`}>BASE</span>
        </button>

        {/* ARC BUTONU */}
        <button 
          onClick={() => setActiveTab("ARC")}
          className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-4 group ${
            activeTab === "ARC" 
              ? "bg-orange-600/10 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.2)]" 
              : "bg-[#121212] border-white/10 hover:border-orange-500/50 hover:bg-white/5"
          }`}
        >
          {/* ARC LOGO (RESİM) */}
          <img 
            src="/arc.png" 
            alt="ARC" 
            className={`w-16 h-16 object-contain transition-transform duration-300 ${activeTab === "ARC" ? "scale-110 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" : "group-hover:scale-110 grayscale group-hover:grayscale-0"}`}
          />
          <span className={`font-black text-xl tracking-widest ${activeTab === "ARC" ? "text-orange-400" : "text-gray-400 group-hover:text-white"}`}>ARC</span>
        </button>

      </div>

      {/* --- İÇERİK ALANI --- */}
      <div className="w-full max-w-3xl transition-opacity duration-500">
        
        {/* HİÇBİR ŞEY SEÇİLMEDİYSE */}
        {!activeTab && (
          <div className="text-center text-gray-500 py-20 animate-pulse">
            <p className="uppercase tracking-widest text-xs">Please select a network above</p>
          </div>
        )}

        {/* --- BASE İÇERİĞİ --- */}
        {activeTab === "BASE" && (
          <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* FARCASTER GAMES */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-purple-400"></span> FARCASTER GAMES
              </h2>
              <div className="space-y-6">
                <AppCard 
                  title="CDice" 
                  desc="A decentralized dice game on Farcaster. Test your luck with Base or Dice modes."
                  image="/cdice.png" 
                  link="https://farcaster.xyz/miniapps/MKSLQNWF-cyH/cdice"
                  color="border-purple-500/30 hover:border-purple-500"
                  btnColor="bg-purple-600 hover:bg-purple-500"
                />
              </div>
            </div>

            {/* FARCASTER TOOLS */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-blue-400"></span> FARCASTER TOOLS
              </h2>
              <div className="space-y-6">
                <AppCard 
                  title="FollowCheck" 
                  desc="Instantly check who follows you back on Farcaster. Essential tool for community building."
                  image="/followchecklogo.png" 
                  link="https://farcaster.xyz/miniapps/qgVJ4mXPMFlR/followcheck"
                  color="border-blue-500/30 hover:border-blue-500"
                  btnColor="bg-blue-600 hover:bg-blue-500"
                />
              </div>
            </div>

            {/* REMIX GAMES */}
            <div>
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="text-yellow-400"></span> REMIX GAMES
              </h2>
              <div className="space-y-6">
                <AppCard 
                  title="Run Vitalik Run" 
                  desc="Web3-themed endless runner game. Collect ETH and dodge the bears!"
                  image="/RunVitalikRunLogo.png" 
                  link="https://remix.gg/g/c9e5946b-9830-4a7e-81a0-e5b1dfadd119"
                  color="border-yellow-500/30 hover:border-yellow-500"
                  btnColor="bg-yellow-500 hover:bg-yellow-400 text-black"
                />
                
                <AppCard 
                  title="React to Base" 
                  desc="Futuristic reaction-time game. How fast can you click?"
                  image="/basereactlogo.png" 
                  link="https://remix.gg/g/9debd4e0-91e6-45e5-8e9d-1bbbe1fa9c7b"
                  color="border-blue-500/30 hover:border-blue-500"
                  btnColor="bg-blue-600 hover:bg-blue-500"
                />

                <AppCard 
                  title="Base Tower Defense" 
                  desc="Strategy based neon-styled tower defense game on Base."
                  image="/basetower.png" 
                  link="https://remix.gg/g/a88b7182-0afd-4b66-936c-3022cc69a05a"
                  color="border-green-500/30 hover:border-green-500"
                  btnColor="bg-green-600 hover:bg-green-500"
                />

                <AppCard 
                  title="Base Sniper" 
                  desc="Precision shooting game. The fastest sniper wins."
                  image="/basesniper.png" 
                  link="https://remix.gg/g/0d3413f6-d3b4-48d0-92c9-53f0cff290c6"
                  color="border-red-500/30 hover:border-red-500"
                  btnColor="bg-red-600 hover:bg-red-500"
                />

                <AppCard 
                  title="Snake Base" 
                  desc="Classic Snake game reimagined for the Base ecosystem."
                  image="/snake.png" 
                  link="https://remix.gg/g/b4d10dab-d29d-4449-ac1b-0f5fe7ff0d7a"
                  color="border-purple-500/30 hover:border-purple-500"
                  btnColor="bg-purple-600 hover:bg-purple-500"
                />
              </div>
            </div>

          </div>
        )}

        {/* --- ARC İÇERİĞİ (BOŞ) --- */}
        {activeTab === "ARC" && (
          <div className="flex flex-col items-center justify-center py-20 animate-in fade-in zoom-in duration-300">
            <div className="text-6xl mb-4 grayscale opacity-50">🚧</div>
            <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest">ARC ecosystem apps are under development</p>
          </div>
        )}

      </div>
    </main>
  );
}

// --- APP CARD ---
function AppCard({ title, desc, image, link, color, btnColor }: any) {
  return (
    <div className={`bg-[#121212] border ${color} rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 transition-colors duration-300 group`}>
      
      {/* Resim */}
      <img 
        src={image} 
        alt={title} 
        className="w-24 h-24 rounded-xl object-cover shadow-lg group-hover:scale-105 transition-transform"
      />

      {/* İçerik */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-0">{desc}</p>
      </div>

      {/* Buton */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide whitespace-nowrap transition-transform active:scale-95 ${btnColor}`}
      >
        Play Now
      </a>
    </div>
  );
}