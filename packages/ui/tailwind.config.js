/** @type {import('tailwindcss').Config} */
const configs = require("tailwind-config/tailwind.config.js");
module.exports = {
  ...configs,
  content: ["./**/*.{js,ts,jsx,tsx,mdx}", "./*.{js,ts,jsx,tsx,mdx}"],
};
