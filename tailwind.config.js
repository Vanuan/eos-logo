const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
          light: "#60a5fa",
        },
        secondary: {
          DEFAULT: "#6b7280",
          dark: "#4b5563",
          light: "#9ca3af",
        },
        accent: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
          light: "#fbbf24",
        },
        neutral: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      // Add custom font sizes using clamp()
      fontSize: {
        // for portrait mode
        "sm-y": "clamp(4px, 2.5vh, 24px)", // Small text
        "md-y": "clamp(8px, 3vh, 32px)", // Medium text
        "lg-y": "clamp(12px, 3.5vh, 36px)", // Large text
        "xl-y": "clamp(16px, 5vh, 48px)", // Extra-large text
        // for landscape mode
        "sm-x": "clamp(12px, 4vw, 24px)", // Small text
        "md-x": "clamp(16px, 5vw, 32px)", // Medium text
        "lg-x": "clamp(20px, 6vw, 36px)", // Large text
        "xl-x": "clamp(10px, 10vw, 48px)", // Extra-large text
      },
    },
  },
  plugins: [
    // Add custom utilities for more flexibility
    // plugin(function ({ addUtilities }) {
    // addUtilities({
    // ".h-fluid": {
    //   height: "50vh",
    // },
    // ".w-fluid": {
    //   width: "100vh",
    // },
    // });
    // }),
  ],
};
