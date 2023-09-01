import { FieldErrors, UseFormRegister, ValidationRule } from "react-hook-form"

// === general sections data ===

export type SectionTitle = {
    main: string,
    accent: string,
}

export type FormContent = {
    inputs: InputInfo[],
    textarea: TextAreaInfo,
    policy?: CareerPolicy,
}

export type FormData = {
    name: string,
    email: string,
    position?: string,
    phone?: string,
    message: string,
    consent?: boolean,
};

export type FormDataOptions = "name" | "email" | "position" | "phone" | "message" | "consent";

export type InputInfo = {
    id: string,
    type: string,
    autoComplete: string,
    placeholder: string,
    aria: string,
    error: string | null,
    required: boolean,
    pattern?: ValidationRule<RegExp>,
    minLength?: ValidationRule<number>,
    label: string,
    formData: FormDataOptions
}

export type InputOptions = {
    required: boolean,
    pattern?: ValidationRule<RegExp>,
    minLength?: ValidationRule<number>,
}

export type TextAreaInfo = {
    id: string,
    autoComplete: string,
    aria: string,
    label: string,
    formData: FormDataOptions
}

// === hero ===

export type HeroData = {
    pageTitle: string,
    sectionTitle: SectionTitle,
    description: string,
    cityList: string,
}

// === about ===

export type AboutDescription = {
    accent: string,
    main: string,
}

export type AboutSlogan = {
    from: string,
    to: string,
    offer: string,
}

export type AboutData = {
    sectionTitle: SectionTitle,
    description: AboutDescription[],
    slogan: AboutSlogan,
}

// === services ===

export interface ServiceSlide {
    id: number;
    bg: string;
    image: string;
    promo: string;
    title: string;
    text: string;
}

//  === career ===

export type CareerBenefit = {
    name: string,
    description: string,
}

export type CareerData = {
    sectionTitle: SectionTitle,
    description: string,
    subtitle: string,
    benefits: CareerBenefit[],
}

export type CareerPolicy = {
    text: string,
    error: string,
    formData: FormDataOptions
}

export type CareerForm = {
    description: string,
    formContent: FormContent,
}

// === contacts ===

export type Contact = {
    name: string,
    contacts: string[]
}

export type Social = {
    title: string,
    link: string
}

export type Socials = {
    name: string,
    contacts: Social[]
}

export type ContactData = {
    sectionTitle: SectionTitle,
    phone: Contact,
    email: Contact,
    socials: Socials
}

export type ContactForm = {
    formContent: FormContent,
}

// === props ===

export type HeaderNavProps = {
    menuOpen: boolean,
    handleNavLinkClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    toggleMobileMenu: () => void,
}

export type SectionTitleProps = {
    title: SectionTitle,
    titleStyles: string,
}

export type ServiceProps = {
    image: string,
    promo: string,
    title: string,
    text: string,
}

export type ServiceMenuProps = {
    slideNum: number,
    promo: string,
    handleMenuOptionSelect: (e: React.MouseEvent<HTMLLIElement>) => void,
}

export type FormInputProps = {
    inputInfo: InputInfo,
    inputStyles?: string,
    register: UseFormRegister<FormData>,
    errors: FieldErrors<FormData>
}

export type FormTextAreaProps = {
    textarea: TextAreaInfo,
    textAreaStyles: string,
    register: UseFormRegister<FormData>,
}

export type FormPolicyProps = {
    policy: CareerPolicy,
    register: UseFormRegister<FormData>,
    errors: FieldErrors<FormData>
}

export type GalleryNavProps = {
    swiperReady: boolean,
    prevBtnRef: React.RefObject<HTMLButtonElement>,
    nextBtnRef: React.RefObject<HTMLButtonElement>,
}

export type GallerySlideProps = {
    isActive: boolean,
    img: string,
}
