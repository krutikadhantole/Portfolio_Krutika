// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this path matches your setup
  ],
  theme: {
    extend: {
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
