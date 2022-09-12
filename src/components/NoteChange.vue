<template>
  <div class="single-note">
    <form>
      <input type="text" maxlength="30" v-model="inputText" />
      <button type="submit" @click.prevent="changeNote">Change note</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "NoteChange",
  data() {
    return {
      inputText: "",
    };
  },
  computed: {
    getText() {
      return this.$store.state.items[this.$route.params.id].text;
    },
  },
  methods: {
    changeNote() {
      this.$store.commit("changeItemText", {
        index: this.$route.params.id,
        itemText: this.inputText,
      });
    },
  },
  mounted() {
    this.inputText = this.getText;
  },
};
</script>

<style>
.single-note {
  background: linear-gradient(to bottom, #a6c1ee 0%, #fbc2eb 100%) fixed;
  height: calc(100% - 50px);
}
form {
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
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
