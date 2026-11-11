package br.com.caipora.conteudo.parceiro;

/**
 * Formato devolvido pela API (igual ao tipo Parceiro do frontend).
 * A categoria sai como rotulo legivel ("Triagem"), que e o texto exibido no site.
 */
public record ParceiroResponse(Long id, String nome, String categoria, String descricao) {

    public static ParceiroResponse de(Parceiro parceiro) {
        return new ParceiroResponse(
                parceiro.getId(),
                parceiro.getNome(),
                parceiro.getCategoria().getRotulo(),
                parceiro.getDescricao());
    }
}
