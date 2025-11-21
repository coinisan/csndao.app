export default function Projects() {
  const list = [
    "Run Vitalik Run",
    "Snake Base",
    "Arcane Mix",
    "BaseApp – Mini App Aggregator",
    "CSN DAO Website",
    "CDice"
  ];

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-gray-400 mb-8">Aktif geliştirmeler ve tamamlananlar.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((p) => (
          <div 
            key={p} 
            className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
               <span className="font-semibold text-lg text-gray-100">{p}</span>
               <span className="text-xs font-bold bg-blue-900/30 text-blue-400 px-2 py-1 rounded border border-blue-900">BUILD</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}