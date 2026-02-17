"use client";

import Image from "next/image";

import { TrustCardProps } from "@/types/home";
import { trustData } from "@/data/home";

const themeStyles = {
    blue:   "bg-brand-cyan text-white", 
    orange: "bg-brand-orange text-white", 
    green:  "bg-brand-green text-white", 
    teal:   "bg-brand-mint text-white", 
    purple: "bg-brand-purple text-white",
};

export function Trust() {
    return (
        <section className="py-20 bg-[#FFFFFF] overflow-hidden pl-5 pr-3 md:px-15 lg:px-20">
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>

            <div className="container mx-auto relative z-10">
                
                {/* --- Header --- */}
                <div className="px-4 mb-7.25">
                    <span className="inline-flex items-center bg-linear-to-tr from-[#001F3F] to-[#003366] text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
                        Why Trust Us?
                    </span>
                    
                    <h2 className="text-3xl md:text-[32px] font-bold text-[#001F3F] mb-6 leading-tight">
                        <span className="block md:hidden">Tax Expertise Meets Great Software.</span>
                        <span className="hidden md:block">Work With Nigeria’s Top Tax Experts</span>
                    </h2>
                    
                    <p className="text-gray-600 text-lg md:text-xl leading-8.5">
                        Before the 2025 tax act, we filed 200 returns for 30 companies. We&apos;ve added great software to help more businesses and individuals stay compliant and maximize their tax returns.
                    </p>
                </div>

                <div className="flex overflow-x-auto w-screen ml-[calc(50%-50vw)] px-4 md:ml-15 lg:ml-20 xl:ml-0 gap-4 lg:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
                    {trustData.map((item) => (
                        <div key={item.id} className="snap-start shrink-0">
                            <Card data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Card({ data }: { data: TrustCardProps }) {
    return (
        <div className="flex flex-col-reverse md:flex-row w-[85vw] md:w-253.25 h-163.75 md:h-129.25 shrink-0 rounded-[40px] overflow-hidden shadow-lg">
            <div className={`p-6 flex flex-col justify-between md:py-10 md:px-8 w-full h-95 md:h-full md:w-1/2 shrink-0 ${themeStyles[data.theme]}`}>
                <div>
                    <span className="text-white/80 mb-4 lg:mb-5.25 block font-semibold lg:text-xl">
                        {data.tag}
                    </span>
                    <h2 className="text-[30px] md:text-4xl font-extrabold lg:font-bold mb-4 lg:mb-5.25 leading-10 lg:leading-11">
                        {data.title}
                    </h2>
                    <p className="text-sm text-white leading-relaxed lg:leading-8.5 mb-4 lg:mb-5.25 md:text-xl italic">
                        {data.first_para}
                    </p>
                    <p className="text-sm text-white leading-relaxed lg:leading-8.5 mb-4 lg:mb-5.25">
                        {data.second_para}
                    </p>
                </div>
                
                <div className="">
                    <h1 className="text-3xl lg:text-5xl text-white mb-4 font-bold tracking-[-2%]">
                        {data.stat}
                    </h1>
                </div>
            </div>
        
            <div className="relative w-full md:w-1/2 h-83 md:h-full shrink-0">
                <Image 
                    src={data.image} 
                    alt={data.title} 
                    fill 
                    className="object-cover"
                />
            </div>
        </div>
    );
}