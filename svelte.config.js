// import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
// import nodeAdapter from "@sveltejs/adapter-node";
import CFAdapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: CFAdapter({
            routes: {
                include: ["/*"],
                exclude: ["<build>", "<files>"],
            },
            fallback: "plaintext",
        }),
    },
    preprocess: vitePreprocess,
    compilerOptions: {
        rootDir: "./src",
    },
};

export default config;
