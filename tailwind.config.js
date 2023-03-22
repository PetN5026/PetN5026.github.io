/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "almost-full": "90%",
      },
      minHeight: {
        "3/4": "85vh",
      },
    },
  },
  plugins: [],
};
