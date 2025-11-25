import { useEffect, useState } from "react";
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
        <div className={`fixed top-0 left-0 w-full p-5 z-10 backdrop-blur-xl duration-200 ${scrolled ? "bg-bg-primary/25" : "bg-transparent"}`}>
            <div className="flex items-center h-9">
                {hasBack ? (
                    <div className="w-10 h-10 flex items-center cursor-pointer shrink-0" onClick={() => window.history.back()}>
                        <IoChevronBack className="w-6 h-6" />
                    </div>
                ) : (
                    <div className="h-full aspect-square flex items-center cursor-pointer shrink-0" onClick={() => window.history.back()}>
                        <img src="/dattapro-icon-white.svg" className="h-5/6" alt="" />
                    </div>
                )}
                <div className="text-center mx-auto w-full">
                    <h1 className={`${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} text-sm font-bold duration-150`}>{title}</h1>
                </div>
                <div className="h-full flex items-center cursor-pointer rounded-full overflow-hidden shrink-0" onClick={() => window.history.back()}>
                    <img src="https://this-person-does-not-exist.com/img/avatar-gen5ba2b421272a56fe90adff789a2753e1.jpg" className="h-full w-full object-cover" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
