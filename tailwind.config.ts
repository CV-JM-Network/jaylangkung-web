import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        viachat: {
          blue: '#3DA8F5', // Approx from blue bubble
          green: '#6AC86E', // Approx from green bubble
          dark: '#1A1A1A', // For text or dark backgrounds
          light: '#F9FAFB', // For page background
          accent: '#E5F4FF', // Soft background contrast
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
