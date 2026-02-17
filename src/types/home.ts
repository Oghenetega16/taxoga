export type TrustCardProps = {
    id: number;
    tag: string;
    title: string;
    first_para: string;
    second_para: string;
    stat: string;
    image: string;
    theme: "blue" | "orange" | "green" | "teal" | "purple";
};

export type Testimonial = {
    type: "video" | "text";
    id: number;
    name: string;
    roleOrBusiness?: string;
    quote: string;
    image: string;
    tag: "Company Tax" | "Personal Tax";
};