/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        babyWhite: "#FAF5FF",
        babyDark: "#424242",
        cartRed: "#FF0000",
        sageGreen: "#434834",
        payBorder: "#F4F4F4",
        lightGrey: "#D9DAD6",
        clrGery: "#414141",

        lineClr: "rgba(0, 0, 0, 0.15)",
      },

      backgroundImage: {
        "header-pattern": "url('src/assets/headerimg.png')",
        "headerMob-pattern": "url('src/assets/headermob.png')",
      },
    },
  },
  plugins: [],
};
