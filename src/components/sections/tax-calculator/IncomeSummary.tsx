"use client";

import { IncomeSummaryProps } from "@/types/tax";

export function IncomeSummary({ 
    grossIncome = 0, 
    taxableIncome = 0, 
    taxPayable = 0, 
    netIncome = 0 
}: IncomeSummaryProps) {

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-NG', { 
            style: 'currency', 
            currency: 'NGN', 
            minimumFractionDigits: 0,
            maximumFractionDigits: 0 
        }).format(amount);
    };

    const deductions = grossIncome - taxableIncome;

    return (
        <div className="bg-white rounded-3xl p-6 shadow-2xs border border-[#0000001A]">
            <h3 className="text-2xl leading-4 font-bold text-brand-black mb-7.5">Income Summary</h3>
            
            <div className="space-y-4 text-sm">
                
                {/* Gross Income */}
                <div className="flex justify-between">
                    <span className="text-[#717171] leading-6">Gross Income</span>
                    <span className="leading-6 text-[#000000] font-medium">{formatCurrency(grossIncome)}</span>
                </div>

                {/* Deductions */}
                <div className="flex justify-between">
                    <span className="text-[#717171] leading-6">Deductions</span>
                    <span className="leading-6 text-[#00A63E] font-medium">
                        {deductions > 0 ? "-" : ""}{formatCurrency(deductions)}
                    </span>
                </div>

                <div className="h-px bg-gray-100 my-2" />

                {/* Taxable Income */}
                <div className="flex justify-between">
                    <span className="text-[#717171] leading-6">Taxable Income</span>
                    <span className="leading-6 text-[#000000] font-medium">{formatCurrency(taxableIncome)}</span>
                </div>

                {/* Tax Payable */}
                <div className="flex justify-between">
                    <span className="text-[#717171] leading-6">Tax Payable</span>
                    <span className="leading-6 text-[#C90000] font-medium">
                        {taxPayable > 0 ? "-" : ""}{formatCurrency(taxPayable)}
                    </span>
                </div>

                <div className="h-px bg-gray-100 my-2" />

                {/* Net Income */}
                <div className="flex justify-between items-center">
                    <span className="text-lg leading-7 text-[#717171]">Net Income</span>
                    <span className="font-bold text-2xl leading-8 text-brand-blue">{formatCurrency(netIncome)}</span>
                </div>
            </div>
        </div>
    );
}