package br.com.caipora.conteudo;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.caipora.conteudo.impacto.MetricaImpactoResponse;
import br.com.caipora.conteudo.impacto.MetricaImpactoService;
import br.com.caipora.conteudo.parceiro.ParceiroResponse;
import br.com.caipora.conteudo.parceiro.ParceiroService;
import br.com.caipora.conteudo.participante.ParticipanteResponse;
import br.com.caipora.conteudo.participante.ParticipanteService;

/**
 * Leitura do conteudo dinamico exibido no site. Aberto a qualquer visitante (sem login).
 * A edicao desse conteudo fica em /api/admin/** (area da equipe).
 */
@RestController
@RequestMapping("/api/public")
public class ConteudoPublicoController {

    private final ParticipanteService participanteService;
    private final ParceiroService parceiroService;
    private final MetricaImpactoService metricaImpactoService;

    public ConteudoPublicoController(
            ParticipanteService participanteService,
            ParceiroService parceiroService,
            MetricaImpactoService metricaImpactoService) {
        this.participanteService = participanteService;
        this.parceiroService = parceiroService;
        this.metricaImpactoService = metricaImpactoService;
    }

    @GetMapping("/participantes")
    public List<ParticipanteResponse> listarParticipantes() {
        return participanteService.listar();
    }

    @GetMapping("/parceiros")
    public List<ParceiroResponse> listarParceiros() {
        return parceiroService.listar();
    }

    @GetMapping("/impacto")
    public List<MetricaImpactoResponse> listarImpacto() {
        return metricaImpactoService.listar();
    }
}
