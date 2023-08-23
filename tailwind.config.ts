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
        'header-gradient': 'linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.00) 100%)',
        'bg-hero': 'url("/images/bg-hero@2x.jpg")',
        'bg-about': 'url("/images/bg-about@2x.jpg")',
        'bg-services-1': 'url("/images/bg-services-1@2x.jpg")',
        'bg-services-2': 'url("/images/bg-services-2@2x.jpg")',
        'bg-services-3': 'url("/images/bg-services-3@2x.jpg")',
        'bg-services-4': 'url("/images/bg-services-4@2x.jpg")',
        'bg-services-5': 'url("/images/bg-services-5@2x.jpg")',
        'bg-career': 'url("/images/bg-career@2x.jpg")',
        'bg-gallery': 'url("/images/bg-gallery@2x.jpg")',
        'bg-contacts': 'url("/images/bg-contacts@2x.jpg")',
        'mob-button-left': 'url("/icons/mob-btn-fr-left.svg")',
        'mob-button-right': 'url("/icons/mob-btn-fr-right.svg")',
        'tab-button-left': 'url("/icons/tab-btn-fr-left.svg")',
        'tab-button-right': 'url("/icons/tab-btn-fr-right.svg")',
        'desk-button-left': 'url("/icons/desk-btn-fr-left.svg")',
        'desk-button-right': 'url("/icons/desk-btn-fr-right.svg")',
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
      'overlay': 'rgba(2, 15, 8, 0.50)'
    }
  },
  plugins: [],
}
export default config
