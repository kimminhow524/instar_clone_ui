import { createApp } from "vue";
import App from "./App.vue";
import store from "./assets/js/store";

let app = createApp(App);

app.use(store).mount("#app");
