export interface HeaderProps {
    activeTab: "Personal" | "Company";
    setActiveTab: (tab: "Personal" | "Company") => void;
}

export interface TaxResultCardProps {
    taxPayable?: number;
    effectiveRate?: number;
}

export interface BreakdownItemData {
    taxBand?: string;     
    rate: number;         
    taxableAmount: number; 
    taxAmount: number;    
}

export interface TaxBreakdownProps {
    activeTab: "Personal" | "Company";
    breakdown?: BreakdownItemData[]; 
    isTaxFree?: boolean;
    companyTaxRate?: number;
    taxableIncome?: number;
}

export interface IncomeSummaryProps {
    grossIncome?: number;
    taxableIncome?: number;
    taxPayable?: number;
    netIncome?: number;
}

export interface Industry {
    id: string;
    name: string;
    extraProperties: {
        RequiresIncomeTax: boolean;
        HasExemptionPeriod: boolean;
        ExemptionPeriodYears: number;
    };
    }

export interface CompanyConfig {
    TaxRate: number;
    TaxableAmountThreshold: number;
}

export interface PersonalFormState {
    salaryIncome: number | string;
    businessIncome: number | string;
    rentalIncome: number | string;
    investmentIncome: number | string;
    otherIncome: number | string;
    rent: number | string;
    pensionContribution: number | string;
    nhfContribution: number | string;
    lifeInsurance: number | string;
    nhisPremium: number | string;
    gratuity: number | string;
}

export interface CompanyFormState {
    industryId: string;
    revenueOption: string;
    madeProfit: string;
    incorporationYear: string;
    totalNetProfit: number | string;
}

export interface TaxFormProps {
    activeTab: "Personal" | "Company";
    industries: Industry[];
    companyConfig: CompanyConfig | null;
    personalForm: PersonalFormState;
    companyForm: CompanyFormState;
    setPersonalForm: (data: PersonalFormState) => void;
    setCompanyForm: (data: CompanyFormState) => void;
    onCalculate: () => void;
    onReset: () => void;
    isLoading: boolean;
}

export interface FormattedInputProps {
    label: string;
    value: string | number | undefined;
    onChange?: (val: string) => void;
    isYear?: boolean;
    prefix?: string;
}

export interface TaxExemptionToastProps {
    show: boolean;
    onClose: () => void;
    threshold: string;
}

export interface CompanySectionProps {
    form: CompanyFormState;
    onChange: (field: keyof CompanyFormState, value: string) => void;
    industries: Industry[];
    formattedThreshold: string;
    onReset: () => void;
}

export interface PersonalSectionProps {
    form: PersonalFormState;
    onChange: (field: keyof PersonalFormState, value: string) => void;
    onCalculate: () => void;
    onReset: () => void;
    isLoading: boolean;
}

interface RawIndustry {
    id: string;
    name: string;
    extraProperty: string | null; 
}

export interface SystemConfigResponse {
    value: {
        value: {
            value: string; 
        }
    }
}

export interface ParsedConfig {
    TaxRate?: number;
    TaxableAmountThreshold?: number;
}

export interface IndustriesResponse {
    value: {
        value: {
            data: RawIndustry[];
        }
    }
}

export interface PersonalTaxResponse {
    taxPayable: number;
    grossIncome: number;
    totalRelief: number;
    taxableIncome: number;
    taxBandBreakdown: BreakdownItemData[];
}

export interface CalculationResult {
    taxPayable: number;
    grossIncome: number;
    deductions: number;
    taxableIncome: number;
    netIncome: number;
    breakdown: BreakdownItemData[];
    isTaxFree: boolean;
    effectiveRate: number;
}