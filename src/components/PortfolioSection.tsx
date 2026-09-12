import Image from "next/image";
import Reveal from "@/components/Reveal";
import { portfolio } from "@/lib/data";

const PortfolioSection = () => (
  <section id="portfolio" className="bg-ink pb-16 md:pb-20">
    <div className="container-page">
      <Reveal>
        <p className="section-label">Portfólio</p>
        <h2 className="section-title">Trabalhos que já saíram da gráfica</h2>
        <p className="section-subtitle">
          Uma amostra do que produzimos todos os dias para empresas do Vale.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {portfolio.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.05}>
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.07] bg-[radial-gradient(circle_at_50%_120%,rgba(201,168,76,0.1),#0f0f0f_70%)] transition-colors duration-200 hover:border-gold/30">
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 45vw, 30vw"
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.92),transparent)] px-3 pb-2 pt-6 text-[11px] text-white/60">
                {item.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
