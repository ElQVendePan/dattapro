import type { ReactNode } from 'react';

interface InputProps {
    type?: string;
    icon?: ReactNode;
    label?: string;
    placeholder?: string;
}

const Input = ({ type, icon, label, placeholder }: InputProps) => {
    return (
        <div>
            {label && <label className='block mb-2 font-semibold'>{label}</label>}
            <div className='bg-neutral-100 p-4 rounded-xl flex items-center gap-4'>
                <div className='w-5 h-5 flex opacity-70'>
                    {icon}
                </div>
                <input type={type ? type : 'text'} placeholder={placeholder} className='bg-transparent outline-none flex-1' />
            </div>
        </div>
    );
};

export default Input;