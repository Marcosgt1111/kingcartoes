import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/data";

const stats = [
  { value: "500+", label: "Clientes atendidos" },
  { value: "48h", label: "Entrega rápida" },
  { value: "5★", label: "Avaliação média" },
];

const BusinessCardPreview = () => (
  <div className="relative mx-auto w-full max-w-[300px] lg:mr-0 rounded-xl border border-gold/20 bg-[linear-gradient(135deg,#1a1a1a,#111)] p-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.95)]">
    <span className="pointer-events-none absolute right-4 top-4 text-[9px] font-semibold tracking-[0.3em] text-gold/20">
      KING
    </span>

    <div className="flex items-center gap-2">
      <span className="h-[20px] w-[28px] rounded-sm bg-gold opacity-85" />
      <span className="text-[11px] text-white/50">Sua Empresa Ltda.</span>
    </div>

    <div className="mt-6">
      <p className="text-[15px] font-bold text-white">Nome do Cliente</p>
      <p className="text-[11px] text-white/35">Diretor Comercial</p>
    </div>

    <div className="mt-6 flex items-end justify-between gap-4">
      <div className="space-y-[3px] text-[10px] leading-relaxed text-white/40">
        <p>contato@suaempresa.com</p>
        <p>(12) 98803-9200</p>
        <p>www.suaempresa.com</p>
      </div>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-gold/30 text-center text-[6px] uppercase tracking-wide text-gold/60">
        QR Code
      </div>
    </div>
  </div>
);

const HeroSection = () => (
  <section id="inicio" className="relative overflow-hidden bg-ink">
    <Image
      src="/images/header-bg.jpg"
      alt="Leão rugindo ao entardecer — King of the Kings"
      fill
      priority
      sizes="100vw"
      className="object-cover object-[100%_center] lg:object-[88%_center]"
    />

    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,#0a0a0a_4%,rgba(10,10,10,0.96)_34%,rgba(10,10,10,0.62)_62%,rgba(10,10,10,0.28)_100%)]" />
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#0a0a0a_1%,rgba(10,10,10,0.45)_32%,rgba(10,10,10,0.2)_70%,rgba(10,10,10,0.55)_100%)]" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_5%,rgba(201,168,76,0.2),transparent_55%)]" />

    <div className="container-page relative flex min-h-[560px] flex-col items-start gap-12 py-16 md:py-20 lg:min-h-[620px] lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-24">
      <div className="w-full animate-fade-up lg:max-w-[560px]">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/[0.12] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold">
          ⭐ Melhor preço do Vale do Paraíba
        </span>

        <h1 className="mt-5 max-w-[520px] text-[clamp(28px,5vw,42px)] font-bold leading-[1.2] text-white">
          Sua marca com <em className="not-italic text-gold">presença</em> que
          impressiona
        </h1>

        <p className="mt-4 max-w-[400px] text-[14px] leading-relaxed text-white/50">
          Cartões de visita, banners, panfletos e muito mais. Impressão
          profissional com entrega rápida no Vale do Paraíba.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shadow-gold"
          >
            Pedir Orçamento
          </a>
          <a href="#produtos" className="btn-ghost">
            Ver Produtos
          </a>
        </div>

        <dl className="mt-4 grid max-w-md grid-cols-3 gap-4 border-t border-gold/25 pt-4 sm:flex sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[22px] font-bold leading-none text-gold">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-[10px] uppercase tracking-wide text-white/40">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="w-full lg:w-[320px] lg:shrink-0">
        <BusinessCardPreview />
      </div>
    </div>
  </section>
);

export default HeroSection;
