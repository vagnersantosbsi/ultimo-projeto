//Mensagem de Modulo do VUE-ROUTER (Modulo Not Found )
//No prompt de comando coloca essa linha abaixo
//npm install vue-router

import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import CadastroCliente from './components/CadastroCliente.vue';
import Motor from './components/Motor.vue';

const routes = [
  { path: '/', component: App },
  { path: '/cadastro-cliente', component: CadastroCliente },
  { path: '/cadastro-outro', component: Motor },
  // { path: '/menu-sistema', component: MenuSistema },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;