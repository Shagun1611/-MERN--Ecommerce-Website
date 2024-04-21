import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // "/api/": "http://localhost:5000",
      // "/uploads/": "http://localhost:5000",
      "/api/": "https://mern-ecommerce-website-xthw.onrender.com",
      "/uploads/": "https://mern-ecommerce-website-xthw.onrender.com",
    },
  },
});
// One Change i have done here