package br.com.caipora.conteudo.parceiro;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.tuple;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class ParceiroServiceTest {

    @Mock
    private ParceiroRepository repository;

    private ParceiroService service;

    @BeforeEach
    void setUp() {
        service = new ParceiroService(repository);
    }

    @Test
    @DisplayName("listar devolve a categoria como rotulo exibido no site, na ordem do repositorio")
    void listar_converteCategoriaParaRotulo_mantendoOrdem() {
        when(repository.findAllByOrderByOrdemAscIdAsc()).thenReturn(List.of(
                new Parceiro("NSU", CategoriaParceiro.TRIAGEM, "Triagem dos reciclaveis.", 1),
                new Parceiro("Escola", CategoriaParceiro.BENEFICIADA, "Recebe doacoes.", 2)));

        List<ParceiroResponse> resultado = service.listar();

        assertThat(resultado)
                .extracting(ParceiroResponse::nome, ParceiroResponse::categoria)
                .containsExactly(tuple("NSU", "Triagem"), tuple("Escola", "Beneficiada"));
    }

    @Test
    @DisplayName("listar devolve lista vazia quando nao ha parceiros")
    void listar_semParceiros_devolveListaVazia() {
        when(repository.findAllByOrderByOrdemAscIdAsc()).thenReturn(List.of());

        assertThat(service.listar()).isEmpty();
    }
}
