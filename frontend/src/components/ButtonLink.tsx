import type { ReactNode } from 'react'
import { Link } from 'react-router'
import styles from './ButtonLink.module.css'

type Variante = 'primario' | 'destaque' | 'contorno' | 'contornoClaro'

type ButtonLinkProps = {
  children: ReactNode
  variante?: Variante
  tamanho?: 'md' | 'lg'
  /** Rota interna do site (ex.: "/equipe" ou "/#contato"). */
  para?: string
  /** Endereco externo (ex.: Instagram, mailto:). Usado quando `para` nao e informado. */
  href?: string
}

/**
 * Link com aparencia de botao em formato de pilula, como no design.
 * E um link (e nao um <button>) porque sempre leva a outro lugar.
 */
export function ButtonLink({ children, variante = 'primario', tamanho = 'md', para, href }: ButtonLinkProps) {
  const classe = `${styles.botao} ${styles[variante]} ${styles[tamanho]}`

  if (para) {
    return (
      <Link to={para} className={classe}>
        {children}
      </Link>
    )
  }

  const externo = href?.startsWith('http')
  return (
    <a href={href} className={classe} {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
      {externo && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  )
}
