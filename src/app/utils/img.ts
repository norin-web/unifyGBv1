const BASE = import.meta.env.BASE_URL;

// Vite does not rewrite string literals in JSX src attributes, so every image path goes through here.
export const img = (path: string) => BASE + path.replace(/^\//, "");
