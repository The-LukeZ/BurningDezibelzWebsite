// import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
// import nodeAdapter from "@sveltejs/adapter-node";
import CFAdapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://svelte.dev/docs/kit/adapters for more information about adapters.
        adapter: CFAdapter({
            routes: {
                include: ["/src/routes/**/*"],
                exclude: ["<all>"],
            },
            fallback: "plaintext",
        }),
    },
    preprocess: vitePreprocess,
};

export default config;
