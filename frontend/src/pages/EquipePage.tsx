import { ButtonLink } from '../components/ButtonLink'
import { Icon } from '../components/Icon'
import { Section, SectionHeader } from '../components/Section'
import { COORDENACAO } from '../content/home'
import { CONTATO } from '../content/navegacao'
import { PARCEIROS_EXEMPLO, PARTICIPANTES_EXEMPLO } from '../data/exemplo'
import type { CategoriaParceiro } from '../data/tipos'
import styles from './EquipePage.module.css'

/* "Beneficiada" aparece em ocre no design, para diferenciar quem recebe de quem colabora. */
const CLASSE_CATEGORIA: Record<CategoriaParceiro, string> = {
  Triagem: styles.categoria,
  Palestra: styles.categoria,
  Beneficiada: `${styles.categoria} ${styles.categoriaBeneficiada}`,
}

export function EquipePage() {
  return (
    <>
      <title>Equipe e parceiros · Projeto Caipora</title>

      <section className={styles.topo}>
        <div className={`container ${styles.topoConteudo}`}>
          <SectionHeader rotulo="Equipe" titulo="Quem faz o Caipora" nivel="h1">
            Estudantes de todos os cursos do UNIPAC Barbacena, unidos por um mesmo compromisso com o meio ambiente e
            com a comunidade.
          </SectionHeader>
          <figure className={styles.fotoEquipe}>
            <div aria-hidden="true" className={styles.decorCirculo} />
            <img
              src="/img/equipe-escadaria.jpg"
              alt="Participantes do Projeto Caipora reunidos na escadaria do campus"
              width={1024}
              height={576}
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className={styles.coordenacaoSecao} aria-label="Coordenação">
        <div className={`container ${styles.coordenacaoGrade}`}>
          <article className={styles.cardCoordenacao}>
            <span aria-hidden="true" className={styles.iniciais}>
              {COORDENACAO.iniciais}
            </span>
            <div className={styles.coordenacaoTexto}>
              <p className={styles.coordenacaoRotulo}>Coordenação</p>
              <h2 className={styles.coordenacaoNome}>{COORDENACAO.nome}</h2>
              <a href={`mailto:${CONTATO.email}`} className={styles.coordenacaoEmail}>
                {CONTATO.email}
              </a>
            </div>
          </article>
          <figure className={styles.principio}>
            <blockquote className={styles.principioCitacao}>
              <p>“De preferência misturando cursos: cada área enxerga o problema de um jeito.”</p>
            </blockquote>
            <figcaption className={styles.principioLegenda}>Princípio de formação dos grupos do projeto</figcaption>
          </figure>
        </div>
      </section>

      <Section tom="suave" aria-labelledby="participantes-titulo">
        <div className={styles.pilha}>
          <SectionHeader titulo="Participantes" tituloId="participantes-titulo" />
          <ul className={styles.gradeParticipantes}>
            {PARTICIPANTES_EXEMPLO.map((participante) => (
              <li key={participante.id} className={styles.participante}>
                <span aria-hidden="true" className={styles.avatar}>
                  <Icon nome="pessoa" tamanho={28} />
                </span>
                <div className={styles.participanteTexto}>
                  <p className={styles.participanteNome}>{participante.nome}</p>
                  <p className={styles.participanteCurso}>
                    {participante.curso} · {participante.periodo}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section aria-labelledby="parceiros-titulo">
        <div className={styles.pilha}>
          <SectionHeader rotulo="Parceiros e apoiadores" titulo="Ninguém protege a mata sozinho" tituloId="parceiros-titulo" />
          <ul className={styles.gradeParceiros}>
            {PARCEIROS_EXEMPLO.map((parceiro) => (
              <li key={parceiro.id} className={styles.cardParceiro}>
                <p className={CLASSE_CATEGORIA[parceiro.categoria]}>{parceiro.categoria}</p>
                <h3 className={styles.parceiroNome}>{parceiro.nome}</h3>
                <p className={styles.parceiroDescricao}>{parceiro.descricao}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tom="escuro" espacamento="chamada" aria-labelledby="participe-titulo">
        <div className={styles.chamada}>
          <SectionHeader titulo="Quer fazer parte?" tituloId="participe-titulo" claro>
            O Caipora é aberto a alunos de todos os cursos. Fale com a coordenação ou acompanhe as próximas ações pelo
            Instagram.
          </SectionHeader>
          <div className={styles.botoes}>
            <ButtonLink href={`mailto:${CONTATO.email}`} variante="destaque" tamanho="lg">
              <Icon nome="email" tamanho={20} />
              Falar com a coordenação
            </ButtonLink>
            <ButtonLink href={CONTATO.instagramUrl} variante="contornoClaro" tamanho="lg">
              <Icon nome="instagram" tamanho={20} />
              {CONTATO.instagram}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
