import { type ReactNode } from 'react';

interface TextAreaProps {
    label?: string;
    placeholder: string;
    className?: string;
    icon?: ReactNode;
    [key: string]: any;
}

const TextArea = ({ label, placeholder, className = '', icon, ...props }: TextAreaProps) => {
    return (
        <div className="space-y-2 w-full relative">
            {label && (
                <label className="block font-medium ml-4">{label}</label>
            )}
            <div className={`bg-bg-secondary border-1 border-bg-third p-4 rounded-2xl flex items-start gap-3 ${className}`}>
                {icon && <div className="w-5 h-5 flex opacity-70 mt-1">{icon}</div>}
                <textarea placeholder={placeholder} className="bg-transparent outline-none flex-1 text-base resize-none w-full h-64" {...props} />
            </div>
        </div>
    );
};

export default TextArea;