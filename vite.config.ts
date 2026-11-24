import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Custom domain unifygb.online (public/CNAME) → served from the root.
  // If the domain is removed, switch back to "/unifyGBv1/" and delete public/CNAME
  // in the same commit, or every asset 404s.
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
