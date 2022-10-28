import { createApp } from "vue";
import App from "./App.vue";
import VueLazyLoad from "vue3-lazyload";
import "./index.css";

createApp(App).mount("#app").use(VueLazyLoad);
//.use(VueLazyLoad);
