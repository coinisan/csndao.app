import Link from "next/link";
import CryptoTicker from "../components/CryptoTicker"; // <-- Ticker'ı çağırdık

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      
      {/* MERKEZ İÇERİK */}
      <div className="text-center z-10 max-w-5xl pb-20"> {/* Ticker için alttan boşluk bıraktık */}
        
        {/* Üst Küçük Başlık */}
        <h2 className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-pulse">
          WELCOME TO CSN
        </h2>

        {/* Ana Büyük Başlık */}
        <h1 className="text-6xl md:text-9xl font-black text-white leading-tight mb-8 drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]">
          Built by<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 animate-gradient">
            Web3 Researchers
          </span>
        </h1>

        {/* Alt Açıklama (Opsiyonel: Eğer boş kalsın istiyorsan silebilirsin ama tasarımda dolu durması iyidir) */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md">
          Dive into the ecosystem where analysis meets innovation.
        </p>

        {/* Buton */}
        <div className="flex justify-center">
          <Link 
            href="/apps" 
            className="group relative px-12 py-5 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
          >
            Explore Now
            <span className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/50 transition-all scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100"></span>
          </Link>
        </div>

      </div>

      {/* EN ALTA TİCKER EKLENDİ */}
      <CryptoTicker />

    </main>
  );
}