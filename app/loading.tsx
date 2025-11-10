export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-[#d4af37]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#d4af37] rounded-full border-t-transparent animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-[#d4af37] mb-2">Loading...</h2>
        <p className="text-gray-400">Preparing your desert adventure</p>
      </div>
    </div>
  );
}
