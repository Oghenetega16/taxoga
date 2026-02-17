"use client";

import { Calculator, Loader2 } from "lucide-react";
import { PersonalFormState } from "@/types/tax";
import { FormattedInput } from "./FormattedInput";

import { PersonalSectionProps } from "@/types/tax";

export function PersonalSection({ form, onChange, onCalculate, onReset, isLoading }: PersonalSectionProps) {
    // Helper to calculate totals
    const sumValues = (keys: (keyof PersonalFormState)[]) => {
        return keys.reduce((acc, key) => {
            const rawValue = form[key];
            const numValue = Number(rawValue?.toString().replace(/,/g, '')) || 0;
            return acc + numValue;
        }, 0);
    };

    const totalIncome = sumValues(['salaryIncome', 'businessIncome', 'rentalIncome', 'investmentIncome', 'otherIncome']);
    const totalDeductions = sumValues(['rent', 'pensionContribution', 'nhfContribution', 'lifeInsurance', 'nhisPremium', 'gratuity']);

    return (
        <>
            <div className="bg-white rounded-3xl pl-6 pr-3.25 pt-6 shadow-2xs border border-[#0000001A]">
                <h2 className="text-2xl font-bold text-brand-black leading-4 mb-5.25">Income Sources</h2>
                <p className="text-[#717171] text-sm leading-6 mb-6">Enter your annual income from all your income sources.</p>
                <form className="space-y-4">
                    <FormattedInput label="Salary/Employment Income (₦)" value={form.salaryIncome} onChange={(v) => onChange("salaryIncome", v)} />
                    <FormattedInput label="Business Income (₦)" value={form.businessIncome} onChange={(v) => onChange("businessIncome", v)} />
                    <FormattedInput label="Rental Income (₦)" value={form.rentalIncome} onChange={(v) => onChange("rentalIncome", v)} />
                    <FormattedInput label="Investment Income (₦)" value={form.investmentIncome} onChange={(v) => onChange("investmentIncome", v)} />
                    <FormattedInput label="Other Income (₦)" value={form.otherIncome} onChange={(v) => onChange("otherIncome", v)} />
                    
                    <div className="w-full h-px bg-[#E9E9E9]"></div>
                    <div className="py-[10.5px] lg:py-4 flex items-center justify-between -mt-4">
                        <span className="text-base text-[#717171] leading-6">Total Income</span>
                        <span className="text-xl font-bold text-brand-blue leading-7">
                            {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(totalIncome)}
                        </span>
                    </div>
                </form>
            </div>

            <div className="bg-white rounded-3xl pl-6 pr-3.25 pt-6 shadow-2xs border border-[#0000001A]">
                <h2 className="text-2xl font-bold text-brand-black leading-4 mb-5.25">Allowable Deductions</h2>
                <p className="text-[#717171] text-sm leading-6 mb-6">Enter the annual amount of any of the following allowable deductions</p>
                <form className="space-y-4">
                    <FormattedInput label="Rent (₦)" value={form.rent} onChange={(v) => onChange("rent", v)} />
                    <FormattedInput label="Pension Contribution (₦)" value={form.pensionContribution} onChange={(v) => onChange("pensionContribution", v)} />
                    <FormattedInput label="NHF Contribution (₦)" value={form.nhfContribution} onChange={(v) => onChange("nhfContribution", v)} />
                    <FormattedInput label="Life Insurance (₦)" value={form.lifeInsurance} onChange={(v) => onChange("lifeInsurance", v)} />
                    <FormattedInput label="NHIS Premium (₦)" value={form.nhisPremium} onChange={(v) => onChange("nhisPremium", v)} />
                    <FormattedInput label="Gratuity (₦)" value={form.gratuity} onChange={(v) => onChange("gratuity", v)} />
                    
                    <div className="w-full h-px bg-[#E9E9E9]"></div>
                    <div className="py-[10.5px] lg:py-4 flex items-center justify-between -mt-4">
                        <span className="text-base text-[#001F3F] leading-6">Total Deductions</span>
                        <span className="text-xl font-bold text-brand-blue leading-7">
                            {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(totalDeductions)}
                        </span>
                    </div>
                </form>
            </div>

            <div className="flex gap-3">
                <button 
                    onClick={onCalculate}
                    disabled={isLoading}
                    className="flex-1 cursor-pointer py-3.75 text-sm leading5 bg-brand-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-4 disabled:opacity-70"
                >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Calculator className="w-5 h-5" />}
                    Calculate My Tax
                </button>
                <button 
                    onClick={onReset}
                    className="w-1/3 cursor-pointer lg:w-1/4 py-2 px-4 bg-white shadow-xs border border-[#E9E9E9] text-brand-black font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                    Reset All
                </button>
            </div>
        </>
    );
}