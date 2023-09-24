<template>

<div id="tabelaLaudos">
  <table>
    <thead>
        <tr>
          <th>Usuario</th>
          ||
          <th>Servico</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="atribuicao in atribuicoes" :key="atribuicao.id">
          <td>{{ atribuicao.usuario.nome }}</td>
          <hr>||<hr>
          <td>| Setor: {{ atribuicao.servico.setor.nome }} 
            | Nome: {{ atribuicao.servico.nome }}
            | Descricao: {{ atribuicao.servico.descricao }}
            | Risco: {{ atribuicao.servico.risco }} 
            | Duracao: {{ atribuicao.servico.duracao_dias }}
            | Custo: {{  atribuicao.servico.duracao_dias }}</td>
            <hr>||<hr>   
        </tr>
      </tbody>
    </table>
</div>

</template>

<!-- <style>
body {
  color: rgb(0, 0, 0);
}

template {
  color: rgb(0, 0, 0);
}
</style> -->

<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

const atribuicoes = ref([])

async function buscarServico() {
  try {
    const response = await axios.get('atribuicao')
    atribuicoes.value = response.data
  } catch (error) {
    console.error('Error fetching servico:', error)
  }
}

onMounted(() => {
  buscarServico()
})

</script>