"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Send, Github, Mail } from "lucide-react";

const JOIN_URL =
  "https://docs.google.com/forms/u/1/d/e/1FAIpQLSe1YtKjlsSxqwxzpsnwXoweV8rc0rw7awtlzAhK21ksGzd_Kw/viewform?usp=send_form";

/* ─── X Logo Icon (Modern) ─────────────────────────────────────────────────── */

function XIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const coreProjects = [
  {
    name: "CDice",
    category: "FARCASTER GAMES",
    image: "/cdice.png",
    href: "https://farcaster.xyz/miniapps/MKSLQNWF-cyH/cdice",
    description: "A decentralized dice game built for social platforms. Test your luck with Base or Dice modes.",
  },
  {
    name: "FollowCheck",
    category: "FARCASTER TOOLS",
    image: "/followchecklogo.png",
    href: "https://farcaster.xyz/miniapps/qgVJ4mXPMFlR/followcheck",
    description: "Instantly check who follows you back on decentralized social. Essential tool for community building.",
  },
];

const remixGames = [
  {
    name: "Run Vitalik Run",
    image: "/RunVitalikRunLogo.png",
    href: "https://remix.gg/g/c9e5946b-9830-4a7e-81a0-e5b1dfadd119",
    description: "Web3-themed endless runner game. Collect ETH and dodge the bears!",
  },
  {
    name: "React to Base",
    image: "/basereactlogo.png",
    href: "https://remix.gg/g/9debd4e0-91e6-45e5-8e9d-1bbbe1fa9c7b",
    description: "Futuristic reaction-time game. How fast can you click?",
  },
  {
    name: "Base Tower Defense",
    image: "/basetower.png",
    href: "https://remix.gg/g/a88b7182-0afd-4b66-936c-3022cc69a05a",
    description: "Strategy based neon-styled tower defense game.",
  },
  {
    name: "Base Sniper",
    image: "/basesniper.png",
    href: "https://remix.gg/g/0d3413f6-d3b4-48d0-92c9-53f0cff290c6",
    description: "Precision shooting game. The fastest sniper wins.",
  },
  {
    name: "Snake Base",
    image: "/snake.png",
    href: "https://remix.gg/g/b4d10dab-d29d-4449-ac1b-0f5fe7ff0d7a",
    description: "Classic Snake game reimagined for Web3.",
  },
];

const growthLeaders = [
  { name: "Showmaker", image: "/showmaker.jpg", x: "https://x.com/showmaker_handle" },
  { name: "NikkiSixx7", image: "/nikki.jpg", x: "https://x.com/nikki_handle" },
];

