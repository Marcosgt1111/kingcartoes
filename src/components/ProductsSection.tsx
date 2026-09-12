import Image from "next/image";
import Reveal from "@/components/Reveal";
import { products, WHATSAPP_URL } from "@/lib/data";

const ProductsSection = () => (
  <section id="produtos" className="bg-subtle py-16 md:py-20">
    <div className="container-page">
      <Reveal>
        <p className="section-label">Nossos produtos</p>
        <h2 className="section-title">Tudo que sua marca precisa</h2>
        <p className="section-subtitle">
          Impressão de alta qualidade com os melhores preços da região.
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {products.map((product, index) => (
          <Reveal key={product.name} delay={index * 0.05}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex h-full cursor-pointer flex-col rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-[#191919] ${
                product.featured
                  ? "border-gold/25 bg-[linear-gradient(135deg,#181408,#141414)]"
                  : "border-white/[0.07] bg-surface"
              }`}
            >
              {product.featured && (
                <span className="absolute right-3 top-3 z-10 rounded-full bg-gold/[0.12] px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-gold">
                  Popular
                </span>
              )}

              <div className="relative mb-3 aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/[0.05] bg-[radial-gradient(circle_at_50%_120%,rgba(201,168,76,0.12),#0f0f0f_70%)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 45vw, 30vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-2 top-2 text-[14px]" aria-hidden>
                  {product.icon}
                </span>
              </div>

              <h3 className="text-[13px] font-semibold text-white">
                {product.name}
              </h3>
              <p className="mt-0.5 text-[11px] text-gold">{product.price}</p>
              <p className="mt-1 text-[11px] text-white/35">{product.desc}</p>

              <span
                className="mt-auto pt-3 text-right text-[13px] text-gold/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-gold"
                aria-hidden
              >
                →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
