<template>
  <div class="app-links">
    <router-link class="link" to="/">New</router-link>
    <router-link class="link" to="/notes">See All</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
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

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.list {
  min-height: calc(100% - 50px);
  overflow-y: auto;
  background: linear-gradient(to bottom, #a6c1ee 0%, #fbc2eb 100%) fixed;
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.app-links {
  height: 50px;
  display: flex;
  background: #a6c1ee;
}
.link {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  background: rgb(67, 26, 144);
  margin: 10px;
}

@media (max-width: 600px) {
  * {
    font-size: 10px;
  }
}
</style>
