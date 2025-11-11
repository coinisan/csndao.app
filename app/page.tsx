"use client";

import Link from "next/link";
import { Dice5, Gem } from "lucide-react"; // Ethereum yerine Gem

export default function Home() {
  return (
    <main className="relative min-h-screen text-white flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/background.png')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Header */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight animate-fade-in">
            CSN HUB
          </h1>
          <p className="text-[#f5deb3] text-lg max-w-2xl mx-auto animate-fade-in">
            Welcome to Coinisan’s world you can find everything related to Coinisan and CSN right here.
          </p>
        </section>

        {/* Farcaster Section */}
        <section className="text-center py-16 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-6 text-purple-500">Farcaster</h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">
            Explore the CSN ecosystem on Farcaster
          </p>

          {/* BASE or DICE */}
          <div className="max-w-xl mx-auto bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition group">
            <div className="flex justify-center mb-4">
              <Dice5
                size={80}
                className="text-purple-400 transition-transform duration-500 group-hover:rotate-180"
              />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-purple-400">
              BASE or DICE
            </h3>

            <Link
              href="https://farcaster.xyz/miniapps/MKSLQNWF-cyH/cdice"
              target="_blank"
              className="inline-block bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition"
            >
              Play on Farcaster
            </Link>
          </div>
        </section>

        {/* Remix Section */}
        <section className="text-center py-16 border-t border-white/10">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">Remix</h2>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto">
            With Remix, you can access CSN games not only through the Remix website, but also across multiple platforms such as Farcaster and Telegram.
          </p>

          {/* 🎮 Run Vitalik Run */}
          <div className="max-w-xl mx-auto bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition group">
            <div className="flex justify-center mb-4">
              <Gem
                size={80}
                className="text-yellow-400 transition-transform duration-700 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_#FFD700]"
              />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">
              Run Vitalik Run
            </h3>

            <Link
              href="https://remix.gg/g/c9e5946b-9830-4a7e-81a0-e5b1dfadd119"
              target="_blank"
              className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Play on Remix
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto bg-black/60 border-t border-white/10 py-10 text-center">
          <p className="text-gray-400 text-sm mb-6">
            Built by Coinisan • © {new Date().getFullYear()} CSN DAO
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <Link href="https://x.com/Coinisan" target="_blank" className="hover:text-white">
              Coinisan X
            </Link>
            <Link href="https://t.me/Coinisan" target="_blank" className="hover:text-white">
              Coinisan Telegram
            </Link>
            <Link href="https://farcaster.xyz/coinisan" target="_blank" className="hover:text-white">
              Coinisan Farcaster
            </Link>
            <Link href="https://t.me/csndao" target="_blank" className="hover:text-white">
              CSN Telegram
            </Link>
            <Link href="https://x.com/Csn_Dao" target="_blank" className="hover:text-white">
              CSN X
            </Link>
            <Link
              href="https://farcaster.xyz/~/group/UReokoQZ8JkvbDgjTk7PZA"
              target="_blank"
              className="hover:text-white"
            >
              CSN Farcaster Group
            </Link>
          </div>
        </footer>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </main>
  );
}
