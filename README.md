# Projeto Caipora

Site do Projeto Caipora: frontend em React + TypeScript e backend em Spring Boot com PostgreSQL.

## Pre-requisitos

- [Node.js](https://nodejs.org/) 20 ou mais novo
- [Java 21](https://adoptium.net/) (JDK)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (para o banco e para os testes)
- Git

O Maven **nao** precisa ser instalado: o backend usa o wrapper (`mvnw`).

## Estrutura

```
caipora-project/
├── frontend/            React 19 + TypeScript + Vite
├── backend/             Spring Boot 4 + Java 21 (Maven)
├── docker-compose.yml   PostgreSQL local
├── CLAUDE.md            Contexto do projeto para o Claude Code
└── .claude/             Configuracao do Claude Code (selecao do ECC, ver .claude/ecc/README.md)
```

## Rodando localmente

1. **Banco de dados**
   ```bash
   docker compose up -d
   ```

2. **Backend**
   ```bash
   cd backend
   cp .env.example .env      # depois preencha GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET
   ./mvnw spring-boot:run    # Windows: .\mvnw.cmd spring-boot:run
   ```
   API em http://localhost:8080 (saude: `/actuator/health`).

3. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Site em http://localhost:5173. Chamadas para `/api` sao redirecionadas ao backend.

## Testes

```bash
cd backend && ./mvnw test     # JUnit 5 + Mockito + Testcontainers (Docker precisa estar rodando)
cd frontend && npm run lint && npm run build
```

## Login com Google

1. Crie um projeto no [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Crie uma credencial **OAuth client ID** do tipo *Web application*.
3. Adicione o redirect URI `http://localhost:8080/login/oauth2/code/google`.
4. Coloque o client ID e o secret em `backend/.env`. **Nunca** commite esse arquivo.

## Convencoes

- Commits: `feat: ...`, `fix: ...`, `refactor: ...`, `docs: ...`, `test: ...`, `chore: ...`
- Migrations do banco: `backend/src/main/resources/db/migration/V<n>__descricao.sql`
- Segredos apenas em `.env` (ignorado pelo git)

## Usando o Claude Code (opcional)

O projeto ja vem com uma selecao do [ECC](https://github.com/affaan-m/ECC) em `.claude/`.
Abrindo o Claude Code nesta pasta, ficam disponiveis `/plan`, `/build-fix`, `/test-coverage`
e reviewers de Java, TypeScript e React. Detalhes em `.claude/rules/caipora/workflow.md`.
Quem nao usa Claude Code pode ignorar a pasta `.claude/`.
