"use client";

import { useState, useEffect } from "react";
import { 
    Industry, CompanyConfig, ParsedConfig, 
    PersonalFormState, CompanyFormState, CalculationResult,
    SystemConfigResponse, IndustriesResponse, PersonalTaxResponse, BreakdownItemData 
} from "@/types/tax";

export function useTaxCalculator(activeTab: "Personal" | "Company") {
    const [isLoading, setIsLoading] = useState(false);
    const [industries, setIndustries] = useState<Industry[]>([]);
    
    const [companyConfig, setCompanyConfig] = useState<CompanyConfig>({ 
        TaxRate: 0, 
        TaxableAmountThreshold: 0 
    });

    const [personalForm, setPersonalForm] = useState<PersonalFormState>({
        salaryIncome: 0, businessIncome: 0, rentalIncome: 0, investmentIncome: 0, otherIncome: 0,
        rent: 0, pensionContribution: 0, nhfContribution: 0, lifeInsurance: 0, nhisPremium: 0, gratuity: 0
    });

    const [companyForm, setCompanyForm] = useState<CompanyFormState>({
        industryId: "",
        revenueOption: "more",
        madeProfit: "No",
        incorporationYear: new Date().getFullYear().toString(),
        totalNetProfit: 0
    });

    const [result, setResult] = useState<CalculationResult>({
        taxPayable: 0, grossIncome: 0, deductions: 0, taxableIncome: 0, netIncome: 0, breakdown: [], isTaxFree: false, effectiveRate: 0
    });

    // --- 1. Fetch Data Effect ---
    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                // Fetch Config
                const configRes = await fetch("https://api.taxoga.com/public/system-configuration/COMPANY_INCOME_TAX_CONFIGURATION");
                const configData: SystemConfigResponse = await configRes.json();
                const configString = configData?.value?.value?.value;

                let parsedConfig: ParsedConfig = {};
                if (configString && typeof configString === 'string') {
                    try {
                        parsedConfig = JSON.parse(configString) as ParsedConfig;
                    } catch (e) {
                        console.error("Error parsing config string:", e);
                    }
                }

                setCompanyConfig({
                    TaxRate: (parsedConfig.TaxRate || 0) / 100,
                    TaxableAmountThreshold: parsedConfig.TaxableAmountThreshold || 0
                });

                // Fetch Industries
                const indRes = await fetch("https://api.taxoga.com/public/option-type/TAX_INDUSTRIES/options?pageNumber=1&pageSize=500");
                const indJson: IndustriesResponse = await indRes.json();
                const rawData = indJson?.value?.value?.data || [];
                
                const mappedIndustries: Industry[] = rawData.map((ind) => ({
                    id: ind.id,
                    name: ind.name,
                    extraProperties: ind.extraProperty 
                        ? (JSON.parse(ind.extraProperty) as Industry['extraProperties'])
                        : { RequiresIncomeTax: true, HasExemptionPeriod: false, ExemptionPeriodYears: 0 }
                }));
                setIndustries(mappedIndustries);
            } catch (error) {
                console.error("Failed to load data", error);
            }
        };

        fetchCompanyData();
    }, []);

    // --- 2. Auto-Calculate Effect ---
    useEffect(() => {
        if (activeTab === "Company") {
            calculateCompanyTax();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [companyForm, companyConfig, industries, activeTab]);

    // --- 3. Calculation Logic ---

    // Local PAYE Logic (Fallback)
    const calculatePayeLocally = (gross: number, rentPaid: number, otherDeductions: number) => {
        const rentRelief = Math.min(rentPaid * 0.20, 500000);
        const totalStatutoryRelief = rentRelief + otherDeductions;
        const taxable = Math.max(0, gross - totalStatutoryRelief);
        
        let tax = 0;
        let remainder = taxable;
        const breakdown: BreakdownItemData[] = [];

        const bands = [
            { limit: 800000, rate: 0, name: "Tax-Free Band" },
            { limit: 2200000, rate: 0.15, name: "15% Band" },
            { limit: 9000000, rate: 0.18, name: "18% Band" },
            { limit: 13000000, rate: 0.21, name: "21% Band" },
            { limit: 25000000, rate: 0.23, name: "23% Band" },
            { limit: Infinity, rate: 0.25, name: "25% Band" },
        ];

        for (const band of bands) {
            if (remainder <= 0) break;
            const taxableAtThisBand = Math.min(remainder, band.limit);
            const taxAtThisBand = taxableAtThisBand * band.rate;
            
            tax += taxAtThisBand;
            remainder -= taxableAtThisBand;

            breakdown.push({
                rate: band.rate,
                taxableAmount: taxableAtThisBand,
                taxAmount: taxAtThisBand,
                taxBand: band.name
            });
        }

        return { tax, taxable, totalStatutoryRelief, breakdown };
    };

    const calculatePersonalTax = async () => {
        setIsLoading(true);
        try {
            const income = {
                salaryIncome: Number(personalForm.salaryIncome),
                businessIncome: Number(personalForm.businessIncome),
                rentalIncome: Number(personalForm.rentalIncome),
                investmentIncome: Number(personalForm.investmentIncome),
                otherIncome: Number(personalForm.otherIncome)
            };
            const deductions = {
                rent: Number(personalForm.rent),
                pensionContribution: Number(personalForm.pensionContribution),
                nhfContribution: Number(personalForm.nhfContribution),
                lifeInsurance: Number(personalForm.lifeInsurance),
                nhisPremium: Number(personalForm.nhisPremium),
                gratitude: Number(personalForm.gratuity)
            };

            const localGrossIncome = Object.values(income).reduce((a, b) => a + b, 0);
            const localUserDeductionsSum = Object.values(deductions).reduce((a, b) => a + b, 0); 
            const otherDeductions = localUserDeductionsSum - deductions.rent;

            let apiData: Partial<PersonalTaxResponse> = {};
            try {
                const response = await fetch("https://api.taxoga.com/public/tax/paye/calculator", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ income, deductions })
                });
                if (response.ok) {
                    apiData = await response.json();
                }
            } catch (err) {
                console.warn("API Calculation failed, using local fallback.", err);
            }

            let finalTaxPayable = apiData.taxPayable ?? 0;
            let finalTaxableIncome = apiData.taxableIncome ?? 0;
            const finalGrossIncome = apiData.grossIncome ?? localGrossIncome;
            let finalBreakdown = apiData.taxBandBreakdown ?? [];

            if ((!finalTaxPayable || finalTaxPayable === 0) && localGrossIncome > 0) {
                const localCalc = calculatePayeLocally(localGrossIncome, deductions.rent, otherDeductions);
                finalTaxPayable = localCalc.tax;
                finalTaxableIncome = localCalc.taxable;
                finalBreakdown = localCalc.breakdown;
            }

            const finalNetIncome = finalGrossIncome - finalTaxPayable;
            const finalDeductions = finalGrossIncome - finalTaxableIncome; // Strict formula
            const finalEffectiveRate = finalGrossIncome > 0 ? (finalTaxPayable / finalGrossIncome) * 100 : 0;

            setResult({
                taxPayable: finalTaxPayable,
                grossIncome: finalGrossIncome,
                deductions: finalDeductions,
                taxableIncome: finalTaxableIncome,
                netIncome: finalNetIncome,
                breakdown: finalBreakdown,
                isTaxFree: false,
                effectiveRate: finalEffectiveRate
            });

        } catch (error) {
            console.error("Personal calculation failed", error);
        } finally {
            setIsLoading(false);
        }
    };

    const calculateCompanyTax = () => {
        const { TaxRate } = companyConfig; 
        const netProfit = Number(companyForm.totalNetProfit);
        const selectedIndustry = industries.find(i => i.id === companyForm.industryId);
        
        let taxPayable = 0;
        let isTaxFree = false;

        if (!selectedIndustry) {
            setResult(prev => ({ ...prev, taxPayable: 0, grossIncome: netProfit, taxableIncome: netProfit, netIncome: netProfit, isTaxFree: true, effectiveRate: 0 }));
            return;
        }

        const currentYear = new Date().getFullYear();
        const yearsSinceIncorp = currentYear - Number(companyForm.incorporationYear);
        
        const requiresTax = selectedIndustry.extraProperties.RequiresIncomeTax;
        const hasExemption = selectedIndustry.extraProperties.HasExemptionPeriod;
        const isExempt = hasExemption && (yearsSinceIncorp < selectedIndustry.extraProperties.ExemptionPeriodYears);
        const madeProfit = companyForm.madeProfit === "Yes";
        const meetsThreshold = companyForm.revenueOption === "more"; 

        if (!requiresTax || isExempt) {
            isTaxFree = true;
            taxPayable = 0;
        } else if (madeProfit && meetsThreshold) {
            taxPayable = netProfit * TaxRate;
            isTaxFree = false;
        } else {
            taxPayable = 0;
            isTaxFree = true;
        }

        setResult({
            taxPayable,
            grossIncome: netProfit, 
            deductions: 0,
            taxableIncome: netProfit, 
            netIncome: netProfit - taxPayable,
            breakdown: [], 
            isTaxFree,
            effectiveRate: netProfit > 0 ? ((taxPayable / netProfit) * 100) : 0
        });
    };

    const handleReset = () => {
        setPersonalForm({
            salaryIncome: 0, businessIncome: 0, rentalIncome: 0, investmentIncome: 0, otherIncome: 0,
            rent: 0, pensionContribution: 0, nhfContribution: 0, lifeInsurance: 0, nhisPremium: 0, gratuity: 0
        });
        setCompanyForm({
            industryId: "", revenueOption: "more", madeProfit: "No",
            incorporationYear: new Date().getFullYear().toString(), totalNetProfit: 0
        });
        setResult({
            taxPayable: 0, grossIncome: 0, deductions: 0, taxableIncome: 0, netIncome: 0,
            breakdown: [], isTaxFree: false, effectiveRate: 0
        });
    };

    return {
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
    };
}