import { IconCircle } from '../../components/IconCircle'
import { Section, SectionHeader } from '../../components/Section'
import { ATUACAO } from '../../content/home'
import styles from './Home.module.css'

export function Atuacao() {
  return (
    <Section id="atuacao" tom="suave" aria-labelledby="atuacao-titulo">
      <div className={styles.pilha}>
        <SectionHeader rotulo="Como atuamos" titulo="Da sala de aula para a cidade" tituloId="atuacao-titulo" />
        <div className={styles.gradeAtuacao}>
          {ATUACAO.map((acao) => (
            <article key={acao.titulo} className={styles.cardAtuacao}>
              <div className={styles.cardTopo}>
                <IconCircle icone={acao.icone} />
                <h3 className={styles.cardTitulo}>{acao.titulo}</h3>
              </div>
              <p className={styles.cardTexto}>{acao.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
