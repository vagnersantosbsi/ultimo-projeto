<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <CadastroCliente msg="Bem vindo ao seu aplicativo Vue.js"  />
  </template>
  
  <script>
  
  import CadastroCliente from './HelloWorldNew.vue'
  
  export default {
    name: 'MenuSistema',
    components: {
      CadastroCliente
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
  