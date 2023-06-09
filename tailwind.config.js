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
        "3/4": "75vh",
      },
      width: {
        ones: "896",
        five: "5%",
        aboutme: "448px",
      },
      height: {
        eighty: "70%",
        aboutme: "572px",
      },
      inset: {
        twelve: "18%",
      },
    },
  },
  plugins: [],
};
