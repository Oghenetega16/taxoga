"use client";

import { TaxBreakdownProps } from "@/types/tax";

export function TaxBreakdown({ 
    activeTab, 
    breakdown = [], 
    isTaxFree = false, 
    companyTaxRate = 0,
    taxableIncome = 0
}: TaxBreakdownProps) {

    // Helper to format currency
    const formatCurrency = (amount: number) => 
        new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(amount);

    // Helper to format percentage
    const formatPercent = (rate: number) => `${(rate * 100).toFixed(0)}%`;

    return (
        <div className="bg-white rounded-3xl p-6 shadow-2xs border border-[#0000001A]">
            <h3 className="text-2xl leading-4 font-bold text-brand-black mb-7.5">Tax Breakdown by Bracket</h3>
            
            {activeTab === "Personal" ? (
                <div className="space-y-6">
                    {/* Render Dynamic Personal Breakdown */}
                    {breakdown.length > 0 ? (
                        breakdown.map((item, index) => {
                            const isZeroRate = item.rate === 0;
                            const label = isZeroRate ? "Tax-Free Band" : `${formatPercent(item.rate)} Band`;
                            // Visual scaling logic (just for display purposes)
                            const progress = isZeroRate ? 0 : (item.rate * 100) * 2.5; 

                            return (
                                <BreakdownItem 
                                    key={index}
                                    label={label}
                                    value={formatCurrency(item.taxAmount || 0)}
                                    subtext={`${formatCurrency(item.taxableAmount || 0)} taxed at ${label}`}
                                    progress={progress}
                                />
                            );
                        })
                    ) : (
                        // Empty State
                        <div className="text-center py-4">
                            <p className="text-sm text-gray-400 italic">
                                Calculate to see breakdown
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Render Conditional Company Breakdown */}
                    {isTaxFree ? (
                        <BreakdownItem 
                            label="Tax-Free Band" 
                            value="₦0" 
                            subtext="Based on your input (Revenue threshold, Profit status, or Industry exemption), you do not have a tax liability." 
                            progress={0}
                        />
                    ) : (
                        <BreakdownItem 
                            label={`${formatPercent(companyTaxRate)} Band`} 
                            value={formatCurrency(taxableIncome * companyTaxRate)} 
                            subtext={`${formatCurrency(taxableIncome)} taxed at ${formatPercent(companyTaxRate)} Band`} 
                            progress={65} 
                        />
                    )}
                </div>
            )}
        </div>
    );
}

function BreakdownItem({ label, value, subtext, progress = 0 }: { label: string, value: string, subtext: string, progress?: number }) {
    return (
        <div>
            <div className="flex justify-between text-sm leading-5 mb-2">
                <span className="text-[#4A5565] font-medium">{label}</span>
                <span className="text-[#001F3F] font-bold">{value}</span>
            </div>
            
            {/* Visual Progress Bar */}
            {progress > 0 ? (
                <div className="h-2 w-full bg-[#E5E7EB] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-brand-blue" style={{ width: `${Math.min(progress, 100)}%` }}></div>
                </div>
            ) : (
                // Tax Free visual indicator (thin line)
                <div className="h-2 w-full bg-[#E5E7EB] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-brand-blue w-0.5"></div>
                </div>
            )}

            <p className="text-[12px] text-[#6A7282] leading-relaxed">
                {subtext}
            </p>
        </div>
    );
}