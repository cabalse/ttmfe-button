import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "ttmfe-button",
      filename: "remoteEntry.js",
      exposes: {
        "./click-button": "./src/components/click-button/click-button.jsx",
      },
      shared: ["react", "react-dom", "tailwindcss"],
    }),
  ],
  build: {
    target: "esnext", // or 'es2022'
  },
});
