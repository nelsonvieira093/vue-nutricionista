<template>
  <div class="kpi-card">
    <h3>{{ titulo }}</h3>
    <div class="value">{{ formattedValue }}</div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true
    },
    valor: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    formattedValue() {
      const number = Number(this.valor)
      return number.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }
  }
}
</script>

<style scoped>
.kpi-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.kpi-card h3 {
  margin: 0 0 8px;
  font-size: 1.25em;
}

.kpi-card .value {
  font-size: 2em;
  font-weight: bold;
}
</style>
