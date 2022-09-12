import { defineStore } from "pinia";

export const useStore = defineStore("main", {
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
  actions: {
    addItem(itemText) {
      this.items.push({
        text: itemText,
        isDone: false,
        id: Math.random() * 10000,
      });
      this.nextId++;
      saveData(this.items);
    },
    deleteItem(index) {
      this.items.splice(index, 1);
      saveData(this.items);
    },
    changeItemDoneState(index) {
      this.items[index].isDone = !this.items[index].isDone;
      saveData(this.items);
    },
    changeItemText(payload) {
      this.items[payload.index].text = payload.itemText;
      saveData(this.items);
    },
  },
});

function saveData(data) {
  const parsed = JSON.stringify(data);
  localStorage.setItem("items", parsed);
}
