import Link from "next/link";
import Image from "next/image";
import Form from "@/components/Form";

const Footer =  () => {
    return (
        <footer className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{backgroundImage: "url('/images/marking_background.jpg')"}}>

            <div className="mt-3 md:absolute md:top-16 md:right-0 md:mr-24 md:mt-3">
                <Link href="/">
                    <Image src="/images/marking_logo.svg" alt="Marking" width={350} height={150}/>
                </Link>
            </div>

            <div className="text-2xl pt-24 ml-24 font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent text-red-500 drop-shadow-lg">
                <h2 className="text-4xl">
                    <strong>Desenvolvimento</strong> de sites, <br />artes gráficas e digitais.
                </h2>

                <p className="text-2xl mt-4">Quer transformar suas ideias em algo impactante para seu trabalho, <br />ou sua empressa. Aqui temos a solução para você. </p>
            </div>

            <Form />

        </footer>
    )
}

export default Footer;