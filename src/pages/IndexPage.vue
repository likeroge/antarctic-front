<template>
  <q-page class="row items-center justify-evenly">
    <h1>Main page</h1>
    <!-- <p>{{ process.env.VITE_APP_API_URL }}</p> -->
    <p>{{ data }}</p>
  </q-page>
</template>

<script setup lang="ts">
const process = window.process
const data = process.env.VITE_APP_API_URL
</script>
