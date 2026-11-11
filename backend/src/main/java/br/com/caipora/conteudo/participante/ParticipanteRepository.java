package br.com.caipora.conteudo.participante;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ParticipanteRepository extends JpaRepository<Participante, Long> {

    /** Ordem de exibicao no site; o id desempata quem tem a mesma ordem. */
    List<Participante> findAllByOrderByOrdemAscIdAsc();
}
