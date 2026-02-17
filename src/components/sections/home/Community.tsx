"use client";

import Image from "next/image";
import { ThumbsUp, MessageCircle } from "lucide-react";
import { discussions } from "@/data/home";

// Double the data to create the infinite loop effect
const sliderData = [...discussions, ...discussions];

export function Community() {
    return (
        <section className="relative bg-[#FFEED0] pt-20 pb-24.5 overflow-hidden pl-5 pr-3 md:px-15 lg:px-20">
            {/* Add Custom CSS for the marquee animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } /* Move exactly half width */
                }
                .animate-marquee {
                    animation: scroll 30s linear infinite; /* Adjust '30s' to control speed */
                }
                .animate-marquee:hover {
                    animation-play-state: paused; /* The Magic Line: Stops on hover */
                }
            `}</style>

            <div className="container mx-auto relative z-10">
                
                {/* Header Content */}
                <div className="px-4 md:px-15 lg:px-20 xl:px-0 mb-7.25">
                    <span className="inline-flex items-center bg-linear-to-tr from-[#001F3F] to-[#003366] text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
                        Tax Community
                    </span>
                
                    <h2 className="text-3xl md:text-[32px] font-bold text-[#001F3F] mb-6 leading-12.5">
                        <span className="block md:hidden">A Vibrant Community Awaits You.</span>
                        <span className="hidden md:block">A Vibrant Community You Can Count On.</span>
                    </h2>
        
                    <p className="text-brand-gray text-lg md:text-xl leading-8.5">
                        Find answers to your tax questions. Learn from real world scenarios and contribute to tax knowledge.
                    </p>
                </div>

                <div className="overflow-hidden w-screen ml-[calc(50%-50vw)]">
                    <div className="flex gap-4 w-max animate-marquee">
                        {sliderData.map((item, index) => (
                            <div 
                                key={index}
                                className="py-5.5 px-4 w-103.25 h-60.25 bg-white rounded-[40px]"
                            >
                                <div className="flex items-start gap-2">
                                    <div className="flex flex-col gap-2 text-[#6A7282] mt-1.5">
                                        <ThumbsUp className="w-4 h-4" />
                                        <span className="text-xs font-medium">{item.likes}</span>
                                    </div>

                                    <div className="flex flex-col gap-5.25">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-[#000000]">
                                                {item.question}
                                            </h3>
                                            <p className="text-[#4A5565] text-sm leading-5 line-clamp-3">
                                                {item.preview}
                                            </p>
                                        </div>

                                        <div className="text-sm leading-5 text-[#6A7282] flex gap-5.25">
                                            <span>Asked by {item.author}</span>
                                            <span>{item.time}</span>
                                        </div>

                                        <div className="">
                                            <button className="flex items-center gap-2 border border-[#000000]/10 rounded-lg px-3 py-2 text-sm font-medium text-brand-black transition-colors">
                                                <MessageCircle className="w-4 h-4" />
                                                {item.answers} Answer{item.answers !== 1 && "s"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative w-214.5 h-171 ml-12.5 lg:mx-auto mt-8 opacity-30">
                    <Image
                        src="/tax-word-cloud.png"
                        alt="Tax keywords cloud"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}