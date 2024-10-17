import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <div>
                <Link
                    href="/">
                        <Image src="/images/logo.svg" alt="Logo" width={150} height={50}/>
                </Link>
            </div>

            <div className="text-header">
                <h1 className="text-4xl font-bold text-red-600">Uma apresentação completa <br/> com o cartão correto.</h1>
            </div>
        </header>
    );
};

export default Header;