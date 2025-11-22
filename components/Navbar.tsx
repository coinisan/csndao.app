import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center md:justify-between">
        {/* Sadece Logo/İsim */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          CSN <span className="text-purple-500">HUB</span>
        </Link>
        
        {/* Sağ taraf boş veya sosyal ikon gelebilir, şimdilik boş */}
        <div className="hidden md:block"></div>
      </div>
    </nav>
  );
}