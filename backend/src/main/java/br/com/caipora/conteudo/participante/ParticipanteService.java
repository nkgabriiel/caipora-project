package br.com.caipora.conteudo.participante;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ParticipanteService {

    private final ParticipanteRepository repository;

    public ParticipanteService(ParticipanteRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<ParticipanteResponse> listar() {
        return repository.findAllByOrderByOrdemAscIdAsc().stream()
                .map(ParticipanteResponse::de)
                .toList();
    }
}
