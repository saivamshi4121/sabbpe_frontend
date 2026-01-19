/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        "primary-blue": "var(--primary-blue)",
        "hover-blue": "var(--hover-blue)",
        "turquoise": "var(--turquoise-accent)",
        "pastel-blue": "var(--pastel-blue-accent)",
        "success-green": "var(--success-green)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--bg-tertiary)",
        card: "var(--bg-card)",
        navbar: "var(--bg-navbar)",
      },
      borderColor: {
        DEFAULT: "var(--border-color)",
        hover: "var(--border-hover)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      animation: {
        pulse: "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
        chipGlow: "chipGlowPulse 3s ease-in-out infinite",
        chipFloat: "chipFloat 4s ease-in-out infinite",
        textReveal: "textReveal 0.6s ease-out forwards",
        buttonGlow: "buttonGlow 0.6s ease-out",
        buttonBounce: "buttonBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(37, 99, 235, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.8)" },
        },
        chipGlowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        chipFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        textReveal: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        buttonGlow: {
          "0%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.6)" },
          "100%": { boxShadow: "0 0 0px rgba(37, 99, 235, 0)" },
        },
        buttonBounce: {
          "0%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      backdropBlur: {
        glass: "20px",
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "20px",
        xl: "40px",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0, 0, 0, 0.3)",
        md: "0 4px 16px rgba(0, 0, 0, 0.4)",
        lg: "0 8px 32px rgba(0, 0, 0, 0.5)",
        "glow-blue": "0 0 40px rgba(37, 99, 235, 0.3)",
        "glow-turquoise": "0 0 40px rgba(46, 230, 214, 0.3)",
      },
    },
  },
  plugins: [],
};
