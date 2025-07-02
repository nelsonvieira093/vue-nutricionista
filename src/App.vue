<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <ThemeToggle />
    <router-view />
  </div>
</template>

<script setup>
import ThemeToggle from './components/ThemeToggle.vue'
</script>

