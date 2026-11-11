import { Icon } from '../../components/Icon'
import { Section } from '../../components/Section'
import styles from './Home.module.css'

export function Sobre() {
  return (
    <Section id="sobre" tom="escuro" aria-labelledby="sobre-titulo">
      <div className={styles.duasColunas}>
        <div className={styles.sobreTexto}>
          <h2 id="sobre-titulo" className={styles.sobreTitulo}>
            Por que “Caipora”?
          </h2>
          <blockquote className={styles.citacao}>
            <span aria-hidden="true" className={styles.aspas}>
              “
            </span>
            <p className={styles.citacaoTexto}>
              Na mitologia tupi-guarani, a Caipora é a protetora das florestas e dos animais. Ela pune quem destrói a
              mata e protege quem a respeita.
            </p>
          </blockquote>
          <p className={styles.sobreParagrafo}>
            O projeto adota esse nome para lembrar que proteger o meio ambiente é tarefa de todos: do Poder Público,
            da coletividade e de cada um de nós.
          </p>
        </div>
        <div className={styles.sobreIlustracao}>
          <div className={styles.circuloArvore}>
            <Icon nome="arvore" tamanho="44%" espessura={1} preenchido />
          </div>
        </div>
      </div>
    </Section>
  )
}
