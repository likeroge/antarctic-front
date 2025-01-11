<template>
  <div class="col items-center justify-evenly">
    <h4>Добавить транспорт</h4>
    <form class="q-gutter-md">
      <q-select
        :error="!type"
        error-message="Тип обязателен"
        filled
        v-model="type"
        :options="vehicleTypes"
        label="Тип"
      />
      <q-input
        :error="!name"
        error-message="Название обязательно"
        filled
        v-model="name"
        label="Название"
      />

      <q-btn color="green" label="Добавить" type="submit" @click="onSubmitBtn" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'
import type { VehicleType } from 'src/types/vehicles'
import { onMounted } from 'vue'
import { ref } from 'vue'
const $q = useQuasar()
const name = ref('')
const type = ref('')
const vehicleTypes = ref<VehicleType[]>([])

const onSubmitBtn = async () => {
  if (!name.value || !type.value) {
    return
  }
  try {
    await api.post('/vehicle', { name: name.value, type: type.value })
    console.log('Успешно добавлено')
    $q.notify({
      color: 'positive',
      message: 'Транспорт успешно добавлен',
    })
  } catch (error) {
    console.log((error as Error).message)
  }
}

onMounted(async () => {
  try {
    const { data: vehicleTypesFromServer } = await api.get('/vehicle/vehicleTypes')
    vehicleTypes.value = vehicleTypesFromServer
  } catch (error) {
    console.log((error as Error).message)
  }
})
</script>
