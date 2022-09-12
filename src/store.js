import { createStore } from "vuex";

export const store = createStore({
  state() {
    if (localStorage.getItem("items")) {
      const itemsFromStorage = JSON.parse(localStorage.getItem("items"));
      return {
        items: itemsFromStorage,
      };
    } else {
      return {
        items: [],
      };
    }
  },
  mutations: {
    addItem(state, itemText) {
      state.items.push({ text: itemText, isDone: false });
      saveData(state.items);
    },
    deleteItem(state, index) {
      state.items.splice(index, 1);
      saveData(state.items);
    },
    changeItemDoneState(state, index) {
      state.items[index].isDone = !state.items[index].isDone;
      saveData(state.items);
    },
    changeItemText(state, payload) {
      state.items[payload.index].text = payload.itemText;
      saveData(state.items);
    },
  },
});

function saveData(data) {
  const parsed = JSON.stringify(data);
  localStorage.setItem("items", parsed);
}
