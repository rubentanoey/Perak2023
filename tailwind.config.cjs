/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': {
          DEFAULT: '#E9DEA6',
          'dark': '#A39B74',
          'light': '#F4EFD3',
        },
        'green': {
          DEFAULT: '#A3AA10',
          'dark': '#71770B',
          'light': '#C7CC70',
        },
        'orange': {
          DEFAULT: '#FEB048',
          'dark': '#F36A22',
          'light': '#EABB76',
        },
        'purple': {
          DEFAULT: '#8C3FD9',
          'darkest': '#272B52',
          'dark': '#383D75',
          'light': '#BB83F2',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        decorative: ['Magic Retro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
