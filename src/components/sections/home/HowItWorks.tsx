"use client";

import { Button } from "../../ui/Button";
import { FaWhatsapp } from "react-icons/fa6";

import { steps } from "@/data/home";

export function HowItWorks() {
    return (
        <section className="bg-[#F2F2F2] pb-24 md:mt-35">
            <div className="w-full h-22.75 grid grid-cols-3 text-white text-center">
                <div className="bg-brand-mint py-[27.91px] px-4 lg:py-8.75 lg:px-13.75">
                    <p className="text-2xl lg:text-[60px] leading-10 font-semibold">N150M</p>
                    <p className="text-xs md:text-sm mt-1 lg:mt-3.25 text-[#F4F4F4]">Tax Value Filed</p>
                </div>
                <div className="bg-brand-orange py-[27.91px] px-4 lg:py-8.75 lg:px-13.75">
                    <p className="text-2xl lg:text-[60px] leading-10 font-semibold">250</p>
                    <p className="text-xs md:text-sm mt-1 lg:mt-3.25 text-[#F4F4F4]">Active Audience</p>
                </div>
                <div className="bg-brand-cyan py-[27.91px] px-4 lg:py-8.75 lg:px-13.75">
                    <p className="text-2xl lg:text-[60px] leading-10 font-semibold">145K</p>
                    <p className="text-xs md:text-sm mt-1 lg:mt-3.25 text-[#F4F4F4]">Returns Filed</p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-11 pt-20 md:pt-38">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* --- LEFT: Sticky Text Content --- */}
                    <div className="w-full lg:w-1/2">
                        <div className="sticky top-32">
                            <span className="inline-flex items-center bg-white text-[#000000] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                                How It Works
                            </span>
                            
                            <h2 className="text-3xl md:text-[40px] font-bold text-[#001F3F] mb-6 leading-12.5">
                                3 Easy Steps to Tax Compliance & Savings.
                            </h2>
                            
                            <p className="text-brand-gray text-lg md:text-xl leading-8.5">
                                No matter your tax needs, file with confidence and get the most out of your return.
                            </p>

                            <div className="hidden lg:flex flex-col md:flex-row gap-6 mt-6">
                                <Button 
                                    variant="primary" 
                                >
                                    <FaWhatsapp size={21} />
                                    Speak with an Expert
                                </Button>
                                <Button 
                                    variant="outline"
                                >
                                    Assess Your Tax Needs
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: Stacking Cards --- */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:gap-3 items-center">
                        {steps.map((step, index) => (
                            <div 
                                key={step.id} 
                                className="sticky top-32 w-89.75 lg:w-full md:top-40" 
                                style={{ 
                                    zIndex: index + 1,
                                    marginBottom: `${(steps.length - index - 1) * 20}px` 
                                }}
                            >
                                <div className="bg-white rounded-[60px] p-10 shadow-sm h-112 lg:h-88 flex flex-col justify-center gap-5.25 md:gap-3 xl:gap-5.25">
                                    <div className="text-[80px] xl:text-[100px] font-bold text-transparent leading-none" 
                                        style={{ WebkitTextStroke: "4px #001F3F" }}>
                                        {step.number}
                                    </div>
                                
                                    <h3 className="text-xl xl:text-2xl font-bold text-[#001F3F] lg:hidden">
                                        {step.mobile_title}
                                    </h3>
                                    <h3 className="hidden lg:block text-xl xl:text-2xl font-bold text-[#001F3F]">
                                        {step.desktop_title}
                                    </h3>
                                    
                                    <p className="text-brand-gray text-base leading-relaxed lg:hidden">
                                        {step.mobile_description}
                                    </p>
                                    <p className="hidden lg:block text-brand-gray text-base leading-relaxed">
                                        {step.desktop_description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}