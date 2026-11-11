import { Icon, type NomeIcone } from './Icon'
import styles from './IconCircle.module.css'

type IconCircleProps = {
  icone: NomeIcone
  /** Diametro do circulo em px. O icone ocupa cerca de metade. */
  tamanho?: number
  cor?: 'musgo' | 'salvia' | 'ocre' | 'floresta'
  preenchido?: boolean
}

/** Icone dentro de um circulo colorido (cards de objetivos, atuacao e ciclo). */
export function IconCircle({ icone, tamanho = 52, cor = 'musgo', preenchido }: IconCircleProps) {
  return (
    <span className={`${styles.circulo} ${styles[cor]}`} style={{ width: tamanho, height: tamanho }} aria-hidden="true">
      <Icon nome={icone} tamanho={Math.round(tamanho * 0.46)} preenchido={preenchido} />
    </span>
  )
}
