
<template class="laudo">
  <div class="itensLaudo">

    <label for="selecionaServico">Serviços:</label>
    <input class="selecionaServico" list="listaServico" type="text" v-model="selectedServico" />
      <datalist name="listaServico" id="listaServico">
        <option v-for="servico in servicoss" :key="servico.id">{{ servico.nome }}</option>
      </datalist>
    <label for="usuario">Usuario:</label>
    <input id="inputUsuario" list="listaUsuario" type="text" v-model="selectedUsuario"/>
      <datalist name="listaUsuario" id="listaUsuario">
        <option v-for="usuario in usuarioss" :key="usuario.id">{{ usuario.nome }}</option>
      </datalist>
  </div>

  <br /><br />

  <div>
    <button id="addServico" @click="addServico(selectedServico)">Adicionar Servico</button>

    <button id="addUsuario" @click="addUsuario(selectedUsuario)">Adicionar Usuario </button>
  </div>

  <br /><br />

  <div id="tabelaLaudo">
    <label id="cliente" for=""></label>
    <table>
      <thead>
        <tr>
          <th>Serviços</th>
          ||
          <th>Usuario</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td id="servicoTable">{{ checkedServico }}</td>
          <hr />
          <td id="ferramentaTable">{{ checkedUsuario }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <br /><br />

  <button id="addlaudo" @click="salvarLaudo">Salvar Laudo</button>
  
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

const servicoss = ref([])
const usuarioss = ref([])
const selectedUsuario = ref('')
const selectedServico = ref('')
const checkedServico = ref([])
const checkedUsuario = ref([])

async function buscarServico() {
  try {
    const response = await axios.get('servico')
    servicoss.value = response.data
  } catch (error) {
    console.error('Error fetching servico:', error)
  }
}

async function buscarUsuario() {
  try {
    const response = await axios.get('usuario')
    usuarioss.value = response.data
  } catch (error) {
    console.error('Error fetching servico:', error)
  }
}

function addServico(servico) {
  if (checkedServico.value[0] == null) {
    checkedServico.value.push(servico)
    selectedServico.value = ''
  }else{
    alert("Apenas um servico por Laudo!")
  }
}

function addUsuario(usuario) {
  if (checkedUsuario.value[0] == null) {
    checkedUsuario.value.push(usuario)
    selectedUsuario.value = ''
  }else{
    alert("Apenas um usuário por Laudo!")
  }
}


async function salvarLaudo() {

  let usu = {};
  try{
    const response = await axios.get("usuario/"+checkedUsuario.value[0]);
    usu.value = response.data;

     } catch (error) {
      alert('Usuario inválido');
         console.error('Usuario inválido:', error)
    }

    let serv = {};
      try{
    const response = await axios.get("servico/"+checkedServico.value[0]);
    serv.value = response.data;
     
    
     } catch (error) {
        alert('Servico inválido');
         console.error('Servico inválido:', error)
    }

    try {
      const response = await axios.post("atribuicao",{
    "usuario": usu.value,
    "servico": serv.value
    });
    let obj = {};
    obj.value = response.data;
    alert("Laudo salvo com sucesso!"+ obj);
  } catch (error) {
    alert('Erro ao salvar o Laudo!:');
    console.error('Erro ao salvar o Laudo!:', error)
  }
}

onMounted(() => {
  buscarServico();
  buscarUsuario();
})


</script>

<style>
.laudo {
  background-color: blueviolet !important;
}

.itensLaudo{ 
  margin-top: 5%;
}
@media (min-width: 80%) {
  .about {
    min-height: 80%;
    display: flex;
    align-items: center;
  }
}

template {
  font-family: 'Quark';
  font-weight: 700;
  font-style: normal;
}
input {
  background-color: rgba(241, 241, 241, 0.13);
  padding-right: auto;
  padding-top: 2px;
  padding-bottom: 2px;
  border-color: aliceblue;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 20px;

  }

button{

  padding-top: .5%;
  padding-bottom: .5%;
  padding-left: 1%;
  padding-right: 1%;
  margin: .3%;
  background-color: rgb(255, 187, 0);
  border: 1px;
  border-color: black;
  border-radius: 5px;
  color: white;
  font-family: 'Quark';
  font-weight: 700;
  font-style: normal;
}

button:hover {
  background-color: white;
  transition-duration: .4s;
  color:  rgb(255, 187, 0);
  box-shadow: 1px 1px 2px  rgb(255, 187, 0);
  padding-top: .6%;
  padding-bottom: .6%;
  padding-left: 1.2%;
  padding-right: 1.2%;
  border-style: solid;
  border-color:  rgb(255, 187, 0);
  text-shadow: 1px black;
}
</style>
