/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-white": "#F6F6F6",
        "neutral-black": "#474B57",
      },
      height: {
        "h-440": 440,
        304: 304,
      },
    },
  },
  plugins: [],
};
