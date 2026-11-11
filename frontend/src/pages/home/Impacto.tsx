import { IconCircle } from '../../components/IconCircle'
import { Section, SectionHeader } from '../../components/Section'
import type { MetricaImpacto } from '../../data/tipos'
import styles from './Home.module.css'

type ImpactoProps = {
  metricas: MetricaImpacto[]
}

export function Impacto({ metricas }: ImpactoProps) {
  return (
    <Section id="impacto" tom="suave" aria-labelledby="impacto-titulo">
      <div className={styles.duasColunas}>
        <figure>
          <img
            src="/img/congresso.jpg"
            alt="Participantes ao lado do banner do projeto no congresso"
            width={879}
            height={659}
            loading="lazy"
            className={styles.impactoImagem}
          />
          <figcaption className={styles.legenda}>
            Banner do projeto no 1º Congresso de Pesquisa &amp; Extensão do UNIPAC
          </figcaption>
        </figure>
        <div className={styles.impactoTexto}>
          <SectionHeader rotulo="Impacto" titulo="Resultados e reconhecimento" tituloId="impacto-titulo" />
          <dl className={styles.metricas}>
            {metricas.map((metrica) => (
              <div key={metrica.id} className={styles.metrica}>
                <dt className={styles.metricaValor}>{metrica.valor}</dt>
                <dd className={styles.metricaDescricao}>{metrica.descricao}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.reconhecimento}>
            <IconCircle icone="capelo" tamanho={56} />
            <div>
              <p className={styles.reconhecimentoTitulo}>Projeto apresentado em congresso</p>
              <p className={styles.reconhecimentoTexto}>1º Congresso de Pesquisa &amp; Extensão do UNIPAC</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
