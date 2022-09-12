<template>
  <div class="main">
    <form>
      <input
        type="text"
        maxlength="30"
        placeholder="Покормить кота?"
        v-model="inputText"
      />
      <button type="submit" @click.prevent="addNote">Add note</button>
    </form>
  </div>
</template>

<script>
import { useStore } from "@/piniastore";

export default {
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  name: "MyComponent",
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    addNote() {
      this.store.addItem(this.inputText);
      this.inputText = "";
    },
  },
};
</script>
<style scoped>
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100% - 50px);
}
form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

input {
  width: 50%;
  height: 100px;
  border: 2px solid rgb(67, 26, 144);
  font-size: 20px;
  padding: 0 10px;
  border-radius: 10px;
  transition: all ease 0.2s;
}

input:focus {
  outline: none;
  box-shadow: 0 0 5px 5px rgb(67, 26, 144);
}

button {
  width: 100px;
  height: 100px;
  margin-left: 15px;
  background: rgb(67, 26, 144);
  color: #fff;
}

button:hover {
  cursor: pointer;
}
</style>
