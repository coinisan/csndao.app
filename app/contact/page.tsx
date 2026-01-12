import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#171717] text-white flex flex-col items-center">
      
      {/* BAŞLIK (GÜNCELLENDİ) */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">CONTACT</h1>
        <p className="text-gray-400 uppercase tracking-widest text-sm">Connect with the team</p>
      </div>

      {/* --- 1. CSN DAO (MERKEZ) --- */}
      <div className="w-full max-w-2xl bg-[#121212] border border-white/10 rounded-3xl p-10 flex flex-col items-center text-center shadow-2xl mb-12 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-purple-500 to-blue-500"></div>
        
        {/* CSN LOGO */}
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <img 
            src="/logo.png" 
            alt="CSN DAO" 
            className="relative w-28 h-28 rounded-full mb-6 border-4 border-[#171717] shadow-xl object-cover"
          />
        </div>
        
        <h2 className="text-3xl font-black text-white mb-2">CSN DAO</h2>
        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-8">Official Channels</p>

        {/* İkonlar (Sadece X ve Telegram) */}
        <div className="flex flex-wrap justify-center gap-4">
          <SocialBtn href="https://x.com/Csn_Dao" icon="x" label="Twitter" />
          <SocialBtn href="https://t.me/csndao" icon="telegram" label="Telegram" />
        </div>
      </div>


      {/* --- 2. TEAM MEMBERS (ALT YAN YANA) --- */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* COINISAN KART */}
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-yellow-500/30 transition-colors group">
          
          {/* COINISAN FOTO */}
          <img 
            src="/coinisan.png" 
            alt="Coinisan" 
            className="w-24 h-24 rounded-full mb-4 border-2 border-white/10 group-hover:border-yellow-500 transition-colors object-cover shadow-lg"
          />

          <h3 className="text-2xl font-black text-white mb-1">COINISAN</h3>
          <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">Researcher</p>
          
          <div className="flex gap-3">
            <SocialBtn href="https://twitter.com/Coinisan" icon="x" size="sm" />
            <SocialBtn href="https://t.me/Coinisan" icon="telegram" size="sm" />
            <SocialBtn href="https://github.com/coinisan" icon="github" size="sm" />
          </div>
        </div>

        {/* DALI KART */}
        <div className="bg-[#121212] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:border-blue-500/30 transition-colors group">
          
          {/* DALI FOTO */}
          <img 
            src="/dali.png" 
            alt="Dali" 
            className="w-24 h-24 rounded-full mb-4 border-2 border-white/10 group-hover:border-blue-500 transition-colors object-cover shadow-lg"
          />

          <h3 className="text-2xl font-black text-white mb-1">DALI</h3>
          <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">Marketing Lead</p>
          
          <div className="flex gap-3">
            <SocialBtn href="https://x.com/Dalibase" icon="x" size="sm" />
            <SocialBtn href="https://t.me/dalibase" icon="telegram" size="sm" />
          </div>
        </div>

      </div>

    </main>
  );
}

// --- YARDIMCI BİLEŞENLER (SVG İKONLARI) ---
function SocialBtn({ href, icon, label, size = "lg" }: { href: string, icon: string, label?: string, size?: "sm" | "lg" }) {
  
  const sizeClasses = size === "lg" ? "w-12 h-12" : "w-10 h-10";
  const iconSize = size === "lg" ? "w-6 h-6" : "w-5 h-5";

  // Renk ve İkon Ayarları
  let bgHover = "hover:bg-white hover:text-black";
  let path = "";

  if (icon === "x") {
    path = "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";
  } else if (icon === "telegram") {
    bgHover = "hover:bg-[#229ED9] hover:text-white";
    path = "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z";
  } else if (icon === "github") {
    bgHover = "hover:bg-gray-700 hover:text-white";
    path = "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z";
  }

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${sizeClasses} bg-[#1a1a1a] border border-white/10 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 ${bgHover} group/btn`}
      title={label}
    >
      <svg viewBox="0 0 24 24" className={`${iconSize} fill-current`} aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d={path}></path>
      </svg>
    </a>
  );
}