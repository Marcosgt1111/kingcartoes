import Link from "next/link";
import Logo from "@/components/Logo";

const productLinks = [
  { label: "Cartões de Visita", href: "#produtos" },
  { label: "Folhetos", href: "#produtos" },
  { label: "Banners", href: "#produtos" },
  { label: "Placas", href: "#produtos" },
];

const companyLinks = [
  { label: "Sobre nós", href: "#como-funciona" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => (
  <footer className="border-t border-white/[0.06] bg-deepest px-5 py-6 md:px-8 lg:px-16">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:gap-12">
        <div className="col-span-2 max-w-[180px] sm:col-span-1">
          <Logo />
          <p className="mt-3 text-[11px] leading-relaxed text-white/35">
            Impressão profissional no Vale do Paraíba desde 2019.
          </p>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-semibold tracking-wide text-white/60">
            Produtos
          </p>
          {productLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="mb-1 block text-[11px] text-white/35 transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <p className="mb-2 text-[11px] font-semibold tracking-wide text-white/60">
            Empresa
          </p>
          {companyLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="mb-1 block text-[11px] text-white/35 transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-4">
        <p className="text-[10px] text-white/35">
          © 2026 King Cartões. Todos os direitos reservados.
        </p>
        <p className="text-[10px] text-white/35">
          dev by <span className="font-semibold text-gold">Marking</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
