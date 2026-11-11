import { METRICAS_EXEMPLO } from '../data/exemplo'
import { Atuacao } from './home/Atuacao'
import { ChamadaReciclaveis } from './home/ChamadaReciclaveis'
import { Ciclo } from './home/Ciclo'
import { Contato } from './home/Contato'
import { Hero } from './home/Hero'
import { Impacto } from './home/Impacto'
import { Objetivos } from './home/Objetivos'
import { QuemFaz } from './home/QuemFaz'
import { Resumo } from './home/Resumo'
import { Sobre } from './home/Sobre'

export function HomePage() {
  return (
    <>
      <title>Projeto Caipora · Sustentabilidade e ação social</title>
      <Hero />
      <Resumo />
      <Sobre />
      <Objetivos />
      <Atuacao />
      <Ciclo />
      <Impacto metricas={METRICAS_EXEMPLO} />
      <QuemFaz />
      <ChamadaReciclaveis />
      <Contato />
    </>
  )
}
