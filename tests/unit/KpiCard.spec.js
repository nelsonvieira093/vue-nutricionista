// tests/unit/KpiCard.spec.js
import { mount } from '@vue/test-utils'
// Escolha APENAS UMA das linhas abaixo:
import KpiCard from '@/components/KpiCard.vue'  // Opção 1 (usando alias)
// OU
// import KpiCard from '../../src/components/KpiCard.vue' // Opção 2 (caminho relativo)

describe('KpiCard.vue', () => {
  it('renderiza corretamente o título e valor', () => {
    const wrapper = mount(KpiCard, {
      props: {
        titulo: 'Calorias',
        valor: 2000
      }
    })

    expect(wrapper.text()).toContain('Calorias')
    expect(wrapper.text()).toContain('2.000,00') // Adicionei casas decimais
  })

  it('renderiza o valor com separador de milhar', () => {
    const wrapper = mount(KpiCard, {
      props: {
        titulo: 'Calorias',
        valor: 1000000
      }
    })

    expect(wrapper.text()).toContain('1.000.000,00') // Adicionei casas decimais
  })

  it('renderiza o valor com duas casas decimais', () => {
    const wrapper = mount(KpiCard, {
      props: {
        titulo: 'Calorias',
        valor: 1234.5678
      }
    })

    expect(wrapper.text()).toContain('1.234,57')
  })
})
