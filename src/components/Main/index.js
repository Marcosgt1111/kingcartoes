import Link from "next/link";
import Image from "next/image";


const Main = () => {
    return (
        <main className="bg-gradient-to-r from-amber-200 to-yellow-100">

            <div className="p-14">
                <h1 className="text-4xl font-bold text-amber-950 text-center text-white">
                    Confira nossos produtos
                </h1>
                <p className="text-2xl text-center mt-4">Melhor preço do Vale do Paraíba</p>
            </div>

            <div>
                <h2 className="text-xl font-bold leading-tight text-orange-700">
                    Cartões de Visita
                </h2>
                <p> á partir de <strong>R$ 80,00</strong></p>
                <div>
                    <Link href="">
                        <Image src="/images/cartao_cliente.png" alt="produto" width={500} height={50}/>
                    </Link>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold leading-tight text-orange-700">
                    Folhetos e Panfletos
                </h2>
                <p> Ideal para seu negocio </p>
            </div>

            <div>
                <h2 className="text-xl font-bold leading-tight text-orange-700">
                    Banners
                </h2>
                <p> Convidar a clientela </p>
            </div>

            <div>
                <h2 className="text-xl font-bold leading-tight text-orange-700">
                    Placas
                </h2>
                <p> Uma fachada chamativa </p>
            </div>

            <div>
                <h2 className="text-xl font-bold leading-tight text-orange-700">
                    Imãs de Geladeira
                </h2>
                <p> Seu cliente merece um brinde </p>
            </div>

            <div>
                <h2 className="text-xl font-bold leading-tight text-orange-700">
                    Blocos e Talões
                </h2>
                <p> Controlar seu negocio </p>
            </div>

            <div>
                <p> Faça já seu Orçamento </p>
            </div>

        </main>
    );
};

export default Main;