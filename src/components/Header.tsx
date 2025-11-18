import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

interface HeaderProps {
    title?: string;
    hasBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, hasBack = false }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 lg:left-[16%] w-full lg:w-[84%] px-5 lg:px-6 py-5 lg:pt-10 z-10 transition-all duration-300 ${scrolled ? "bg-bg-primary/80 backdrop-blur-lg" : "bg-transparent"}`}>
            <div className="flex items-center">
                {hasBack ? (
                    <>
                        <div className="w-10 h-10 flex items-center cursor-pointer shrink-0" onClick={() => window.history.back()}>
                            <IoChevronBack className="w-6 h-6" />
                        </div>
                        <div className="text-center mx-auto w-full">
                            <h1 className={`${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} text-sm font-bold duration-150`}>{title}</h1>
                        </div>
                    </>
                ) : <h1 className="text-xl lg:text-3xl font-bold">{title}</h1>}
                {/* <div className="ml-auto flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer shrink-0">
                        <FaBell className="w-1/2 h-1/2" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Header;
