<template id="laudo">
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->
  <!--  // register globally
  Vue.component('vue-multiselect', window.VueMultiselect.default) -->

  <!--  <h2>Checkbox</h2>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">Checked: {{ checked }}</label>
 -->
  <!-- <h2>Multi Checkbox</h2> -->

  <div>
    <h2>Nome Cliente</h2>
    <input id="text" v-model="text" />
  </div>

  <div id="servicos">
    <Label>Serviços</Label>
    <br />
    <datalist name="jorge" id="jorge"></datalist>
    <option value="mau"></option>
    <input type="checkbox" id="11" value="inspeção de solo" v-model="checkedServicos" />
    <label for="11">Inspeção de solo</label>
    <input type="checkbox" id="12" value="Vistoria de Gramado" v-model="checkedServicos" />
    <label for="12">Vistoria de Gramado</label>
    <input type="checkbox" id="13" value="Epi's" v-model="checkedServicos" />
    <label for="13">EPI's</label>
    <!-- <p>Serviços Selecionados: <pre>{{ checkedServicos }}</pre></p> -->
  </div>

  <br />

  <div id="ferramentas">
    <Label>Ferramentas</Label>
    <br />
    <input type="checkbox" id="1" value="Espanador" v-model="checkedFerramentas" />
    <label for="1">Espanador</label>
    <input type="checkbox" id="2" value="Materiais de limpeza" v-model="checkedFerramentas" />
    <label for="2">Materiais de limpeza</label>
    <input type="checkbox" id="3" value="Epi's" v-model="checkedFerramentas" />
    <label for="3">EPI's</label>
    <!-- <p>Ferramentas Selecionadas: <pre>{{ checkedFerramentas }}</pre></p> -->
  </div>

  <div id="tabelaLaudo">
    <label id="cliente" for=""></label>
    <table>
      <thead>
        {{
          text
        }}
        <tr>
          <th>Serviços</th>
          ||
          <th>Ferramentas</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td id="servicoTable">|||{{ checkedServicos }}</td>
          <td id="ferramentaTable">|||{{ checkedFerramentas }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div id="btns">
    <button id="addLaudo" @click="buscarServico">Adicionar Laudo</button>
  </div>
</template>

<style>
.laudo {
  background-color: blueviolet;
}
@media (min-width: 80%) {
  .about {
    min-height: 80%;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { onMounted } from 'vue';
import axios from 'axios';
import { ref } from 'vue'

const text = ref('Edit me')
const checkedServicos = ref([])
const checkedFerramentas = ref([])
const servicoss = ref()

const checkboxValue = ref(false) // Initialize with a default value (unchecked)

const checkboxRef = (ref < HTMLInputElement) | (null > null)

// Function to get the checkbox value
const getCheckboxValue = () => {
  return checkboxValue.value
}

function criarLaudo() {
  var laudo = {
    ferramentas: checkedFerramentas.value,
    serviços: checkedServicos.value,
    cliente: text.value
  }
  return laudo
}
var arrayLaudos = []

const addLaudo = () => {
  arrayLaudos.push(criarLaudo())

  arrayLaudos.forEach((element) => {
    console.log(element)
  })
}

async function buscarServico() {
    //erro.value = "";
    /* try { */
      servicoss.value = (await axios.get("https://jsonplaceholder.typicode.com/todos/1")).data;
      console.log(servicoss);
    /* }
    catch(error) {
      erro.value = (error as Error).message;
    }  */
  }

</script>



<!-- 

import { onMounted, ref } from 'vue';
  import axios from 'axios';

  const nome = ref("Teste");
  const senha = ref("123");
  const erro = ref();
  const usuarios = ref();

  async function buscarUsuarios() {
    erro.value = "";
    try {
      usuarios.value = (await axios.get("usuario")).data;
    }
    catch(error) {
      erro.value = (error as Error).message;
    }
  }

  async function salvarUsuario() {
    erro.value = "";
    try {
      usuarios.value.push((await axios.post("usuario", 
          {
            nome: nome.value,
            senha: senha.value
          }
        )).data);
    }
    catch(error) {
      erro.value = (error as Error).message;
    }
  }

  onMounted(() => {
    buscarUsuarios();
  }); -->
