import type { ButtonHTMLAttributes, ReactNode } from 'react'
import React from 'react'
import { FaLock } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    icon?: ReactNode
    primary?: boolean
    className?: string
    iconRight?: boolean
}

const Button: React.FC<ButtonProps> = ({children, icon, primary = false, className = '', iconRight = false, onClick, disabled, ...props}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`p-4 relative rounded-full flex items-center justify-center gap-4 duration-200 ${primary && !disabled ? 'bg-primary text-white font-bold' : 'bg-bg-secondary font-semibold select-none'} ${disabled ? 'opacity-50 cursor-not-allowed bg-bg-secondary' : 'active:scale-[0.98] active:brightness-110'} ${className}`} {...props}>
            {disabled && <span className="w-4 h-4 flex-shrink-0"><FaLock className='w-full h-full' /></span>}
            {icon && !iconRight && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
            {children}
            {icon && iconRight && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
        </button>
    )
}

export default Button
