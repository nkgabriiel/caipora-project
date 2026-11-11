package br.com.caipora.conteudo.impacto;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MetricaImpactoRepository extends JpaRepository<MetricaImpacto, Long> {

    /** Ordem de exibicao no site; o id desempata quem tem a mesma ordem. */
    List<MetricaImpacto> findAllByOrderByOrdemAscIdAsc();
}
