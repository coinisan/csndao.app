import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-10">
      {/* Hero Section */}
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          CSN DAO Ecosystem
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Base ve Farcaster üzerinde Web3 oyunları ve mini-app araçları inşa ediyoruz.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-8">
        <Link 
          href="/projects" 
          className="group p-8 border border-gray-800 rounded-2xl bg-gray-900/50 hover:bg-gray-900 hover:border-blue-500 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
            Projects &rarr;
          </h2>
          <p className="text-gray-500 text-sm">
            Ekosistemin ana projelerini ve araçlarını keşfet.
          </p>
        </Link>

        <Link 
          href="/miniapps" 
          className="group p-8 border border-gray-800 rounded-2xl bg-gray-900/50 hover:bg-gray-900 hover:border-purple-500 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
            Mini Apps &rarr;
          </h2>
          <p className="text-gray-500 text-sm">
            Hemen oynanabilir mini oyunlar ve araçlar.
          </p>
        </Link>
      </div>
    </div>
  );
}