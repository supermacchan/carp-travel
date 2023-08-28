export interface Slide {
    id: number;
    bg: string;
    image: string;
    promo: string;
    title: string;
    text: string;
}

export type ServiceProps = {
    image: string;
    promo: string;
    title: string;
    text: string;
}

export type ServiceMenuProps = {
    slideNum: number,
    promo: string,
    handleMenuOptionSelect: (e: React.MouseEvent<HTMLLIElement>) => void
}

export type CareerFormData = {
    name: string;
    email: string;
    position: string;
    phone: string;
    message: string;
    consent: boolean;
};

export type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

