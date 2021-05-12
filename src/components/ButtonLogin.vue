<template>
  <b-button v-on:click="login()" id="btn" size="sm">
    Fazer login com a Huggy
  </b-button>
</template>

<script>
export default {
  name: "ButtonLogin",
  methods: {
    login() {
      this.$router.push("Dashboard");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#btn {
  font-family: "Roboto", sans-serif;
  background-color: #321bde;
  font-size: 14px;
  border-radius: 8px;
}
</style>
