import { IconCircle } from '../../components/IconCircle'
import { Section, SectionHeader } from '../../components/Section'
import { OBJETIVOS } from '../../content/home'
import styles from './Home.module.css'

export function Objetivos() {
  return (
    <Section aria-labelledby="objetivos-titulo">
      <div className={styles.pilha}>
        <SectionHeader rotulo="Nossos objetivos" titulo="Consciência ambiental que vira prática" tituloId="objetivos-titulo">
          Promover a consciência ambiental na comunidade por meio da educação e de ações de destinação adequada,
          reutilização, descarte responsável e reciclagem de resíduos sólidos.
        </SectionHeader>
        <div className={styles.gradeObjetivos}>
          {OBJETIVOS.map((objetivo) => (
            <article key={objetivo.titulo} className={styles.cardObjetivo}>
              <IconCircle icone={objetivo.icone} tamanho={56} cor="salvia" />
              <h3 className={styles.cardTitulo}>{objetivo.titulo}</h3>
              <p className={styles.cardTexto}>{objetivo.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
