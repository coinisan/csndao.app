import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#171717]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LEFT: LOGO (GÜNCELLENDİ: logox.png) */}
        <Link href="/" className="flex items-center gap-3 group">
           <img 
             src="/logox.png"  // <-- BURASI DEĞİŞTİ
             alt="CSN Logo" 
             className="w-10 h-10 rounded-full object-cover border-2 border-white/20 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(234,179,8,0.3)]"
           />
           <div className="flex flex-col justify-center h-full">
             <span className="text-2xl font-black tracking-widest text-white leading-none">CSN</span>
           </div>
        </Link>

        {/* CENTER: MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-gray-300">
          <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link>
          <Link href="/apps" className="hover:text-yellow-400 transition-colors">Apps</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
        </div>

        {/* RIGHT: JOIN DAO BUTTON */}
        <a 
          href="https://t.me/csndao" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase text-xs tracking-wider rounded-full transition-colors shadow-lg shadow-yellow-500/20"
        >
          Join DAO
        </a>

      </div>
    </nav>
  );
}