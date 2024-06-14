<template>
    <div class="cadastro-cliente">
        <h1>Cadastro de Cliente</h1>
        <form @submit.prevent="submitFormulario">
            <div>
                <label for="nome">CPF:</label>
                <input type="text" placeholder="CPF do cliente" id="cpf" v-model="m_cpf" required
                    @input="carregarNomeCliente(m_cpf)">
            </div>
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
                    @input="carregarEnderecoPorCEP(m_cep)">
            </div>

            <div>
                <label for="endereco"> Endereço</label>
                <input type="text" id="endereco" placeholder="Endereço carregado automático ou digitado"
                    v-model="m_endereco" required>
            </div>

            <button type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script>
//5W 2H

/* Quero fazer a comunicação da minha aplicação Vue.js v. 3 com o VIACEP:
*/
//Contexto
/*
    Utilizando o desenvolvimento Front-End com o framework Vue.js na versão 3
*/
// O que desejamos fazer? 
/*
    Criando um formulário de cadastro de cliente, onde receba o nome, email, CEP e Endereço.
    Porém, o endereço será carrega automaticamente pela consulta a um serviço em Nuvem.
    O Serviço em Nuvem é o VIACEP, que irá retornar o endereço do CEP Digitado/Informado.
    Dominio: viacep.com.br
*/



import axiosVariavel from 'axios';


export default {
    name: 'CadastroCliente',
    data() {
        return {
            m_nome: '',
            m_email: '',
            m_cep: '',
            m_endereco: ''
        }
    },
    methods: {
        //78085350
        async carregarEnderecoPorCEP(par_cep) {
            if (par_cep.length >= 8) {
                const resposta = await axiosVariavel.get(`https://viacep.com.br/ws/${par_cep}/json/`);

                this.m_endereco = resposta.data.logradouro + ',' +
                    resposta.data.bairro + ',' +
                    resposta.data.localidade + '-' +
                    resposta.data.uf;
            }


            //this.m_endereco = 'Rua das Carambolas, nº 62, Parque Verde I' + '   ' + cep;
        },
        async carregarNomeCliente(var_cpf) {
            if (var_cpf.length >= 11) {
                try {
                    const resposta = await axiosVariavel.get(`https://receitafederal.gov.br/ws/${var_cpf}/token/56523232323232322`);
                    this.m_nome = resposta.data.nome_contribuinte;
                } catch (error) {
                    alert("Erro na tentativa de comunicação com o Serviço da Receita Federal."+ 
                    "Tente mais tarde!" + error);
                    error;
                }
            }

        },
        submitFormulario() {
            // arrayForm = {m_nome,m_email,m_cep,m_endereco};
            // axiosVariavel.Array = arrayForm;
            // axiosVariavel.set(`https://sistemabackend.com.br/ws/set/`);
            alert("Formulário submetido com sucesso ao Servidor");
        }
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