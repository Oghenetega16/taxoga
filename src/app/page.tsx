import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Community } from "@/components/sections/home/Community";
import { FAQ } from "@/components/sections/home/FAQ";
import { GetStarted } from "@/components/sections/home/GetStarted";
import { Hero } from "@/components/sections/home/Hero";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Trust } from "@/components/sections/home/Trust";
import { WhoWeServe } from "@/components/sections/home/WhoWeServe";
import { Chat } from "@/components/ui/Chat";
import { MessageCard } from "@/components/ui/MessageCard";
import MessageIconSrc from "../../public/messageSquare.svg"

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="relative">
                <Hero />
                <Chat />
                <div className="absolute -bottom-45 md:-bottom-35 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                    <MessageCard 
                        intro="Did you know?" 
                        message="You don’t need to pay tax if you earn more than N50 Million Naira"
                        className="z-80 md:-mr-10"
                    />

                    <div className="hidden md:flex">
                        <MessageCard 
                            intro="I am Tunder" 
                            message="Ask me anything about taxes in Nigeria." 
                            className="z-20 -mt-5"
                        />
                    </div>
                    <div className="hidden w-16.25 h-16.25 bg-brand-blue rounded-xl md:flex items-center justify-center">
                        <Image 
                            src={MessageIconSrc} 
                            alt="Message Icon" 
                            className="w-8 h-8" 
                            // Note: 'fill-white' wont work here. The SVG must be white text internally.
                        />
                    </div>
                </div>
            </div>

            <HowItWorks />
            <WhoWeServe />
            <Trust />
            <Testimonials />
            <Community />

            <div className="bg-white pl-5 pr-3 md:px-15 lg:px-20">
                <FAQ />
                <GetStarted />
            </div>
            <Footer />
        </div>
    );
}
