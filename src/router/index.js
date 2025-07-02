import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Paciente from '../pages/Paciente.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/paciente/:id', component: Paciente }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
