"use client";

import Image from "next/image";
import { Button } from "../../ui/Button";
import { FaWhatsapp } from "react-icons/fa6";
import { services } from "@/data/home";

export function WhoWeServe() {
    return (
        <section className="py-20 bg-[#FFEED0]">
            <div className="container mx-auto px-4 md:px-11">
                {/* --- Header --- */}
                <div className="mb-7.25">
                    <span className="inline-flex items-center bg-white text-[#000000] text-xs font-semibold px-4 py-2 rounded-full mb-6">
                        Who We Serve
                    </span>
                    <h2 className="text-3xl md:text-[32px] font-bold text-[#001F3F] mb-6 leading-12.5">
                        We are Experts for Every Tax Situation
                    </h2>
                    <p className="text-brand-gray text-lg md:text-xl leading-8.5">
                        No matter your tax needs, file with confidence and get the most out of your return.
                    </p>
                </div>

                {/* --- Stacking Cards Container --- */}
                <div className="flex flex-col gap-8 md:gap-0">
                    {services.map((service) => (
                        <div 
                            key={service.id}
                            className="sticky top-24 md:top-32 w-full" 
                        >
                            <div 
                                className={`
                                    relative flex flex-col-reverse gap-6 md:flex-row 
                                    w-full h-auto md:h-130.5 
                                    rounded-[40px] lg:rounded-[80px] overflow-hidden
                                    ${service.color} ${service.textColor}
                                    px-4 py-6 md:px-6 lg:px-7.5 xl:px-[38.96px] lg:py-[40]
                                `}
                            >
                                {/* Left: Text Content */}
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-lg lg:text-2xl xl:text-3xl font-bold mb-6 leading-10 md:leading-none lg:leading-10 xl:leading-17">
                                        {service.title}
                                    </h3>
                                    <p className="text-base md:text-sm lg:text-base xl:text-lg text-[#FAFAFA] leading-8.5 md:leading-7 lg:leading-8.5 mb-6 lg:mb-4 italic">
                                        {service.first_paragraph}
                                    </p>
                                    <p className="text-base md:text-sm lg:text-base xl:text-lg text-[#FAFAFA] leading-8.5 md:leading-7 lg:leading-8.5 mb-6 lg:mb-4 italic">
                                        {service.second_paragraph}
                                    </p>

                                    <div className="flex flex-col lg:flex-row gap-6 md:gap-3 lg:gap-1 xl:gap-6 mb-2.5">
                                        <Button 
                                            variant="secondary" 
                                        >
                                            <FaWhatsapp size={21} />
                                            Speak with an Expert
                                        </Button>
                                        <Button 
                                            variant="link"
                                        >
                                            Assess Your Tax Needs
                                        </Button>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 h-[203.36px] md:h-full relative rounded-[40px] overflow-hidden">
                                    <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}