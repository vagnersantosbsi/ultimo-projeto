import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //Linha adicionada

//createApp(App).mount('#app')
//Antes de utilizar o ROUTER

createApp(App).use(router).mount('#app')
//Depois de utilizar o ROUTER Adicionou .use(router)

