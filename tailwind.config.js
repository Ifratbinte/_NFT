/** @type {import('tailwindcss').Config} */
module.exports = {
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
        paragraph: "#696969",
        danger: "#FF002E"
      },
      fontFamily: {
        DmSans: ["DM Sans", "sans-serif"],
        integralCF: ["integralCF", "sans-serif"],
      },
      backgroundImage: {
        "hero-gfx": "url('/images/gfx/dot.png')",
      },
    },
  },
  plugins: [],
};
