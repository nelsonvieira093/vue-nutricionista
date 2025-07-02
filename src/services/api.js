// Simula pacientes
export async function getPacientes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, nome: 'João Silva', email: 'joao@email.com', idade: 30 },
        { id: 2, nome: 'Maria Santos', email: 'maria@email.com', idade: 25 },
        { id: 3, nome: 'Carlos Lima', email: 'carlos@email.com', idade: 40 }
      ])
    }, 500)
  })
}

// Busca um paciente pelo ID
export async function getPacientePorId(id) {
  const pacientes = await getPacientes()
  return pacientes.find(p => p.id === parseInt(id)) // Corrigido: garante que ID seja número
}

// Simula planos alimentares por paciente
export async function getPlanosPorPaciente(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const planos = {
        1: [
          { id: 101, data: '2025-06-01', descricao: 'Plano leve com frutas e proteínas' },
          { id: 102, data: '2025-06-15', descricao: 'Dieta rica em fibras e vegetais' }
        ],
        2: [
          { id: 201, data: '2025-06-10', descricao: 'Refeições com baixa caloria' }
        ],
        3: [
          { id: 301, data: '2025-07-01', descricao: 'Plano de manutenção com carboidratos complexos' }
        ]
      }

      resolve(planos[parseInt(id)] || [])
    }, 500)
  })
}
