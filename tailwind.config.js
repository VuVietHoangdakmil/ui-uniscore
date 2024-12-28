/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custome-border": "#171B2E",
        "text-primary": "#8D8E92",
      },
      backgroundImage: {
        "gradient-score-lose":
          "linear-gradient(186.86deg, #091557 56.43%, #001F7B 76.8%, #00289F 91.46%)",
        "gradient-header":
          "linear-gradient(264.06deg, #091557 4.35%, #122690 59.76%, #203397 95.98%)",
        "gradient-button":
          "linear-gradient(124.54deg, #1553EF 0%, #0C3089 27.66%, #0C1A4C 70.02%)",
        "gradient-border":
          "linear-gradient(128.77deg, rgba(20, 86, 255, 0.5) 1.2%, rgba(101, 139, 236, 0.5) 50.89%, rgba(9, 46, 141, 0.5) 100.58%)",
      },
      screens: {
        desktop: "1376px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
