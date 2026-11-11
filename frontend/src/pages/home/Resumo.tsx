import { Section } from '../../components/Section'
import { RESUMO } from '../../content/home'
import styles from './Home.module.css'

export function Resumo() {
  return (
    <Section tom="suave" espacamento="compacto" aria-label="O projeto em resumo">
      <dl className={styles.resumo}>
        {RESUMO.map((item) => (
          <div key={item.termo} className={styles.resumoItem}>
            <dt className={styles.resumoTermo}>{item.termo}</dt>
            <dd className={styles.resumoValor}>{item.valor}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
