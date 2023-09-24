<script setup lang="ts">
defineProps<{
  msg: string
}>()


</script>

<template>
  <div class="cabecalho">
    <h1>{{ msg }}</h1>
    <h3>Criar Laudo</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
