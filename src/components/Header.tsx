import { FaRegBell } from "react-icons/fa";

const Header = ({ title }: { title: string }) => {
    return (
        <div className="relative">
            <h1 className="text-3xl font-bold absolute h-full flex items-center justify-center">{title}</h1>
            <div className="text-right">
                <div className="w-12 h-12 bg-bg-secondary items-center justify-center rounded-xl inline-flex">
                    <FaRegBell className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default Header;