"use client";

import Image from "next/image";
import Link from "next/link";
import apps from "../data/apps.json";

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
          <h1 className="text-5xl font-extrabold mb-2 tracking-tight animate-fade-in">
            CSN HUB
          </h1>
        </section>

        {/* Apps */}
        <section
          className={`max-w-6xl mx-auto px-6 ${
            apps.length === 1
              ? "flex justify-center"
              : "grid gap-6 sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          {apps.map((app, index) => (
            <div
              key={app.slug}
              className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-transform duration-500 ease-out opacity-0 animate-fade-in hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={app.logo}
                  alt={app.name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{app.name}</h2>
              <p className="text-gray-400 mb-4 text-sm">BASE or DICE</p>
              <Link
                href={app.link}
                target="_blank"
                className="inline-block bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200"
              >
                Launch on Farcaster
              </Link>
            </div>
          ))}
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


