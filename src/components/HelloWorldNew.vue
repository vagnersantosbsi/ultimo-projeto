<template>
  
  <div class="hello">
    
    <h1>{{ msg }}</h1>
    
    <h3>Menu</h3>
    <ul>
      <li> <router-link to="/"> Principal </router-link> </li>
      <li><router-link to="/cadastro-cliente" rel="noopener">Cad. Cliente</router-link></li>
      <li><router-link to="/cadastro-outro" rel="noopener">Cad. Outro</router-link></li>
      <!-- <li><router-link to="/">Principal</router-link></li>
       -->
    </ul>
    <router-view />
    <!-- <div>
      <p>Rota atual: {{ $route.path }}</p>
    </div> -->
  </div>

</template>

<script>
export default {
  name: 'HelloWorldNew',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #b94242;
}
</style>
