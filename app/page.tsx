import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-32 pb-10 px-4 bg-black text-white">
      
      {/* --- 1. HEADER --- */}
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          CSN HUB
        </h1>
        <p className="text-gray-400 text-sm md:text-base uppercase tracking-widest">
          Welcome to Coinisan's world. Everything related to CSN is right here.
        </p>
      </div>

      {/* --- 2. FARCASTER SECTION (Center Stage) --- */}
      <div className="w-full flex flex-col items-center mb-24">
        <h2 className="text-3xl font-bold text-purple-400 mb-2">Farcaster</h2>
        <p className="text-gray-600 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8">
          Explore the CSN ecosystem on Farcaster
        </p>

        {/* CDice Card - Featured */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 w-full max-w-sm flex flex-col items-center text-center hover:border-purple-500 transition-colors duration-300 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
          <div className="text-6xl mb-6">🎲</div>
          <h3 className="text-3xl font-bold text-white mb-2">CDice</h3>
          <p className="text-gray-500 text-sm mb-8 font-medium">BASE on DICE</p>
          
          <a 
            href="https://warpcast.com/coinisan" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-colors"
          >
            Play on Farcaster
          </a>
        </div>
      </div>

      {/* --- 3. REMIX SECTION (Horizontal Grid) --- */}
      <div className="w-full max-w-[1400px] mb-32">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">Remix</h2>
          <div className="text-center space-y-1">
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wider">
              With Remix, you can access CSN games across multiple platforms.
            </p>
          </div>
        </div>

        {/* OYUNLAR BURADA - Yan Yana Grid Yapısı */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          
          <GameCard 
            title="Run Vitalik Run" 
            icon="💎" 
            color="bg-yellow-500 hover:bg-yellow-400 text-black"
            url="#" // Buraya oyun linkini ekleyebilirsin
          />

          <GameCard 
            title="React to Base" 
            icon="🔵" 
            color="bg-blue-600 hover:bg-blue-500 text-white"
            url="#"
          />

          <GameCard 
            title="Base Tower Defense" 
            icon="🏰" 
            color="bg-green-600 hover:bg-green-500 text-white"
            url="#"
          />

          <GameCard 
            title="Base Sniper" 
            icon="🎯" 
            color="bg-red-600 hover:bg-red-500 text-white"
            url="#"
          />

          <GameCard 
            title="Snake Base" 
            icon="♾️" 
            color="bg-purple-600 hover:bg-purple-500 text-white"
            url="#"
          />

        </div>
      </div>

      {/* --- 4. FOOTER (SOCIALS) --- */}
      <footer className="w-full max-w-2xl border-t border-gray-900 pt-10 flex flex-col items-center">
        <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-6">Follow Coinisan</h3>
        
        <div className="flex items-center space-x-8">
          {/* Twitter / X */}
          <a href="https://x.com/coinisan" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 border border-gray-800">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </div>
            <span className="text-[10px] text-gray-600 group-hover:text-white transition-colors">Twitter</span>
          </a>

          {/* Farcaster */}
          <a href="https://warpcast.com/coinisan" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 border border-gray-800">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true"><path d="M18.24.75H5.76A5.02 5.02 0 0 0 .75 5.75v12.5c0 2.76 2.25 5 5.01 5H18.24c2.76 0 5.01-2.24 5.01-5V5.75c0-2.76-2.25-5-5.01-5Zm-10.93 14.5c-1.24 0-2.25-1.01-2.25-2.25 0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm7.5-11.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm3.43 11.5c-1.24 0-2.25-1.01-2.25-2.25 0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Z"></path></svg>
            </div>
             <span className="text-[10px] text-gray-600 group-hover:text-purple-400 transition-colors">Farcaster</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/coinisan" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-700 group-hover:text-white transition-all duration-300 border border-gray-800">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
            </div>
             <span className="text-[10px] text-gray-600 group-hover:text-white transition-colors">GitHub</span>
          </a>
        </div>

        <div className="mt-10 text-[10px] text-gray-800">
          © 2025 CSN DAO. All rights reserved.
        </div>
      </footer>

    </main>
  );
}

// Tekrar kullanılabilir Oyun Kartı Bileşeni
function GameCard({ title, icon, color, url }: { title: string, icon: string, color: string, url: string }) {
  return (
    <div className="group bg-[#0a0a0a] border border-gray-800 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-between min-h-[160px] md:min-h-[200px] hover:border-gray-600 transition-all hover:-translate-y-1">
      <div className="text-4xl md:text-5xl mt-2 group-hover:scale-110 transition-transform">{icon}</div>
      
      <div className="w-full mt-4 text-center">
        <h3 className="text-white font-bold text-xs md:text-sm mb-4 line-clamp-1">{title}</h3>
        <a 
          href={url} 
          className={`block w-full py-2 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wide transition-colors ${color}`}
        >
          Play on Remix
        </a>
      </div>
    </div>
  );
}