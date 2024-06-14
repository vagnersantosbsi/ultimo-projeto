<template>
    <div class="cadastro-cliente">
        <h1>Cadastro de Cliente</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="nome">Nome:</label>
                <input type="text" placeholder="Nome completo do cliente" id="nome" v-model="m_nome" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" placeholder="Endereço eletrônico" id="email" v-model="m_email" required>
            </div>

            <div>
                <label for="cep"> CEP </label>
                <input type="text" placeholder="Código de Endereço Postal" id="cep" v-model="m_cep" required
                    @input="getEnderecoPorCEP(m_cep)">
            </div>

            <div>
                <label for="endereco"> Endereço</label>
                <input type="text" id="endereco" v-model="m_endereco" required>
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script>
//npm install axios
import axios from 'axios';


// MODEL - MODELO - BACKEND
// VIEW - VISÃO - FRONTEND
// CONTROLLER - CONTROLE - ROTEAMENTO/PROCESSAMENTO
export default {
    name: 'CadastroCliente',
    data() {
        return {
            m_nome: '',
            m_email: '',
            m_cep: '',
            m_endereco: '',
        };
    },
    methods: {
        async getEnderecoPorCEP(cep) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                this.m_endereco = `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade} - ${response.data.uf}`;
            } catch (error) {
                console.error("Erro ao buscar o CEP", error);
            }


            return 'Rua das Carambolas, nº 62, Parque Verde I' + cep;
        }, handleSubmit() {
            // Lógica para enviar os dados do formulário (opcional)
            console.log('Dados submetidos do formulário:', this.m_nome, this.m_email, this.m_cep, this.m_endereco);
            alert("Dados submetidos com sucesso!");

            //const envio = 'https://sistemas.dominio.com.br/set/cliente';
            //Montar o Array
            // Submeter o envio para o Serviço de SET


        },
    },


};
//window.document.getElementById("teste")

</script>

<style scoped>
.cadastro-cliente {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

input {
    width: 260px;
}
</style>