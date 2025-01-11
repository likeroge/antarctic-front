<template>
  <h4>Учет движения транспорта</h4>
  <q-table :rows="transportNotes" :columns="transportNotesTableColumnds" @row-click="onRowClick" />
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios'
import type { TransportNote } from 'src/types/transport-notes'
import { onMounted, ref } from 'vue'

const transportNotes = ref<TransportNote[]>([])
const transportNotesTableColumnds = [
  {
    name: 'date',
    label: 'Дата',
    field: (row: TransportNote) => new Date(row.date).toLocaleDateString(),
  },
  {
    name: 'vehicleName',
    label: 'Транспорт',
    field: (row: TransportNote) => row.vehicle.name,
  },
  {
    name: 'from',
    label: 'Откуда',
    field: (row: TransportNote) => row.from.name,
  },
  {
    name: 'to',
    label: 'Куда',
    field: (row: TransportNote) => row.to.name,
  },
  {
    name: 'pob',
    label: 'POB',
    field: (row: TransportNote) => row.pob,
  },
  {
    name: 'atd',
    label: 'ATD',
    field: (row: TransportNote) =>
      row.atd &&
      new Date(row.atd).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  },
  {
    name: 'ata',
    label: 'ATA',
    field: (row: TransportNote) =>
      row.ata &&
      new Date(row.ata).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  },
]
// import { useRoute } from 'vue-router'

// const route = useRoute()

const onRowClick = (_: Event, row: TransportNote) => {
  console.log(row.from)
}

onMounted(async () => {
  try {
    const { data: transportNotesFromServer } = await api.get('/transport-notes')
    transportNotes.value = transportNotesFromServer
  } catch (error) {
    console.error((error as Error).message)
  }
})
</script>
