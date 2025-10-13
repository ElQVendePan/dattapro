import type { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    icon?: ReactNode
    primary?: boolean
    className?: string
}

const Button: React.FC<ButtonProps> = ({ primary, icon, className, children }) => {
    return (
        <button className={`${className} p-4 rounded-xl w-full flex items-center justify-center gap-3 ${primary ? 'bg-primary text-white font-bold' : 'bg-neutral-100 font-semibold'}`}>
            {icon && <div className="w-6 h-6 flex-shrink-0">{icon}</div>}
            <span>{children}</span>
        </button>
    )
}

export default Button
