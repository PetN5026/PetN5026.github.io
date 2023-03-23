/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "almost-full": "90%",
        aboutmeTopContainer: "896px",
      },
      minHeight: {
        "3/4": "85vh",
      },
      height: {
        aboutme: "512px",
      },
      width: {
        aboutmeW: "448px",
      },
    },
  },
  plugins: [],
};
