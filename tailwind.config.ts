import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#E8E8E8',
      },
    },
    keyframes: {
      slidein: {
        from: {
          opacity: '0',
          transform: 'translateY(-100px)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      appear: {
        from: {
          opacity: '0',
        },
        to: {
          opacity: '1',
        },
      },
    },
    animation: {
      slidein: 'slidein 1s ease 500ms',
      appear: 'appear 2s ease 500ms',
    },
  },
  plugins: [],
} satisfies Config;
