package br.com.caipora.conteudo.participante;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Integrante do projeto exibido na pagina Equipe. */
@Entity
@Table(name = "participante")
public class Participante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String nome;

    @Column(nullable = false, length = 120)
    private String curso;

    @Column(nullable = false, length = 40)
    private String periodo;

    @Column(nullable = false)
    private int ordem;

    /** Exigido pelo JPA. */
    protected Participante() {
    }

    public Participante(String nome, String curso, String periodo, int ordem) {
        this.nome = nome;
        this.curso = curso;
        this.periodo = periodo;
        this.ordem = ordem;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getCurso() {
        return curso;
    }

    public String getPeriodo() {
        return periodo;
    }

    public int getOrdem() {
        return ordem;
    }
}
