<template>
  <div>

    <label>Lista de Clientes</label>
    <select name="listaClientes" id="listaClientes">
      <option value=""> Selecione </option>
      <option value="cliente1">Petrobras</option>
      <option value="cliente2">Vale do Rio Doce</option>
      <option value="cliente3">Transpetro</option>
    </select>
  </div>

</template>

<script>
export default {
  name: 'ListaDeClientes',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
  color: #4246b9;
  font-size: 14px;
}

select {
  color: #b94242;
  background-color: black;
  font-size: 14px;
}
</style>
