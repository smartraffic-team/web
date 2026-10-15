const stack: [string, string, string][] = [
  ['Visão computacional', 'Python · OpenCV · YOLOv8n', 'A câmera observa a maquete e produz detecções por quadro.'],
  ['Controle local', 'Arduino · serial 9600', 'O protótipo aciona dois grupos de sinalização, A e B.'],
  ['Plataforma web', 'React · TypeScript · Vite', 'O painel futuro acompanha um cruzamento e sua telemetria.'],
  ['Backend futuro', 'NestJS · Prisma · MySQL', 'Integração planejada para histórico e dados autenticados.'],
]

export const Docs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#FBC117] mb-4">Contexto técnico</p>
        <h1 className="font-title text-4xl md:text-6xl font-bold leading-tight">Documentação do SmartTraffic.</h1>
        <p className="text-gray-300 text-lg leading-relaxed mt-6">Uma visão objetiva do que já existe no protótipo, do que está sendo planejado e de como as partes se conectam.</p>
      </div>

      <section className="mt-16" aria-labelledby="fluxo-title">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FBC117] mb-3">Fluxo atual</p>
            <h2 id="fluxo-title" className="font-title text-3xl font-bold">Da câmera aos LEDs.</h2>
          </div>
          <span className="text-xs rounded-full border border-[#FBC117]/40 text-[#FBC117] px-3 py-1">Protótipo acadêmico</span>
        </div>
        <div className="grid gap-3 md:grid-cols-5 mt-8">
          {['Webcam', 'OpenCV + YOLOv8n', 'Regras Python', 'Serial USB', 'Arduino + LEDs'].map((item, index) => (
            <div key={item} className="relative rounded-2xl border border-white/10 bg-[#1E2436] p-5">
              <span className="font-title text-[#FBC117] text-sm font-bold">0{index + 1}</span>
              <p className="font-semibold mt-6">{item}</p>
              {index < 4 && <span aria-hidden="true" className="hidden md:block absolute -right-3 top-1/2 text-[#FBC117] z-10">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 mt-20" aria-labelledby="stack-title">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FBC117] mb-3">Componentes</p>
          <h2 id="stack-title" className="font-title text-3xl font-bold">Uma base preparada para evoluir.</h2>
          <p className="text-gray-300 leading-relaxed mt-4 max-w-lg">A arquitetura separa a operação local da futura camada de monitoramento. O cruzamento não deve depender da internet para manter seu funcionamento básico.</p>
        </div>
        <div className="grid gap-3">
          {stack.map(([title, tech, text]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#1E2436] p-5">
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="font-title font-semibold">{title}</h3>
                <span className="text-xs text-[#FBC117]">{tech}</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[#FBC117]/20 bg-[#FBC117]/5 p-6 md:p-10 mt-20" aria-labelledby="status-title">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#FBC117] mb-3">Leitura correta dos resultados</p>
        <h2 id="status-title" className="font-title text-3xl font-bold">O que já é fato — e o que ainda precisa de teste.</h2>
        <div className="grid gap-8 md:grid-cols-2 mt-8">
          <div>
            <h3 className="font-title font-semibold text-[#FBC117]">Já identificado no código</h3>
            <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
              <li>Detecção de carros e pessoas com YOLOv8n.</li>
              <li>Contagem de detecções por quadro.</li>
              <li>Comunicação Python → Arduino por serial.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-title font-semibold text-[#FBC117]">Ainda planejado</h3>
            <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
              <li>Contagem separada por via e rastreamento persistente.</li>
              <li>Comparação experimental de tempo de espera.</li>
              <li>Failover seguro e integração autenticada com a API.</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-8 border-t border-white/10 pt-5">Os números exibidos nesta apresentação são conceituais. Nenhuma redução de espera ou ganho de desempenho foi validado experimentalmente até o momento.</p>
      </section>
    </div>
  )
}
