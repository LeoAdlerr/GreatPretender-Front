<<<<<<< Updated upstream
<template class="laudo">
  <div class="itensLaudo">
=======
<!-- eslint-disable vue/no-export-in-script-setup -->
<template id="laudo">



  <div id="itensLaudo">
>>>>>>> Stashed changes
    <label for="selecionaServico">Serviços:</label>
    <input class="selecionaServico" list="listaServico" type="text" v-model="selectedServico" />
    <datalist name="listaServico" id="listaServico">
      <option v-for="servico in servicoss" :key="servico.id">{{ servico.nome }}</option>
    </datalist>
    <label for="selecionaFerramenta">Ferramentas:</label>
    <input
      id="selecionaFerramenta"
      list="listaFerramenta"
      type="text"
      v-model="selectedFerramenta"
    />
    <datalist name="listaFerramenta" id="listaFerramenta">
      <option v-for="ferramenta in ferramentass" :key="ferramenta.id">{{ ferramenta.nome }}</option>
    </datalist>
  </div>

  <br /><br />

  <div>
    <button id="addServico" @click="addServico(selectedServico)">Adicionar Servico</button>

    <button id="addFerramenta" @click="addFerramenta(selectedFerramenta)">
      Adicionar Ferramenta
    </button>
  </div>

  <br /><br />

  <div id="tabelaLaudo">
    <label id="cliente" for=""></label>
    <table>
      <thead>
        <tr>
          <th>Serviços</th>
          ||
          <th>Ferramentas</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td id="servicoTable">{{ checkedServicos }}</td>
          <hr />
          <td id="ferramentaTable">{{ checkedFerramentas }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <br /><br />

  <button id="addlaudo" @click="addLaudo">Salvar Laudo</button>
  <LaudoForm :addLaudoFunction="addLaudo" />
</template>

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

const servicoss = ref([])
const ferramentass = ref([])
const selectedFerramenta = ref('')
const selectedServico = ref('')
const checkedServicos = ref([])
const checkedFerramentas = ref([])

async function buscarServico() {
  try {
    const response = await axios.get(
      'https://8080-leoadlerr-backendgreatp-dxesj3nczo7.ws-us104.gitpod.io/servico'
    )
    servicoss.value = response.data
  } catch (error) {
    console.error('Error fetching servico:', error)
  }
}

async function buscarFerramenta() {
  try {
    const response = await axios.get(
      'https://8080-leoadlerr-backendgreatp-dxesj3nczo7.ws-us104.gitpod.io/produto'
    )
    ferramentass.value = response.data
  } catch (error) {
    console.error('Error fetching ferramenta:', error)
  }
}

function addServico(servico) {
  if (servico) {
    checkedServicos.value.push(servico)
    selectedServico.value = ''
  }
}

function addFerramenta(ferramenta) {
  if (ferramenta) {
    checkedFerramentas.value.push(ferramenta)
    selectedFerramenta.value = ''
  }
}

let laudo = []

function addLaudo() {
  
  laudo.push({
    cliente: 'Jorge',
    ferramenta: checkedFerramentas.value,
    servico: checkedServicos.value,
  });

  console.log(laudo);

}

onMounted(() => {
  buscarServico()
  buscarFerramenta()
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
<<<<<<< Updated upstream
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
=======
</style>
>>>>>>> Stashed changes
