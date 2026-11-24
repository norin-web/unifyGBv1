import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages without a custom domain: served from /unifyGBv1/.
  // When a custom domain is attached in Pages settings, switch to "/" and add public/CNAME
  // in the same commit. If the domain is removed, switch back to "/unifyGBv1/".
  base: "/unifyGBv1/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
