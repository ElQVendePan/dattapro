import { useState } from "react";
import { Controller, type Control } from "react-hook-form";

type LanguageSliderProps = {
    name: string;
    control: Control<any>;
    label: string;
    niveles: string[];
};

const LanguageSlider = ({ name, control, label, niveles }: LanguageSliderProps) => {
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="mb-10">
            <label className="font-semibold text-sm opacity-90">{label}</label>
            <Controller name={name} control={control} defaultValue={3} render={({ field }) => {const max = niveles.length - 1; const percentage = (field.value / max) * 100;
                    return (
                        <div className="mt-5">
                            <div className="relative w-full h-5 select-none">
                                <div className="absolute inset-y-1/2 -translate-y-1/2 h-1 w-full rounded-full bg-bg-third" />
                                <div className="absolute inset-y-1/2 -translate-y-1/2 h-1 rounded-full bg-primary duration-300 ease-out" style={{ width: `${percentage}%` }} />
                                <div className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary border-2 border-bg-third duration-300 ease-out transform -translate-x-1/2 pointer-events-none ${isDragging ? "scale-150" : ""}`} style={{ left: `${percentage}%` }}/>
                                <input type="range" min={0} max={max} value={field.value} onChange={(e) => field.onChange(Number(e.target.value))} onMouseDown={() => setIsDragging(true)} onMouseUp={() => setIsDragging(false)} onTouchStart={() => setIsDragging(true)} onTouchEnd={() => setIsDragging(false)} className="absolute w-full h-full opacity-0 cursor-pointer"/>
                            </div>
                            <div className="flex justify-between text-[11px] mt-3 opacity-85">
                                {niveles.map((nivel, i) => (
                                    <span
                                        key={i}
                                        className={`transition-opacity duration-200 ${field.value === i ? "text-primary opacity-100 font-semibold" : "text-white opacity-50"}`}>
                                        {nivel}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                }}
            />
        </div>
    );
};

export default LanguageSlider;