import Image from "next/image";
import { Button } from "../../ui/Button";
import { FaWhatsapp } from "react-icons/fa6";

export function GetStarted() {
    return (
        <section className="mt-10 pb-20 container mx-auto">
            <div className="bg-[#F1F5FF] rounded-[40px] md:rounded-[60px] overflow-hidden relative">
                <div className="p-6 lg:p-10 flex flex-col gap-6 md:flex-row items-center justify-between">
                    {/* Content Side */}
                    <div className="flex flex-col gap-6 w-full">
                        <h2 className="text-[32px] leading-17 md:text-[40px] font-bold text-[#001F3F]">
                            Get Started
                        </h2>
                        <p className="text-brand-gray text-xl">
                            Begin your tax journey the right way and stay compliant.
                        </p>
                
                        {/* --- Desktop Buttons --- */}
                        <div className="hidden md:flex flex-row gap-6">
                            <Button 
                                variant="primary" 
                            >
                                <FaWhatsapp size={21} />
                                Speak with an Expert
                            </Button>
                            <Button 
                                variant="ghost"
                            >
                                Assess Your Tax Needs
                            </Button>
                        </div>

                        {/* --- Mobile Buttons  --- */}
                        <div className="flex md:hidden flex-col gap-6.5 w-full">
                            <Button 
                                variant="primary" 
                            >
                                Get Started Today
                            </Button>
                            <Button 
                                variant="ghost"
                            >
                                <FaWhatsapp size={21} />
                                Speak with an Expert
                            </Button>
                        </div>
                    </div>

                    <div className="relative w-full h-62.25">
                        <div className="w-full h-full relative">
                            <Image
                                src="/pixel-pattern.png" 
                                alt="Decorative Pattern"
                                fill
                                className="object-contain object-bottom md:object-bottom-right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}