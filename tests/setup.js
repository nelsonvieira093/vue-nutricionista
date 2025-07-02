// tests/setup.js
import { config } from '@vue/test-utils'

// Configurações globais para os testes
config.global.mocks = {
  $t: (msg) => msg // Remove esta linha se não usar internacionalização (i18n)
}

// Adicione outras configurações globais necessárias