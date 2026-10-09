import { BrandLogo } from './BrandLogo'
import { Link } from 'react-router-dom'

const linkStyle = 'transition hover:text-[#FBC117] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBC117]'

const socialIcons = {
  GitHub: <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.72-1.5-2.5-.29-5.13-1.25-5.13-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.07-1.15 3.07-1.15.62 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.64 5.25-5.15 5.53.41.35.76 1.03.76 2.08v3.11c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />,
  Instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" /></>,
  LinkedIn: <><rect x="3" y="8" width="4" height="13" rx=".5" /><circle cx="5" cy="4" r="2" /><path d="M10 8h4v1.8c.8-1.3 2-2 3.6-2 3 0 4.4 1.9 4.4 5.2v8h-4v-7.2c0-1.8-.6-2.8-1.9-2.8-1.4 0-2.1 1-2.1 2.8V21h-4Z" /></>,
}

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#141827] text-sm text-gray-300">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div>
            <Link to="/" className={`inline-block rounded-lg ${linkStyle}`}>
              <BrandLogo />
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed">Tecnologia, visão computacional e controle adaptativo para repensar a mobilidade urbana.</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-[#FBC117]">Projeto acadêmico • Feito em equipe</p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="font-semibold text-base text-[#EBEAEB] mb-5">Explore o projeto</h2>
            <ul className="space-y-3">
              <li><Link to="/" className={linkStyle}>Início</Link></li>
              <li><Link to="/docs" className={linkStyle}>Documentação</Link></li>
              <li><Link to="/about" className={linkStyle}>Sobre o projeto</Link></li>
              <li><a href="/#equipe" className={linkStyle}>Nossa equipe</a></li>
            </ul>
          </nav>

          <div>
            <h2 className="font-semibold text-base text-[#EBEAEB] mb-5">Endereço e contato</h2>
            <address className="not-italic leading-relaxed space-y-3">
              <p>Campus de Tecnologia<br />Rua Exemplo, 123 — Centro<br />São Paulo — SP</p>
              <p className="break-words">contato@smarttraffic.example<br />(11) 0000-0000</p>
            </address>
            <p className="mt-3 text-xs text-gray-400">Endereço, e-mail e telefone fictícios para apresentação.</p>
          </div>

          <div>
            <h2 className="font-semibold text-base text-[#EBEAEB] mb-5">Nas redes</h2>
            <ul className="space-y-3">
              {Object.entries(socialIcons).map(([name, icon]) => (
                <li key={name}>
                  {name === 'GitHub' ? (
                    <a href="https://github.com/smartraffic-team" target="_blank" rel="noopener noreferrer" aria-label="SmartTraffic no GitHub (abre em nova aba)" className={`flex items-center gap-3 w-fit rounded-lg ${linkStyle}`}>
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#FBC117]"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">{icon}</svg></span>
                      {name}<span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 text-gray-400">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">{icon}</svg></span>
                      <span>{name}<span className="block text-xs">Em breve</span></span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 sm:flex-row sm:justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} SmartTraffic. Projeto acadêmico de Tecnologia.</p>
          <p>Desenvolvido por Cristhian, João Paulo, Marcelo, Bruno DeLucca e Paulo.</p>
        </div>
      </div>
    </footer>
  )
}
