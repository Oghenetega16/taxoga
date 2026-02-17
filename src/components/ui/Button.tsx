import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        const variants = {
            primary: "bg-[#2C59C3] px-4 py-2 cursor-pointer rounded-xl text-white hover:bg-blue-800 border border-transparent font-medium",
            secondary: "bg-white px-4 py-2 cursor-pointer rounded-xl text-[#2C59C3] hover:bg-blue-50 font-bold",
            outline: "bg-transparent px-4 cursor-pointer py-2 rounded-xl border-2 border-[#2C59C3] text-[#2C59C3] hover:bg-blue-50 font-bold",
            ghost: "bg-white px-4 py-2 cursor-pointer rounded-xl text-[#2C59C3] hover:bg-blue-50 border-2 border-[#2C59C3] font-bold",
            link: "bg-transparent px-4 cursor-pointer py-2 rounded-xl border-2 border-white text-white hover:bg-[#2C59C3] font-bold",
        };

        const sizes = {
            default: "h-11 px-6 py-2",
            sm: "h-[40px] px-4 text-sm",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";