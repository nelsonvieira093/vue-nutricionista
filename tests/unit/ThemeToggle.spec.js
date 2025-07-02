// tests/unit/ThemeToggle.spec.js
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ThemeToggle from '@/components/ThemeToggle.vue'

describe('ThemeToggle.vue', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('alterna tema ao clicar', async () => {
    const wrapper = mount(ThemeToggle)

    const button = wrapper.find('button')
    await button.trigger('click')

    const tema = localStorage.getItem('tema') // <- chave correta aqui

    expect(['light', 'dark']).toContain(tema)
    expect(document.documentElement.classList.contains('dark')).toBe(tema === 'dark')
  })
})
