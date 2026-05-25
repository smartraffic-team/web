export const Hero = () => {
  return (
    <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#FBBF24]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#FBBF24] rounded-full animate-pulse"></span>
            <span className="text-[#FBBF24] text-sm font-medium">Real-time Detection • Edge AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Smart<span className="text-[#FBBF24]">Traffic</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
            Intelligent traffic control using computer vision and edge AI. 
            Detects vehicles, pedestrians, and prioritizes mobility-reduced people.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#FBBF24] hover:bg-[#F59E0B] text-[#1A1A1C] font-semibold px-6 py-3 rounded-xl transition">
              View Demo →
            </button>
            <button className="border border-gray-600 hover:border-[#FBBF24] px-6 py-3 rounded-xl transition">
              GitHub Repository
            </button>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#FBBF24]/5 to-transparent rounded-2xl p-8 border border-white/5">
          <div className="aspect-video bg-[#2A2A2E] rounded-lg flex items-center justify-center relative">
            <div className="w-24 h-32 bg-[#1A1A1C] rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20"></div>
              <div className="w-10 h-10 rounded-full bg-[#FBBF24]"></div>
              <div className="w-10 h-10 rounded-full bg-green-500/20"></div>
            </div>
            <span className="absolute bottom-4 text-xs text-gray-500">YOLOv8 Detection</span>
          </div>
        </div>
      </div>
    </section>
  )
}