import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit()],
    assetsInclude: ["./src/static/**"],
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: [".."],
        },
    },
});
