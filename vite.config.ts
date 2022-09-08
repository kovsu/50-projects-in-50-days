import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Markdown from "vite-plugin-vue-markdown";
import Shiki from "markdown-it-shiki";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 解析import的资源路径时，让 vite 能识别 .vue 文件和 .md 文件
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: "vitesse-dark",
        });
      },
    }),
  ],
  resolve: {
    alias: [{ find: "~/", replacement: `${resolve(__dirname, "src")}/` }],
  },
});
