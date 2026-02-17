import Image from "next/image"

import taxOgaLogo from "../../../public/tax-oga.png" 

export default function Logo() {
    return (
        <Image 
            src={taxOgaLogo} 
            alt="Tax Oga Logo" 
            priority
        />
    )
}