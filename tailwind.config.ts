import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'amaranth': {
          100: '#F2DFE0',
          200: '#F0ACB1',
          300: '#F17F87',
          400: '#ED5661',
          500: '#E63946',
          600: '#CA1D2A',
          700: '#9D131C',
          800: '#65080E',
          900: '#330306',
        },
        'neutral': {
          100: '#E5DADB',
          200: '#DDC8C9',
          300: '#BBA2A4',
          400: '#937778',
          500: '#6B4E50',
          600: '#3F2527',
          700: '#311618',
          800: '#250B0D',
          900: '#1F0305',
        }
      },
      fontFamily: {
        'sans': ['Outfit']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
