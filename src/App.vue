<template> 
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <Navbar /> <!-- <-- Adicionado aqui -->
    <ThemeToggle />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'  // <-- Importe o Navbar
import ThemeToggle from './components/ThemeToggle.vue'
</script>
