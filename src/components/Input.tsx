import { useState, type ReactNode } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps {
    type?: string;
    icon?: ReactNode;
    label?: string;
    placeholder?: string;
}

const Input = ({ type, icon, label, placeholder }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)

    const isPassword = type === 'password'
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

    return (
        <div>
            {label && <label className='block mb-2 font-semibold'>{label}</label>}
            <div className='bg-neutral-100 p-4 rounded-xl flex items-center gap-4'>
                <div className='w-5 h-5 flex opacity-70'>
                    {icon}
                </div>
                <input type={inputType} placeholder={placeholder} className='bg-transparent outline-none flex-1' />
                {isPassword &&
                    <div className='opacity-30 w-5 h-5 cursor-pointer select-none' onClick={() => setShowPassword(prev => !prev)}>
                        {showPassword ? (
                            <FaEyeSlash className='w-full h-full' />
                        ) : (
                            <FaEye className='w-full h-full' />
                        )}
                    </div>
                }
            </div>
        </div>
    );
};

export default Input;