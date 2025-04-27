/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: true,
  singleQuote: false,
  trailingComma: "none", // evita vírgulas "sobrando"
  tabWidth: 2,
  printWidth: 400,
  bracketSpacing: true,
  arrowParens: "always"
};

export default config;
