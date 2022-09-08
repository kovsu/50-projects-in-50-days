import { createApp } from "vue";
import "./style.css";
import "./editor.css";
import App from "./App.vue";
import { router } from "./router";

import { Icon } from "@iconify/vue";

const app = createApp(App);

app.component("Icon", Icon);

app.use(router).mount("#app");
