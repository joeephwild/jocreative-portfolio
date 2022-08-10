/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "header-img": "url('/img2.jpg')",
      }),
    },
    animation: {
        blob: "blob 7s infinite",
        marquee: "marquee 5s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        marquee: {
          "0%": {
            transform: "translate(0%, 0%)",
          },
          "100%": {
             transform: "translate(-100%, 0)",
          },
    },
  },
    fontFamily: {
    raleway: ["Noto Serif JP", "sans-serif"]
   },
      },
      
  plugins: [],
};
