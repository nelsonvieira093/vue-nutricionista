import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PacienteCard from '@/components/PacienteCard.vue'

describe('PacienteCard.vue', () => {
  it('renderiza nome do paciente', () => {
    const wrapper = mount(PacienteCard, {
      props: {
        paciente: { nome: 'João Silva' }
      }
    })

    expect(wrapper.text()).toContain('João Silva')
  })
})
