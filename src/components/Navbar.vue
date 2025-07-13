<template>
  <nav class="bg-gray-800 text-white p-4 shadow-md">
    <div class="flex justify-between items-center">
      <!-- Nome do sistema -->
      <h1 class="text-xl font-semibold">Nutricionista</h1>

      <!-- Botão hamburguer (mobile) -->
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu normal (desktop) -->
      <div class="hidden md:flex space-x-4">
        <router-link to="/" class="hover:underline text-lg" active-class="text-yellow-300">
          🏠 Home
        </router-link>
        <router-link
          v-if="isPacienteRoute"
          to="/"
          class="hover:underline text-lg text-gray-300"
        >
          ⬅ Voltar
        </router-link>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-if="menuOpen" class="mt-2 md:hidden flex flex-col space-y-2">
      <router-link to="/" class="hover:underline text-lg" @click="toggleMenu">
        🏠 Home
      </router-link>
      <router-link
        v-if="isPacienteRoute"
        to="/"
        class="hover:underline text-lg text-gray-300"
        @click="toggleMenu"
      >
        ⬅ Voltar
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Detecta se está na rota do paciente
const route = useRoute()
const isPacienteRoute = computed(() => route.path.startsWith('/paciente/'))
</script>

<style scoped>
/* Ícone pode ser ajustado aqui se quiser */

</style>
