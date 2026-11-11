import type { MetricaImpacto, Parceiro, Participante } from './tipos'

/*
 * Dados provisorios, copiados do design.
 * Serao substituidos pelo conteudo cadastrado na area administrativa (fases 3 a 5).
 */

/** O design ainda nao tem os integrantes reais: os campos ficam marcados para preencher. */
export const PARTICIPANTES_EXEMPLO: Participante[] = Array.from({ length: 8 }, (_, indice) => ({
  id: indice + 1,
  nome: '[Nome do participante]',
  curso: '[Curso]',
  periodo: '[Período]',
}))

export const PARCEIROS_EXEMPLO: Parceiro[] = [
  {
    id: 1,
    nome: 'NSU',
    categoria: 'Triagem',
    descricao: 'Separação e pesagem dos recicláveis arrecadados.',
  },
  {
    id: 2,
    nome: 'Escola Infantil Pequeno Marcos',
    categoria: 'Beneficiada',
    descricao: '150 crianças atendidas, beneficiada com caixas de leite.',
  },
  {
    id: 3,
    nome: 'Rivelli Alimentos',
    categoria: 'Palestra',
    descricao: 'Convidada para palestra no projeto.',
  },
  {
    id: 4,
    nome: 'Associação BQ Recicla',
    categoria: 'Palestra',
    descricao: 'Convidada para palestra no projeto.',
  },
]

export const METRICAS_EXEMPLO: MetricaImpacto[] = [
  {
    id: 1,
    valor: '150',
    descricao: 'crianças atendidas pela Escola Infantil Pequeno Marcos, beneficiada com caixas de leite',
  },
  {
    id: 2,
    valor: '3',
    descricao: 'palestras com convidados: Rivelli Alimentos, Associação BQ Recicla e meio ambiente na Constituição',
  },
]
