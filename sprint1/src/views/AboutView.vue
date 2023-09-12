<template>
  <div class="about">
    <h1>This is an about page, {{ title }}</h1>
    <p>title: <input type="text" v-model="title"></p>
    <p v-if="title.length > 2">Texto muito longo!</p>
    <p v-else>Texto top!</p>
    <button @click="inserir()">Inserir</button>
    <button @click="buscarUsuarios()">Atualizar</button>
    <table>
      <thead>
        <td>Id</td>
        <td>title</td>
      </thead>
      <tbody>
      <tr v-for="usuario in usuarios">
        <td>{{usuario.id}}</td>
        <td>{{usuario.title}}</td>
      </tr>
    </tbody>
    </table>
  
  </div>
</template>

<script setup lang="ts">
  import axios from "axios";
  const title = ref("Teste");
  const usuarios = ref([{id:1, title:"admin"}, {id:2, title:"Jorge"}]);
  function inserir(){
    usuarios.value.push({
    id: usuarios.value.length + 1,
    title: title.value
});
  } 
  async function buscarUsuarios(){
    usuarios.value = (await axios.get("/1")).data;
    console.log((await axios.get("/1")).data);
  }

  /* async function salvarUsuario() {
    usuarios.value.push((await axios.get("https://jsonplaceholder.typicode.com/todos/1")).data, 
    {
      nome : title.value,
      senha: senha.value
    }
    );
  } */
</script>


