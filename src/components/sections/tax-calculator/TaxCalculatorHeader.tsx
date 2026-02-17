"use client";

import { Info as InfoIcon } from "lucide-react";
import { HeaderProps } from "@/types/tax";

export function TaxCalculatorHeader({ activeTab, setActiveTab }: HeaderProps) {
    return (
        <div className="mx-auto mb-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold leading-10 text-[#001F3F] mb-4">
                    Tax Calculator
                </h1>
                <p className="text-[#4A5565] text-xl leading-7">
                    Calculate your tax liability under Nigeria&apos;s Tax Act 2025
                </p>

                {/* Tabs */}
                <div className="flex justify-center my-6">
                    <div className="bg-[#ECECF0] p-0.75 rounded-full flex gap-3.25 border border-[#00000000]/10">
                        <button
                            onClick={() => setActiveTab("Personal")}
                            className={`cursor-pointer px-[40.91px] py-[2.5px] h-7.25 rounded-[14px] text-brand-black text-sm font-medium transition-all ${
                                activeTab === "Personal" 
                                ? "bg-[#FFFFFF] border border-[#00000000] shadow" 
                                : " hover:bg-gray-50"
                            }`}
                        >
                            Personal Income
                        </button>
                        <button
                            onClick={() => setActiveTab("Company")}
                            className={`cursor-pointer md:hidden px-[40.91px] py-[2.5px] h-7.25 rounded-[14px] text-brand-black text-sm font-medium transition-all ${
                                activeTab === "Company" 
                                ? "bg-[#FFFFFF] border border-[#00000000] shadow" 
                                : "hover:bg-gray-50"
                            }`}
                        >
                            Business Profit
                        </button>
                        <button
                            onClick={() => setActiveTab("Company")}
                            className={`cursor-pointer hidden md:block px-[40.91px] py-[2.5px] rounded-full text-brand-black text-sm font-medium transition-all ${
                                activeTab === "Company" 
                                ? "bg-[#FFFFFF] border border-[#00000000] shadow" 
                                : "hover:bg-gray-50"
                            }`}
                        >
                            Company Income Tax
                        </button>
                    </div>
                </div>
            </div>

            {/* Info Banner */}
            <div className="lg:hidden border border-brand-blue bg-white rounded-3xl shadow p-4 flex gap-3 items-start">
                <InfoIcon className="w-4 h-4 text-brand-black shrink-0" />
                <p className="text-[#717182] text-sm leading-5">
                    {activeTab === "Personal" 
                        ? "The personal income calculator calculates the income of individuals and registered business names. Business names are calculated using the personal income calculator because they are taxed like individuals."
                        : "The business calculator calculates the income of registered limited liability companies."
                    }
                </p>
            </div>
        </div>
    );
}