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
    <input id="text" v-model="text">
  </div>

  <div id="servicos">
    <Label>Serviços</Label>
    <br>
    <list name="jorge" id="jorge"></list>
    <option value="mau="></option>
    <input type="checkbox" id="11" value="inspeção de solo" v-model="checkedServicos">
    <label for="11">Inspeção de solo</label>
    <input type="checkbox" id="12" value="Vistoria de Gramado" v-model="checkedServicos">
    <label for="12">Vistoria de Gramado</label>
    <input type="checkbox" id="13" value="Epi's" v-model="checkedServicos">
    <label for="13">EPI's</label>
    <!-- <p>Serviços Selecionados: <pre>{{ checkedServicos }}</pre></p> -->
  </div>

  <br>

  <div id="ferramentas">
    <Label>Ferramentas</Label>
    <br>
    <input type="checkbox" id="1" value="Espanador" v-model="checkedFerramentas">
    <label for="1">Espanador</label>
    <input type="checkbox" id="2" value="Materiais de limpeza" v-model="checkedFerramentas">
    <label for="2">Materiais de limpeza</label>
    <input type="checkbox" id="3" value="Epi's" v-model="checkedFerramentas">
    <label for="3">EPI's</label>
    <!-- <p>Ferramentas Selecionadas: <pre>{{ checkedFerramentas }}</pre></p> -->
  </div>

  <div id="tabelaLaudo">
    
    <label id="cliente" for=""></label>
  <table>
    <thead>
      {{ text }}
        <tr>
            <th>Serviços</th>
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

</template>

<style>
.laudo{background-color: blueviolet;}
@media (min-width: 80%) {
  .about {
    min-height: 80%;
    display: flex;
    align-items: center;
  }
}

</style>


<script setup>
import { ref } from 'vue'

const text = ref('Edit me')
/* const checked = ref(true) */
const checkedServicos = ref([])
const checkedFerramentas = ref([])


/* const picked = ref('One')
const selected = ref('A')
const multiSelected = ref(['A']) */
</script> 
