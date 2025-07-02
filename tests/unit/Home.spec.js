import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '@/pages/Home.vue'

describe('Home.vue', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(Home)
    expect(wrapper.exists()).toBe(true)
  })
})
