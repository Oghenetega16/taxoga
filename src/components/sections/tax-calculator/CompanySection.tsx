"use client";

import { ChevronDown } from "lucide-react";
import { FormattedInput } from "./FormattedInput";

import { CompanySectionProps } from "@/types/tax";

export function CompanySection({ form, onChange, industries, formattedThreshold, onReset }: CompanySectionProps) {
    const showProfitQuestion = form.revenueOption === "more";
    const showCompanyDetails = showProfitQuestion && form.madeProfit === "Yes";

    return (
        <>
            <div className="bg-white rounded-3xl pl-6 pr-3.25 pt-6 shadow-2xs border border-[#0000001A]">
                <h2 className="lg:hidden text-2xl font-bold text-brand-black leading-4 mb-5.25">Input Business Data</h2>
                <h2 className="hidden lg:block text-2xl font-bold text-brand-black leading-4 mb-5.25">Input Business Data</h2>
                <p className="hidden lg:block text-[#717171] text-sm leading-6 mb-6">Analyze your business&apos;s tax liability.</p>
                <p className="lg:hidden text-[#717171] text-sm leading-6 mb-6">Analyze your business&apos;s tax liability.</p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {/* Industry Select */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-3.5 text-brand-black">Industry</label>
                        <div className="relative">
                            <select 
                                aria-label="Select your business industry" 
                                className="w-full h-11.25 pl-4 pr-10 mt-2 bg-white border border-[#E9E9E9] rounded-xl appearance-none focus:outline-none focus:border-[#001F3F] text-[#000000] font-sm"
                                value={form.industryId}
                                onChange={(e) => onChange("industryId", e.target.value)}
                            >
                                <option value="">Select Industry</option>
                                {industries.map((ind) => (
                                    <option key={ind.id} value={ind.id}>{ind.name}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] w-4 h-4 mt-1 pointer-events-none" />
                        </div>
                    </div>

                    {/* Revenue Select */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-3.5 text-brand-black">Total Sales/Revenue</label>
                        <div className="relative">
                            <select 
                                aria-label="Select total sales or revenue range" 
                                className="w-full h-11.25 pl-4 pr-10 mt-2 bg-white border border-[#E9E9E9] rounded-xl appearance-none focus:outline-none focus:border-[#001F3F] text-[#000000] font-sm"
                                value={form.revenueOption}
                                onChange={(e) => onChange("revenueOption", e.target.value)}
                            >
                                <option value="more">More than {formattedThreshold}</option>
                                <option value="less">Less than {formattedThreshold}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] w-4 h-4 mt-1 pointer-events-none" />
                        </div>
                        <p className="lg:hidden text-[11px] leading-6 text-[#717171] mt-2">What was your total sales/revenue last financial year?</p>
                        <p className="hidden lg:block text-[11px] leading-6 text-[#717171] mt-2">Did your business make a profit for the last financial year?</p>
                    </div>

                    {/* Profit Select */}
                    {showProfitQuestion && (
                        <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                            <label className="text-sm font-medium leading-3.5 text-brand-black">Did You Make a Profit?</label>
                            <div className="relative">
                                <select 
                                    aria-label="Select if you made a profit" 
                                    className="w-full h-11.25 pl-4 pr-10 mt-2 bg-white border border-[#E9E9E9] rounded-xl appearance-none focus:outline-none focus:border-[#001F3F] text-[#000000] font-sm"
                                    value={form.madeProfit}
                                    onChange={(e) => onChange("madeProfit", e.target.value)}
                                >
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] w-4 h-4 mt-1 pointer-events-none" />
                            </div>
                            <p className="text-[11px] leading-6 text-[#717171] mt-2 lg:hidden">Did your business make a profit for the last financial year?</p>
                        </div>
                    )}

                    {/* Profit Details */}
                    {showCompanyDetails && (
                        <>
                            <div className="space-y-4 mb-15.5 animate-in fade-in slide-in-from-top-2 duration-300">
                                <FormattedInput 
                                    label="Year of Incorporation" 
                                    value={form.incorporationYear} 
                                    onChange={(val) => onChange("incorporationYear", val)}
                                    isYear={true} 
                                />
                                <FormattedInput 
                                    label="Total Net Profit (₦)" 
                                    value={form.totalNetProfit} 
                                    onChange={(val) => onChange("totalNetProfit", val)}
                                    prefix="₦"
                                />
                            </div>
                            <div className="w-full h-px bg-[#E9E9E9]"></div>
                            <div className="py-[10.5px] flex items-center justify-between -mt-4 animate-in fade-in duration-300">
                                <span className="text-base text-[#3D3D3D] leading-6 lg:hidden">Total Net Profit</span>
                                <span className="text-base text-[#717171] leading-6 hidden lg:block">Total Income</span>
                                <span className="text-xl font-bold text-brand-blue leading-7">
                                    {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(Number(form.totalNetProfit?.toString().replace(/,/g, '')) || 0)}
                                </span>
                            </div>
                        </>
                    )}
                </form>
                
            </div>
            <div className="mt-6 pb-6">
                <button onClick={onReset} className="w-full cursor-pointer h-11.25 bg-white shadow-2xs border border-[#0000001A] text-brand-black font-medium rounded-xl hover:bg-gray-50 transition-colors">
                    Reset All
                </button>
            </div>
        </>
    );
}