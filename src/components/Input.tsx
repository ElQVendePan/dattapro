import { useState, type ReactNode } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps {
    type?: string;
    icon?: ReactNode;
    label: string;
    placeholder: string;
    className?: string;
    [key: string]: any;
}

const Input = ({type = 'text', icon, label, placeholder, className = '', ...props}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
        <div className="space-y-2 w-full relative">
            {label && (
                <label className="block font-medium ml-4">{label}</label>
            )}
            <div className={`bg-bg-third border-2 border-bg-third p-4 rounded-full flex items-center gap-3 ${className}`}>
                {icon && <div className="w-5 h-5 flex opacity-70">{icon}</div>}
                <input type={inputType} placeholder={placeholder} className="bg-transparent outline-none flex-1 text-base" {...props} />
                {isPassword && (
                    <div className="opacity-40 w-5 h-5 cursor-pointer select-none" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (
                            <FaEyeSlash className="w-full h-full" />
                        ) : (
                            <FaEye className="w-full h-full" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;