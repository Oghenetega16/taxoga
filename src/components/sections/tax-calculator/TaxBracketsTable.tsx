"use client";

export function TaxBracketsTable() {
    return (
        <div className="hidden lg:block bg-white rounded-3xl px-6 pt-6 pb-3.5 shadow-2xs border border-[#0000001A] mt-8">
            <h4 className="text-2xl font-bold text-brand-black leading-8 mb-3.75">2025 Tax Brackets (Progressive Rates)</h4>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[#E9E9E9]">
                            <th className="pt-2.75 pb-[13.5px] leading-6 font-bold text-brand-black">Income Range</th>
                            <th className="pt-2.75 pb-[13.5px] text-sm font-bold text-brand-black">Tax Rate</th>
                            <th className="pt-2.75 pb-[13.5px] text-sm font-bold text-brand-black text-right">Max Tax in Bracket</th>
                        </tr>
                    </thead>
                    <tbody className="leading-6 text-brand-black">
                        <BracketRow range="₦0 - ₦800,000" rate="0%" rateColor="bg-[#00C950]" maxTax="₦0" />
                        <BracketRow range="₦800,001 - ₦3,200,000" rate="15%" rateColor="bg-[#2B7FFF]" maxTax="₦168,000" />
                        <BracketRow range="₦3,200,001 - ₦6,400,000" rate="18%" rateColor="bg-[#4B1AFF]" maxTax="₦352,000" />
                        <BracketRow range="₦6,400,001 - ₦12,800,000" rate="21%" rateColor="bg-[#BE9800]" maxTax="₦960,000" />
                        <BracketRow range="₦12,800,001 - ₦25,600,000" rate="23%" rateColor="bg-[#FF6900]" maxTax="₦2,432,000" />
                        <BracketRow range="₦25,600,001 - Above" rate="25%" rateColor="bg-[#FB2C36]" maxTax="—" />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function BracketRow({ range, rate, rateColor, maxTax }: { range: string, rate: string, rateColor: string, maxTax: string }) {
    return (
        <tr className="border-b border-[#E9E9E9] last:border-none hover:bg-gray-50/50">
            <td className="pt-2.75 pb-[13.5px]">{range}</td>
            <td className="pt-2.75 pb-[13.5px]">
                <span className={`${rateColor} text-white text-xs font-medium pl-3.5 pr-3 py-0.75 rounded-full`}>
                    {rate}
                </span>
            </td>
            <td className="pt-2.75 pb-[13.5px] leading-6 text-right text-[#717171]">{maxTax}</td>
        </tr>
    );
}