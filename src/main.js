import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store.js";
import MyComponent from "./components/MyComponent.vue";
import ComputedList from "./components/List.vue";
import NoteChange from "./components/NoteChange.vue";
import * as VueRouter from "vue-router";

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

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
