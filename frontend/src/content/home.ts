import type { NomeIcone } from '../components/Icon'

/* Textos fixos da pagina inicial, copiados do design. */

export const RESUMO = [
  { termo: 'Desde', valor: '2025' },
  { termo: 'Para quem', valor: 'Alunos de todos os cursos' },
  { termo: 'Eixos', valor: 'Sustentabilidade e ação social' },
  { termo: 'Foco', valor: 'Reduzir, reutilizar, reciclar' },
]

type ItemComIcone = {
  icone: NomeIcone
  titulo: string
  texto: string
}

export const OBJETIVOS: ItemComIcone[] = [
  {
    icone: 'capelo',
    titulo: 'Conhecer',
    texto: 'Entender o meio ambiente como direito de todos e responsabilidade coletiva.',
  },
  {
    icone: 'reciclar',
    titulo: 'Sensibilizar',
    texto: 'Mostrar os impactos do descarte inadequado e a importância da gestão sustentável.',
  },
  {
    icone: 'apertoDeMao',
    titulo: 'Agir na comunidade',
    texto: 'Estimular hábitos ecológicos, protagonismo estudantil e compromisso social.',
  },
]

export const ATUACAO: ItemComIcone[] = [
  {
    icone: 'apresentacao',
    titulo: 'Palestras e oficinas',
    texto: 'Convidados externos e oficinas educativas sobre meio ambiente e sustentabilidade.',
  },
  {
    icone: 'reciclar',
    titulo: 'Coleta seletiva',
    texto: 'Campanhas de coleta, triagem e destinação correta de recicláveis.',
  },
  {
    icone: 'capelo',
    titulo: 'Visitas a escolas',
    texto: 'Exposição do projeto em escolas e universidades da comunidade.',
  },
  {
    icone: 'microfone',
    titulo: 'Mídias locais',
    texto: 'Entrevistas em rádio e TV para ampliar o alcance das ações.',
  },
  {
    icone: 'instagram',
    titulo: 'Instagram',
    texto: 'O perfil @caipora.projeto divulga as ações e mobiliza a comunidade.',
  },
  {
    icone: 'ferramenta',
    titulo: 'Workshop',
    texto: 'Workshop sobre meio ambiente e sustentabilidade, organizado pelos alunos.',
  },
]

type EtapaCiclo = ItemComIcone & {
  /** Sem foto, a etapa mostra o icone grande no lugar da imagem (como no design). */
  imagem?: { src: string; alt: string }
  destaque?: boolean
}

export const CICLO: EtapaCiclo[] = [
  {
    icone: 'caminhao',
    titulo: '1. Coleta',
    texto: 'Alunos arrecadam recicláveis na comunidade acadêmica.',
    imagem: {
      src: '/img/caminhonete-reciclaveis.jpg',
      alt: 'Alunos ao lado de uma caminhonete carregada de recicláveis',
    },
  },
  {
    icone: 'pacote',
    titulo: '2. Triagem',
    texto: 'Separação e pesagem na NSU, parceira do projeto.',
    imagem: { src: '/img/triagem-reciclaveis.jpg', alt: 'Voluntários separando materiais recicláveis' },
  },
  {
    icone: 'moedas',
    titulo: '3. Venda',
    texto: 'O material é vendido e o valor é revertido em doações.',
  },
  {
    icone: 'coracao',
    titulo: '4. Doação',
    texto: 'Entrega a uma entidade social de Barbacena.',
    imagem: {
      src: '/img/equipe-unipac.jpg',
      alt: 'Equipe do projeto em frente ao Centro Universitário Presidente Antônio Carlos',
    },
    destaque: true,
  },
]

export const COORDENACAO = {
  iniciais: 'LG',
  nome: 'Prof. Lucas de Souza Garcia',
}
