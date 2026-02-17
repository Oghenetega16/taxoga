"use client";

import Image from "next/image";
import { Play, Star } from "lucide-react";
import { testimonials } from "@/data/home";
import { Testimonial } from "@/types/home";

// Duplicate data for infinite loop
const sliderData = [...testimonials, ...testimonials];

export function Testimonials() {
    return (
        <section className="py-20 bg-[#F2F2F2] overflow-hidden">
            {/* Custom Animation CSS */}
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: scroll 40s linear infinite; /* Slower speed for reading */
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="container mx-auto">
                {/* --- Header --- */}
                <div className="px-4 md:px-11 mb-7.25">
                    <span className="inline-flex items-center bg-linear-to-tr from-[#001F3F] to-[#003366] text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-[32px] font-bold text-[#001F3F] mb-6 leading-12.5">
                        Hear From Customer&apos;s We Serve.
                    </h2>
                    <p className="text-brand-gray text-lg md:text-xl leading-8.5">
                        Use the experience of our past customers to know if we&apos;re the right fit for you.
                    </p>
                </div>

                {/* --- Sliding Cards Container --- */}
                <div className="overflow-hidden">
                    <div className="flex gap-6 w-max animate-marquee px-4 lg:px-20">
                        {sliderData.map((item, index) => (
                            item.type === "video" ? (
                                <VideoCard key={`${item.id}-${index}`} data={item} />
                            ) : (
                                <TextCard key={`${item.id}-${index}`} data={item} />
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Sub-Component: Video Card ---
function VideoCard({ data }: { data: Testimonial }) {
    return (
        <div className="relative w-70 md:w-[320px] h-111.25 shrink-0 rounded-4xl overflow-hidden group cursor-pointer bg-black">
            {/* Background Image */}
            <Image
                src={data.image}
                alt={data.name}
                fill
                className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/40" />

            {/* Content Container */}
            <div className="absolute inset-0 px-3 py-6 lg:p-6 flex flex-col justify-between text-white">
                
                {/* TOP SECTION: Quote AND Name */}
                <div className="flex flex-col gap-3">
                    <p className="text-[15px] font-medium leading-relaxed opacity-95 line-clamp-4">
                        “{data.quote}”
                    </p>
                    <p className="font-bold text-lg">{data.name}</p>
                </div>

                {/* BOTTOM SECTION: Tag & Button */}
                <div className="flex items-center justify-between">
                    <span className="bg-linear-to-bl from-[#001F3F] to-[#003366]/20 text-white text-sm font-bold px-[17.5px] py-2.5 rounded-full capitalize">
                        {data.tag}
                    </span>
                    
                    <button className="flex items-center gap-2.5 bg-white text-[#001F3F] text-sm font-bold px-3 py-2.5 rounded-full hover:bg-gray-100 transition-colors">
                        Play Video
                        <div className="bg-[#001F3F] rounded-full w-4.75 h-4.75 flex items-center justify-center">
                            <Play className="w-2.25 h-2.25 text-white fill-current" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

// --- Sub-Component: Text Card ---
function TextCard({ data }: { data: Testimonial }) {
    return (
        // Added 'items-start' to fix alignment and prevent tag stretching
        <div className="w-70 md:w-[320px] h-111.25 shrink-0 bg-white rounded-4xl py-6 px-[15.55px] flex flex-col items-start shadow-sm">
            
            {/* 1. Avatar (Top Left) */}
            <div className="w-41 h-38.75 relative rounded-[40px] overflow-hidden mb-6 shrink-0">
                <Image 
                    src={data.image} 
                    alt={data.name} 
                    fill 
                    className="object-cover"
                />
            </div>

            {/* 2. Stars (Left Aligned) */}
            <div className="flex gap-1 mb-3 lg:mb-6">
                {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4.75 h-4.75 fill-brand-blue text-brand-blue" />
                ))}
            </div>

            {/* 3. Quote (Left Aligned) */}
            <blockquote className="text-[#4A5565] text-[15px] leading-relaxed">
                {data.quote}
            </blockquote>

            {/* 4. Name (Bold, Dark Blue) */}
            <div className="mb-4 mt-2 lg:mt-4">
                <p className="font-bold text-[#4A5565] text-xl leading-tight line-clamp-1">
                    {data.name}
                </p>
            </div>

            {/* 5. Tag (Bottom Left) - w-fit ensures it doesn't stretch */}
            <span className="w-fit bg-linear-to-bl from-[#001F3F] to-[#003366]/20 text-white text-sm font-bold px-[17.5px] py-2.5 rounded-full capitalize">
                {data.tag}
            </span>
        </div>
    );
}