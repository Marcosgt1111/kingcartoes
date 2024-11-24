import Link from "next/link";
import Image from "next/image";

const Footer =  () => {
    return (
        <footer className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{backgroundImage: "url('/images/marking_background.jpg')"}}>

            <div className="mt-3 md:absolute md:top-16 md:right-0 md:mr-24 md:mt-3">
                <Link href="/">
                    <Image src="/images/marking_logo.svg" alt="Marking" width={350} height={150}/>
                </Link>
            </div>

            <div className="text-red-500">
                <ul>
                    <li>Desenvolvimento de Sites</li>
                    <li>Artes Digitais</li>
                    <li>Criação de logomarcas</li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer;