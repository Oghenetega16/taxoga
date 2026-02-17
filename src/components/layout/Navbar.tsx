"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Equal, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Logo from "../ui/Logo";
import { FaWhatsapp } from "react-icons/fa6";

interface NavbarProps {
    isCalculatorPage?: boolean;
}

export function Navbar({ isCalculatorPage = false }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navLinks = [
        { 
            label: "Tax Resources", 
            href: "#", 
            hasDropdown: true,
            dropdownItems: [
                { label: "Tax Calculator", href: "/tax-calculator" }, // Links to the calculator page
                { label: "Tax Guide", href: "#" },
                { label: "Blog", href: "#" }
            ]
        },
        { 
            label: isCalculatorPage ? "Company Registration" : "Tax Calculator", 
            href: isCalculatorPage ? "#" : "/tax-calculator", 
            highlight: true 
        },
        { label: "Pricing", href: "#" },
        { label: "Success Stories", href: "#" },
    ];

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <header className="sticky top-0 z-50 w-full h-15.5 md:h-18.75 bg-white border-b border-[#E9E9E9] px-4 md:px-15 lg:px-20">
            <div className="flex items-center h-full justify-between gap-[65.64px] py-5.25 md:py-[16.5px]">
                {/* 1. Logo Section */}
                <Link href="/">
                    <Logo />
                </Link>

                {/* 2. Desktop Navigation */}
                <nav className="hidden md:flex items-center md:gap-5 lg:gap-8" ref={dropdownRef}>
                    {navLinks.map((link) => (
                        <div key={link.label} className="relative group">
                            <Link
                                href={link.href}
                                onClick={(e) => {
                                    if (link.hasDropdown) {
                                        e.preventDefault();
                                        toggleDropdown(link.label);
                                    }
                                }}
                                className={`flex items-center text-sm font-normal transition-colors hover:text-brand-blue ${
                                    link.highlight ? "text-brand-blue" : "text-brand-black"
                                }`}
                            >
                                {link.label}
                                {link.hasDropdown && (
                                    <ChevronDown 
                                        className={`w-4 h-4 ml-1 opacity-70 transition-transform duration-200 ${
                                            openDropdown === link.label ? "rotate-180" : ""
                                        }`} 
                                    />
                                )}
                            </Link>

                            {/* Desktop Dropdown Menu */}
                            {link.hasDropdown && openDropdown === link.label && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#E9E9E9] rounded-xl shadow-lg py-2 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                                    {link.dropdownItems?.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="px-4 py-2.5 text-sm text-brand-black hover:bg-gray-50 hover:text-brand-blue transition-colors text-left"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
                
                {/* 3. Action Buttons */}
                <div className="hidden xl:flex items-center gap-3 lg:gap-2 xl:gap-3">
                    <Link href="/login" className="text-sm font-bold text-brand-gray hover:text-brand-blue underline decoration-2 underline-offset-4 mr-2">
                        Login
                    </Link>
                    
                    <Button variant="primary">
                        <FaWhatsapp size={21} />
                        Speak with an Expert
                    </Button>
                    
                    <Button variant="outline">
                        Seek Tax Support
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-brand-gray"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Equal />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.label} className="flex flex-col">
                            <div 
                                className="flex items-center justify-between"
                                onClick={() => link.hasDropdown && toggleDropdown(link.label)}
                            >
                                <Link
                                    href={link.href}
                                    onClick={(e) => link.hasDropdown && e.preventDefault()}
                                    className={`text-lg font-medium p-2 rounded-md hover:bg-gray-50 flex-1 ${
                                        link.highlight ? "text-brand-blue" : "text-gray-700"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                                {link.hasDropdown && (
                                    <ChevronDown 
                                        className={`w-5 h-5 text-gray-500 mr-2 transition-transform ${
                                            openDropdown === link.label ? "rotate-180" : ""
                                        }`} 
                                    />
                                )}
                            </div>

                            {/* Mobile Dropdown Items */}
                            {link.hasDropdown && openDropdown === link.label && (
                                <div className="flex flex-col pl-6 gap-2 mt-1 border-l-2 border-gray-100 ml-4">
                                    {link.dropdownItems?.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="text-base text-gray-600 py-2 hover:text-brand-blue"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    
                    <div className="h-px bg-gray-100 my-2" />
                    <Link href="/login" className="text-lg font-bold text-gray-700 p-2">
                        Login
                    </Link>
                    <Button className="w-full justify-center">
                        <FaWhatsapp size={21} />
                        Speak with an Expert
                    </Button>
                    <Button variant="outline" className="w-full justify-center">
                        Seek Tax Support
                    </Button>
                </div>
            )}
        </header>
    );
}