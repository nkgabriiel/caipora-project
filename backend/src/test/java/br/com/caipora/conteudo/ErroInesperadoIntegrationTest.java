package br.com.caipora.conteudo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import br.com.caipora.TestcontainersConfiguration;
import br.com.caipora.conteudo.parceiro.ParceiroService;

/**
 * Erro inesperado numa rota publica, com servidor HTTP real.
 *
 * Precisa de servidor real porque o MockMvc nao passa pela rota interna /error,
 * que e onde os dois bugs abaixo apareceram (testando com o banco desligado):
 * - /error exigia login, entao o visitante recebia 401 em vez de 500;
 * - a resposta trazia o stack trace e a mensagem interna da excecao.
 */
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@Import(TestcontainersConfiguration.class)
class ErroInesperadoIntegrationTest {

    private static final String DETALHE_INTERNO = "detalhe interno que nao pode vazar";

    @LocalServerPort
    private int porta;

    @MockitoBean
    private ParceiroService parceiroService;

    @Test
    @DisplayName("falha numa rota publica devolve 500 ao visitante, sem stack trace nem mensagem interna")
    void erroInesperado_devolve500SemDetalhesInternos() throws Exception {
        when(parceiroService.listar()).thenThrow(new IllegalStateException(DETALHE_INTERNO));

        HttpResponse<String> resposta = HttpClient.newHttpClient().send(
                HttpRequest.newBuilder(URI.create("http://localhost:" + porta + "/api/public/parceiros")).GET().build(),
                HttpResponse.BodyHandlers.ofString());

        assertThat(resposta.statusCode()).isEqualTo(500);
        assertThat(resposta.body())
                .doesNotContain(DETALHE_INTERNO)
                .doesNotContain("\"trace\"")
                .doesNotContain("IllegalStateException");
    }
}
