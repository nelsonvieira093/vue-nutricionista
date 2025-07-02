<template>
  <div
    v-if="mostrar"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-md">
      <h2 class="text-xl font-bold mb-4">
        {{ plano?.id ? 'Editar Plano Alimentar' : 'Novo Plano Alimentar' }}
      </h2>

      <form @submit.prevent="salvar">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Data</label>
          <input
            v-model="novoPlano.data"
            type="date"
            class="p-2 border rounded w-full text-black"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Descrição</label>
          <textarea
            v-model="novoPlano.descricao"
            class="p-2 border rounded w-full text-black"
            required
          ></textarea>
        </div>

        <div class="flex justify-end space-x-2">
          <button
            type="button"
            @click="$emit('fechar')"
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancelar
          </button>

          <button
            type="submit"
            class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  mostrar: Boolean,
  plano: Object,
})

const emit = defineEmits(['fechar', 'salvar'])

const novoPlano = ref({
  data: '',
  descricao: ''
})

// Preenche o formulário ao abrir o modal para edição
watch(
  () => props.mostrar,
  (visivel) => {
    if (visivel) {
      novoPlano.value = props.plano
        ? { ...props.plano }
        : { data: '', descricao: '' }
    }
  }
)

function salvar() {
  emit('salvar', { ...novoPlano.value })
  emit('fechar')
  novoPlano.value = { data: '', descricao: '' }
}
</script>

