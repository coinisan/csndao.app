"use client";

import { Dice5, Gem } from "lucide-react";
import Link from "next/link";

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
          <p
            className="text-[#f5f5dc] text-lg animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Welcome to Coinisan’s world you can find everything related to Coinisan and CSN right here.
          </p>
        </section>

        {/* Farcaster Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold text-purple-400 mb-4">Farcaster</h2>
          <p className="text-gray-400 mb-12">Explore the CSN ecosystem on Farcaster</p>

          {/* CDice Card */}
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-transform duration-500 ease-out mx-auto w-[320px] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <div className="flex justify-center mb-4 group">
              <Dice5
                size={64}
                className="text-purple-400 transition-transform duration-700 group-hover:rotate-[360deg]"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-purple-400">
              CDice
            </h3>
            <p className="text-gray-400 mb-4 text-sm">BASE or DICE</p>
            <Link
              href="https://farcaster.xyz/miniapps/MKSLQNWF-cyH/cdice"
              target="_blank"
              className="inline-block bg-purple-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 transition"
            >
              Play on Farcaster
            </Link>
          </div>
        </section>

        {/* Remix Section */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Remix</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            With Remix, you can access CSN games not only through the Remix
            website, but also across multiple platforms such as Farcaster and
            Telegram.
          </p>

          {/* Run Vitalik Run card */}
          <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-transform duration-500 ease-out mx-auto w-[320px] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <div className="flex justify-center mb-4">
              <Gem size={64} className="text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
              Run Vitalik Run
            </h3>
            <Link
              href="https://remix.gg/g/c9e5946b-9830-4a7e-81a0-e5b1dfadd119"
              target="_blank"
              className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
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

