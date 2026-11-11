import { Icon } from '../../components/Icon'
import { IconCircle } from '../../components/IconCircle'
import { SectionHeader, Section } from '../../components/Section'
import { CICLO } from '../../content/home'
import styles from './Home.module.css'

export function Ciclo() {
  return (
    <Section aria-labelledby="ciclo-titulo">
      <div className={styles.pilha}>
        <div className={styles.cicloCabecalho}>
          <SectionHeader rotulo="O ciclo do projeto" titulo="Do resíduo à ação social" tituloId="ciclo-titulo" />
          <p className={styles.cicloResumo}>
            O material reciclável arrecadado é vendido, e o valor vira doação para uma entidade social de Barbacena.
          </p>
        </div>
        <ol className={styles.gradeCiclo}>
          {CICLO.map((etapa) => (
            <li key={etapa.titulo} className={styles.etapa}>
              {etapa.imagem ? (
                <img
                  src={etapa.imagem.src}
                  alt={etapa.imagem.alt}
                  width={569}
                  height={379}
                  loading="lazy"
                  className={styles.etapaImagem}
                />
              ) : (
                <div aria-hidden="true" className={styles.etapaSemImagem}>
                  <Icon nome={etapa.icone} tamanho={72} espessura={1.5} />
                </div>
              )}
              <div className={styles.cardTopo}>
                <IconCircle
                  icone={etapa.icone}
                  tamanho={48}
                  cor={etapa.destaque ? 'ocre' : 'musgo'}
                  preenchido={etapa.destaque}
                />
                <h3 className={styles.cardTitulo}>{etapa.titulo}</h3>
              </div>
              <p className={styles.cardTexto}>{etapa.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
