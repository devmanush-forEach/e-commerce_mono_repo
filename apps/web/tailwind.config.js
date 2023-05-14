/** @type {import('tailwindcss').Config} */
const configs = require("tailwind-config/tailwind.config.js");
module.exports = {
  ...configs,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/*.{js,ts,jsx,tsx,mdx}",
  ],
};
