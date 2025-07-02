import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PlanoModal from '@/components/PlanoModal.vue'

describe('PlanoModal.vue', () => {
  it('emite evento de salvar plano', async () => {
    const wrapper = mount(PlanoModal, {
      props: {
        show: true,
        plano: { refeicoes: [] }
      }
    })

    wrapper.vm.$emit('salvar', { refeicoes: [] })
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted()).toHaveProperty('salvar')
  })
})
