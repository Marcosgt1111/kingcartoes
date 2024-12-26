import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    const phoneNumber = '5512988039200';

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };

    return (
        <header className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{backgroundImage: "url('/images/header-bg.jpg')"}}>

            <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
                <div className="mt-3 md:absolute md:top-0 md:left-0 md:ml-4 md:mt-3">
                    <Link href="/">
                        <Image src="/images/logo.svg" alt="Logo" width={150} height={50} />
                    </Link>
                </div>

                <div className="text-header font-arima text-center mt-8 md:mt-16">
                    <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-black to-orange-800 bg-clip-text text-transparent text-red-500 py-5 drop-shadow-lg">
                        Uma apresentação completa <br /> com o cartão correto.
                    </h1>
                </div>

                <div className="mt-8 md:mt-16">
                    <Link href="">
                        <Image src="/images/cartaodevisita.png" alt="produtoking" width={430} height={50}
                               className="transition-transform duration-500 ease-in-out transform hover:scale-110" />
                    </Link>
                </div>

                <div className="mt-8 md:mt-16">
                    <button
                        onClick={handleClick}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    >
                        <span className="relative px-14 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Peça Já o seu!
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;