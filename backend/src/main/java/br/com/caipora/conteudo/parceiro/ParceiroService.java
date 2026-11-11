package br.com.caipora.conteudo.parceiro;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ParceiroService {

    private final ParceiroRepository repository;

    public ParceiroService(ParceiroRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<ParceiroResponse> listar() {
        return repository.findAllByOrderByOrdemAscIdAsc().stream()
                .map(ParceiroResponse::de)
                .toList();
    }
}
