export const QuestionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <p className="font-medium mb-6">{children}</p>
    )
}

const Question: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="mt-10 pt-10 border-t-2 border-bg-third">
            {children}
        </div>
    )
}

export default Question