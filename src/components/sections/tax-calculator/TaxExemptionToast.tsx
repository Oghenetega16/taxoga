"use client";

import { X, Info } from "lucide-react";
import { TaxExemptionToastProps } from "@/types/tax";

export function TaxExemptionToast({ show, onClose, threshold }: TaxExemptionToastProps) {
    if (!show) return null;
    
    return (
        <div className="fixed top-5 right-5 z-100 flex items-start gap-3 bg-white border border-[#E9E9E9] shadow-lg rounded-xl p-4 max-w-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="bg-brand-blue/10 p-2 rounded-full shrink-0">
                <Info className="w-5 h-5 text-brand-blue" />
            </div>
            <div className="flex-1 pt-1">
                <p className="text-sm font-medium text-brand-black leading-5">Tax Exemption Notice</p>
                <p className="text-sm text-[#717171] leading-5 mt-1">
                    Your total sales/revenue is less than {threshold}, making you tax exempt.
                </p>
            </div>
            <button onClick={onClose} className="cursor-pointer text-[#717171] hover:text-brand-black transition-colors" aria-label="Close notification">
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}