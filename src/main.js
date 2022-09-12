import { createApp } from "vue";
import App from "./App.vue";
import MyComponent from "./components/MyComponent.vue";
import ComputedList from "./components/List.vue";
import NoteChange from "./components/NoteChange.vue";
import * as VueRouter from "vue-router";
import { createPinia } from "pinia";

const Component = MyComponent;
const ListComponent = ComputedList;

const routes = [
  { path: "/", component: Component },
  { path: "/notes", component: ListComponent },
  { path: "/notes/:id", component: NoteChange },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
