package br.com.caipora.conteudo;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.assertj.MockMvcTester;

import br.com.caipora.config.SecurityConfig;
import br.com.caipora.conteudo.impacto.MetricaImpactoResponse;
import br.com.caipora.conteudo.impacto.MetricaImpactoService;
import br.com.caipora.conteudo.parceiro.ParceiroResponse;
import br.com.caipora.conteudo.parceiro.ParceiroService;
import br.com.caipora.conteudo.participante.ParticipanteService;

/** Camada web + regras de seguranca, sem banco (services simulados). */
@WebMvcTest(ConteudoPublicoController.class)
@Import(SecurityConfig.class)
class ConteudoPublicoControllerTest {

    @Autowired
    private MockMvcTester mvc;

    @MockitoBean
    private ParticipanteService participanteService;

    @MockitoBean
    private ParceiroService parceiroService;

    @MockitoBean
    private MetricaImpactoService metricaImpactoService;

    @Test
    @DisplayName("GET /api/public/parceiros e aberto a visitantes e devolve o formato do frontend")
    void listarParceiros_semLogin_devolve200ComJson() {
        when(parceiroService.listar()).thenReturn(List.of(
                new ParceiroResponse(1L, "NSU", "Triagem", "Separacao e pesagem.")));

        assertThat(mvc.get().uri("/api/public/parceiros"))
                .hasStatusOk()
                .bodyJson()
                .isStrictlyEqualTo("""
                        [{"id": 1, "nome": "NSU", "categoria": "Triagem", "descricao": "Separacao e pesagem."}]
                        """);
    }

    @Test
    @DisplayName("GET /api/public/impacto e aberto a visitantes")
    void listarImpacto_semLogin_devolve200() {
        when(metricaImpactoService.listar()).thenReturn(List.of(
                new MetricaImpactoResponse(1L, "150", "criancas atendidas")));

        assertThat(mvc.get().uri("/api/public/impacto"))
                .hasStatusOk()
                .bodyJson()
                .extractingPath("$[0].valor").isEqualTo("150");
    }

    @Test
    @DisplayName("GET /api/public/participantes devolve lista vazia quando nao ha cadastro")
    void listarParticipantes_semCadastro_devolveListaVazia() {
        when(participanteService.listar()).thenReturn(List.of());

        assertThat(mvc.get().uri("/api/public/participantes"))
                .hasStatusOk()
                .bodyJson()
                .isStrictlyEqualTo("[]");
    }

    @Test
    @DisplayName("rotas da API fora de /api/public exigem login e respondem 401 (sem redirecionar)")
    void rotaPrivadaDaApi_semLogin_devolve401() {
        assertThat(mvc.get().uri("/api/admin/parceiros"))
                .hasStatus(HttpStatus.UNAUTHORIZED);
    }

    @Test
    @DisplayName("escrita em /api/public nao e liberada para visitantes (so GET e publico)")
    void escritaNaRotaPublica_semLogin_devolve401() {
        // Com token CSRF valido, para o teste medir a regra de acesso e nao a protecao CSRF.
        assertThat(mvc.post().uri("/api/public/parceiros").with(csrf()))
                .hasStatus(HttpStatus.UNAUTHORIZED);
    }
}
