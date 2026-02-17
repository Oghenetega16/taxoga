import { TrustCardProps, Testimonial } from "@/types/home";


export const services = [
    {
        id: 1,
        title: "Property Owners and Landlords",
        first_paragraph: "You worked hard to own it — we'll make sure you keep more of what you earn from it.",
        second_paragraph: "The 2025 Tax Act now makes rental income taxable, and property sales may attract capital gains tax. We make it easy to calculate what’s due, file on time, and avoid overpaying. Whether you own a single flat or multiple estates, we help you stay compliant while protecting your income",
        image: "/service-1.png", 
        color: "bg-brand-indigo", 
        textColor: "text-white",
    },
    {
        id: 2,
        title: "Remote Workers and Freelancers",
        first_paragraph: "You shouldn't need to be a tax expert to earn from anywhere — we'll handle that part.",
        second_paragraph: "Whether you’re a designer, writer, developer, or influencer — your income still falls under the new digital and foreign income tax rules. We help you file correctly, track what’s taxable, and avoid penalties for unreported earnings. No jargon. No fear. Just clarity.",
        image: "/service-2.png", 
        color: "bg-brand-mint", 
        textColor: "text-white",
    },
    {
        id: 3,
        title: "Large Businesses",
        first_paragraph: "We keep your business ahead of FIRS changes — not chasing them.",
        second_paragraph: "The new Tax Act holds large corporations to higher standards of transparency and reporting — from company income tax to withholding and VAT filings. We help your finance and audit teams stay fully compliant, avoid penalties, and file accurately. No more late filings, confusing updates, or system errors. You get structure, accountability, and peace of mind.",
        image: "/service-3.png", 
        color: "bg-linear-to-tr from-[#001F3F] to-[#003366]", 
        textColor: "text-white",
    },
    {
        id: 4,
        title: "Salary Earners (Public and Private)",
        first_paragraph: "We help you make sense of your payslip — and make sure your hard-earned money works for you.",
        second_paragraph: "Even if your employer remits your PAYE, the Tax Act still gives you rights — to reliefs, refunds, and accurate filing. We help you verify what’s been paid, claim what’s yours, and stay compliant if you have side income or multiple jobs.",
        image: "/service-4.png",
        color: "bg-brand-green", 
        textColor: "text-white",
    },
    {
        id: 5,
        title: "Small Business Owners",
        first_paragraph: "We help small businesses stay compliant, save money, and sleep well at night.",
        second_paragraph: "Running a small business is already tough — tax shouldn’t make it harder. The new law requires most registered businesses to file annual returns, even if they made no profit. We help you understand what’s required, file quickly, and get your Tax Clearance Certificate (TCC) without stress.",
        image: "/service-5.png", 
        color: "bg-brand-orange", 
        textColor: "text-white",
    },
];

export const trustData: TrustCardProps[] = [
    {
        id: 1,
        tag: "Save as Much as Possible",
        title: "Legally Maximize Your Returns",
        first_para: "Our goal isn’t just to file your taxes — it’s to keep more money in your pocket",
        second_para: "We claim every legal relief and deduction you qualify for, from pensions, to rent — so you keep more of your money, legally.",
        stat: "Over ₦100M Saved",
        image: "/trust-1.png", 
        theme: "blue",
    },
    {
        id: 2,
        tag: "Trust & Experience",
        title: "Experience You Can Count On",
        first_para: "We speak the language of FIRS — and translate it into results for you.",
        second_para: "We’ve helped individuals, freelancers, and businesses navigate Nigeria’s complex tax system. You get local insight and proven results — not guesswork.",
        stat: "200+ Returns Filed",
        image: "/trust-2.png", 
        theme: "orange",
    },
    {
        id: 3,
        tag: "Razor Sharp Accuracy",
        title: "Accuracy That Protects You",
        first_para: "Because one wrong entry can cost you — we make sure it never does.",
        second_para: "We’ve helped individuals, freelancers, and businesses navigate Nigeria’s complex tax system. You get local insight and proven results — not guesswork.",
        stat: "0% Tax Errors",
        image: "/trust-3.png", 
        theme: "green",
    },
    {
        id: 4,
        tag: "Tax Experts Who Care",
        title: "Real Support From Real People",
        first_para: "Because good tax support should sound like a conversation, not a lecture.",
        second_para: "Our team of Nigerian tax experts is here to help by chat or phone — simple answers, no jargon.",
        stat: "Thoughtful Experts",
        image: "/trust-4.png", 
        theme: "teal",
    },
    {
        id: 5,
        tag: "Transparent Fees and Process",
        title: "Transparent From Start to Finish",
        first_para: "Trust starts with transparency — and we build it into every filing.",
        second_para: "You always know what’s filed, what’s due, and what you’re paying for. No hidden charges, no inflated numbers.",
        stat: "You're In Control",
        image: "/trust-5.png", 
        theme: "purple",
    },
];

