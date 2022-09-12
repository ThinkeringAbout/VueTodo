<template>
  <div class="list">
    <TransitionGroup name="fade">
      <TodoList
        v-for="(item, index) in this.store.items"
        :key="item.id"
        :text="item.text"
        :isDone="item.isDone"
        :listIndex="index"
        @deleteItem="deleteItem(index)"
        @taskDone="taskDone(index)"
      />
    </TransitionGroup>
  </div>
</template>

<script>
import TodoList from "./Todolist.vue";
import { useStore } from "@/piniastore";

export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  name: "ComputedList",
  components: {
    TodoList,
  },
  methods: {
    deleteItem(index) {
      this.store.deleteItem(index);
    },
    taskDone(index) {
      this.store.changeItemDoneState(index);
    },
  },
};
</script>

<style>
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
