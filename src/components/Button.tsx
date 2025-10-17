import type { ButtonHTMLAttributes, ReactNode } from 'react'
import React from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    icon?: ReactNode
    primary?: boolean
    className?: string
}

const Button: React.FC<ButtonProps> = ({children, icon, primary = false, className = '', onClick, ...props}) => {
    return (
        <button
            onClick={onClick}
            className={`p-4 rounded-xl w-full flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.96] active:brightness-110 ${primary ? 'bg-primary text-white font-bold' : 'bg-neutral-100 font-semibold select-none'} ${className}`} {...props}>
            {icon && <span className="w-6 h-6 flex-shrink-0">{icon}</span>}
            <span>{children}</span>
        </button>
    )
}

export default Button