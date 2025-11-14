import type { ButtonHTMLAttributes, ReactNode } from 'react'
import React from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    icon?: ReactNode
    primary?: boolean
    className?: string
    iconRight?: boolean
}

const Button: React.FC<ButtonProps> = ({children, icon, primary = false, className = '', iconRight = false, onClick, ...props}) => {
    return (
        <button
            onClick={onClick}
            className={`p-4 relative rounded-full flex items-center justify-center gap-3 transition-all duration-100 active:scale-[0.98] active:brightness-110 ${primary ? 'bg-primary text-white font-bold' : 'bg-bg-secondary font-semibold select-none'} ${className}`} {...props}>
            {icon && !iconRight && <span className="w-6 h-6 flex-shrink-0">{icon}</span>}
            {children}
            {icon && iconRight && <span className="w-6 h-6 flex-shrink-0">{icon}</span>}
        </button>
    )
}

export default Button