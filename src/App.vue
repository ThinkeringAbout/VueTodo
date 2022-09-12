<template>
  <div class="app-links">
    <router-link class="link" to="/">New</router-link>
    <router-link class="link" to="/notes">See All</router-link>
  </div>
  <transition name="page">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.8s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
.list {
  min-height: calc(100% - 50px);
  overflow-y: auto;
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #a6c1ee 0%, #fbc2eb 100%) fixed;
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
