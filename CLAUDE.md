# Projeto Caipora

Site de um projeto academico, desenvolvido em dupla. Responda em portugues.

## Stack

- `frontend/`: React 19 + TypeScript + Vite. Lint com oxlint.
- `backend/`: Java 21 + Spring Boot 4 (Maven via `mvnw`), pacote base `br.com.caipora`.
  Web MVC, Spring Data JPA, Flyway, Spring Security + OAuth2 Client (login com Google), Validation, Actuator.
- Banco: PostgreSQL 17 (local via `docker-compose.yml`). Migrations em `backend/src/main/resources/db/migration`
  (`V1__descricao.sql`, `V2__...`). O schema e controlado so pelo Flyway (`ddl-auto=validate`).
- Testes: JUnit 5 + Mockito + Testcontainers no backend.

## Comandos

```bash
docker compose up -d                       # sobe o Postgres local
cd backend && ./mvnw spring-boot:run       # API em http://localhost:8080
cd backend && ./mvnw test                  # testes (precisa do Docker rodando)
cd frontend && npm run dev                 # site em http://localhost:5173 (/api -> 8080)
cd frontend && npm run build && npm run lint
```

No Windows/PowerShell use `.\mvnw.cmd` no lugar de `./mvnw`.

## Regras do projeto

- Segredos so em `backend/.env` (modelo em `backend/.env.example`). Nunca commite `.env`.
- Endpoints da API ficam sob `/api/...` (o Vite faz proxy disso em desenvolvimento).
- Doacoes/pagamentos: fora do escopo ate a dupla pedir.
- Fluxo de trabalho, agents e skills disponiveis: `.claude/rules/caipora/workflow.md`.
