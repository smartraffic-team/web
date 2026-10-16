export const Hero = () => {
  return (
    <section className="relative isolate min-h-[292px] overflow-hidden border-b border-white/10 bg-[#181C2B] sm:min-h-[625px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[78%_center] sm:object-center"
        aria-label="Demonstração animada do sistema SmartTraffic"
      >
        <source src="/hero-section-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#181C2B]/95 via-[#181C2B]/55 to-transparent sm:bg-gradient-to-r sm:from-[#181C2B]/90 sm:via-[#181C2B]/35 sm:to-transparent" />

      <div className="relative mx-auto flex min-h-[292px] max-w-[1600px] items-start px-5 pt-[67px] sm:min-h-[625px] sm:px-14 sm:pt-[125px] lg:px-[7%]">
        <div className="relative z-10 max-w-[68vw] sm:max-w-[800px]">
          <h1 className="whitespace-normal font-title text-[1.12rem] font-normal leading-[1.14] tracking-tight text-white sm:whitespace-nowrap sm:text-5xl lg:text-[3.45rem]">
            Chega de <span className="text-[#FBC117]">esperar</span>
            <br />
            <span className="text-[#FBC117]">à toa</span> no sinal.
          </h1>

          <img
            src="/linha-hero-section.svg"
            alt=""
            aria-hidden="true"
            className="relative z-20 mt-3 h-auto w-[min(80vw,580px)] sm:mt-5 sm:w-[min(48vw,580px)]"
          />

          <p className="mt-3 max-w-[62vw] text-[0.62rem] leading-[1.35] text-white sm:mt-5 sm:max-w-[540px] sm:text-lg">
            Menos filas, mais fluidez. O SmartTraffic adapta os sinais à
            necessidade real da estrada!
          </p>

          <a
            href="#como-funciona"
            className="mt-4 inline-flex items-center rounded-full bg-[#FBC117] px-4 py-2 text-[0.62rem] font-medium text-[#181C2B] shadow-lg shadow-[#FBC117]/25 transition hover:bg-[#F59E0B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBC117] sm:mt-7 sm:px-6 sm:py-3 sm:text-base"
          >
            Conhecer Projeto
          </a>
        </div>
      </div>
    </section>
  )
}
