package br.com.caipora.conteudo.impacto;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MetricaImpactoService {

    private final MetricaImpactoRepository repository;

    public MetricaImpactoService(MetricaImpactoRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<MetricaImpactoResponse> listar() {
        return repository.findAllByOrderByOrdemAscIdAsc().stream()
                .map(MetricaImpactoResponse::de)
                .toList();
    }
}
