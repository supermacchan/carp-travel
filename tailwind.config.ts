import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-gradient': 'linear-gradient(180deg, rgba(0, 24, 38, 0.5) 0%, rgba(0, 37, 49, 0.00) 100%)',
        'section-top-gradient': 'linear-gradient(180deg, #002426 0%, rgba(0, 37, 49, 0.00) 100%)',
        'section-bottom-gradient': 'linear-gradient(0deg, #002426 0%, rgba(0, 37, 49, 0.00) 100%)',
        'bg-hero-mob': 'image-set(url("/images/bg-hero-mob.jpg") 1x,url("/images/bg-hero-mob@2x.jpg") 2x)',
        'bg-hero-tab': 'image-set(url("/images/bg-hero-tab.jpg") 1x,url("/images/bg-hero-tab@2x.jpg") 2x)',
        'bg-hero-desk': 'image-set(url("/images/bg-hero-desk.jpg") 1x,url("/images/bg-hero-desk@2x.jpg") 2x)',
        'bg-about-mob': 'image-set(url("/images/bg-about-mob.jpg") 1x,url("/images/bg-about-mob@2x.jpg") 2x)',
        'bg-about-tab': 'image-set(url("/images/bg-about-tab.jpg") 1x,url("/images/bg-about-tab@2x.jpg") 2x)',
        'bg-about-desk': 'image-set(url("/images/bg-about-desk.jpg") 1x,url("/images/bg-about-desk@2x.jpg") 2x)',
        'bg-services-1-mob': 'image-set(url("/images/bg-services-1-mob.jpg") 1x,url("/images/bg-services-1-mob@2x.jpg") 2x)',
        'bg-services-1-tab': 'image-set(url("/images/bg-services-1-tab.jpg") 1x,url("/images/bg-services-1-tab@2x.jpg") 2x)',
        'bg-services-1-desk': 'image-set(url("/images/bg-services-1-desk.jpg") 1x,url("/images/bg-services-1-desk@2x.jpg") 2x)',
        'bg-services-2-mob': 'image-set(url("/images/bg-services-2-mob.jpg") 1x,url("/images/bg-services-2-mob@2x.jpg") 2x)',
        'bg-services-2-tab': 'image-set(url("/images/bg-services-2-tab.jpg") 1x,url("/images/bg-services-2-tab@2x.jpg") 2x)',
        'bg-services-2-desk': 'image-set(url("/images/bg-services-2-desk.jpg") 1x,url("/images/bg-services-2-desk@2x.jpg") 2x)',
        'bg-services-3-mob': 'image-set(url("/images/bg-services-3-mob.jpg") 1x,url("/images/bg-services-3-mob@2x.jpg") 2x)',
        'bg-services-3-tab': 'image-set(url("/images/bg-services-3-tab.jpg") 1x,url("/images/bg-services-3-tab@2x.jpg") 2x)',
        'bg-services-3-desk': 'image-set(url("/images/bg-services-3-desk.jpg") 1x,url("/images/bg-services-3-desk@2x.jpg") 2x)',
        'bg-services-4-mob': 'image-set(url("/images/bg-services-4-mob.jpg") 1x,url("/images/bg-services-4-mob@2x.jpg") 2x)',
        'bg-services-4-tab': 'image-set(url("/images/bg-services-4-tab.jpg") 1x,url("/images/bg-services-4-tab@2x.jpg") 2x)',
        'bg-services-4-desk': 'image-set(url("/images/bg-services-4-desk.jpg") 1x,url("/images/bg-services-4-desk@2x.jpg") 2x)',
        'bg-services-5-mob': 'image-set(url("/images/bg-services-5-mob.jpg") 1x,url("/images/bg-services-5-mob@2x.jpg") 2x)',
        'bg-services-5-tab': 'image-set(url("/images/bg-services-5-tab.jpg") 1x,url("/images/bg-services-5-tab@2x.jpg") 2x)',
        'bg-services-5-desk': 'image-set(url("/images/bg-services-5-desk.jpg") 1x,url("/images/bg-services-5-desk@2x.jpg") 2x)',
        'bg-career-mob': 'image-set(url("/images/bg-career-mob.jpg") 1x,url("/images/bg-career-mob@2x.jpg") 2x)',
        'bg-career-tab': 'image-set(url("/images/bg-career-tab.jpg") 1x,url("/images/bg-career-tab@2x.jpg") 2x)',
        'bg-career-desk': 'image-set(url("/images/bg-career-desk.jpg") 1x,url("/images/bg-career-desk@2x.jpg") 2x)',
        'bg-gallery-mob': 'image-set(url("/images/bg-gallery-mob.jpg") 1x,url("/images/bg-gallery-mob@2x.jpg") 2x)',
        'bg-gallery-tab': 'image-set(url("/images/bg-gallery-tab.jpg") 1x,url("/images/bg-gallery-tab@2x.jpg") 2x)',
        'bg-gallery-desk': 'image-set(url("/images/bg-gallery-desk.jpg") 1x,url("/images/bg-gallery-desk@2x.jpg") 2x)',
        'bg-contacts-mob': 'image-set(url("/images/bg-contacts-mob.jpg") 1x,url("/images/bg-contacts-mob@2x.jpg") 2x)',
        'bg-contacts-tab': 'image-set(url("/images/bg-contacts-tab.jpg") 1x,url("/images/bg-contacts-tab@2x.jpg") 2x)',
        'bg-contacts-desk': 'image-set(url("/images/bg-contacts-desk.jpg") 1x,url("/images/bg-contacts-desk@2x.jpg") 2x)',
        'mob-button-left': 'url("/icons/mob-btn-fr-left.svg")',
        'mob-button-right': 'url("/icons/mob-btn-fr-right.svg")',
        'tab-button-left': 'url("/icons/tab-btn-fr-left.svg")',
        'tab-button-right': 'url("/icons/tab-btn-fr-right.svg")',
        'desk-button-left': 'url("/icons/desk-btn-fr-left.svg")',
        'desk-button-right': 'url("/icons/desk-btn-fr-right.svg")',
        'service-select': 'url("/icons/service-select.svg")',
        'invalid': 'url("/icons/invalid.svg")'
      },
    },
    screens: {
      'sm-mob': '320px',
      'lg-mob': '480px',
      'tab': '768px',
      'desk': '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'error-red': '#FF5757',
      'white': '#FFF',
      'overlay': 'rgba(2, 15, 8, 0.50)',
      'overlay-75': 'rgba(2, 15, 8, 0.75)',
      'overlay-85': 'rgba(2, 15, 8, 0.85)',
    }
  },
  plugins: [],
}
export default config
