```markdown
# TaxOga - Nigeria Tax & Business Platform 🇳🇬

A comprehensive, real-time tax calculator built with **Next.js**, **React**, and **Tailwind CSS**. This application helps individuals and businesses estimate their tax liabilities based on the latest Nigerian Finance Act (2025), supporting both Personal Income Tax (PAYE) and Company Income Tax (CIT).

## 🚀 Features

### 🏠 Home Page (Landing)
The entry point to the platform, designed for conversion and clarity.
- **Hero Section:** Engaging introduction with clear calls-to-action (CTA) for business registration and tax tools.
- **Service Highlights:** Overview of core services (Company Registration, Tax Filing, Advisory).
- **Responsive Navigation:** Mobile-friendly menu with dropdowns for easy access to resources like the Tax Guide and Blog.
- **Trust Indicators:** Sections for "Success Stories" and "Pricing" to build user confidence.

### 🧮 Tax Calculator Tool
An advanced tool for estimating tax liabilities in real-time.
- **Dual Modes:**
  - **Personal Income Tax (PAYE):** Accurate calculation of Consolidated Relief Allowance (CRA), tax-exempt deductions (Pension, NHF, NHIS, Gratuity), and the 6-tier tax band system.
  - **Company Income Tax (CIT):** Handles industry-specific rules, revenue thresholds (Small vs. Medium/Large business), and tax exemptions based on profit status.
- **Smart Logic:**
  - Automatically detects tax-exempt status (e.g., Revenue < ₦25M).
  - Fetches dynamic rates from the backend API.
  - Fallback logic ensures calculations work even if the API is unreachable.
- **Interactive UI:**
  - **Sticky Result Card:** Keeps the "Tax Payable" summary visible while scrolling on desktop.
  - **Visual Breakdown:** Progress bars showing exactly how income is split across tax bands.
  - **Toast Notifications:** Instant feedback for exemptions (e.g., "Your revenue is less than ₦25M").

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Hooks (Custom `useTaxCalculator` hook)
- **Formatting:** `Intl.NumberFormat` for currency handling

## 📂 Project Structure

The project is organized for scalability, separating UI components from logic.

```text
src/
├── app/
│   ├── tax-calculator/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── home/
│   │   │   ├── Community.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── GetStarted.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Testimonial.tsx
│   │   │   ├── Trust.tsx
│   │   │   └── WhoWeServe.tsx
│   │   └── tax-calculator/
│   │       ├── CompanySection.tsx
│   │       ├── FormattedInput.tsx
│   │       ├── IncomeSummary.tsx
│   │       ├── PersonalSection.tsx
│   │       ├── TaxBracketsTable.tsx
│   │       ├── TaxBreakdown.tsx
│   │       ├── TaxCalculator.tsx
│   │       ├── TaxCalculatorHeader.tsx
│   │       ├── TaxExemptionToast.tsx
│   │       ├── TaxForm.tsx
│   │       └── TaxResultCard.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Chat.tsx
│       ├── Logo.tsx
│       └── MessageCard.tsx
├── data/
│   └── home.ts
├── hooks/
│   └── useTaxCalculator.ts
├── lib/
│   └── utils.ts
└── types/
    ├── home.ts
    └── tax.ts

```

## 🚀 Getting Started

### Prerequisites

* Node.js 18.17 or later
* npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/Oghenetega16/taxoga.git](https://github.com/Oghenetega16/taxoga.git)
cd tax-calculator

```


2. **Install dependencies:**
```bash
npm install
# or
yarn install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Open your browser:**
Navigate to [https://taxoga-zeta.vercel.app/] to see the application.

## ⚙️ Configuration

The application fetches dynamic configuration (Tax Rates and Thresholds) from the backend API on load.

* **API Endpoint:** `https://api.taxoga.com/public/system-configuration/`
* **Fallback Logic:** If the API fails or returns incomplete data, the application falls back to a robust local calculation logic compliant with the **2025 Nigerian Tax Act**.

## 🧩 Key Logic Explained

### Personal Tax (PAYE)

Calculated using the standard graduated tax bands:

1. **Consolidated Relief Allowance (CRA):** Higher of ₦200k or 1% Gross Income + 20% of Gross Income.
2. **Taxable Income:** Gross Income - (CRA + Pension + NHF + Health Insurance).
3. **Tax Bands:**
* First ₦800k @ 0%
* Next ₦2.2M @ 15%
* Next ₦9M @ 18%
* (and so on...)


### Company Income Tax (CIT)

* **Small Company (Revenue < ₦25M):** 0% Tax rate.
* **Medium Company (Revenue > ₦25M):** Standard CIT rate (defaults to 25% or as returned by API).
* **Profit Check:** Tax is only calculated if the business declares a profit.

## 📄 License

This project is licensed under the MIT License. 

```

```