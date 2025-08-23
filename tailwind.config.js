/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        reemKulfi: ["reemKulfi", "sans"],
      },
      screens: {
        xs: "280px", // optional, if you want extra small
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      fontSize: {
        xs: ["clamp(0.75rem, 0.7vw, 0.8rem)", "1.2"], // 12px → scales slightly
        sm: ["clamp(0.875rem, 0.8vw, 0.95rem)", "1.4"], // 14px
        base: ["clamp(1rem, 1vw, 1.1rem)", "1.5"], // 16px
        lg: ["clamp(1.125rem, 1.2vw, 1.25rem)", "1.6"], // 18px
        xl: ["clamp(1.25rem, 1.5vw, 1.4rem)", "1.6"], // 20px
        "2xl": ["clamp(1.5rem, 2vw, 1.75rem)", "1.6"], // 24px
        "3xl": ["clamp(1.875rem, 2.5vw, 2rem)", "1.2"], // 30px
        "4xl": ["clamp(2.25rem, 3vw, 2.5rem)", "1.2"], // 36px
        "5xl": ["clamp(3rem, 4vw, 3.5rem)", "1.1"], // 48px
      },
      animation: {
        bgPulse: "bgPulse 6s ease-in-out infinite",
      },
      linearBorderGradients: ({ theme }) => ({
        colors: {
          "light-blue": [colors.indigo[200], colors.lime[300]],
        },
        background: theme("colors"),
      }),
    },
  },
  plugins: [require("tailwindcss-border-gradient-radius")],
};
