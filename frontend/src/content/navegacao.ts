/** Links do menu principal e do rodape. Secoes da pagina inicial usam "/#id". */
export type LinkNavegacao = {
  rotulo: string
  para: string
}

export const LINKS_PRINCIPAIS: LinkNavegacao[] = [
  { rotulo: 'Sobre', para: '/#sobre' },
  { rotulo: 'Como atuamos', para: '/#atuacao' },
  { rotulo: 'Impacto', para: '/#impacto' },
  { rotulo: 'Equipe', para: '/equipe' },
  { rotulo: 'Contato', para: '/#contato' },
]

export const CONTATO = {
  instagram: '@caipora.projeto',
  instagramUrl: 'https://instagram.com/caipora.projeto',
  email: 'lucasgarcia@unipac.br',
} as const

export const INSTITUICAO = 'Projeto de Extensão Universitária · UNIPAC Barbacena'
