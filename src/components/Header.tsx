import { FaRegBell } from "react-icons/fa";

const Header = ({ title }: { title: string }) => {
    return (
        <div className="relative">
            <h1 className="text-2xl lg:text-3xl font-bold absolute h-full flex items-center justify-center">{title}</h1>
            <div className="text-right">
                <div className="w-10 h-10 lg:w-12 lg:h-12 active:bg-bg-secondary items-center justify-center rounded-xl inline-flex duration-200 ">
                    <FaRegBell className="w-[50%] h-[50%]" />
                </div>
            </div>
        </div>
    );
};

export default Header;