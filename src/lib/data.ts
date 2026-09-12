export const WHATSAPP_NUMBER = "5512988039200";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vim pelo site da King Cartões e gostaria de um orçamento."
)}`;

export type Product = {
  icon: string;
  name: string;
  price: string;
  desc: string;
  image: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    icon: "🎴",
    name: "Cartão de Visita",
    price: "a partir de R$ 90",
    desc: "Verniz, fosco ou soft touch",
    image: "/images/cartao_cliente.png",
    featured: true,
  },
  {
    icon: "📄",
    name: "Folhetos",
    price: "a partir de R$ 350",
    desc: "Ideal para divulgação",
    image: "/images/panfleto.png",
    featured: false,
  },
  {
    icon: "🏳️",
    name: "Banners",
    price: "a partir de R$ 120",
    desc: "Lona, vinil ou tecido",
    image: "/images/banner.png",
    featured: false,
  },
  {
    icon: "🪧",
    name: "Placas",
    price: "a partir de R$ 50",
    desc: "Fachadas chamativas",
    image: "/images/placas.png",
    featured: false,
  },
  {
    icon: "🧲",
    name: "Imãs de Geladeira",
    price: "a partir de R$ 350",
    desc: "Brindes para clientes",
    image: "/images/ima.png",
    featured: false,
  },
  {
    icon: "📋",
    name: "Talões e Blocos",
    price: "a partir de R$ 280",
    desc: "Organize seu negócio",
    image: "/images/talao.png",
    featured: false,
  },
];

export type Step = {
  title: string;
  desc: string;
};

export const steps: Step[] = [
  {
    title: "Solicite o orçamento",
    desc: "Fale conosco pelo WhatsApp ou formulário. Sem compromisso.",
  },
  {
    title: "Aprovação da arte",
    desc: "Nossa equipe cria ou ajusta o layout do seu material.",
  },
  {
    title: "Produção e entrega",
    desc: "Imprimimos com qualidade e entregamos em até 48h.",
  },
];

export type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    initials: "AS",
    name: "Ana Silva",
    role: "Consultora de Beleza",
    quote:
      "Qualidade incrível! Os cartões ficaram perfeitos e chegaram antes do prazo.",
  },
  {
    initials: "RM",
    name: "Rafael Mendes",
    role: "Fotógrafo",
    quote:
      "Atendimento rápido e profissional. Recomendo para qualquer empresa.",
  },
];

export type PortfolioItem = {
  label: string;
  image: string;
};

export const portfolio: PortfolioItem[] = [
  { label: "Cartões de visita", image: "/images/cartaodevisita.png" },
  { label: "Wind banner", image: "/images/windbanner.png" },
  { label: "Banners em lona", image: "/images/banner.png" },
  { label: "Panfletos", image: "/images/panfleto.png" },
  { label: "Placas e fachadas", image: "/images/placas.png" },
  { label: "Talões e blocos", image: "/images/talao.png" },
];

export const navLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];
