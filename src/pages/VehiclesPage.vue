<template>
  <div class="col items-center justify-evenly">
    <div class="row items-center justify-between">
      <h4>Весь транспорт</h4>
      <q-btn color="primary" @click="toAddVehiclePageBtn">Добавить</q-btn>
    </div>
    <q-table
      :rows="vehicles"
      :columns="[
        { name: 'id', label: 'ID', field: 'id' },
        { name: 'name', label: 'Название', field: 'name' },
        { name: 'type', label: 'Тип', field: 'type' },
      ]"
      row-key="name"
    />
  </div>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios'
import { onMounted, ref } from 'vue'
import type { Vehicle } from 'src/types/vehicles'
import { useRouter } from 'vue-router'

const vehicles = ref<Vehicle[]>([])

const router = useRouter()

const toAddVehiclePageBtn = () => {
  router.push('/vehicles/add-vehicle')
}

onMounted(async () => {
  const { data } = await api.get('/vehicle')
  vehicles.value = data
})
</script>
