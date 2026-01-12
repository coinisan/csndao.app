import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative px-4 bg-[#171717]">
      
      {/* CENTER CONTENT */}
      <div className="text-center z-10 max-w-5xl">
        
        {/* Small Top Title */}
        <h2 className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-pulse">
          WELCOME TO CSN
        </h2>

        {/* Main Big Title */}
        <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-10 drop-shadow-2xl">
          Built by<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500">
            Web3 Researchers
          </span>
        </h1>

        {/* Action Button (Explore Now -> Apps) */}
        <div className="flex justify-center">
          <Link 
            href="/apps" 
            className="group relative px-10 py-5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Explore Now
            <span className="absolute -bottom-2 -right-2 w-full h-full border-2 border-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
        </div>

      </div>

    </main>
  );
}