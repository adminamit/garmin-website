import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white border-b-2 border-headerBorderBottomColor px-5 py-5 flex justify-between items-center">
            <Link href="/">
                <Image
                    alt="default alt"
                    src={`/assets/images/logo.svg`}
                    width="160"
                    height="160"
                />
            </Link>
        </header>
    );
};

export default Header;
