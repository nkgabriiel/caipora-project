package br.com.caipora.conteudo.parceiro;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ParceiroRepository extends JpaRepository<Parceiro, Long> {

    /** Ordem de exibicao no site; o id desempata quem tem a mesma ordem. */
    List<Parceiro> findAllByOrderByOrdemAscIdAsc();
}
