<template>
  <div class="flex justify-end p-4">
    <button
      @click="alternarTema"
      class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
    >
      {{ tema === 'dark' ? '🌙 Escuro' : '☀️ Claro' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const tema = ref('light')

function alternarTema() {
  tema.value = tema.value === 'light' ? 'dark' : 'light'
}

// Aplica/remover classe no <html> e salva no localStorage
watch(tema, (valor) => {
  document.documentElement.classList.toggle('dark', valor === 'dark')
  localStorage.setItem('tema', valor)
})

// Ao carregar, pega o valor salvo ou usa 'light'
onMounted(() => {
  const salvo = localStorage.getItem('tema')
  tema.value = salvo === 'dark' ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', tema.value === 'dark')
})
</script>
