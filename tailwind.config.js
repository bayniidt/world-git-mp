/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#13ec6d",
        "background-light": "#f6f8f7",
        "background-dark": "#0d1117",
        "surface-dark": "#161b22",
        "border-dark": "#30363d",
        "text-secondary": "#8b949e",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // Optimizes for Mini Program
  }
}
