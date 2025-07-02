<template>
  <router-link
    :to="`/paciente/${paciente.id}`"
    class="block bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
  >
    <h2 class="text-xl font-semibold">{{ paciente.nome }}</h2>
    <p class="text-sm text-gray-500 dark:text-gray-300">{{ paciente.email }}</p>
    <p class="text-sm text-gray-500 dark:text-gray-300">{{ paciente.idade }} anos</p>
  </router-link>
</template>

<script setup>
defineProps({
  paciente: Object
})
</script>

