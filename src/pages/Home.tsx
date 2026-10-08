import { Hero } from '../components/Hero'

const steps = [
  { title: 'Capturar', text: 'Câmeras posicionadas nos cruzamentos capturam imagens das vias.' },
  { title: 'Detectar e contar', text: 'A visão computacional identifica os veículos e contabiliza o fluxo em tempo real.' },
  { title: 'Analisar a demanda', text: 'O sistema combina a contagem de veículos com o tempo de espera de cada via.' },
  { title: 'Ajustar o sinal', text: 'O algoritmo usa esses dados para adaptar o tempo de verde às condições do cruzamento.' },
]

const members = ['Cristhian', 'João Paulo', 'Marcelo', 'Bruno DeLucca', 'Paulo']

export const Home = () => {
  return (
    <>
      <Hero />

      <section aria-labelledby="problema-titulo" className="border-y border-white/10 bg-[#212123]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FBBF24] mb-4">O ponto de partida</p>
            <h2 id="problema-titulo" className="text-3xl md:text-4xl font-bold leading-tight">Sinal fechado. Cruzamento vazio. Uma fila que só cresce.</h2>
          </div>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>Você já passou por essa situação? Muitos semáforos operam com tempos pré-programados, sem considerar quantos veículos estão esperando naquele momento.</p>
            <p>Esse desencontro entre o tempo do sinal e a demanda das vias pode gerar filas e esperas desnecessárias. É esse problema que motiva nosso projeto: explorar como os dados do trânsito podem orientar o controle semafórico.</p>
          </div>
        </div>
      </section>

      <section id="como-funciona" aria-labelledby="funcionamento-titulo" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#FBBF24] mb-4">Como funciona a proposta</p>
        <h2 id="funcionamento-titulo" className="text-3xl md:text-4xl font-bold mb-5">Da imagem à decisão.</h2>
        <p className="text-gray-300 max-w-2xl leading-relaxed">A ideia é transformar as imagens do cruzamento em informações úteis para decidir como distribuir o tempo de passagem entre as vias.</p>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-10">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-white/10 bg-[#212123] p-6">
              <span aria-hidden="true" className="text-3xl font-bold text-[#FBBF24]">0{index + 1}</span>
              <h3 className="text-xl font-semibold mt-6 mb-3">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="prioridade-titulo" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-[#FBBF24]/20 bg-[#FBBF24]/5 p-6 md:p-10 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FBBF24] mb-4">Uma decisão mais equilibrada</p>
            <h2 id="prioridade-titulo" className="text-3xl md:text-4xl font-bold mb-5">O fluxo importa. O tempo de espera também.</h2>
            <p className="text-gray-300 leading-relaxed">Priorizar apenas a via mais movimentada pode deixar as outras esperando por tempo excessivo. Nossa estratégia considera dois fatores para buscar uma distribuição mais equilibrada do sinal verde.</p>
          </div>
          <div className="space-y-5">
            <div className="border-l-2 border-[#FBBF24] pl-5">
              <h3 className="text-xl font-semibold mb-2">Demanda de veículos</h3>
              <p className="text-gray-300 leading-relaxed">Uma via com mais veículos pode receber mais tempo de passagem, acompanhando a demanda observada.</p>
            </div>
            <div className="border-l-2 border-[#FBBF24] pl-5">
              <h3 className="text-xl font-semibold mb-2">Tempo de espera</h3>
              <p className="text-gray-300 leading-relaxed">O tempo acumulado de espera também entra na decisão, para que as vias de menor fluxo não sejam continuamente deixadas em segundo plano.</p>
            </div>
            <p className="text-sm text-gray-300 border-t border-white/10 pt-5">Por exemplo: uma via com fila maior pode ter o verde prolongado, enquanto a espera da outra via é considerada na próxima decisão.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="objetivos-titulo" className="border-y border-white/10 bg-[#212123]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FBBF24] mb-4">Tecnologia aplicada</p>
          <h2 id="objetivos-titulo" className="text-3xl md:text-4xl font-bold mb-5">Um problema real como espaço de aprendizado.</h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed">Como estudantes de um curso de Tecnologia, conectamos visão computacional, análise de dados e desenvolvimento de algoritmos em uma proposta acadêmica voltada à mobilidade urbana.</p>
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            {[
              { title: 'Reduzir esperas desnecessárias', text: 'Buscar ajustes no sinal que façam sentido para o movimento observado em cada via.' },
              { title: 'Distribuir melhor o fluxo', text: 'Considerar diferentes demandas sem perder de vista quem já está esperando.' },
              { title: 'Aprender com os dados', text: 'Investigar como transformar imagens e contagens em decisões de controle adaptativo.' },
            ].map((goal) => (
              <div key={goal.title} className="border-t border-[#FBBF24]/40 pt-5">
                <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
                <p className="text-gray-300 leading-relaxed">{goal.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-10">Esses são os objetivos do projeto. Os ganhos de desempenho devem ser avaliados em testes e validações.</p>
        </div>
      </section>

      <section id="equipe" aria-labelledby="equipe-titulo" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#FBBF24] mb-4">Quem está por trás</p>
        <h2 id="equipe-titulo" className="text-3xl md:text-4xl font-bold mb-5">Cinco estudantes. Um projeto em comum.</h2>
        <p className="text-gray-300 max-w-2xl leading-relaxed">Somos a equipe de desenvolvimento do SmartTraffic. Nosso trabalho reúne estudo e prática para explorar novas possibilidades no controle de trânsito.</p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mt-10">
          {members.map((member) => (
            <li key={member} className="rounded-2xl border border-white/10 bg-[#212123] p-6">
              <div aria-hidden="true" className="w-12 h-12 rounded-full bg-[#FBBF24]/10 text-[#FBBF24] flex items-center justify-center text-xl font-bold mb-5">{member.charAt(0)}</div>
              <h3 className="text-lg font-semibold">{member}</h3>
              <p className="text-sm text-gray-400 mt-2">Equipe de desenvolvimento</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
