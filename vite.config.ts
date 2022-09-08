import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Markdown from "vite-plugin-vue-markdown";
import Shiki from "markdown-it-shiki";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItOptions: {
        quotes: "\"\"''",
      },
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: "vitesse-dark",
        });
      },
      // Class names for the wrapper div
      wrapperClasses: "markdown-body",
    }),
  ],
  resolve: {
    alias: [{ find: "~/", replacement: `${resolve(__dirname, "src")}/` }],
  },
});
