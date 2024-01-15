/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [{
      mytheme: {
        "primary": "#ff5733",
        "secondary": "#00b0ff",
        "accent": "#ffffff",
        "neutral": "#484848",
        "base-100": "#fffdff",
        "base-200": "#999999",
        "info": "#ffffff",
        "success": "#00ffff",
        "warning": "#ffffff",
        "error": "#ffffff",
      },
    }],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
