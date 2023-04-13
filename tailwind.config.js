/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',                                                               
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
        primary: "#3D00B7",
        grayPrimary: "#F7F9FB",
        grayPrimaryLight: "#F2F3F5",
        paragraph: "#8091a7",
        danger: "#FF002E",
        blue: "#2639ED",
        purple: "#854fff",
        "purple-dim": "#f2ecff",
      },
      fontFamily: {
        DmSans: ["DM Sans", "sans-serif"],
        integralCF: ["integralCF", "sans-serif"],
      },
      backgroundImage: {
        "hero-gfx": "url('/images/gfx/dot.png')",
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
      width: {
        800: "800px",
        260: "260px",
        370: "370px",
      },
      padding: {
        "gap-y": "135px",
        "gap-y-s": "75px",
        "gap-b": "120px",
        "gap-b-s": "75px",

        "135px": "135px",
        "120px": "120px",
        "75px": "75px",
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
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
          padding: "130px 0"
        },
        ".section-gap-s": {
          padding: "75px 0"
        },
        ".section-gap-xs": {
          padding: "35px 0"
        },
        ".section-b-gap": {
          paddingBottom: "120px"
        },
        ".section-b-gap-s": {
          paddingBottom: "75px"
        },
      });
    },
  ],
};