export const testimonials: Testimonial[] = [
    {
        type: "video",
        id: 1,
        quote: "Choosing the right tax plan is crucial for success. Whether a freelancer, business owner, or employee",
        name: "Juicy Fruit Ltd.",
        image: "/testimonial.png", 
        tag: "Company Tax",
    },
    {
        type: "text",
        id: 2,
        name: "Maryam Musa, CEO Meck Doramen",
        quote: "“The tax assessment tool is incredibly useful! It simplifies the process of evaluating my tax situation, making it”",
        image: "/avatar-1.png", 
        tag: "Personal Tax",
    },
    {
        type: "video",
        id: 3,
        quote: "Choosing the right tax plan is crucial for success. Whether a freelancer, business owner, or employee",
        name: "Nancy Ogunlise",
        image: "/testimonial-2.png", 
        tag: "Personal Tax",
    },
    {
        type: "text",
        id: 4,
        name: "Maryam Musa",
        roleOrBusiness: "CEO Meck Doramen",
        quote: "“The tax assessment tool is incredibly useful! It simplifies the process of evaluating my tax situation, making it”",
        image: "/avatar-1.png", 
        tag: "Personal Tax",
    },
    {
        type: "video",
        id: 5,
        quote: "Choosing the right tax plan is crucial for success. Whether a freelancer, business owner, or employee",
        name: "James Barber's Shop",
        image: "/testimonial-3.png", 
        tag: "Company Tax",
    },
];

export const steps = [
    {
        id: 1,
        number: "1",
        mobile_title: "Choose the Right Tax Plan.",
        desktop_title: "Identify the Taxes You Need to File",
        mobile_description: "Choosing the right tax plan is crucial for success. Whether a freelancer, business owner, or employee, consider your situation. Options like File with an Expert, Expert Assist, and File by Myself help you maximize your return.",
        desktop_description: "Use our self-assessment tool or speak directly with a tax expert to confirm your obligations. We handle VAT, PAYE, Withholding Tax, Company Income Tax (CIT), and Personal Income Tax (PIT).",
    },
    {
        id: 2,
        number: "2",
        mobile_title: "File Your Tax Return.",
        desktop_title: "Pay Filing fee and Submit Documents",
        mobile_description: "Regardless of your tax situation, you can file confidently with the help of an expert, tackle it on your own, or utilize AI assistance. Each method ensures you maximize your return and receive the best value.",
        desktop_description: "Once payment is made, share the required documents with our tax experts. We prepare and file your taxes on your behalf, while optimizing for legitimate tax savings.",
    },
    {
        id: 3,
        number: "3",
        mobile_title: "Claim Your Refund or Pay Your Taxes.",
        desktop_title: "Get Confirmation and Proof of Filing",
        mobile_description: "No matter your tax needs, file with confidence and get the most out of your return.",
        desktop_description: "You’ll receive an alert once your taxes have been successfully filed, along with proof of filing and a tax clearance certificate where applicable."
    }
];

export const faqData = [
    {
        question: "What is included in audit protection?",
        answer: "Tax audit protection typically includes services that help you navigate the complexities of an audit. This can involve professional representation, assistance with documentation, and guidance on how to respond to inquiries from tax authorities. Additionally, it may cover the costs associated with legal fees and any potential penalties, ensuring you have support throughout the audit process."
    },
    {
        question: "How do I file my taxes as a freelancer?",
        answer: "As a freelancer, you'll need to calculate your total income, deduct legitimate business expenses, and determine your tax liability. Our platform simplifies this by allowing you to input your earnings and expenses, automatically calculating what you owe based on current tax laws."
    },
    {
        question: "Can I file taxes for previous years?",
        answer: "Yes, you can file for previous years. It is important to stay compliant to avoid penalties. Our experts can help you assess your back taxes and create a payment plan or filing strategy to get you up to date with the tax authorities."
    }
];

export const discussions = [
    {
        likes: 12,
        question: "How can I avoid Tax?",
        preview: "I work as a civil servant in Lagos and I'm trying to understand how to calculate my taxable income. Do I include all allowances? What about housing ...",
        author: "Adebayo M.",
        time: "2 hours ago",
        answers: 1,
    },
    {
        likes: 12,
        question: "How can I avoid Tax?",
        preview: "I work as a civil servant in Lagos and I'm trying to understand how to calculate my taxable income. Do I include all allowances? What about housing ...",
        author: "Adebayo M.",
        time: "2 hours ago",
        answers: 5,
    },
    {
        likes: 12,
        question: "How can I avoid Tax?",
        preview: "I work as a civil servant in Lagos and I'm trying to understand how to calculate my taxable income. Do I include all allowances? What about housing ...",
        author: "Adebayo M.",
        time: "2 hours ago",
        answers: 5,
    },
];