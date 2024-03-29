import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUpCubicBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
        slideLeftCubicBezier: "slideLeft 2s cubic-bezier(0.165, 0.84, 0.44, 1)",
        // wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          from: {transform: "translateY(10px)"},
          to: {transform: "translateY(0)"}
        },
        slideUp: {
          from: {transform: "translateY(100%)"},
          to: {transform: "translateY(0)"}
        },
        slideLeft: {
          from: {transform: "translateX(100%)"},
          to: {transform: "translateX(0)"}
        },
        // wiggle: {
        //   '0%, 100%': { transform: "translateX(3px)" },
        //   '50%': { transform: "translateX(-3px)" },
        // }
      }
    },
  },
  plugins: [],
};
export default config;
