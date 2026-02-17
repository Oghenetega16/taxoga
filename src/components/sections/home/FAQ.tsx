"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/home";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); 

    return (
        <section className="pt-20">
            <div className="container mx-auto relative z-10">
                <div className="mb-10">
                    <span className="inline-flex items-center bg-linear-to-tr from-[#001F3F] to-[#003366] text-white text-xs font-semibold p-4 h-8.75 rounded-full mb-6">
                        FAQs
                    </span>
                    <h2 className="text-[40px] font-bold text-[#001F3F] leading-17 mb-6">
                        Your Questions, Answered.
                    </h2>
                    <p className="text-brand-gray text-xl leading-8.5">
                        Find answers to the most common questions people ask.
                    </p>
                </div>
                
                {/* Accordion Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="py-5.75 pl-6 border-2 border-[#000000]/10 rounded-xl bg-white overflow-hidden cursor-pointer transition-colors hover:border-gray-300"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-semibold text-black">
                                    {item.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="w-4 h-4 mr-7.75 flex items-center"
                                >
                                    <ChevronDown className="hidden w-6 h-6 text-[#717182] md:block" />
                                </motion.div>
                            </div>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="mt-[19.5px] pr-3 text-sm text-brand-gray leading-6">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}