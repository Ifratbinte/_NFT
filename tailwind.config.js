/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-color' : '#474747',
        'base-light' : '#A4A4A4',
        'base-dark' : '#000000',
        'base-yellow' : '#EA9C45'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-gfx": "url('/images/gfx/dot.png')",
      },
      boxShadow: {
        btnBoxShadow: "inset -3px -3px 0px #000000",
        cardShadow : '0px 24px 80px rgba(16, 16, 117, 0.08)'
      },
      height: {
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "1000v": "100vh",
        500: "500px",
        440: "440px",
        380: "380px",
      },
      
      padding: {
        "gap-y": "130px",
        "gap-y-s": "75px",
        "gap-b": "120px",
        "gap-b-s": "60px",

        "130px": "130px",
        "120px": "120px",
        "60px": "60px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "991px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
        ".section-gap": {
          padding: "130px 0",
        },
        ".section-gap-s": {
          padding: "75px 0",
        },
        ".section-gap-xs": {
          padding: "35px 0",
        },
        ".section-b-gap": {
          paddingBottom: "120px",
        },
        ".section-b-gap-s": {
          paddingBottom: "75px",
        },
      });
    },
  ],
};
