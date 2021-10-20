import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Action-on-scroll
import AOS from "aos";
import "aos/dist/aos.css";

// Boostrap 5
import "bootstrap";

const app = createApp(App);

// https://ahnaineabd.medium.com/how-to-use-aos-in-a-vue-project-6fdf4cb9f9fc
app.AOS = new AOS.init();

app
  .use(store)
  .use(router)
  .mount("#app");
