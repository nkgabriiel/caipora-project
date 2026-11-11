package br.com.caipora.conteudo.parceiro;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Empresa ou entidade que colabora com o projeto (ou que e beneficiada por ele). */
@Entity
@Table(name = "parceiro")
public class Parceiro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 160)
    private String nome;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private CategoriaParceiro categoria;

    @Column(nullable = false, length = 300)
    private String descricao;

    @Column(nullable = false)
    private int ordem;

    /** Exigido pelo JPA. */
    protected Parceiro() {
    }

    public Parceiro(String nome, CategoriaParceiro categoria, String descricao, int ordem) {
        this.nome = nome;
        this.categoria = categoria;
        this.descricao = descricao;
        this.ordem = ordem;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public CategoriaParceiro getCategoria() {
        return categoria;
    }

    public String getDescricao() {
        return descricao;
    }

    public int getOrdem() {
        return ordem;
    }
}
