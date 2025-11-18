import { FaCheck } from "react-icons/fa";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    isChecked?: boolean;
}

const CheckboxGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="mt-6 flex flex-col rounded-2xl border-1 border-bg-third divide-y-1 divide-bg-third overflow-hidden">
            {children}
        </div>
    );
};

const Checkbox: React.FC<CheckboxProps> = ({ children, isChecked, ...props }) => {
    return (
        <label className={`p-4 ${isChecked ? "bg-bg-third/40" : "bg-bg-secondary"} w-full flex gap-4 items-center duration-200`}>
            <span className={`w-5 h-5 rounded-md border-2 border-primary flex items-center justify-center duration-200 ${isChecked ? "bg-primary border-primary" : "bg-transparent"}`}>
                <FaCheck className={`w-4 h-4 duration-200 ${isChecked ? "opacity-100 scale-100 text-white" : "opacity-0 scale-0 text-transparent"}`} />
            </span>
            <input type="checkbox" {...props} className="hidden" />
            <span className={`${isChecked ? "opacity-100 font-semibold" : "opacity-60"} duration-200`}>
                {children}
            </span>
        </label>
    );
};

export { Checkbox, CheckboxGroup };