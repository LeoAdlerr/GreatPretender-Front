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
  <input type="checkbox" id="jack" value="inspeção de solo" v-model="checkedNames">
  <label for="jack">Inspeção de solo</label>
  <input type="checkbox" id="john" value="Materiais de limpeza" v-model="checkedNames">
  <label for="john">Materiais de limpeza</label>
  <input type="checkbox" id="mike" value="Epi's" v-model="checkedNames">
  <label for="mike">EPI's</label>
  <p>Serviços Selecionados: <pre>{{ checkedNames }}</pre></p>

  <h2>Nome cliente</h2>
  <input v-model="text"> {{ text }}

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
const checkedNames = ref(['Jack'])
/* const picked = ref('One')
const selected = ref('A')
const multiSelected = ref(['A']) */
</script> 

