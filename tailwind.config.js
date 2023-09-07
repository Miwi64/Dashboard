/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
    colors: {
      primary: '#ef0e9d',
      secondary: '#f15417',
      back: '#211a1f',
      subtitle: '#635d63',
      line: '#857f84',
      boxback: '#50414c',
      transparent: 'transparent',
      footerback: '#130810',
      black: '#000',
      white: '#ffffff',
      yellow: '#f1c217'
    }
  },
  plugins: [],
}
