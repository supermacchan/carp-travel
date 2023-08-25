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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-gradient': 'linear-gradient(180deg, rgba(0, 24, 38, 0.5) 0%, rgba(0, 37, 49, 0.00) 100%)',
        'section-top-gradient': 'linear-gradient(180deg, #002426 0%, rgba(0, 37, 49, 0.00) 100%)',
        'section-bottom-gradient': 'linear-gradient(0deg, #002426 0%, rgba(0, 37, 49, 0.00) 100%)',
        'bg-hero-mob': 'url("/images/bg-hero-mob@2x.jpg")',
        'bg-hero-tab': 'url("/images/bg-hero-tab@2x.jpg")',
        'bg-hero-desk': 'url("/images/bg-hero-desk@2x.jpg")',
        'bg-about-mob': 'url("/images/bg-about-mob@2x.jpg")',
        'bg-about-tab': 'url("/images/bg-about-tab@2x.jpg")',
        'bg-about-desk': 'url("/images/bg-about-desk@2x.jpg")',
        // 'bg-services-1': 'url("/images/bg-services-1@2x.jpg")',
        // 'bg-services-2': 'url("/images/bg-services-2@2x.jpg")',
        // 'bg-services-3': 'url("/images/bg-services-3@2x.jpg")',
        // 'bg-services-4': 'url("/images/bg-services-4@2x.jpg")',
        // 'bg-services-5': 'url("/images/bg-services-5@2x.jpg")',
        'bg-career-mob': 'url("/images/bg-career-mob@2x.jpg")',
        'bg-career-tab': 'url("/images/bg-career-tab@2x.jpg")',
        'bg-career-desk': 'url("/images/bg-career-desk@2x.jpg")',
        'bg-gallery-mob': 'url("/images/bg-gallery-mob@2x.jpg")',
        'bg-gallery-tab': 'url("/images/bg-gallery-tab@2x.jpg")',
        'bg-gallery-desk': 'url("/images/bg-gallery-desk@2x.jpg")',
        'bg-contacts-mob': 'url("/images/bg-contacts-mob@2x.jpg")',
        'bg-contacts-tab': 'url("/images/bg-contacts-tab@2x.jpg")',
        'bg-contacts-desk': 'url("/images/bg-contacts-desk@2x.jpg")',
        'mob-button-left': 'url("/icons/mob-btn-fr-left.svg")',
        'mob-button-right': 'url("/icons/mob-btn-fr-right.svg")',
        'tab-button-left': 'url("/icons/tab-btn-fr-left.svg")',
        'tab-button-right': 'url("/icons/tab-btn-fr-right.svg")',
        'desk-button-left': 'url("/icons/desk-btn-fr-left.svg")',
        'desk-button-right': 'url("/icons/desk-btn-fr-right.svg")',
        'service-select': 'url("/icons/service-select.svg")'
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
