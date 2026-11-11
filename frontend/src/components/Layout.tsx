import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'
import styles from './Layout.module.css'

/**
 * Estrutura comum de todas as paginas: cabecalho, conteudo da rota e rodape.
 *
 * Tambem cuida da rolagem ao navegar, que o React Router nao faz sozinho:
 * - vindo de outra pagina (ex.: "Impacto" clicado na Equipe): salta direto para a secao;
 * - na mesma pagina: rola suavemente ate a secao (se o usuario nao pediu menos animacao);
 * - sem ancora: volta ao topo.
 */
export function Layout() {
  // `key` muda a cada navegacao, mesmo para a URL atual: assim clicar de novo em
  // "Impacto" depois de rolar a pagina volta a levar ate a secao.
  const { pathname, hash, key } = useLocation()
  const caminhoAnterior = useRef<string | null>(null)

  useEffect(() => {
    const mesmaPagina = caminhoAnterior.current === pathname
    caminhoAnterior.current = pathname

    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const comportamento: ScrollBehavior = mesmaPagina && !reduzirMovimento ? 'smooth' : 'instant'

    const alvo = hash ? document.getElementById(idDaAncora(hash)) : null
    if (alvo) {
      alvo.scrollIntoView({ behavior: comportamento })
    } else {
      window.scrollTo({ top: 0, behavior: comportamento })
    }
  }, [pathname, hash, key])

  return (
    <>
      <a href="#conteudo" className={styles.pularConteudo}>
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className={styles.principal}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

/** "#impacto" -> "impacto". Um link mal formado (ex.: "#%") nao pode derrubar a pagina. */
function idDaAncora(hash: string): string {
  const bruto = hash.slice(1)
  try {
    return decodeURIComponent(bruto)
  } catch {
    return bruto
  }
}
