# ECC neste projeto

Uma selecao do [ECC (Everything Claude Code)](https://github.com/affaan-m/ECC), copiada à mão
para `.claude/` (escopo do projeto). Nao foi usado o instalador nem o plugin: mesmo o perfil
`minimal` copiava ~490 arquivos (68 agents, 94 commands, rules de 20 linguagens).

- Origem: commit em `.source-commit` (versao 2.2.3 do pacote)
- Licenca: MIT, veja `LICENSE` nesta pasta
- **Hooks: nenhum instalado**

## O que foi copiado

| Tipo | Itens |
|------|-------|
| Rules | `rules/ecc/common`, `typescript`, `react`, `java` |
| Skills | `springboot-patterns`, `springboot-security`, `springboot-tdd`, `jpa-patterns`, `postgres-patterns`, `react-patterns`, `react-testing`, `security-review` |
| Agents | `planner`, `java-reviewer`, `typescript-reviewer`, `react-reviewer`, `security-reviewer`, `build-error-resolver`, `java-build-resolver` |
| Commands | `/plan`, `/build-fix`, `/test-coverage` |

## Alteracoes em relacao ao original

- Removidos `rules/ecc/common/agents.md` e `development-workflow.md`: citavam agents e
  ferramentas (Context7, Exa, tdd-guide, code-reviewer...) que nao estao aqui.
- Em `rules/ecc/common/git-workflow.md`, o link para `development-workflow.md` foi trocado
  pelo link para `rules/caipora/workflow.md`.
- Adicionada `rules/caipora/workflow.md`: fluxo do projeto e tabela de equivalencias.

## Custo de contexto

- Sempre carregado: `rules/ecc/common` + `rules/caipora` (~5 mil tokens).
- Rules de linguagem: so quando o Claude mexe em arquivos daquele tipo (filtro `paths:`).
- Skills/agents/commands: so a descricao fica visivel; o conteudo carrega quando usado.

## Adicionar mais coisas

Procure o item em https://github.com/affaan-m/ECC (pastas `skills/`, `agents/`, `commands/`),
leia o arquivo e copie para a pasta equivalente aqui. Atualize esta tabela e
`rules/caipora/workflow.md`.
