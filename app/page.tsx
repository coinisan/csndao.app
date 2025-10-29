import Image from "next/image";
import Link from "next/link";
import apps from "../data/apps.json";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/background.png')" }}
      ></div>

      {/* Page content */}
      <div className="relative z-10">
        <section className="text-center py-16">
          <h1 className="text-5xl font-extrabold mb-2 tracking-tight">
            CSN HUB
          </h1>
        </section>

        <section className="max-w-6xl mx-auto grid gap-6 px-6 sm:grid-cols-2 md:grid-cols-3">
          {apps.map((app) => (
            <div
              key={app.slug}
              className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition"
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

        <footer className="text-center py-8 text-gray-500 text-sm">
          Built by Coinisan • © {new Date().getFullYear()} CSN DAO
        </footer>
      </div>
    </main>
  );
}




