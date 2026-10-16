export const Hero = () => {
  return (
    <section className="relative isolate min-h-[625px] overflow-hidden border-b border-white/10 bg-[#181C2B]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        aria-label="Demonstração animada do sistema SmartTraffic"
      >
        <source src="/hero-section-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#181C2B]/90 via-[#181C2B]/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[625px] max-w-[1600px] items-start px-8 pt-[125px] sm:px-14 lg:px-[7%]">
        <div className="relative z-10 max-w-[800px]">
          <h1 className="whitespace-nowrap font-title text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.45rem]">
            Chega de <span className="text-[#FBC117]">esperar</span>
            <br />
            <span className="text-[#FBC117]">à toa</span> no sinal.
          </h1>

          <div aria-hidden="true" className="relative z-20 mt-5 h-1 w-[min(48vw,580px)] rounded-full bg-[#FBC117]" />

          <p className="mt-5 max-w-[540px] text-base leading-relaxed text-white sm:text-lg">
            Menos filas, mais fluidez. O SmartTraffic adapta os sinais à
            necessidade real da estrada!
          </p>

          <a
            href="#como-funciona"
            className="mt-7 inline-flex items-center rounded-full bg-[#FBC117] px-6 py-3 text-base font-medium text-[#181C2B] shadow-lg shadow-[#FBC117]/25 transition hover:bg-[#F59E0B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBC117]"
          >
            Conhecer Projeto
          </a>
        </div>
      </div>
    </section>
  )
}
