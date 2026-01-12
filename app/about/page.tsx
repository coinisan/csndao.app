import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-[#171717] text-white">
      
      {/* BAŞLIK */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">THE CSN TEAM</h1>
        <p className="text-gray-400 uppercase tracking-widest text-sm">Meet the minds behind the ecosystem</p>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full mx-auto mt-6"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* --- PERSON 1: COINISAN --- */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          
          {/* Resim */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              <img 
                src="/coinisan.png" 
                alt="Coinisan" 
                className="relative w-full h-full rounded-2xl border border-white/10 shadow-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Metin */}
          <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-black text-white">COINISAN</h2>
              <p className="text-yellow-500 font-bold tracking-widest text-xs uppercase mt-1">Researcher</p>
            </div>
            
            <div className="text-gray-300 leading-relaxed font-light space-y-4">
              <p>
                Coinisan is a Researcher who has been producing content on Web3 for a long time.
              </p>
              <p>
                He has collaborated with hundreds of top-tier projects such as <strong>Phala, Linera, Trust Wallet, Arcium, Bitlayer, and Canton</strong>, serving as an advisor and ambassador.
              </p>
              <p>
                For a long time, he was part of the <strong>2 Loud</strong> team, one of Turkiye's most well-known communities. Now, he is part of the <strong>CSN</strong> team.
              </p>
            </div>
          </div>
        </div>


        {/* --- AYIRACI ÇİZGİ --- */}
        <div className="w-full h-px bg-white/5"></div>


        {/* --- PERSON 2: DALI --- */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-16">
          
          {/* Resim */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              <img 
                src="/dali.png" 
                alt="Dali" 
                className="relative w-full h-full rounded-2xl border border-white/10 shadow-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Metin */}
          <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-black text-white">DALI</h2>
              <p className="text-blue-500 font-bold tracking-widest text-xs uppercase mt-1">Marketing Manager</p>
            </div>
            
            <div className="text-gray-300 leading-relaxed font-light space-y-4">
              <p>
                Dali is a recognized community leader within the Turkish ecosystem.
              </p>
              <p>
                He successfully managed the <strong>Wepad Turkey</strong> community for a long time, always providing one-on-one assistance to members. Additionally, Dali has managed the Turkish communities for projects such as <strong>Futureverse, Root Network, Teleport, Planet, Ponder, Lumia, Suiswap</strong>, and many more.
              </p>
              <p>
                Currently, he conducts research on AI and assists people through his X account and our community. Dali now serves as the <strong>Marketing Manager</strong> for the CSN team.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}