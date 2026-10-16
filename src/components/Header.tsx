import { Link } from 'react-router-dom'
import { BrandLogo } from './BrandLogo'

export const Header = () => {
  return (
    <header className="border-b border-white/10 bg-[#181C2B]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-6 sm:py-3">
        <Link to="/" className="flex w-[125px] items-center gap-2 sm:w-[190px]">
          <BrandLogo />
        </Link>

        <nav aria-label="Navegação principal" className="flex flex-wrap gap-2 text-[0.6rem] sm:gap-6 sm:text-sm">
          <Link to="/" className="font-title hover:text-[#FBC117] transition">Início</Link>
          <Link to="/about" className="font-title hover:text-[#FBC117] transition">O projeto</Link>
          <Link to="/docs" className="font-title hover:text-[#FBC117] transition">Documentação</Link>
        </nav>
      </div>
    </header>
  )
}