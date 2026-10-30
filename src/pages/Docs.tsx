const stack = [
  { title: 'Visão computacional', tools: ['Python', 'OpenCV', 'YOLOv8n'], text: 'A câmera observa a maquete e produz detecções por quadro.' },
  { title: 'Controle local', tools: ['Arduino', 'Serial'], text: 'O protótipo aciona dois grupos de sinalização, A e B.' },
  { title: 'Plataforma web', tools: ['React', 'TypeScript', 'Vite'], text: 'O painel futuro acompanha um cruzamento e sua telemetria.' },
  { title: 'Backend futuro', tools: ['NestJS', 'Prisma', 'MySQL'], text: 'Integração planejada para histórico e dados autenticados.' },
]

const toolIcons: Record<string, string> = {
  Python: 'https://cdn.simpleicons.org/python/3776AB',
  OpenCV: 'https://cdn.simpleicons.org/opencv/5C3EE8',
  YOLOv8n: 'https://cdn.simpleicons.org/ultralytics/111827',
  Arduino: 'https://cdn.simpleicons.org/arduino/00979D',
  React: 'https://cdn.simpleicons.org/react/61DAFB',
  TypeScript: 'https://cdn.simpleicons.org/typescript/3178C6',
  Vite: 'https://cdn.simpleicons.org/vite/646CFF',
  NestJS: 'https://cdn.simpleicons.org/nestjs/E0234E',
  Prisma: 'https://cdn.simpleicons.org/prisma/FFFFFF',
  MySQL: 'https://cdn.simpleicons.org/mysql/4479A1',
}

const ToolIcon = ({ tool }: { tool: string }) => (
  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10" aria-hidden="true">
    <img src={toolIcons[tool]} alt="" className="h-5 w-5 object-contain" />
  </span>
)

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
          {stack.map(({ title, tools, text }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-[#1E2436] p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="font-title font-semibold">{title}</h3>
                <div className="ml-auto flex flex-wrap justify-end gap-2" aria-label={`Ferramentas de ${title}`}>
                  {tools.map((tool) => (
                    <span key={tool} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#141827] py-1 pl-1 pr-2 text-xs text-gray-200">
                      {toolIcons[tool] && <ToolIcon tool={tool} />}
                      {tool}
                    </span>
                  ))}
                </div>
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
