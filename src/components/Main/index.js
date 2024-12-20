"use client";

import Link from "next/link";
import Image from "next/image";
import Scrolltriggered from "@/components/Scrolltriggered";



const Main = () => {
    return (
        <main className="bg-gradient-to-r from-amber-200 to-yellow-100">
            <div className="p-14">
                <h1 className="text-4xl font-bold text-center text-black">
                    Confira nossos produtos
                </h1>
                <p className="text-2xl text-center mt-4">Melhor preço do Vale do Paraíba</p>
            </div>

            <div className="flex flex-col items-center">
                <Scrolltriggered>
                    <section className="flex flex-row items-center justify-center gap-8" suppressHydrationWarning>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold leading-tight text-orange-700">
                                Cartões de Visita
                            </h2>
                            <p>á partir de <strong>R$ 80,00</strong></p>
                        </div>
                        <div className="mt-4">
                            <Link href="">
                                <Image src="/images/cartao_cliente.png" alt="cartaodevisita" width={300} height={50} />
                            </Link>
                        </div>
                    </section>
                </Scrolltriggered>

                <Scrolltriggered>
                    <section className="flex flex-row items-center justify-center gap-8 mt-8" suppressHydrationWarning>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold leading-tight text-orange-700">
                                Folhetos e Panfletos
                            </h2>
                            <p> Ideal para seu negocio </p>
                            <p>á partir de <strong>R$ 80,00</strong></p>
                        </div>
                        <div className="mt-4 mb-12">
                            <Link href="">
                                <Image src="/images/panfleto.png" alt="panfleto" width={300} height={50} />
                            </Link>
                        </div>
                    </section>
                </Scrolltriggered>

                <Scrolltriggered>
                    <section className="flex flex-row items-center justify-center gap-8 mt-8" suppressHydrationWarning>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold leading-tight text-orange-700">
                                Banners
                            </h2>
                            <p> Divulge seus produtos </p>
                            <p>á partir de <strong>R$ 80,00</strong></p>
                        </div>
                        <div className="mt-4 mb-12">
                            <Link href="">
                                <Image src="/images/banner.png" alt="banner" width={300} height={50} />
                            </Link>
                        </div>
                    </section>
                </Scrolltriggered>

                <Scrolltriggered>
                    <section className="flex flex-row items-center justify-center gap-8 mt-8" suppressHydrationWarning>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold leading-tight text-orange-700">
                                Placas
                            </h2>
                            <p> Uma fachada chamativa </p>
                            <p>á partir de <strong>R$ 80,00</strong></p>
                        </div>
                        <div className="mt-4 mb-12">
                            <Link href="">
                                <Image src="/images/placas.png" alt="placas" width={300} height={50} />
                            </Link>
                        </div>
                    </section>
                </Scrolltriggered>

                <Scrolltriggered>
                <section className="flex flex-row items-center justify-center gap-8 mt-8" suppressHydrationWarning>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold leading-tight text-orange-700">
                            Imãs de Geladeira
                        </h2>
                        <p> Seu cliente merece um brinde </p>
                        <p>á partir de <strong>R$ 80,00</strong></p>
                    </div>
                    <div className="mt-4 mb-12">
                        <Link href="">
                            <Image src="/images/ima.png" alt="ima" width={300} height={50} />
                        </Link>
                    </div>
                </section>
                </Scrolltriggered>

                <Scrolltriggered>
                    <section className="flex flex-row items-center justify-center gap-8 mt-8" suppressHydrationWarning>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold leading-tight text-orange-700">
                                Blocos e Talões
                            </h2>
                            <p> Organize seu negocio </p>
                            <p>á partir de <strong>R$ 80,00</strong></p>
                        </div>
                        <div className="mt-4 mb-12">
                            <Link href="">
                                <Image src="/images/talao.png" alt="talao" width={300} height={50} />
                            </Link>
                        </div>
                    </section>
                </Scrolltriggered>
            </div>

            <div className="flex flex-row items-center justify-center mt-8 md:mt-16">
                <button
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span
              className="relative px-14 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Solicite seu Orçamento
          </span>
                </button>
            </div>
        </main>
    );
};

export default Main;