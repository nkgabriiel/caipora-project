package br.com.caipora.conteudo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.assertj.MockMvcTester;
import org.springframework.transaction.annotation.Transactional;

import br.com.caipora.TestcontainersConfiguration;
import br.com.caipora.conteudo.participante.Participante;
import br.com.caipora.conteudo.participante.ParticipanteRepository;

/**
 * Ponta a ponta com PostgreSQL real (Docker): migration do Flyway, mapeamento JPA
 * (ddl-auto=validate confere entidades x tabelas) e dados iniciais.
 */
@SpringBootTest
@AutoConfigureMockMvc
@Import(TestcontainersConfiguration.class)
class ConteudoPublicoIntegrationTest {

    @Autowired
    private MockMvcTester mvc;

    @Autowired
    private ParticipanteRepository participanteRepository;

    @Test
    @DisplayName("parceiros iniciais da migration saem na ordem do site, com a categoria como rotulo")
    void parceiros_vemDaMigrationNaOrdemCerta() {
        var resposta = assertThat(mvc.get().uri("/api/public/parceiros")).hasStatusOk().bodyJson();

        resposta.extractingPath("$.length()").isEqualTo(4);
        resposta.extractingPath("$[0].nome").isEqualTo("NSU");
        resposta.extractingPath("$[0].categoria").isEqualTo("Triagem");
        resposta.extractingPath("$[1].nome").isEqualTo("Escola Infantil Pequeno Marcos");
        resposta.extractingPath("$[1].categoria").isEqualTo("Beneficiada");
        resposta.extractingPath("$[3].nome").isEqualTo("Associação BQ Recicla");
    }

    @Test
    @DisplayName("numeros de impacto iniciais saem na ordem do site")
    void impacto_vemDaMigrationNaOrdemCerta() {
        var resposta = assertThat(mvc.get().uri("/api/public/impacto")).hasStatusOk().bodyJson();

        resposta.extractingPath("$.length()").isEqualTo(2);
        resposta.extractingPath("$[0].valor").isEqualTo("150");
        resposta.extractingPath("$[1].valor").isEqualTo("3");
    }

    @Test
    @DisplayName("participantes comecam vazios (serao cadastrados pela equipe)")
    void participantes_comecamVazios() {
        assertThat(mvc.get().uri("/api/public/participantes"))
                .hasStatusOk()
                .bodyJson()
                .isStrictlyEqualTo("[]");
    }

    @Test
    @Transactional // desfaz os inserts ao final, para nao afetar os outros testes
    @DisplayName("lista ordena pela coluna ordem e, no empate, por quem foi cadastrado primeiro")
    void participantes_saemOrdenadosPorOrdemEDepoisPorId() {
        // Inseridos fora de ordem de proposito, com empate na ordem 1
        participanteRepository.save(new Participante("Carla", "Direito", "3º período", 2));
        participanteRepository.save(new Participante("Ana", "Medicina", "1º período", 1));
        participanteRepository.save(new Participante("Bruno", "Engenharia", "5º período", 1));

        var resposta = assertThat(mvc.get().uri("/api/public/participantes")).hasStatusOk().bodyJson();

        resposta.extractingPath("$[0].nome").isEqualTo("Ana");
        resposta.extractingPath("$[1].nome").isEqualTo("Bruno");
        resposta.extractingPath("$[2].nome").isEqualTo("Carla");
    }
}
