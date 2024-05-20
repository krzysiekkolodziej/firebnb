import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import "../../../public/index.css";
import App from "./App.vue";

createApp(App).use(VueQueryPlugin).mount("#root");
