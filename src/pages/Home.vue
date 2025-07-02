<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Lista de Pacientes</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PacienteCard
        v-for="paciente in pacientes"
        :key="paciente.id"
        :paciente="paciente"
      />
    </div>
  </div>
</template>

<script setup>
import PacienteCard from '../components/PacienteCard.vue'
import { ref, onMounted } from 'vue'
import { getPacientes } from '../services/api'

const pacientes = ref([])

onMounted(async () => {
  pacientes.value = await getPacientes()
})
</script>
