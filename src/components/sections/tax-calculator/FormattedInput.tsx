"use client";

import { ChangeEvent } from "react";
import { FormattedInputProps } from "@/types/tax";

export function FormattedInput({ label, value, onChange, isYear = false, prefix }: FormattedInputProps) {
    const id = label.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();

    // Format display value with commas
    const formatDisplay = (val: string | number | undefined) => {
        if (!val) return "";
        const strVal = val.toString().replace(/,/g, '');
        if (isNaN(Number(strVal))) return val.toString();
        if (isYear) return strVal;
        return strVal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Allow only numbers and commas
        const raw = e.target.value.replace(/[^0-9]/g, '');
        onChange?.(raw);
    };
    
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="text-sm font-medium leading-3.5 text-brand-black mb-2">{label}</label>
            <div className="relative">
                {prefix && (
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 mt-1 text-sm z-10 text-[#717182] pointer-events-none">
                        {prefix}
                    </span>
                )}
                <input
                    id={id}
                    type="text" 
                    inputMode="numeric"
                    value={formatDisplay(value)}
                    onChange={handleChange}
                    className={`w-full h-11.25 py-3.5 mt-1 bg-[#F3F3F5] lg:bg-[#FFFF] text-[#717182] lg:text-brand-black border border-[#E9E9E9] rounded-xl focus:outline-none focus:border-[#001F3F] ${prefix ? 'pl-9 pr-3' : 'px-3'}`}
                />
            </div>
        </div>
    );
}