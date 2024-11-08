import Link from "next/link";
import Image from "next/image";


const Main = () => {
    return (
        <main className="bg-gradient-to-r from-yellow-500 to-orange-900">
            <div>
                <h1 className="text-xl font-bold leading-tight text-orange-700">
                    Cartões de Visita
                </h1>
                <p> á partir de R$ 80,00 </p>
                <div>
                    <Link href="">
                        <Image src="/images/cartao_cliente.png" alt="produto" width={500} height={50}/>
                    </Link>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-bold leading-tight text-orange-700">
                    Folhetos e Panfletos
                </h1>
                <p> Ideal para seu negocio </p>
            </div>

            <div>
                <h1 className="text-xl font-bold leading-tight text-orange-700">
                    Banners
                </h1>
                <p> Convidar a clientela </p>
            </div>

            <div>
                <h1 className="text-xl font-bold leading-tight text-orange-700">
                    Placas
                </h1>
                <p> Uma fachada chamativa </p>
            </div>

            <div>
                <h1 className="text-xl font-bold leading-tight text-orange-700">
                    Imãs de Geladeira
                </h1>
                <p> Seu cliente merece um brinde </p>
            </div>

            <div>
                <h1 className="text-xl font-bold leading-tight text-orange-700">
                    Blocos e Talões
                </h1>
                <p> Controlar seu negocio </p>
            </div>

            <div>
                <p> Faça já seu Orçamento </p>
            </div>

        </main>
    );
};

export default Main;