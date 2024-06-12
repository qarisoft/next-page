import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      colors:{
        mprimary:'#003358',
      },
      fontFamily: {
        sans: ["Tajawal"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
// import {nextui} from '@nextui-org/theme'
//
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//     './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Tajawal"],
//         // sans: ["var(--font-sans)"],
//         mono: ["var(--font-geist-mono)"],
//       },
//     },
//   },
//   darkMode: "class",
//   plugins: [nextui()],
// }
