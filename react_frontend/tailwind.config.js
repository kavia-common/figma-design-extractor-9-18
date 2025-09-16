/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#129575',
      },
      borderRadius: {
        '10': '10px',
        '100': '100px',
      }
    },
  },
  plugins: [],
}

