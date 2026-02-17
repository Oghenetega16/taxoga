"use client";

import { useState, useEffect } from "react";
import { PersonalFormState, CompanyFormState, TaxFormProps } from "@/types/tax";
import { TaxExemptionToast } from "./TaxExemptionToast";
import { CompanySection } from "./CompanySection";
import { PersonalSection } from "./PersonalSection";

export function TaxForm({ 
    activeTab, 
    industries, 
    companyConfig, 
    personalForm, 
    companyForm, 
    setPersonalForm, 
    setCompanyForm,
    onCalculate,
    onReset,
    isLoading
}: TaxFormProps) {
    
    const [showToast, setShowToast] = useState(false);

    // Dynamic Threshold Formatting
    const formattedThreshold = companyConfig?.TaxableAmountThreshold 
        ? new Intl.NumberFormat('en-NG', { 
            style: 'currency', 
            currency: 'NGN', 
            minimumFractionDigits: 0,
            maximumFractionDigits: 0 
        }).format(companyConfig.TaxableAmountThreshold)
    : "Threshold";

    // Auto-close Toast
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const handlePersonalChange = (field: keyof PersonalFormState, value: string) => {
        setPersonalForm({ ...personalForm, [field]: value });
    };
    
    const handleCompanyChange = (field: keyof CompanyFormState, value: string) => {
        setCompanyForm({ ...companyForm, [field]: value });

        // Trigger toast logic: ONLY when switching to 'less'
        if (field === "revenueOption") {
            if (value === "less") {
                setShowToast(true);
            } else {
                setShowToast(false);
            }
        }
    };

    return (
        <div className="space-y-6">
            <TaxExemptionToast 
                show={showToast} 
                onClose={() => setShowToast(false)} 
                threshold={formattedThreshold} 
            />

            {activeTab === "Company" ? (
                <CompanySection 
                    form={companyForm}
                    onChange={handleCompanyChange}
                    industries={industries}
                    formattedThreshold={formattedThreshold}
                    onReset={onReset}
                />
            ) : (
                <PersonalSection 
                    form={personalForm}
                    onChange={handlePersonalChange}
                    onCalculate={onCalculate}
                    onReset={onReset}
                    isLoading={isLoading}
                />
            )}
        </div>
    );
}