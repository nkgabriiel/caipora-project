import { Link } from 'react-router'
import { INSTITUICAO, LINKS_PRINCIPAIS } from '../content/navegacao'
import styles from './Footer.module.css'

/* Calculado uma vez quando o site carrega (nao a cada renderizacao). */
const ANO_ATUAL = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={`container ${styles.conteudo}`}>
        <div className={styles.topo}>
          <img src="/img/logo-rodape.png" alt="Caipora" width={158} height={52} className={styles.logo} />
          <nav aria-label="Rodapé">
            <ul className={styles.menu}>
              {LINKS_PRINCIPAIS.map((link) => (
                <li key={link.para}>
                  <Link to={link.para} className={styles.link}>
                    {link.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.base}>
          <p>{INSTITUICAO}</p>
          <p>© {ANO_ATUAL} Projeto Caipora</p>
        </div>
      </div>
    </footer>
  )
}
