import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'header-gradient': 'linear-gradient(180deg, rgba(0, 24, 38, 0.5) 0%, rgba(0, 37, 49, 0.00) 100%)',
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
    }
  },
  plugins: [],
}
export default config
