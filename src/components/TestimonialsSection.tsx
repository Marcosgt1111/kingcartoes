import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/data";

const TestimonialsSection = () => (
  <section id="depoimentos" className="bg-subtle py-16 md:py-20">
    <div className="container-page">
      <Reveal>
        <p className="section-label">Depoimentos</p>
        <h2 className="section-title">Quem imprime com a gente, volta</h2>
        <p className="section-subtitle">
          A confiança de quem já colocou a própria marca nas nossas mãos.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.08} className="flex-1">
            <figure className="h-full rounded-xl border border-white/[0.06] bg-surface p-4">
              <span className="text-[12px] tracking-widest text-gold" aria-label="5 de 5 estrelas">
                ★★★★★
              </span>

              <blockquote className="mt-3 text-[13px] italic leading-[1.7] text-white/50">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-4 flex items-center gap-2.5">
                <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-gold/[0.12] text-[10px] font-bold text-gold">
                  {testimonial.initials}
                </span>
                <span>
                  <span className="block text-[12px] font-bold text-white">
                    {testimonial.name}
                  </span>
                  <span className="block text-[11px] text-white/35">
                    {testimonial.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
