import { ButtonLink } from '../../components/ButtonLink'
import { Icon } from '../../components/Icon'
import { INSTITUICAO } from '../../content/navegacao'
import styles from './Home.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.duasColunas}`}>
        <div className={styles.heroTexto}>
          <p className={styles.heroRotulo}>{INSTITUICAO}</p>
          <h1 className={styles.heroTitulo}>Proteger o meio ambiente é tarefa de todos.</h1>
          <p className={styles.heroSubtitulo}>Sustentabilidade e ação social na comunidade</p>
          <p className={styles.heroIntro}>
            Levamos para fora da sala de aula a consciência ambiental: educação, prática de coleta e reciclagem, e
            ação social na comunidade de Barbacena.
          </p>
          <div className={styles.botoes}>
            <ButtonLink para="/#sobre" variante="destaque">
              Conheça o projeto
              <Icon nome="setaDireita" tamanho={18} espessura={2.2} />
            </ButtonLink>
            <ButtonLink para="/#contato" variante="contorno">
              Faça parte
            </ButtonLink>
          </div>
        </div>
        <figure className={styles.heroFigura}>
          <div aria-hidden="true" className={styles.decorCirculoGrande} />
          <div aria-hidden="true" className={styles.decorCirculoPequeno} />
          <img
            src="/img/equipe-escadaria.jpg"
            alt="Participantes do Projeto Caipora reunidos na escadaria do campus"
            width={1024}
            height={576}
            className={styles.heroImagem}
            fetchPriority="high"
          />
          <figcaption className={styles.legenda}>Participantes do Projeto Caipora</figcaption>
        </figure>
      </div>
    </section>
  )
}
