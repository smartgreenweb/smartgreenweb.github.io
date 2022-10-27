/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      neuereg: ["NeueReg", "sans-serif"],
      neueit: ["NeueIt", "sans-serif"],
      worksans: ["WorkSans", "sans-serif"],
    },
    extend: {
      colors: {
        thBlue: "#35EEED",
        thOrange: "#F9A23F",
        thPurple: "#ED02FF",
        midnight: "#01192a",
        endeavour: "#005Fb8",
        niagra: "#05a89d",
      },
    },
  },
  plugins: [],
};
