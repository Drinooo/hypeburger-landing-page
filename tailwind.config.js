/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      heading: ["Bangers", "cursive"],
      body: ["Gudea", "sans-serif"],
    },
    fontSize: {
      h1: "128px",
      h1Mobile: '80px',

      h2: "100px",
      h2Mobile: '70px',
      
      h3: "30px",
      h4: "28px",
      h5: "",
      h6: "",
      body1: "20px",
      body2: "16px",
      caption: "24px",
      caption2: '18px',
      btn: "24px",
      nav: "18px",
      fHeader: '20px',
      footer: '18px'
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },

    extend: {
      dropShadow: {
        "1xl": "0px 10px 0px rgba(0, 0, 0, 0.25)",
        "image-shadow": "0px 100px 0px #ebebeb",
      },
      backgroundImage: {
        hero: "url('/images/Background/Hero BG.png')",
        about: "url('/images/Background/About BG.png')",
        featured: "url('/images/Background/Featured BG.png')",
        cta: "url('/images/Background/CTA BG.png')"
      },
      colors: {
        primary: "#EC3727",
        secondary: "#FFBE1E",
        white: "#FFFFFF",
        gold: "#FFD700",
      },
    },
  },
  plugins: [],
});
