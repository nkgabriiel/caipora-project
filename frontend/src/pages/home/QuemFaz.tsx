import { ButtonLink } from '../../components/ButtonLink'
import { Icon } from '../../components/Icon'
import { Section, SectionHeader } from '../../components/Section'
import { COORDENACAO } from '../../content/home'
import styles from './Home.module.css'

/* Na inicial so aparecem os dois parceiros principais; a lista completa fica na pagina Equipe. */
const PARCEIROS_EM_DESTAQUE = [
  { nome: 'NSU', papel: 'Parceira na triagem e pesagem' },
  { nome: 'Escola Infantil Pequeno Marcos', papel: 'Entidade beneficiada' },
]

export function QuemFaz() {
  return (
    <Section aria-labelledby="quem-faz-titulo">
      <div className={styles.duasColunas}>
        <div className={styles.quemFazTexto}>
          <SectionHeader rotulo="Quem faz" titulo="Alunos de todos os cursos, juntos pela cidade" tituloId="quem-faz-titulo">
            Cada área enxerga o problema de um jeito. O Caipora reúne estudantes do UNIPAC Barbacena de diferentes
            cursos, com parceiros da comunidade.
          </SectionHeader>
          <div className={styles.botoes}>
            <ButtonLink para="/equipe">
              Conheça a equipe
              <Icon nome="setaDireita" tamanho={18} espessura={2.2} />
            </ButtonLink>
          </div>
        </div>
        <div className={styles.quemFazCards}>
          <div className={styles.cardCoordenacao}>
            <span aria-hidden="true" className={styles.iniciais}>
              {COORDENACAO.iniciais}
            </span>
            <div>
              <p className={styles.coordenacaoRotulo}>Coordenação</p>
              <p className={styles.coordenacaoNome}>{COORDENACAO.nome}</p>
            </div>
          </div>
          <div className={styles.gradeParceiros}>
            {PARCEIROS_EM_DESTAQUE.map((parceiro) => (
              <div key={parceiro.nome} className={styles.cardParceiro}>
                <p className={styles.parceiroNome}>{parceiro.nome}</p>
                <p className={styles.parceiroTexto}>{parceiro.papel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
