"use client";

import { Info as InfoIcon } from "lucide-react";
import { TaxCalculatorHeader } from "../tax-calculator/TaxCalculatorHeader";
import { TaxForm } from "../tax-calculator/TaxForm";
import { TaxResultCard } from "../tax-calculator/TaxResultCard";
import { TaxBreakdown } from "../tax-calculator/TaxBreakdown";
import { IncomeSummary } from "../tax-calculator/IncomeSummary";
import { TaxBracketsTable } from "../tax-calculator/TaxBracketsTable";
import { useTaxCalculator } from "@/hooks/useTaxCalculator";

interface TaxCalculatorProps {
    activeTab: "Personal" | "Company";
    setActiveTab: (tab: "Personal" | "Company") => void;
}

export function TaxCalculator({ activeTab, setActiveTab }: TaxCalculatorProps) {
    
    const {
        isLoading,
        industries,
        companyConfig,
        personalForm,
        setPersonalForm,
        companyForm,
        setCompanyForm,
        result,
        calculatePersonalTax,
        handleReset
    } = useTaxCalculator(activeTab);

    return (
        <section className="bg-[#FFFFFF] py-10 md:py-20 min-h-screen px-0 md:px-15 lg:px-20 xl:px-[103.5px]">
            <div className="container mx-auto xl:w-full">
                
                <div className="px-4 md:px-0">
                    <TaxCalculatorHeader activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>

                <div className="w-full mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">

                        {/* LEFT COLUMN */}
                        <div className="w-full px-4 md:px-0">
                            <TaxForm 
                                activeTab={activeTab} 
                                industries={industries}
                                companyConfig={companyConfig}
                                personalForm={personalForm}
                                companyForm={companyForm}
                                setPersonalForm={setPersonalForm}
                                setCompanyForm={setCompanyForm}
                                onCalculate={calculatePersonalTax}
                                onReset={handleReset}
                                isLoading={isLoading}
                            />
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="w-full space-y-6">
                            <div className="px-0 md:px-0">
                                <TaxResultCard 
                                    taxPayable={result.taxPayable} 
                                    effectiveRate={result.effectiveRate}
                                />
                            </div>

                            <div className="px-4 md:px-0 space-y-6">
                                <TaxBreakdown 
                                    activeTab={activeTab} 
                                    breakdown={result.breakdown}
                                    isTaxFree={result.isTaxFree}
                                    companyTaxRate={companyConfig.TaxRate}
                                    taxableIncome={result.taxableIncome}
                                />
                                
                                <IncomeSummary 
                                    grossIncome={result.grossIncome}
                                    taxableIncome={result.taxableIncome}
                                    taxPayable={result.taxPayable}
                                    netIncome={result.netIncome}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section (Needs padding on mobile) */}
                <div className="px-4 md:px-0">
                    {activeTab === "Personal" && <TaxBracketsTable />}

                    <div className={`border border-brand-blue bg-white rounded-3xl shadow-xs p-4 flex gap-3 items-start ${activeTab === "Company" ? 'lg:mt-32' : 'mt-8'}`}>
                        <InfoIcon className="w-4 h-4 text-brand-black shrink-0" />
                        <p className="text-[#717182] text-sm leading-5">
                            This calculator uses the latest tax brackets and rates from Nigeria&apos;s Tax Act 2025. The first ₦800,000 of annual income is tax-free. Results are estimates and should be verified with one of our tax professionals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}