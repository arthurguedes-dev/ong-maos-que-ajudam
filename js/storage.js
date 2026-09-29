export function salvarCadastro(dados) {

    localStorage.setItem(
        "dadosCadastro",
        JSON.stringify(dados)
    );

}


export function carregarCadastro() {

    const dadosSalvos = localStorage.getItem("dadosCadastro");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}