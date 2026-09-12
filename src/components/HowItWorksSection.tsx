import Reveal from "@/components/Reveal";
import { steps } from "@/lib/data";

const HowItWorksSection = () => (
  <section id="como-funciona" className="bg-ink py-16 md:py-20">
    <div className="container-page">
      <Reveal>
        <p className="section-label">Como funciona</p>
        <h2 className="section-title">Simples do orçamento à entrega</h2>
        <p className="section-subtitle">
          Três passos para colocar sua marca na rua com qualidade profissional.
        </p>
      </Reveal>

      <ol className="mt-8 max-w-xl">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <li className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.12] text-[11px] font-bold text-gold">
                  {index + 1}
                </span>
                {index < steps.length - 1 && (
                  <span className="w-px flex-1 bg-gold/15" aria-hidden />
                )}
              </div>

              <div className={index < steps.length - 1 ? "pb-8" : ""}>
                <h3 className="text-[14px] font-semibold leading-7 text-white">
                  {step.title}
                </h3>
                <p className="mt-1 max-w-sm text-[12px] leading-relaxed text-white/45">
                  {step.desc}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorksSection;
