/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0F172A",
        surface: "#111C2F",
        primary: "#3B82F6",
        accent: "#22D3EE",
        text: "#F8FAFC",
        muted: "#E2E8F0",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.2)",
        card: "0 22px 60px rgba(15, 23, 42, 0.5)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(148, 163, 184, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.09) 1px, transparent 1px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
        meteor: "meteor 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.45, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.04)" },
        },
        meteor: {
          "0%": { transform: "translate3d(-10vw, -10vh, 0) rotate(25deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translate3d(110vw, 110vh, 0) rotate(25deg)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
