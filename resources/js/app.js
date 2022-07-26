import "./bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
// import About from "@/components/About.vue";
// import Contact from "@/components/Contact.vue";
import router from "@/components/routes";

const app = createApp(App);
// app.component("about", About);
// app.component("contact", Contact);

app.use(router).mount("#app");
