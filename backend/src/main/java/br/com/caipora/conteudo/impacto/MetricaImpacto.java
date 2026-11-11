package br.com.caipora.conteudo.impacto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Numero de destaque da secao Impacto (ex.: "150" criancas atendidas). */
@Entity
@Table(name = "metrica_impacto")
public class MetricaImpacto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Texto e nao numero: permite valores como "1 t" ou "+50". */
    @Column(nullable = false, length = 20)
    private String valor;

    @Column(nullable = false, length = 300)
    private String descricao;

    @Column(nullable = false)
    private int ordem;

    /** Exigido pelo JPA. */
    protected MetricaImpacto() {
    }

    public MetricaImpacto(String valor, String descricao, int ordem) {
        this.valor = valor;
        this.descricao = descricao;
        this.ordem = ordem;
    }

    public Long getId() {
        return id;
    }

    public String getValor() {
        return valor;
    }

    public String getDescricao() {
        return descricao;
    }

    public int getOrdem() {
        return ordem;
    }
}
