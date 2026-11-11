import { ButtonLink } from '../components/ButtonLink'
import { Section, SectionHeader } from '../components/Section'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <>
      <title>Página não encontrada · Projeto Caipora</title>
      <Section>
        <SectionHeader rotulo="Erro 404" titulo="Página não encontrada" nivel="h1">
          O endereço que você abriu não existe ou foi alterado.
        </SectionHeader>
        <div className={styles.acoes}>
          <ButtonLink para="/">Voltar para o início</ButtonLink>
        </div>
      </Section>
    </>
  )
}
