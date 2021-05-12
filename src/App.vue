<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #262626;
  background-color: #F8F8F8;
}

</style>
