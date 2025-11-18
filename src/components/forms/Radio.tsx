interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    isChecked?: boolean; // Added isChecked property
}

const RadioGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="mt-6 flex flex-col rounded-2xl border-1 border-bg-third divide-y-1 divide-bg-third overflow-hidden">
            {children}
        </div>
    );
}

const Radio: React.FC<RadioProps> = ({ children, isChecked, ...props }) => {
    return (
        <label className={`p-4 ${isChecked ? "bg-bg-third/40" : "bg-bg-secondary"} w-full flex gap-4 items-center duration-200`}>
            <span className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                <span className={`w-3 h-3 rounded-full bg-primary ${isChecked ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-200`}></span>
            </span>
            <input type="radio" {...props} className="hidden" />
            <span className={`${isChecked ? "opacity-100 font-semibold" : "opacity-60"} duration-200`}>{children}</span>
        </label>
    );
};

export { Radio, RadioGroup };