import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import axios from "axios";
import VueAxios from "vue-axios";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "./global.css";
import { createPinia } from "pinia";
import { useStateThemeStore } from '@/stores/useStateThemeStore';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
});
const pinia = createPinia();
const store = useStateThemeStore();
if (localStorage.getItem('theme') === 'light') {
  store.setLightTheme();
} else {
  store.setDarkTheme();
}
const app = createApp(App);

app
  .use(router)
  .use(vuetify)
  .use(VueAxios, axios)
  .use(Vue3Toastify, {
    autoClose: 1000,
  })
  .use(pinia)
  .mount("#app");
