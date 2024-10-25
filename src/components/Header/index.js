import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{backgroundImage: "url('/images/header-bg.jpg')"}}>

            <div className="absolute top-0 left-0 ml-4 mt-3">
                <Link
                    href="/">
                    <Image src="/images/logo.svg" alt="Logo" width={150} height={50}/>
                </Link>
            </div>

            <div className="text-header font-arima">
                <h1 className="text-6xl font-bold text-red-500 text-center py-5 drop-shadow-lg ">Uma apresentação
                    completa <br/> com o cartão correto.</h1>
            </div>

            <div className= "absolute bottom-48 left-16 ml-96">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Peça Já o seu!
                    </span>
                </button>
            </div>

            <div className="flex justify-center items-center min-h-screen">
                <Link
                    href="">
                    <Image src="/images/cartaodevisita.png" alt="produto" width={500} height={50}
                           className="mt-60 transition-transform duration-500 ease-in-out transform hover:scale-110"/>
                </Link>
            </div>


        </header>


    );
};

export default Header;