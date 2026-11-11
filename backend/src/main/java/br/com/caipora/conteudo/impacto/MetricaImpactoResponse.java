package br.com.caipora.conteudo.impacto;

/** Formato devolvido pela API (igual ao tipo MetricaImpacto do frontend). */
public record MetricaImpactoResponse(Long id, String valor, String descricao) {

    public static MetricaImpactoResponse de(MetricaImpacto metrica) {
        return new MetricaImpactoResponse(metrica.getId(), metrica.getValor(), metrica.getDescricao());
    }
}
