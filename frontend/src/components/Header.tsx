import { Link, NavLink } from 'react-router'
import { LINKS_PRINCIPAIS } from '../content/navegacao'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.cabecalho}>
      <div className={`container ${styles.conteudo}`}>
        <Link to="/" aria-label="Projeto Caipora, início" className={styles.marca}>
          <img src="/img/logo.png" alt="" width={134} height={44} className={styles.logo} />
        </Link>
        <nav aria-label="Principal">
          <ul className={styles.menu}>
            {LINKS_PRINCIPAIS.map((link) => {
              // Ancoras ("/#sobre") usam Link: o NavLink compara so o caminho e marcaria
              // todas elas como pagina atual na Inicio. Paginas usam NavLink, que adiciona
              // aria-current="page" na pagina aberta (usado no estilo).
              const ehAncora = link.para.includes('#')
              return (
                <li key={link.para}>
                  {ehAncora ? (
                    <Link to={link.para} className={styles.link}>
                      {link.rotulo}
                    </Link>
                  ) : (
                    <NavLink to={link.para} className={styles.link} end>
                      {link.rotulo}
                    </NavLink>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
