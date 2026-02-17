"use client";

import Image from "next/image";

export function Chat() {
    return (
        <button
            className={`hidden absolute bottom-5 right-6 xl:bottom-5 xl:right-20 lg:right-4 z-80 group md:inline-flex w-fit items-center gap-2.5 bg-linear-to-tr from-[#001F3F] to-[#003366] text-white py-2.25 px-[11.5px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95`}
        >
            {/* Avatar Container */}
            <div className="relative md:w-5 xl:w-8 md:h-5 xl:h-8 rounded-full overflow-hidden border-2 border-white/20">
                <Image
                    src="/tunde-avatar.png" 
                    alt="Tunde"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Text */}
            <span className="text-xs xl:font-bold xl:text-sm text-white whitespace-nowrap">
                Chat with Tunde
            </span>
        </button>
    );
}