# Contexto do desenvolvimento: Projeto Caipora

> **Para que serve este arquivo:** registrar o estado do projeto e cada mudança feita no código,
> para que qualquer pessoa ou sessão do Claude (em outra máquina, ou depois de perder o contexto)
> leia só este arquivo e entenda onde o desenvolvimento está.
>
> **Regra:** toda mudança de código entra no [Histórico de mudanças](#histórico-de-mudanças),
> no mesmo commit da mudança. As seções de estado (fases, decisões, pendências) são atualizadas
> sempre que mudarem.

Última atualização: 2026-11-11

---

## 1. O que é o projeto

Site do **Projeto Caipora**, projeto de extensão universitária do **UNIPAC Barbacena**
(coordenação: Prof. Lucas de Souza Garcia). O projeto faz educação ambiental, coleta seletiva e
ação social: os recicláveis arrecadados são triados (parceira NSU), vendidos, e o valor vira doação
para entidades de Barbacena (ex.: Escola Infantil Pequeno Marcos).

O site é um trabalho acadêmico feito em **dupla** (Gabriel e um amigo).

- Repositório: https://github.com/nkgabriiel/caipora-project
- Design de referência (Claude Design): https://claude.ai/artifact/SSnAtLL7ZkrtCu7fDR2Pd8
  - Páginas desenhadas: Início, Doações, Equipe e parceiros (e uma prancheta vazia sem uso).

## 2. Stack

| Parte | Tecnologia |
|---|---|
| Frontend | React 19 + TypeScript 7 + Vite 8, React Router 8, CSS Modules, lint com oxlint |
| Backend | Java 21 + Spring Boot 4.1 (Maven via `mvnw`), pacote `br.com.caipora` |
| Backend (dependências) | Web MVC, Data JPA, Flyway, PostgreSQL, Security, OAuth2 Client, Validation, Actuator, DevTools |
| Banco | PostgreSQL 17 (local via `docker-compose.yml`) |
| Testes | JUnit 5 + Mockito + Testcontainers (backend). Frontend ainda sem testes (decisão) |
| IA | Claude Code com uma seleção do ECC em `.claude/` (ver seção 7) |

## 3. Como rodar

```bash
docker compose up -d                      # Postgres local (precisa do Docker Desktop aberto)
cd backend && ./mvnw spring-boot:run      # API em http://localhost:8080 (Windows: .\mvnw.cmd)
cd frontend && npm install && npm run dev # site em http://localhost:5173 (/api -> 8080)
```

- Segredos ficam em `backend/.env` (copiar de `backend/.env.example`). **Nunca commitar `.env`.**
- `cd backend && ./mvnw test` precisa do Docker rodando (Testcontainers).

## 4. Estado atual: plano em 6 fases

| Fase | Conteúdo | Status |
|---|---|---|
| 1 | Base visual do frontend: tokens de design, fontes, imagens, componentes, layout | ✅ Concluída |
| 2 | Páginas públicas Início e Equipe com conteúdo fixo | ✅ Concluída e revisada (react-reviewer) |
| 3 | Backend de conteúdo: migration V1, entidades JPA, `GET /api/public/{participantes,parceiros,impacto}`, `SecurityConfig`, testes | ⏳ Próxima |
| 4 | Login Google só para a equipe (lista `ADMIN_EMAILS`), `GET /api/me`, CRUD em `/api/admin/**`, CSRF modo SPA, testes de segurança | Pendente |
| 5 | Frontend consumindo a API (`api/client.ts`), página `/admin` com abas e formulários, proxy do Vite para `/oauth2`, `/login` e `/logout` | Pendente |
| 6 | README (redirect URI do Google, `ADMIN_EMAILS`), revisão com `security-reviewer` e reviewers de linguagem | Pendente |

Detalhes planejados para as próximas fases:
- **Tabelas:** `participante` (nome, curso, período, ordem), `parceiro` (nome, categoria, descrição,
  ordem) e `metrica_impacto` (valor, descrição, ordem). Os dados iniciais vêm do design.
- **Formato da API:** os tipos já existem no frontend em `frontend/src/data/tipos.ts`
  (`Participante`, `Parceiro`, `MetricaImpacto`). O backend deve devolver nesse formato.
- **Login:** sessão por cookie no mesmo domínio via proxy do Vite. O redirect URI do Google passa a
  ser `http://localhost:5173/login/oauth2/code/google` (o README atual ainda cita a porta 8080, então
  precisa corrigir na fase 6).

## 5. Decisões tomadas

| Decisão | Motivo |
|---|---|
| Login com Google **só para a equipe** (área admin para editar conteúdo). Visitantes não logam | Site é institucional. Login é **experimental**: pode ser descartado ou adiado se não agradar |
| **Doações online adiadas**. Página `/doar` não implementada | Burocracia pendente. Quando entrar: checkout do gateway (Stripe, Mercado Pago, PSP de Pix), **nunca** coletar cartão/CVV no site |
| Botões de doação em dinheiro removidos: "Doar" do menu, "Quero doar" do topo, "Fazer uma doação" | Consequência da decisão acima. O topo virou "Conheça o projeto" + "Faça parte". A chamada final virou "Doar recicláveis" (leva a `/#contato`) |
| Coordenação (Prof. Lucas) fixa no código | Muda pouco, não precisa de painel |
| Textos institucionais fixos em `frontend/src/content/`. Só participantes, parceiros e métricas serão dinâmicos | Simplicidade |
| Sem testes de frontend por enquanto | Testes concentrados no backend, onde está a regra de segurança |
| PostgreSQL (não MySQL), Maven, Java 21 | Hospedagem grátis fácil (Neon/Supabase), versão LTS mais recente |
| CSS Modules + variáveis CSS, sem biblioteca de UI | Fiel ao design, fácil de explicar |
| Seleção manual do ECC (não o instalador) | O perfil "minimal" do instalador copiava ~490 arquivos |
| Git: commits direto na `main`, sem branches/PRs, Conventional Commits pequenos, push logo após commitar | Pedido do Gabriel |
| Hospedagem (futuro): frontend na Vercel/Netlify, backend em Render/Railway/Fly, banco em Neon/Supabase | Planos grátis. Atenção: frontend e backend precisam parecer o mesmo domínio para o cookie do login |

## 6. Mapa do código

```
caipora-project/
├── context.md              ← este arquivo
├── CLAUDE.md               ← regras do projeto para o Claude
├── README.md               ← como rodar (para humanos)
├── docker-compose.yml      ← PostgreSQL 17 local
├── frontend/
│   ├── index.html          ← pt-BR, Google Fonts, favicon
│   ├── vite.config.ts      ← proxy /api -> localhost:8080
│   ├── public/img/         ← 8 imagens do design (logo, logo-rodape, 6 fotos)
│   └── src/
│       ├── main.tsx, App.tsx          ← BrowserRouter; rotas /, /equipe, * (404)
│       ├── styles/tokens.css          ← cores, fontes, raios (mude aqui para mudar o site todo)
│       ├── styles/global.css          ← reset, foco do teclado (--cor-foco), .container, .sr-only
│       ├── components/                ← Header, Footer, Layout, Section/SectionHeader,
│       │                                 ButtonLink, Icon, IconCircle
│       ├── content/navegacao.ts       ← links do menu/rodapé, contato (Instagram, e-mail)
│       ├── content/home.ts            ← textos fixos da Início (resumo, objetivos, atuação, ciclo)
│       ├── data/tipos.ts              ← tipos do conteúdo dinâmico (formato da futura API)
│       ├── data/exemplo.ts            ← dados provisórios (participantes = placeholders)
│       └── pages/                     ← HomePage (+ home/*.tsx por seção), EquipePage, NotFoundPage
├── backend/
│   ├── .env.example                   ← DB_URL, DB_USERNAME, DB_PASSWORD, GOOGLE_CLIENT_ID/SECRET
│   ├── src/main/resources/application.properties  ← lê .env; ddl-auto=validate; OAuth2 Google
│   ├── src/main/resources/db/migration/            ← (vazio: migrations começam na fase 3)
│   └── src/test/.../TestcontainersConfiguration.java  ← postgres:17-alpine
└── .claude/                ← ECC (seção 7) + launch.json (preview do frontend)
```

Detalhes de implementação que importam:
- **Rolagem para âncoras** (`/#impacto`) é feita em `components/Layout.tsx`. Salto imediato vindo de
  outra página, rolagem suave na mesma página, e depende de `location.key` para funcionar ao clicar de
  novo no mesmo link. Âncora mal formada não quebra a página.
- **Foco do teclado:** verde-escuro por padrão. Áreas escuras (`Section tom="escuro"`, rodapé,
  contato, card da coordenação, link "pular conteúdo") definem `--cor-foco: lima`.
- **Header:** links de âncora usam `Link` e páginas usam `NavLink`, porque o NavLink marcaria todas as
  âncoras como "página atual" na Início.
- `img { height: auto }` no global faz o `aspect-ratio` do CSS valer sobre os atributos width/height.

## 7. Claude Code e ECC

Seleção do [ECC](https://github.com/affaan-m/ECC) copiada à mão para `.claude/` (detalhes em
`.claude/ecc/README.md`):
- **Rules:** `common`, `typescript`, `react`, `java` + `rules/caipora/workflow.md` (fluxo próprio,
  que substitui `agents.md` e `development-workflow.md` do ECC).
- **Skills:** springboot-patterns, springboot-security, springboot-tdd, jpa-patterns,
  postgres-patterns, react-patterns, react-testing, security-review.
- **Agents:** planner, java-reviewer, typescript-reviewer, react-reviewer, security-reviewer,
  build-error-resolver, java-build-resolver.
- **Commands:** `/plan`, `/build-fix`, `/test-coverage`. **Sem hooks.**
- O gitignore global do Gabriel ignora `.claude/`. O `.gitignore` do projeto tem `!.claude/` para
  versionar mesmo assim (só `settings.local.json` fica fora).

## 8. Pendências e pontos em aberto

- [ ] **Conteúdo real:** nomes dos participantes (hoje `[Nome do participante]`), ponto de coleta
      de recicláveis e horário.
- [ ] **Credencial OAuth do Google** (Google Cloud Console) e lista de e-mails da equipe (fase 4).
- [ ] **Testes do backend nunca rodaram**: o Docker Desktop estava desligado. Só o build foi verificado.
- [ ] README: corrigir o redirect URI do Google para a porta 5173 (fase 6).
- [ ] Itens de revisão deixados de propósito: ícones brancos sobre verde-sálvia (2,86:1, decorativos)
      e rolagem suave extra no 1º carregamento, que só acontece em dev por causa do StrictMode.
- [ ] Doações online (quando a burocracia for resolvida).
- Ambiente do Gabriel (Windows): o Python 3.14 não está no PATH (o atalho da Microsoft Store
  intercepta `python`). Use `py` ou ajuste o PATH. Não afeta este projeto.

## 9. Histórico de mudanças

Mais recente primeiro. Cada entrada: data, o que mudou e por quê, commits.

### 2026-11-11: context.md
- Criado este arquivo e a regra no `CLAUDE.md` de registrar aqui toda mudança de código.

### 2026-11-11: Fluxo de git direto na main
- PR #1 (`feat/site-inicial`) mesclado na `main` pelo Gabriel. Daqui em diante, sem branches.
- `CLAUDE.md` ganhou a regra de commits direto na `main` + push. Commit `eb34c51`.

### 2026-11-11: Histórico reorganizado e publicado no GitHub
- Os 4 commits originais (um deles com 81 arquivos) foram reescritos em 21 commits pequenos
  (Conventional Commits), antes do primeiro push. O conteúdo final ficou idêntico, e cada commit do
  frontend compila. Repositório publicado em https://github.com/nkgabriiel/caipora-project.

### 2026-11-11: Revisão do frontend (react-reviewer)
- **HIGH corrigido:** o contorno de foco era lima, com 1,6:1 de contraste no fundo branco, e sumia na
  faixa lima. Agora é verde-escuro por padrão, com lima só em áreas escuras.
- **MEDIUM corrigidos:** clicar de novo no mesmo link de seção não rolava; âncora mal formada
  (`/#%`) derrubava a página.
- **LOW:** botões externos avisam leitores de tela que abrem em nova aba; ajustes na 404.
- Essas correções foram incorporadas nos commits `f584146`, `d2f3e58` e `5d07a2e` na reorganização.

### 2026-11-11: Fases 1 e 2: páginas Início e Equipe
- Convertido o design do Claude Design para React: variáveis de design, 8 imagens baixadas do
  design, componentes base, cabeçalho/rodapé/layout, páginas Início (10 seções) e Equipe, 404.
- Removido o modelo padrão do Vite. Adicionado React Router.
- Problemas achados e corrigidos durante a verificação: âncoras todas marcadas como "página atual",
  rolagem entre páginas que não acontecia, seção de Contato esticada pela foto vertical, proporção das
  fotos ignorada, rolagem lateral causada por círculo decorativo.
- Verificado por medição no navegador em 1440 px e 375 px (sem rolagem lateral, toques ≥ 44 px).
- Commits `abbdbbb` → `d0cf95a`.

### 2026-11-06: Estrutura inicial
- Repositório criado com frontend (Vite React-TS), backend (Spring Initializr), docker-compose,
  README, CLAUDE.md, `.gitignore` e a seleção do ECC.
- Decisões registradas: login só para a equipe, doações adiadas. Commits `7aa5c17` → `48b2a6d`.
