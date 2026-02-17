import { Button } from "../../ui/Button";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

export function Hero() {
    return (
        <section className="relative">
            <div className="w-full flex items-center pt-10 xl:pt-20 md:pb-29.25 px-4 md:px-15 xl:px-20 bg-[#021328]">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/hero-bg.png" 
                        alt="Background Grid" 
                        fill 
                        className="object-cover"
                        priority
                    />
                </div>
            
                <div className="container relative mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-23.25 md:gap-9.25 items-center">
                        {/* Left: Text Content */}
                        <div className="space-y-6 w-full xl:w-132.75">
                            <h1 className="text-[32px] xl:text-5xl font-bold leading-17 lg:leading-10 xl:leading-17 text-white">
                            Avoid <span className="text-[#4FC7FF]">Tax Wahala!</span> Stay Compliant While Paying the Lowest Possible Taxes.
                            </h1>
                            
                            <p className="text-base md:text-xl text-[#CCCCCC] leading-8.5">
                            No matter your tax needs, our tax experts will help you file with confidence and get the most value when you file your taxes.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6.5 pt-4">
                                <Button variant="primary">
                                    <FaWhatsapp  />
                                    Speak with an Expert
                                </Button>
                                
                                <Button variant="secondary">
                                    Access Your Tax Needs
                                </Button>
                            </div>
                        </div>

                        <div>
                            <div className="relative xl:pl-11.25 pb-[78.94px] rounded-3xl mx-auto">
                                
                                {/* Mobile Image (Hidden on lg screens and up) */}
                                <Image
                                    src="/hero-person-mobile.png"
                                    alt="Tax Oga Client"
                                    width={361}
                                    height={318}
                                    className="w-full h-auto object-cover lg:hidden"
                                    priority
                                />

                                {/* Desktop Image (Hidden on small screens, Block on lg and up) */}
                                <Image
                                    src="/hero-person.png"
                                    alt="Tax Oga Client"
                                    width={594}
                                    height={526}
                                    className="hidden lg:block w-full h-auto object-cover"
                                    priority
                                />

                                <div className="absolute -top-6 left-3 md:-left-4 md:top-8 h-39.75 md:h-[213.83px] px-[15.67px] md:px-4.5 py-[27.44px] md:py-[41.62] rounded-4xl md:rounded-[40px] backdrop-blur-md bg-white/5 border border-white/10 shadow-xl w-50.5 md:w-58">
                                    <div className="flex flex-col gap-2.5 md:gap-2 text-white items-center justify-center">
                                        <span className="text-sm md:text-base">Tunde&apos;s Estimated Refund</span>
                                        <span className="text-xl md:text-2xl font-bold">N450,000</span>
                                        <div className="bg-white rounded-sm py-[9.9px] md:py-3 px-[34.56px] md:px-9.25 w-full flex items-center justify-center gap-2 mt-1">
                                            <span className="text-sm font-bold text-gray-900">Filed</span>
                                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-22 lg:bottom-22 right-3 lg:right-3 md:bottom-30 md:right-10 px-5 py-3 lg:p-5 rounded-2xl lg:rounded-3xl bg-[#FFEED0] shadow-xl h-18 md:h-[117.61px] md:w-50.25 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                                    <div className="text-center">
                                        <p className="text-xl lg:text-2xl font-semibold text-black md:mb-3.25">N5,000</p>
                                        <p className="text-sm lg:text-base text-[#979797] md:font-medium">Taxes Due Today</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-51 w-full px-2 py-4.75 bg-[#E9E9E9] border border-[#E9E9E9] flex gap-3 sm:hidden">
                <Button variant="primary" size="sm">
                    <FaWhatsapp size={21} />
                    Speak with an Expert
                </Button>
                
                <Button variant="ghost" size="sm">
                    Seek Tax Support
                </Button>
            </div>
        </section>
    );
}