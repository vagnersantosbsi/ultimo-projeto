<template>
  <div id="motorcarro">
    <label>Motor do Carro - Principal</label>
    <br>
    <img src="../assets/motor.png" />
  </div>

  <br>
  <ObjetoArranque />
  <ObjetoCarburador />
</template>

<script>
//Pesquisar depois sobre caminho relativo e caminho absoluto ../ ou ./
import ObjetoArranque from './ArranqueCarro.vue';
import ObjetoCarburador from './CarburadorCarro.vue' ;

export default {
  name: 'MotorCarro',
  components: {
    ObjetoArranque, ObjetoCarburador
  },
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
img {
  width: 200px;
}
#motorcarro {
  background-color: yellow;
}
</style>
