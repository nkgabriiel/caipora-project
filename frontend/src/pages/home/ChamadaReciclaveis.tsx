import { ButtonLink } from '../../components/ButtonLink'
import { Icon } from '../../components/Icon'
import { Section } from '../../components/Section'
import styles from './Home.module.css'

/**
 * No design esta secao tambem convidava a "Fazer uma doacao" em dinheiro.
 * Doacoes online foram adiadas, entao ela fala so da entrega de reciclaveis.
 */
export function ChamadaReciclaveis() {
  return (
    <Section tom="lima" espacamento="chamada" aria-labelledby="ajude-titulo">
      <div className={styles.chamada}>
        <div className={styles.chamadaTexto}>
          <h2 id="ajude-titulo" className={styles.chamadaTitulo}>
            Ajude o Caipora a ir mais longe
          </h2>
          <p className={styles.chamadaParagrafo}>
            Entregue seus recicláveis. Todo material arrecadado é triado, vendido e o valor vira doação para
            entidades sociais de Barbacena. Fale com a gente para combinar a entrega.
          </p>
        </div>
        <ButtonLink para="/#contato" tamanho="lg">
          <Icon nome="reciclar" tamanho={20} />
          Doar recicláveis
        </ButtonLink>
      </div>
    </Section>
  )
}
