"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GetStarted } from "@/components/sections/home/GetStarted";
import { TaxCalculator } from "@/components/sections/tax-calculator/TaxCalculator"; // Ensure you create this file with the code above

export default function TaxCalculatorPage() {

    const [activeTab, setActiveTab] = useState<"Personal" | "Company">("Personal");

    return (
        <div className="bg-white min-h-screen">
            <Navbar isCalculatorPage={true} />
            
            <main>
                <TaxCalculator activeTab={activeTab} setActiveTab={setActiveTab} />
                
                <div className={`mx-auto -mt-10 lg:-mt-20 px-4 md:px-15 lg:px-20 xl:px-[103.5px] pb-20 
                    `}>
                    <GetStarted />
                </div>
            </main>

            <div className={`-mt-25 ${activeTab === "Company" ? 'lg:mt-130.5' : ''}`}>
                <Footer />
            </div>
        </div>
    );
}