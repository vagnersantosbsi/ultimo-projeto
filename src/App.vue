<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MenuSistema />
</template>

<script>

import MenuSistema from './components/HelloWorldNew.vue';

export default {
  name: 'App',
  components: {
    MenuSistema
  }
}
</script>

<style>

html, body {
  background-color: black;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: aqua;
}

</style>
