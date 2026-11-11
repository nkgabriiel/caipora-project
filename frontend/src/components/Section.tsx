import type { ReactNode } from 'react'
import styles from './Section.module.css'

type Tom = 'claro' | 'suave' | 'escuro' | 'lima'
type Espacamento = 'normal' | 'compacto' | 'chamada'

type SectionProps = {
  children: ReactNode
  /** Cor de fundo: branco, verde-claro, verde-escuro ou verde-lima. */
  tom?: Tom
  espacamento?: Espacamento
  id?: string
  'aria-label'?: string
  'aria-labelledby'?: string
}

/** Faixa horizontal da pagina, com o conteudo centralizado na largura maxima do design. */
export function Section({ children, tom = 'claro', espacamento = 'normal', id, ...aria }: SectionProps) {
  return (
    <section id={id} className={`${styles.secao} ${styles[tom]} ${styles[espacamento]}`} {...aria}>
      <div className="container">{children}</div>
    </section>
  )
}

type SectionHeaderProps = {
  /** Rotulo pequeno em caixa alta acima do titulo (ex.: "Como atuamos"). */
  rotulo?: string
  titulo: string
  /** Use `h1` so no topo de uma pagina. */
  nivel?: 'h1' | 'h2'
  children?: ReactNode
  claro?: boolean
  tituloId?: string
}

/** Rotulo + titulo + paragrafo de introducao, padrao repetido em quase todas as secoes. */
export function SectionHeader({ rotulo, titulo, nivel = 'h2', children, claro = false, tituloId }: SectionHeaderProps) {
  const Titulo = nivel
  return (
    <div className={`${styles.cabecalho} ${claro ? styles.cabecalhoClaro : ''}`}>
      {rotulo && <p className={styles.rotulo}>{rotulo}</p>}
      <Titulo id={tituloId} className={nivel === 'h1' ? styles.tituloPagina : styles.titulo}>
        {titulo}
      </Titulo>
      {children && <p className={styles.intro}>{children}</p>}
    </div>
  )
}