const members = [
  { name: "Corr",          image: "/corr.jpg",              x: "https://x.com/corr_handle" },
  { name: "Bthd",          image: "/Sc3l19UM_400x400.jpg",  x: "https://x.com/bthd_handle" },
  { name: "Kripto Sensei", image: "/qPT72y_d_400x400.jpg",  x: "https://x.com/kriptosensei_handle" },
  { name: "Cryptograsi",   image: "/dmRCFkw5_400x400.jpg",  x: "https://x.com/cryptograsi_handle" },
  { name: "mehm.eth",      image: "/0OoEU-Xt_400x400.jpg",  x: "https://x.com/mehmeth_handle" },
  { name: "0xklc",         image: "/iWD4FGEc_400x400.jpg",  x: "https://x.com/0xklc_handle" },
  { name: "Crypto Sinan",  image: "/W4yWNZsR_400x400.jpg",  x: "https://x.com/cryptosinan_handle" },
  { name: "KENZO",         image: "/X8bVXGRp_400x400.jpg",  x: "https://x.com/kenzo_handle" },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */

export default function Home() {
  const [activeNetwork, setActiveNetwork] = useState<"BASE" | "ARC">("BASE");

  return (
    <main className="bg-karon-bg text-karon-text overflow-x-hidden w-full">

      {/* ═══════════════════ HERO ═════════════════════════════════════════ */}
      <section className="h-screen relative flex flex-col overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 w-full flex-1 flex flex-col justify-center pt-28 pb-20">

          <h1 className="font-display text-karon-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-8">
            KARON
          </h1>

          <div className="border-t border-karon-border mb-10" />

          <div className="max-w-3xl flex flex-col gap-5">
            <p className="font-sans text-karon-text text-lg sm:text-xl md:text-2xl font-light tracking-wide">
              Research. Build. Grow.
            </p>
            <p className="font-sans text-karon-muted text-base leading-relaxed max-w-xl">
              KARON is a native Web3 studio building decentralized tools and
              on-chain games. Writing code is just the first step. We also build
              the communities and drive the growth that bring our products to life.
            </p>
            <p className="font-sans text-karon-subtle text-sm leading-relaxed max-w-xl">
              Research-backed. Builder-led. Community-driven.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-14">
            <Link
              href="#apps"
              className="font-sans text-karon-text text-sm tracking-widest uppercase border-b border-karon-text pb-0.5 hover:text-karon-muted hover:border-karon-muted transition-colors duration-300"
            >
              Explore Apps →
            </Link>
            <Link
              href="#team"
              className="font-sans text-karon-muted text-sm tracking-widest uppercase border-b border-karon-border pb-0.5 hover:text-karon-text hover:border-karon-muted transition-colors duration-300"
            >
              The Syndicate →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ APPS ═════════════════════════════════════════ */}
      <section id="apps" className="border-t border-karon-border py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">

          <h2 className="font-display text-karon-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-3">
            Apps
          </h2>
          <p className="font-sans text-karon-muted text-sm leading-relaxed max-w-lg mb-12">
            Incubated and scaled by KARON — deployed products, tools, and
            playable applications engineered within our research ecosystem.
          </p>

          {/* ── BASE / ARC Tabs ── */}
          <div className="flex items-center gap-1 mb-16 border-b border-karon-border">
            <button
              type="button"
              onClick={() => setActiveNetwork("BASE")}
              className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 font-sans text-sm tracking-widest uppercase transition-colors duration-300 -mb-px ${
                activeNetwork === "BASE"
                  ? "text-karon-text border-b-2 border-karon-text"
                  : "text-karon-subtle hover:text-karon-muted"
              }`}
            >
              <Image src="/base.png" alt="Base" width={20} height={20} className="rounded-full object-contain" />
              BASE
            </button>
            <button
              type="button"
              onClick={() => setActiveNetwork("ARC")}
              className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 font-sans text-sm tracking-widest uppercase transition-colors duration-300 -mb-px ${
                activeNetwork === "ARC"
                  ? "text-karon-text border-b-2 border-karon-text"
                  : "text-karon-subtle hover:text-karon-muted"
              }`}
            >
              <Image src="/arc.png" alt="ARC" width={20} height={20} className="rounded-full object-contain" />
              ARC
            </button>
          </div>

          {/* ── ARC Content ── */}
          {activeNetwork === "ARC" && (
            <div className="flex flex-col items-center justify-center py-20 gap-6 border border-karon-border rounded-lg">
              <div className="relative w-16 h-16">
                <Image src="/arc.png" alt="ARC" fill className="object-contain opacity-60" />
              </div>
              <p className="font-sans text-karon-muted text-sm tracking-wide text-center px-4">
                Coming Soon — ARC ecosystem apps are under development.
              </p>
            </div>
          )}

          {/* ── BASE Content ── */}
          {activeNetwork === "BASE" && (
            <div className="flex flex-col gap-20">

              {/* Core Projects */}
              <div>
                <h3 className="font-sans text-karon-subtle text-xs tracking-widest uppercase mb-6">
                  Core Projects
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coreProjects.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-karon-border rounded-lg overflow-hidden hover:border-karon-muted transition-colors duration-300 group"
                    >
                      <div className="relative w-full aspect-[2/1] bg-karon-surface">
                        <Image src={p.image} alt={p.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-5 sm:p-6 flex flex-col gap-2">
                        <span className="font-sans text-karon-subtle text-xs tracking-widest uppercase">{p.category}</span>
                        <h4 className="font-display text-karon-text text-xl sm:text-2xl">{p.name}</h4>
                        <p className="font-sans text-karon-muted text-sm leading-relaxed">{p.description}</p>
                        <span className="mt-2 font-sans text-karon-text text-xs tracking-widest uppercase group-hover:text-karon-muted transition-colors duration-300">Open →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Remix Games */}
              <div>
                <h3 className="font-sans text-karon-subtle text-xs tracking-widest uppercase mb-2">
                  Remix Games
                </h3>
                <p className="font-sans text-karon-muted text-sm leading-relaxed max-w-lg mb-8">
                  KARON games are available across multiple platforms — play them
                  directly on the web, in social apps, and on messaging platforms.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {remixGames.map((g) => (
                    <Link
                      key={g.name}
                      href={g.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-karon-border rounded-lg overflow-hidden hover:border-karon-muted transition-colors duration-300 group"
                    >
                      <div className="relative w-full aspect-square bg-karon-surface">
                        <Image src={g.image} alt={g.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-3 sm:p-4 flex flex-col gap-1.5">
                        <span className="font-sans text-karon-text text-xs sm:text-sm leading-tight">{g.name}</span>
                        <span className="font-sans text-karon-muted text-xs leading-relaxed line-clamp-2">{g.description}</span>
                        <span className="mt-1 font-sans text-karon-muted text-xs tracking-widest uppercase group-hover:text-karon-text transition-colors duration-300">Play →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* ═══════════════════ TEAM (Leadership) ════════════════════════════ */}
      <section id="team" className="border-t border-karon-border py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">

          <h2 className="font-display text-karon-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-3">
            The Syndicate
          </h2>
          <p className="font-sans text-karon-muted text-sm leading-relaxed max-w-lg mb-20">
            The core team leading the KARON ecosystem.
          </p>

          {/* ── Community Leader ── */}
          <span className="font-sans text-karon-subtle text-xs tracking-widest uppercase">
            003.1 — Leadership
          </span>
          <div className="mt-6 mb-20 flex flex-col items-center text-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden bg-karon-surface ring-2 ring-karon-border">
              <Image src="/coinisan.png" alt="Coinisan" fill className="object-cover" />
            </div>
            <h4 className="font-display text-karon-text text-2xl sm:text-3xl mt-6">Coinisan</h4>
            <p className="font-sans text-karon-muted text-xs tracking-widest uppercase mt-2">
              Community Leader
            </p>
            <Link href="https://x.com/Coinisan" target="_blank" rel="noopener noreferrer" className="mt-4 text-karon-subtle hover:text-karon-text transition-colors duration-300" aria-label="Coinisan on X">
              <XIcon size={15} />
            </Link>
          </div>

          {/* ── Growth Leaders ── */}
          <span className="font-sans text-karon-subtle text-xs tracking-widest uppercase">
            003.2 — Growth
          </span>
          <div className="mt-6 grid grid-cols-2 max-w-md mx-auto gap-6">
            {growthLeaders.map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-karon-surface ring-1 ring-karon-border">
                  <Image src={person.image} alt={person.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <h4 className="font-display text-karon-text text-lg sm:text-xl">{person.name}</h4>
                  <p className="font-sans text-karon-muted text-xs tracking-widest uppercase">Growth Leader</p>
                  <Link href={person.x} target="_blank" rel="noopener noreferrer" className="mt-2 text-karon-subtle hover:text-karon-text transition-colors duration-300" aria-label={`${person.name} on X`}>
                    <XIcon size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════ MEMBERS (Professional Network) ═══════════════ */}
      <section id="members" className="border-t border-karon-border py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16">

          <h2 className="font-display text-karon-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-3">
            Members
          </h2>
          <p className="font-sans text-karon-muted text-sm leading-relaxed max-w-lg mb-16">
            The professional network that researches, builds, and grows alongside KARON.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((m) => (
              <div key={m.name} className="border border-karon-border rounded-lg p-6 sm:p-8 flex items-center gap-5 hover:border-karon-muted transition-colors duration-300">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-karon-surface ring-1 ring-karon-border shrink-0">
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-2 min-w-0">
                  <span className="font-sans text-karon-text text-base font-medium truncate">{m.name}</span>
                  <Link href={m.x} target="_blank" rel="noopener noreferrer" className="text-karon-subtle hover:text-karon-text transition-colors duration-300" aria-label={`${m.name} on X`}>
                    <XIcon size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ── Join CTA ── */}
          <div className="mt-16 pt-16 border-t border-karon-border flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="font-sans text-karon-muted text-sm">
              The Syndicate is expanding.
            </p>
            <Link
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-karon-text text-sm tracking-widest uppercase border-b border-karon-text pb-0.5 hover:text-karon-muted hover:border-karon-muted transition-colors duration-300"
            >
              Apply to join us →
            </Link>
          </div>

        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════════════════════════ */}
      <section id="contact" className="border-t border-karon-border scroll-mt-16 min-h-screen">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 pt-28 md:pt-36 pb-20 md:pb-28">

          {/* Header */}
          <h2 className="font-display text-karon-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-3">
            Contact
          </h2>
          <p className="font-sans text-karon-muted text-sm leading-relaxed max-w-lg mb-6">
            Get in touch with the KARON team and community leaders.
          </p>

          {/* Email */}
          <Link
            href="mailto:coinisan3@gmail.com"
            className="inline-flex items-center gap-2.5 font-sans text-karon-text text-sm tracking-wide hover:text-karon-muted transition-colors duration-300 mb-20"
          >
            <Mail size={16} className="text-karon-subtle" />
            coinisan3@gmail.com
          </Link>

          <div className="border-t border-karon-border mb-16" />

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">

            {/* KARON Brand */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <Image src="/karon-logo.png" alt="KARON" width={40} height={40} className="h-10 w-auto object-contain opacity-90" />
                <div className="flex flex-col">
                  <h3 className="font-display text-karon-text text-lg">KARON</h3>
                  <span className="font-sans text-karon-subtle text-xs tracking-widest uppercase">Official</span>
                </div>
              </div>
              <Link
                href="https://x.com/Csn_Dao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-karon-border rounded-lg px-5 py-4 hover:border-karon-muted hover:bg-karon-surface transition-all duration-300 group"
              >
                <XIcon size={16} />
                <span className="font-sans text-karon-muted text-sm group-hover:text-karon-text transition-colors duration-300">KARON on X</span>
                <span className="ml-auto font-sans text-karon-subtle text-xs group-hover:text-karon-muted transition-colors duration-300">→</span>
              </Link>
            </div>

            {/* Coinisan */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-karon-surface ring-1 ring-karon-border shrink-0">
                  <Image src="/coinisan.png" alt="Coinisan" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-display text-karon-text text-lg">Coinisan</h3>
                  <span className="font-sans text-karon-subtle text-xs tracking-widest uppercase">Community Leader</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="https://x.com/Coinisan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-karon-border rounded-lg px-5 py-4 hover:border-karon-muted hover:bg-karon-surface transition-all duration-300 group"
                >
                  <XIcon size={16} />
                  <span className="font-sans text-karon-muted text-sm group-hover:text-karon-text transition-colors duration-300">X</span>
                  <span className="ml-auto font-sans text-karon-subtle text-xs group-hover:text-karon-muted transition-colors duration-300">→</span>
                </Link>
                <Link
                  href="https://t.me/Coinisan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-karon-border rounded-lg px-5 py-4 hover:border-karon-muted hover:bg-karon-surface transition-all duration-300 group"
                >
                  <Send size={16} className="text-current" />
                  <span className="font-sans text-karon-muted text-sm group-hover:text-karon-text transition-colors duration-300">Telegram</span>
                  <span className="ml-auto font-sans text-karon-subtle text-xs group-hover:text-karon-muted transition-colors duration-300">→</span>
                </Link>
                <Link
                  href="https://github.com/Coinisan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-karon-border rounded-lg px-5 py-4 hover:border-karon-muted hover:bg-karon-surface transition-all duration-300 group"
                >
                  <Github size={16} className="text-current" />
                  <span className="font-sans text-karon-muted text-sm group-hover:text-karon-text transition-colors duration-300">Github</span>
                  <span className="ml-auto font-sans text-karon-subtle text-xs group-hover:text-karon-muted transition-colors duration-300">→</span>
                </Link>
                <Link
                  href="mailto:coinisan3@gmail.com"
                  className="flex items-center gap-3 border border-karon-border rounded-lg px-5 py-4 hover:border-karon-muted hover:bg-karon-surface transition-all duration-300 group"
                >
                  <Mail size={16} className="text-current" />
                  <span className="font-sans text-karon-muted text-sm group-hover:text-karon-text transition-colors duration-300">Email</span>
                  <span className="ml-auto font-sans text-karon-subtle text-xs group-hover:text-karon-muted transition-colors duration-300">→</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════ FOOTER ════════════════════════════════════════ */}
      <footer className="border-t border-karon-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-display text-karon-subtle text-sm tracking-editorial uppercase">
            KARON
          </span>
          <span className="font-sans text-karon-subtle text-xs">
            © 2026 KARON R&amp;D. Built by Web3 Researchers.
          </span>
        </div>
      </footer>

    </main>
  );
}
