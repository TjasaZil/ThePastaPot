import { createApp } from "vue";
import App from "./App.vue";
import VueLazyLoad from "vue3-lazyload";
import "./index.css";
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";

Alpine.plugin(intersect);

createApp(App).mount("#app").use(VueLazyLoad);
//.use(VueLazyLoad);
