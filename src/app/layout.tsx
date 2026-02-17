import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ 
    subsets: ["latin"],
    variable: "--font-figtree",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "TaxOga - Tax Compliance Simplified",
    description: "Manage your taxes with ease.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning className={`${figtree.variable} min-h-screen bg-background antialiased`}>
                {children}
            </body>
        </html>
    );
}