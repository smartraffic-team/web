import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="border-b border-white/10 bg-[#1A1A1C]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">Smart<span className="text-[#FBBF24]">Traffic</span></span>
        </Link>
        
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-[#FBBF24] transition">Home</Link>
          <Link to="/docs" className="hover:text-[#FBBF24] transition">Docs</Link>
          <Link to="/about" className="hover:text-[#FBBF24] transition">About</Link>
        </nav>
      </div>
    </header>
  )
}