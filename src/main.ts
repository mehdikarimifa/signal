import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "@/pinia";

import "./assets/css/style.scss";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.min";

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
