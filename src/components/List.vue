<template>
  <div class="list">
    <TodoList
      v-for="(item, index) in this.$store.state.items"
      :key="index"
      :text="item.text"
      :isDone="item.isDone"
      :listIndex="index"
      @deleteItem="deleteItem(index)"
      @taskDone="taskDone(index)"
    />
  </div>
</template>

<script>
import TodoList from "./Todolist.vue";

export default {
  name: "ComputedList",
  components: {
    TodoList,
  },
  methods: {
    addItem(itemText) {
      this.$store.commit("addItem", itemText);
    },
    deleteItem(index) {
      this.$store.commit("deleteItem", index);
    },
    taskDone(index) {
      this.$store.commit("changeItemDoneState", index);
    },
  },
};
</script>
