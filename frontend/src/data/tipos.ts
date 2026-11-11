/*
 * Formato do conteudo dinamico do site.
 * Na fase 5 estes dados passam a vir da API (GET /api/public/...); por enquanto vem de exemplo.ts.
 */

export type Participante = {
  id: number
  nome: string
  curso: string
  periodo: string
}

export type CategoriaParceiro = 'Triagem' | 'Beneficiada' | 'Palestra'

export type Parceiro = {
  id: number
  nome: string
  categoria: CategoriaParceiro
  descricao: string
}

export type MetricaImpacto = {
  id: number
  /** Texto exibido em destaque, ex.: "150". */
  valor: string
  descricao: string
}
