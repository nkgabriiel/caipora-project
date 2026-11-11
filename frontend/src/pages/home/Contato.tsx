import { Icon } from '../../components/Icon'
import { CONTATO } from '../../content/navegacao'
import styles from './Home.module.css'

/* Esta secao nao usa <Section>: a foto ocupa a metade direita ate a borda da tela. */
export function Contato() {
  return (
    <section id="contato" className={styles.contato} aria-labelledby="contato-titulo">
      <div className={styles.contatoTexto}>
        <div className={styles.contatoConteudo}>
          <h2 id="contato-titulo" className={styles.contatoTitulo}>
            Faça parte do Caipora
          </h2>
          <p className={styles.contatoConvite}>
            Aberto a alunos de todos os cursos do UNIPAC. Traga a sua proposta de ação sustentável e social.
          </p>
          <ul className={styles.contatoLista}>
            <li>
              <a href={CONTATO.instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.contatoLink}>
                <span className={styles.contatoIcone}>
                  <Icon nome="instagram" />
                </span>
                {CONTATO.instagram}
                <span className="sr-only">(Instagram, abre em nova aba)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTATO.email}`} className={styles.contatoLink}>
                <span className={styles.contatoIcone}>
                  <Icon nome="email" />
                </span>
                {CONTATO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contatoImagem}>
        <img
          src="/img/integrantes-banner.jpg"
          alt="Integrantes do projeto ao lado do banner do Caipora"
          width={960}
          height={1280}
          loading="lazy"
        />
      </div>
    </section>
  )
}
