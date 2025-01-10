<template>
  <!-- <q-page class="row items-center justify-evenly"> -->
  <div class="col items-center justify-evenly">
    <h4>Transport page</h4>
    <q-table
      :rows="vehicles"
      :columns="[
        { name: 'id', label: 'ID', field: 'id' },
        { name: 'name', label: 'Название', field: 'name' },
        { name: 'type', label: 'Тип', field: 'type' },
      ]"
      row-key="name"
    />
    <!-- <div v-for="vehicle in vehicles" :key="vehicle.id">
      <p>ID: {{ vehicle.id }}</p>
      <p>Название: {{ vehicle.name }}</p>
      <p>Тип: {{ vehicle.type }}</p>
    </div> -->
  </div>
  <!-- </q-page> -->
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios'
import { onMounted, ref } from 'vue'
import type { Vehicle } from 'src/types/vehicles'

const vehicles = ref<Vehicle[]>([])

onMounted(async () => {
  const { data } = await api.get('/vehicle')
  vehicles.value = data
})
</script>
