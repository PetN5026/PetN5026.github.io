/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "almost-full": "80%",
      },
      maxHeight: {
        "carousel-container": "440px",
        "carousel-imgs": "400px",
      },
      minHeight: {
        "3/4": "85vh",
      },
      width: {
        ones: "896",
        five: "5%",
      },
      height: {
        eighty: "70%",
      },
      inset: {
        twelve: "18%",
      },
    },
  },
  plugins: [],
};
