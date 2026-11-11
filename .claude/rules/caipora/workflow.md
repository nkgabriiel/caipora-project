# Fluxo de trabalho do Projeto Caipora

Esta regra substitui `agents.md` e `development-workflow.md` do ECC, que foram removidos
por citarem ferramentas e agents que nao estao instalados neste projeto.
Quando outra regra ou skill do ECC contradizer este arquivo, **este arquivo vale**.

## Contexto

- Projeto academico feito em dupla. Prazo curto: prefira solucoes simples e explicaveis.
- Os dois autores precisam conseguir explicar o codigo. Explique decisoes nao obvias.

## O que esta instalado (e so isso)

**Agents** (chame pelo nome, sem prefixo `ecc:`):

| Agent | Quando usar |
|-------|-------------|
| `planner` | Feature nova com mais de um arquivo ou camada |
| `java-reviewer` | Revisar mudancas no `backend/` |
| `typescript-reviewer` | Revisar `.ts` no `frontend/` |
| `react-reviewer` | Revisar `.tsx` / componentes React |
| `security-reviewer` | Login Google/OAuth2, entrada de usuario, segredos, endpoints publicos |
| `build-error-resolver` | Build do frontend quebrado (`tsc`, Vite) |
| `java-build-resolver` | Build Maven quebrado |

**Skills**: `springboot-patterns`, `springboot-security`, `springboot-tdd`, `jpa-patterns`,
`postgres-patterns`, `react-patterns`, `react-testing`, `security-review`.

**Commands**: `/plan`, `/build-fix`, `/test-coverage`. Para revisao use `/code-review`
(nativo do Claude Code).

## Equivalencias (itens do ECC que NAO estao instalados)

| Citado pelo ECC | Use no lugar |
|-----------------|--------------|
| `tdd-guide`, `tdd-workflow` | skill `springboot-tdd` (backend) ou `react-testing` (frontend) |
| `code-reviewer` | `java-reviewer` / `typescript-reviewer` / `react-reviewer`, ou `/code-review` |
| `architect` | `planner` |
| `e2e-runner`, `e2e-testing` | fora do escopo por enquanto |
| `database-reviewer` | skill `postgres-patterns` / `jpa-patterns` |
| Context7, Exa, `gh search` | documentacao oficial (Spring, React, PostgreSQL) quando necessario |

Nunca invente o nome de um agent, skill ou command que nao esteja nas listas acima.

## Fluxo de uma feature

1. **Planejar** (features maiores): `planner` ou `/plan`. Espere a confirmacao do usuario antes de codar.
   Nao gere PRD nem documentos de arquitetura a menos que pecam.
2. **Testar junto**: escreva teste para regra de negocio, validacao e seguranca
   (JUnit 5 + Mockito no backend; Vitest + Testing Library no frontend, quando configurado).
   80% de cobertura e meta, nao bloqueio. Nao escreva teste para codigo trivial (getters, DTOs).
3. **Revisar**: rode o reviewer da linguagem nas mudancas relevantes. Corrija CRITICAL e HIGH.
   Mudanca pequena (texto, estilo, 1 linha) nao precisa de agent.
4. **Commit**: mensagens no formato de `ecc/common/git-workflow.md` (`feat:`, `fix:`...).
   Nunca commite `.env`, client secret do Google ou senhas.

## Fora do escopo agora

- **Doacoes/pagamentos**: so quando a dupla pedir. Quando entrar, usar gateway (Stripe, Mercado Pago, PSP de Pix)
  e nunca armazenar dados de cartao.
- Hooks automaticos do ECC: nao instalados de proposito.
