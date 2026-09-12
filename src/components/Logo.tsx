import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: number;
  className?: string;
};

const Logo = ({ size = 28, className = "" }: LogoProps) => (
  <Link
    href="/"
    aria-label="King Cartões — página inicial"
    className={`group flex items-center gap-2 ${className}`}
  >
    <span
      className="flex shrink-0 items-center justify-center rounded-md border border-gold/25 bg-gold/[0.12] p-1 transition-colors duration-200 group-hover:border-gold/50"
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/logo.svg"
        alt="Coroa King of the Kings"
        width={size}
        height={size}
        priority
        className="h-full w-full object-contain"
      />
    </span>
    <span className="text-[13px] font-bold leading-none tracking-[0.14em]">
      <span className="text-white">KING</span>{" "}
      <span className="text-gold">CARTÕES</span>
    </span>
  </Link>
);

export default Logo;
