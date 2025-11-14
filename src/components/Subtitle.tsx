interface SubtitleProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, icon }) => {
    return (
        <div className="flex items-center gap-2 my-6">
            {icon && <div className='w-6 h-6 flex items-center justify-center text-primary'>{icon}</div>}
            <span className="font-medium">{children}</span>
        </div>
    )
}

export default Subtitle