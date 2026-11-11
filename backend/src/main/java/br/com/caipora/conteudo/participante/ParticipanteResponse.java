package br.com.caipora.conteudo.participante;

/** Formato devolvido pela API (igual ao tipo Participante do frontend). */
public record ParticipanteResponse(Long id, String nome, String curso, String periodo) {

    public static ParticipanteResponse de(Participante participante) {
        return new ParticipanteResponse(
                participante.getId(),
                participante.getNome(),
                participante.getCurso(),
                participante.getPeriodo());
    }
}
