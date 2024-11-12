import Link from "next/link";
import Image from "next/image";


const Main = () => {
    return (
        <main className="bg-gradient-to-r from-amber-200 to-yellow-100">

            <div className="p-14">
                <h1 className="text-4xl font-bold  text-center text-black">
                    Confira nossos produtos
                </h1>
                <p className="text-2xl text-center mt-4">Melhor preço do Vale do Paraíba</p>
            </div>

            <div className="text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold leading-tight text-orange-700">
                    Cartões de Visita
                </h2>
                <p>á partir de <strong>R$ 80,00</strong></p>
                <div className="mt-4">
                    <Link href="">
                        <Image src="/images/cartao_cliente.png" alt="cartaodevisita" width={300} height={50}/>
                    </Link>
                </div>
            </div>

            <div className="text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold leading-tight text-orange-700">
                    Folhetos e Panfletos
                </h2>
                <p> Ideal para seu negocio </p>

                <div className="mt-4 mb-12">
                    <Link href="">
                        <Image src="/images/panfleto.png" alt="panfleto" width={300} height={50}/>
                    </Link>
                </div>
            </div>

            <div className="text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold leading-tight text-orange-700">
                    Banners
                </h2>
                <p> Divulge seus produtos </p>

                <div className="mt-4 mb-12">
                    <Link href="">
                        <Image src="/images/banner.png" alt="banner" width={300} height={50}/>
                    </Link>
                </div>
            </div>

            <div className="text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold leading-tight text-orange-700">
                    Placas
                </h2>
                <p> Uma fachada chamativa </p>

                <div className="mt-4 mb-12">
                    <Link href="">
                        <Image src="/images/placas.png" alt="placas" width={300} height={50}/>
                    </Link>
                </div>
            </div>

            <div className="text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold leading-tight text-orange-700">
                    Imãs de Geladeira
                </h2>
                <p> Seu cliente merece um brinde </p>

                <div className="mt-4 mb-12">
                    <Link href="">
                        <Image src="/images/ima.png" alt="ima" width={300} height={50}/>
                    </Link>
                </div>
            </div>

            <div className="text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold leading-tight text-orange-700">
                    Blocos e Talões
                </h2>
                <p> Organize seu negocio </p>

                <div className="mt-4 mb-12">
                    <Link href="">
                        <Image src="/images/talao.png" alt="talao" width={300} height={50}/>
                    </Link>
                </div>
            </div>

            <div className="text-center flex flex-col items-center">
                <p> Solicite seu Orçamento </p>
            </div>

        </main>
    );
};

export default Main;