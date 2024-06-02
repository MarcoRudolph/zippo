/** @type {import('postcss-load-config').Config} */
const config = {
  purge: ['./src/app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: {
    tailwindcss: {},
  },
};

export default config;
