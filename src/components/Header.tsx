import { Link } from 'react-router-dom'
import { BrandLogo } from './BrandLogo'

export const Header = () => {
  return (
    <header className="border-b border-white/10 bg-[#181C2B]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap gap-4 justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <BrandLogo />
        </Link>
        
        <nav aria-label="Navegação principal" className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-[#FBC117] transition">Início</Link>
          <Link to="/docs" className="hover:text-[#FBC117] transition">Documentação</Link>
          <Link to="/about" className="hover:text-[#FBC117] transition">Sobre</Link>
        </nav>
      </div>
    </header>
  )
}
