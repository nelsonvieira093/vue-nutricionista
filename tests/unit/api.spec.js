import { describe, it, expect } from 'vitest'
import * as api from '@/services/api.js'

describe('api.js', () => {
  it('possui função getPacientes', () => {
    expect(typeof api.getPacientes).toBe('function')
  })

  it('possui função getPlanosPorPaciente', () => {
    expect(typeof api.getPlanosPorPaciente).toBe('function')
  })
})
