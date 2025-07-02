// tests/unit/Paciente.spec.js
import { mount } from '@vue/test-utils'
import Paciente from '@/pages/Paciente.vue'
import { vi } from 'vitest'

vi.mock('vue-router', () => ({
  useRoute: () => ({
    params: {
      id: '1'
    }
  })
}))

describe('Paciente.vue', () => {
  it('carrega paciente ao montar', () => {
    const wrapper = mount(Paciente)
    expect(wrapper.exists()).toBe(true)
  })
})
