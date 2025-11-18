interface SubtitleProps {
    children: React.ReactNode;
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
    return (
        <div className="mt-10 pt-10 border-t-2 border-bg-third">
            <h2 className="font-bold">{children}</h2>
        </div>
    )
}

export default Subtitle