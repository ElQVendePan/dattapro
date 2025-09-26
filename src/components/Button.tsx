interface ButtonProps {
    text: string;
    primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, primary }) => {
    return (
        <button className={`p-3 rounded-full w-full ${primary ? 'bg-primary text-white font-bold' : 'bg-neutral-100 font-semibold'}`}>
            {text}
        </button>
    );
}

export default Button
