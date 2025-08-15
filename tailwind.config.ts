import type { Config } from 'tailwindcss'
const withMT = require("@material-tailwind/html/utils/withMT");

const config: Config = withMT({
  content: [
    './index.html',
    './src/**/*.{vue,ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})

export default config
