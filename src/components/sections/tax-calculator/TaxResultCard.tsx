"use client";

import { TaxResultCardProps } from "@/types/tax";

export function TaxResultCard({ taxPayable = 0, effectiveRate = 0 }: TaxResultCardProps) {
    
    // Calculate Monthly Tax Liability
    const monthlyTax = taxPayable / 12;

    // Helper to format numbers with commas (e.g. 9,000,000)
    const formatNumber = (num: number) => {
        if (isNaN(num)) return "0";
        return new Intl.NumberFormat('en-NG', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(num);
    };

    return (
        <div className="sticky top-24 z-30 bg-linear-to-br from-[#001F3F]/90 to-[#003366]/90 backdrop-blur-md border border-white/10 text-white rounded-3xl py-6 pl-8 overflow-hidden lg:px-6 shadow-xl">
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-medium leading-12">₦</span>
                        <span className="leading-5">Annual Tax Liability</span>
                    </div>
                    
                    <div className="text-5xl font-bold leading-12 mb-2">
                        ₦{formatNumber(taxPayable)}
                    </div>
                </div>

                <div className="flex justify-between gap-4 w-full border-t border-[#E9E9E9]/20 pt-4.25 pr-8 pb-5 md:pb-0">
                    <div className="w-1/2">
                        <p className="text-xs mb-1 text-white leading-4">Monthly</p>
                        <p className="text-xl font-semibold leading-7">₦{formatNumber(monthlyTax)}</p>
                    </div>
                    <div className="w-1/2">
                        <p className="text-xs mb-1 text-white leading-4">Effective Rate</p>
                        <p className="text-xl font-semibold leading-7">{effectiveRate.toFixed(2)}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}