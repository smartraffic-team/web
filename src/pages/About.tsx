export const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12 rounded-2xl border border-[#FBC117]/30 bg-[#FBC117]/5 px-5 py-4 text-sm text-gray-300" role="status">
        <span className="font-semibold uppercase tracking-widest text-[#FBC117]">Página em processo</span>
        <span className="mx-2 text-[#FBC117]">·</span>
        O projeto está sendo construído e atualizado.
      </div>

      {/* Conteúdo da página mantido para uso futuro.
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#FBC117] mb-4">O projeto</p>
        
        <h1 className="font-title text-3xl md:text-5xl font-bold leading-tight">
          SmartTraffic: semáforos que respondem ao trânsito.
        </h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mt-6">
          O SmartTraffic é um projeto acadêmico de mobilidade urbana que pesquisa como a visão computacional pode apoiar decisões mais equilibradas em cruzamentos.
          Em vez de trabalhar apenas com tempos fixos, a proposta observa a demanda das vias e o tempo que cada veículo aguarda.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-16">
        {[
          ['O desafio', 'Semáforos com tempos pré-programados não acompanham as mudanças no fluxo e podem criar filas e esperas desnecessárias.'],
          ['A proposta', 'Usar uma câmera para identificar e contar veículos, transformando essa leitura em uma decisão adaptativa para o sinal.'],
          ['O resultado esperado', 'Investigar se uma distribuição dinâmica do tempo de verde pode reduzir a espera média sem deixar uma via esquecida.'],
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-[#1E2436] p-6">
            <h2 className="font-title text-lg font-semibold text-[#FBC117]">{title}</h2>
            <p className="text-gray-300 leading-relaxed mt-3">{text}</p>
          </article>
        ))}
      </div>

      <section className="grid gap-12 lg:grid-cols-[1fr_0.8fr] items-center mt-24" aria-labelledby="escopo-title">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FBC117] mb-4">Escopo atual</p>
          
          <h2 id="escopo-title" className="font-title text-2xl md:text-3xl font-bold leading-tight">
            Um protótipo para validar uma ideia, não uma promessa pronta.
          </h2>
          
          <p className="text-gray-300 leading-relaxed mt-6">
            O primeiro cenário é uma maquete com dois grupos de sinalização. A câmera alimenta o processamento em Python, as regras analisam a situação de cada via e o Arduino executa a mudança nos LEDs.
            A plataforma web apresenta o projeto e organiza sua documentação.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="rounded-full border border-white/10 bg-[#1E2436] px-4 py-2 text-sm">ODS 9 · Inovação</span>
            <span className="rounded-full border border-white/10 bg-[#1E2436] px-4 py-2 text-sm">ODS 11 · Cidades sustentáveis</span>
          </div>
        </div>
        <figure className="rounded-3xl border border-white/10 bg-[#1E2436] p-4 shadow-2xl">
          <img src="/team-mockup.svg" alt="Ilustração conceitual da equipe SmartTraffic trabalhando em um cruzamento inteligente" className="w-full rounded-2xl" />
          <figcaption className="px-2 pt-4 text-sm text-gray-400">Mockup conceitual da equipe de desenvolvimento.</figcaption>
        </figure>
      </section> */}

      {/* Conteúdo da página mantido para uso futuro.
      <section className="grid gap-6 md:grid-cols-3 mt-24" aria-label="Princípios do projeto">
        {[
          ['Investigar', 'Testar a viabilidade do controle adaptativo em uma maquete reproduzível.'],
          ['Medir', 'Comparar controle fixo e adaptativo usando o tempo de espera como desfecho principal.'],
          ['Evoluir', 'Registrar o que já funciona e o que ainda precisa ser validado antes de uma aplicação real.'],
        ].map(([title, text]) => (
          <div key={title} className="border-t border-[#FBC117]/50 pt-5">
            <h2 className="font-title text-lg font-semibold">{title}</h2>
            <p className="text-gray-300 leading-relaxed mt-2">{text}</p>
          </div>
        ))}
      </section> */}
    </div>
  )
}
