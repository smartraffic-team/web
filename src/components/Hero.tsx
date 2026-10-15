import camera from '../../imgs/MOCKUP CAMERA.png'

export const Hero = () => {
  return (
    <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto">
      {/* ALTERAÇÃO 1 & 3: Mudança na grid para texto ter mais espaço e centralização vertical */}
      <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
        
        {/* Coluna de Texto (Esquerda) */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#FBC117]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#FBC117] rounded-full animate-pulse"></span>
            <span className="text-[#FBC117] text-sm font-medium">Projeto acadêmico • Tecnologia e mobilidade</span>
          </div>
          
          <h1 className="font-title text-5xl md:text-7xl font-bold leading-tight mb-6">
            Smart<span className="text-[#FBC117]">Traffic</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
            E se o semáforo acompanhasse o ritmo da sua via? Nossa proposta combina
            visão computacional e controle adaptativo para ajustar o tempo do sinal
            à demanda de veículos e ao tempo de espera.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#como-funciona" className="bg-[#FBC117] hover:bg-[#F59E0B] text-[#181C2B] font-semibold px-6 py-3 rounded-xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBC117]">
              Conheça a solução →
            </a>
            <a href="#equipe" className="border border-gray-600 hover:border-[#FBC117] text-gray-300 px-6 py-3 rounded-xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBC117]">
              Nossa equipe
            </a>
          </div>
        </div>
        
        {/* Coluna da Imagem (Direita) */}
        <figure className="overflow-hidden rounded-3xl border border-white/10 bg-[#1E2436] shadow-2xl">
          {/* ALTERAÇÃO 2: Removido w-full, adicionado h-auto e mx-auto para a imagem não esticar horizontalmente */}
          <img 
            src={camera} 
            alt="Mockup de câmera SmartTraffic em azul-escuro com detalhes amarelos e a marca na lateral" 
            width="1805" 
            height="2167" 
            fetchPriority="high" 
            className="h-auto max-h-[520px] object-contain bg-white mx-auto block" 
          />
          <figcaption className="px-6 py-5 border-t border-white/5">
            <p className="text-sm font-semibold text-[#FBC117]">Visão computacional a serviço da mobilidade</p>
            <p className="text-sm text-gray-300 mt-2">Representação conceitual da câmera com a identidade visual do projeto.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}