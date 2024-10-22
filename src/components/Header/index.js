import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="relative bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: "url('/images/header-bg.jpg')" }}>

            <div className="absolute top-0 left-0 ml-4 mt-3">
                <Link
                    href="/">
                        <Image src="/images/logo.svg" alt="Logo" width={150} height={50}/>
                </Link>
            </div>

            <div className="text-header">
                <h1 className="text-6xl font-bold text-red-50 text-center py-5 drop-shadow-lg ">Uma apresentação completa <br/> com o cartão correto.</h1>
            </div>

            <div className="">
                <Link
                    href="/">
                        <Image src="/images/cartaodevisita.png" alt="produto" width={150} height={50}/>
                </Link>
            </div>
        </header>


    );
};

export default Header;