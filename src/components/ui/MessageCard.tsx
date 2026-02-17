"use client";

import Image from "next/image";
import MessageIconSrc from "../../../public/messageSquare.svg"

interface MessageCardProps {
    intro: string;
    message: string;
    className?: string;
}

export function MessageCard({ 
    intro, 
    message,
    className = ""
}: MessageCardProps) {

    return (
        <div className={`w-90.25 h-31.25 lg:w-170.25 lg:h-28.25 bg-white rounded-4xl shadow-xl p-6 inline-flex items-center gap-5.75 border border-brand-blue ${className}`}>
            <div className="w-16.25 h-16.25 bg-brand-blue rounded-xl flex items-center justify-center shrink-0">
                <Image 
                    src={MessageIconSrc} 
                    alt="Message Icon" 
                    className="w-8 h-8"
                />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2">
                <h4 className="bg-linear-to-b from-brand-lue via-[#173780] to-[#000000] bg-clip-text text-transparent font-bold text-base md:text-[18px] leading-7.5 xl:leading-8.5">
                    {intro}
                </h4>
                <p className="text-[#000000] text-sm md:text-base font-medium leading-6 xl:leading-8.5">
                    {message}
                </p>
            </div>
        </div>
    );
}