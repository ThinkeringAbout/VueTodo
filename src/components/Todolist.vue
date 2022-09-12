<template>
  <div class="todo-item" :class="isDone ? 'active' : ''">
    <template v-if="isDone">✔</template>
    <p>{{ text }}</p>
    <router-link class="button" :to="'/notes/' + listIndex"
      ><span class="rotateButton">✏</span></router-link
    >
    <button class="button" @click="taskDone">
      <span class="greenAnimation">✔</span>
    </button>
    <button class="button" @click="deleteItem">
      <span class="redAnimation">X</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ["text", "isDone", "listIndex"],
  methods: {
    deleteItem() {
      this.$emit("deleteItem");
    },
    taskDone() {
      this.$emit("taskDone");
    },
  },
};
</script>

<style>
.rotateButton:hover {
  transform: rotate(120deg);
}
.rotateButton {
  transition: all 0.4s ease;
}
.greenAnimation,
.redAnimation {
  font-size: 15px;
  transition: all 0.25s ease;
}
.greenAnimation:hover {
  color: rgb(15, 232, 15);
}
.redAnimation:hover {
  color: red;
}
.todo-item {
  width: 60%;
  margin: 10px auto;
  height: 40px;
  font-size: 20px;
  text-align: left;
  padding: 0 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  border: 2px solid rgb(67, 26, 144);
  background: #fff;
  border-radius: 7px;
}

.active {
  border-color: green;
}

p {
  width: 96%;
}

button {
  margin: 0 2px;
  width: 30px;
  height: 30px;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
  width: 30px;
  height: 30px;
  background: rgb(67, 26, 144);
  color: #fff;
  text-decoration: none;
}

@media (max-width: 600px) {
  .todo-item {
    font-size: 10px;
  }
}
</style>
