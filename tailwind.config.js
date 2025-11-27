/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: "#FB64B6",
        "secondary-primary": "#F6339A",
        background: "#FFFFFF",
        "secondary-background": "#F1F5F9",
        secondary: "#E5E7EB",
        foreground: "#05051A",
        foreground: "#05051A",
        unavailable: "#EF4444",
        "unavailable-light": "#FEF2F2",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const typograph = {
        ".font-title": {
          fontFamily: "'Inter', sans-serif",
          fontWeight: "600",
          fontSize: "24px",
        },
        ".font-subtitle": {
          fontFamily: "'Inter', sans-serif",
          fontWeight: "600",
          fontSize: "16px",
        },
        ".font-highlight": {
          fontFamily: "'Inter', sans-serif",
          fontWeight: "600",
          fontSize: "14px",
        },
        ".font-paragraph": {
          fontFamily: "'Inter', sans-serif",
          fontWeight: "400",
          fontSize: "14px",
        },
        ".font-label": {
          fontFamily: "'Inter', sans-serif",
          fontWeight: "400",
          fontSize: "12px",
        },
        ".font-minimal": {
          fontFamily: "'Inter', sans-serif",
          fontWeight: "600",
          fontSize: "10px",
        },
      };

      addUtilities(typograph);
    },
  ],
};
