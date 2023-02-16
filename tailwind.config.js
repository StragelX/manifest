/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,php}", "./src/**/*.{html,js,php}"],
  theme: {
    extend: {},

    colors: {
      white: "#fff",
      black: "black",
      "red-100": "#fee2e2",
      "green-50": "#f0fdf4",
      "green-700": "#15803d",
      "gray-50": "#f9fafb",
      "gray-200": "#e5e7eb",
      "gray-400": "#9ca3af",
      "gray-500": "#6b7280",
      "gray-600": "#4b5563",
      "gray-800": "#1f2937",
      "purple-200": "#e9d5ff",
      "yellow-100": "#fef9c3",
      "yellow-300": "#fde047",
      "blue-300": "#93c5fd",
      "blue-700": "#1d4ed8",
      "blue-800": "#1e40af",
    },

    fontFamily: {
      volja: "Volja",
      unbounded: "Unbounded",
      kharkiv: "kharkiv",
      KyivTypeSans: "KyivTypeSans",
      granddark: "CyGrotesk-GrandDark",
    },
  },
  plugins: [],
};
