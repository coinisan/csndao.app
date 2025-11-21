export default function MiniApps() {
  const apps = [
    { name: "Run Vitalik Run", url: "https://your-game-link.com" },
    { name: "Snake Base", url: "https://your-game-link.com" },
    { name: "Arcane Mix", url: "https://your-game-link.com" }
  ];

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-2">Mini Apps</h1>
      <p className="text-gray-400 mb-8">Hızlı, eğlenceli ve on-chain deneyimler.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <div key={app.name} className="flex flex-col justify-between h-full p-6 bg-gray-900 border border-gray-800 rounded-xl hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] hover:border-purple-500/50 transition-all duration-300">
            
            <div className="mb-4">
               {/* İlerde buraya resim gelecek */}
               <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center mb-3 text-purple-400">
                 🎮
               </div>
               <h2 className="font-bold text-xl text-gray-100">{app.name}</h2>
            </div>

            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-center w-full py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors shadow-lg shadow-purple-900/20"
            >
              Play Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}