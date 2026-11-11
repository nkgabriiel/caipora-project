package br.com.caipora.conteudo.parceiro;

/**
 * Papel do parceiro no projeto. No banco fica o nome da constante (ex.: TRIAGEM);
 * na API e no site aparece o rotulo (ex.: "Triagem").
 *
 * ATENCAO: a tabela "parceiro" tem um CHECK com estes mesmos valores (migration V1).
 * Ao adicionar uma constante aqui, crie uma nova migration atualizando o CHECK, senao o
 * INSERT falha. Atualize tambem o tipo CategoriaParceiro do frontend (src/data/tipos.ts).
 */
public enum CategoriaParceiro {

    TRIAGEM("Triagem"),
    BENEFICIADA("Beneficiada"),
    PALESTRA("Palestra");

    private final String rotulo;

    CategoriaParceiro(String rotulo) {
        this.rotulo = rotulo;
    }

    public String getRotulo() {
        return rotulo;
    }
}
