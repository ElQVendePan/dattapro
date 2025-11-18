import type { JSX } from "react";

export const ProfileInfoItem = ({ icon, label, value, breakWord = false }: { icon: JSX.Element; label: string; value: string | undefined; breakWord?: boolean }) => {
    return (
        <li className="flex items-start gap-4">
            <span className="mt-1 text-primary text-xl">
                {icon}
            </span>
            <div>
                <p className="text-sm opacity-40">{label}</p>
                <p className={`font-medium opacity-80 ${breakWord ? 'break-all' : ''}`}>
                    {value}
                </p>
            </div>
        </li>
    );
};