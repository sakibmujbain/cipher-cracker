/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // 👇 This is the new v4 plugin name
    '@tailwindcss/postcss': {}, 
  },
};

export default config;