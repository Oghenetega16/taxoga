import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { PiTiktokLogoBold } from "react-icons/pi";
import Logo from "../ui/Logo";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#012B56] text-white py-12 px-6 lg:px-20">
            <div className="container mx-auto">
                
                {/* --- TOP SECTION: LOGO & TAGLINE --- */}
                <div className="mb-10">
                    <div className="hidden mb-4 lg:block">
                        <Logo />
                    </div>

                    <div className="flex items-center gap-2 mb-4 lg:hidden">
                        <div className="w-8 h-8 rounded-[10px] bg-linear-to-t from-[#2ECC71] to-[#FFFFFF]"></div>
                        <p className="font-semibold text-white">Easy Tax</p>
                    </div>
    
                    {/* Mobile Tagline */}
                    <p className="text-brand-ash text-sm lg:hidden">
                        Making tax filing easy and compliant under Nigeria&apos;s new tax act 2025.
                    </p>
                    
                    {/* Desktop Tagline */}
                    <p className="hidden lg:block text-brand-ash text-sm mb-5.25">
                        Where everyday individuals and businesses get premium tax support.
                    </p>
                </div>

                {/* --- MAIN GRID --- */}
                <div className="text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 my-10 lg:justify-between">
                    {/* COLUMN 1: Personal Taxes */}
                    <div className="space-y-4">
                        <h3 className="font-bold leading-6 mb-5">File Your Personal Taxes</h3>
                        
                        {/* Mobile Links */}
                        <ul className="space-y-3 text-brand-ash text-sm lg:hidden">
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">File by Yourself</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">File with an Expert</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Diaspora Taxes</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Self Employed and Business Owners</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Freelancers</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Salary Earners</Link></li>
                        </ul>

                        {/* Desktop Links */}
                        <ul className="hidden lg:block space-y-3 text-brand-ash text-sm">
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Diaspora & International Taxes</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Self Employed and Business Owners</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Freelancers & Remote Workers</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Salary Earners</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 2: Company Taxes */}
                    <div className="space-y-4">
                        <h3 className="font-bold leading-6 mb-5">File Your Company Taxes</h3>
                        
                        {/* Mobile Links */}
                        <ul className="space-y-3 text-brand-ash text-sm lg:hidden">
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Small Business Owners</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Large Business</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Taxes for My Staff</Link></li>
                        </ul>

                        {/* Desktop Links */}
                        <ul className="hidden lg:block space-y-3 text-brand-ash text-sm">
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Small & Mid Sized Businesses</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Large Business</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 3: Tax Guides (Desktop Only) */}
                    <div className="hidden lg:block space-y-4">
                        <h3 className="font-bold leading-6 mb-5">Tax Guides</h3>

                        <ul className="hidden lg:block space-y-3 text-brand-ash text-sm">
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">How to file my personal taxes</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">How to file my business taxes</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">How to file diaspora taxes</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">How to file taxes for my staff</Link></li>
                            <li><Link href="#" className="leading-5 font-bold underline underline-offset-3">View all Guides</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 4: Resources */}
                    <div className="space-y-4">
                        <h3 className="font-bold leading-6 mb-5">Resources</h3>
                        
                        {/* Mobile Links */}
                        <ul className="space-y-3 text-brand-ash text-sm lg:hidden">
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Tax Calculator</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">AI for Tax</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Tax Community</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Blog</Link></li>
                        </ul>

                        {/* Desktop Links */}
                        <ul className="hidden lg:block space-y-3 text-brand-ash text-sm">
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Self Tax Assessment</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Tax Calculator</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Tax Chatbot</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Tax Community</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Blog</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 5: Quick Links (Shared) */}
                    <div className="space-y-4">
                        <h3 className="font-bold leading-6 mb-5">Quick Links</h3>

                        <ul className="space-y-3 text-brand-ash text-sm">
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">About Us</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">How It Works</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Privacy Policy</Link></li>
                            <li><Link href="#" className="leading-5 hover:text-white hover:underline">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* --- BOTTOM SECTION: CONTACT & SOCIALS --- */}
                <div className="flex flex-col gap-4 text-white">
                    <h3 className="font-bold leading-6">Connect With Us</h3>
                    
                    {/* WhatsApp Link */}
                    <Link href="#" className="flex items-center gap-2">
                        <FaWhatsapp size={21} />
                        <span className="font-sm leading-5">WhatsApp: +234 800 123 4567</span>
                    </Link>

                    {/* Social Icons Row */}
                    <div className="flex gap-3 lg:mb-8">
                        <SocialLink href="#"><Facebook className="w-4 h-4" /></SocialLink>
                        <SocialLink href="#"><Twitter className="w-4 h-4" /></SocialLink>
                        <SocialLink href="#"><Instagram className="w-4 h-4" /></SocialLink>
                        <SocialLink href="#"><Linkedin className="w-4 h-4" /></SocialLink>
                        <SocialLink href="#"><PiTiktokLogoBold /></SocialLink>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 lg:pt-8.25 border-t border-white/10 text-center text-sm text-brand-ash leading-6">
                    <p>© {currentYear} TaxEase NG. All rights reserved. Built for compliance with Nigeria Tax Act 2025.</p>
                </div>
            </div>
        </footer>
    );
}

// --- Helper Components ---

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link 
            href={href} 
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-blue transition-colors"
        >
            {children}
        </Link>
    );
}
