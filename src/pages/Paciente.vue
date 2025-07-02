<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Plano alimentar de {{ paciente.nome }}</h1>

        <!-- KPI Cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <KpiCard titulo="Calorias" :valor="kpis.calorias" />
            <KpiCard titulo="Proteínas" :valor="kpis.proteinas" />
            <KpiCard titulo="Carboidratos" :valor="kpis.carboidratos" />
            <KpiCard titulo="Gorduras" :valor="kpis.gorduras" />
        </div>

        <!-- Botão para novo plano -->
        <button @click="abrirModal" class="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Novo Plano Alimentar
        </button>

        <!-- Filtro por data -->
        <div class="mb-4">
            <label class="block text-sm font-medium mb-1">Filtrar por data</label>
            <KendoDatePicker v-model="filtroData" :format="'yyyy-MM-dd'" class="max-w-xs" />

        </div>

        <!-- Lista de planos -->
        <div v-for="plano in planosFiltrados" :key="plano.id" @click="editarPlano(plano)"
            class="p-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
            <p class="font-semibold">{{ plano.data }}</p>
            <p class="text-sm text-gray-700 dark:text-gray-300">{{ plano.descricao }}</p>
        </div>

        <!-- Modal de novo plano / edição -->
        <PlanoModal :mostrar="modalVisivel" :plano="planoEditando" @fechar="modalVisivel = false"
            @salvar="adicionarOuEditarPlano" />
    </div>
</template>

<script setup>
import { onMounted, ref, computed, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { getPacientePorId, getPlanosPorPaciente } from '../services/api'
import PlanoModal from '../components/PlanoModal.vue'
import KpiCard from '../components/KpiCard.vue'
import { DatePicker as KendoDatePicker } from '@progress/kendo-vue-dateinputs'

const route = useRoute()
const pacienteId = parseInt(route.params.id)

const paciente = ref({})
const planos = ref([])
const filtroData = ref('')
const modalVisivel = ref(false)
const planoEditando = ref(null)

const kpis = ref({
    calorias: 0,
    proteinas: 0,
    carboidratos: 0,
    gorduras: 0
})

function atualizarKpis() {
    kpis.value = {
        calorias: Math.floor(Math.random() * 800 + 1200),
        proteinas: Math.floor(Math.random() * 100),
        carboidratos: Math.floor(Math.random() * 200),
        gorduras: Math.floor(Math.random() * 80)
    }
}

// Atualização por polling a cada 30 segundos
let pollingInterval = null
onMounted(async () => {
    paciente.value = await getPacientePorId(pacienteId)
    planos.value = await getPlanosPorPaciente(pacienteId)
    atualizarKpis()
    pollingInterval = setInterval(atualizarKpis, 30000)
})

onUnmounted(() => {
    clearInterval(pollingInterval)
})

function abrirModal() {
    planoEditando.value = null
    modalVisivel.value = true
}

function editarPlano(plano) {
    planoEditando.value = { ...plano }
    modalVisivel.value = true
}

function adicionarOuEditarPlano(plano) {
    if (planoEditando.value) {
        const index = planos.value.findIndex(p => p.id === planoEditando.value.id)
        if (index !== -1) {
            planos.value[index] = { ...planoEditando.value, ...plano }
        }
        planoEditando.value = null
    } else {
        planos.value.push({ id: Date.now(), ...plano })
    }
    modalVisivel.value = false
}

const planosFiltrados = computed(() => {
    if (!filtroData.value) return planos.value
    return planos.value.filter(p => p.data === filtroData.value)
})
</script>
