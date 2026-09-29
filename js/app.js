import { configurarMascaras } from "./mascaras.js";
import { salvarCadastro, carregarCadastro } from "./storage.js";

const conteudo = document.getElementById("conteudo");


const paginaInicio = `
    <section>

        <h2>Sobre a ONG</h2>

        <img src="../img/ong.jpg" alt="Voluntários da ONG realizando uma ação social">

        <p>

            A ONG Mãos que Ajudam desenvolve ações sociais
            para apoiar pessoas em situação de vulnerabilidade.

        </p>

    </section>

    <section>

        <h2>Nossa missão</h2>

        <p>

            Promover ações solidárias e incentivar a participação
            da comunidade em projetos que gerem impacto social.

        </p>

        <p> <a href="projetos.html"> Conheça nossos projetos!</a> </p>


    </section>

    <section>

        <h2>Contato</h2>

        <p>E-Mail: contato@maosqueajudam.org</p>
        <p>Telefone: (83) 99999-0000</p>
        <p>Cidade: Santa Rita - PB</p>

    </section>
`;


const paginaProjetos = `
    <section id="alimentos" class="card">

        <h2>Campanha de Alimentos</h2>

        <span class="badge">Solidariedade</span>

        <p>
            Iniciativas de arrecadação de alimentos e distribuição para pessoas em situação de vulnerabilidade, contribuindo para o combate à fome.
        </p>

    </section>

    <section id="inclusao" class="card">

        <h2>Inclusão Digital</h2>

        <span class="badge">Inclusão Digital</span>

        <p>
            Buscamos promover o acesso à tecnologia e ajudar pessoas com pouca familiaridade digital a utilizar recursos e serviços online.
        </p>

    </section>

    <section class="card">

        <h2>Como você pode ajudar?</h2>

        <!-- Alerta - Uma mensagem para chamar atenção do usuário -->
        <div class="alert">
            Toda ajuda faz diferença!
        </div>

        <p> <a href="cadastro.html">Seja voluntário</a> </p>

        <p> <a href="mailto:contato@maosqueajudam.org">Faça uma doação</a> </p>

    </section>
`;


const paginaCadastro = `
    <form id="form-cadastro">

        <fieldset>

            <legend>Dados pessoais</legend>

            <label for="nome">Nome completo:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>

            <label for="data">Data de nascimento:</label>
            <input type="date" id="data" name="data" required>

            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required
                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}">

            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" required
                    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}">

        </fieldset>

        <fieldset>

            <legend>Endereço</legend>

            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" required
                    pattern="[0-9]{5}-[0-9]{3}">

            <label for="rua">Rua:</label>
            <input type="text" id="rua" name="rua" required>

            <label for="cidade">Cidade:</label>
            <input type="text" id="cidade" name="cidade" required>

            <label for="estado">Estado:</label>
            <select id="estado" name="estado" required>

                <option value="">Selecione um estado</option>
                <option value="PB">Paraíba</option>
                <option value="PE">Pernambuco</option>
                <option value="RN">Rio Grande do Norte</option>

            </select>

        </fieldset>

        <button type="submit">Concluir cadastro</button>

        <div class="toast" role="status" aria-live="polite">
            Cadastro enviado com sucesso!
        </div>

    </form>
`;


function renderizarPagina(pagina) {

    if (pagina === "inicio") {
        conteudo.innerHTML = paginaInicio;
    }

    if (pagina === "projetos") {
        conteudo.innerHTML = paginaProjetos;
    }

    if (pagina === "cadastro") {

        conteudo.innerHTML = paginaCadastro;

        const formulario = document.getElementById("form-cadastro");


        // Recupera os dados salvos anteriormente
        const dados = carregarCadastro();

        if (dados) {

            document.getElementById("nome").value = dados.nome;
            document.getElementById("email").value = dados.email;
            document.getElementById("data").value = dados.data;
            document.getElementById("cpf").value = dados.cpf;
            document.getElementById("telefone").value = dados.telefone;
            document.getElementById("cep").value = dados.cep;
            document.getElementById("rua").value = dados.rua;
            document.getElementById("cidade").value = dados.cidade;
            document.getElementById("estado").value = dados.estado;

        }


        formulario.addEventListener("submit", function(event) {

            event.preventDefault();


            const dadosCadastro = {

                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                data: document.getElementById("data").value,
                cpf: document.getElementById("cpf").value,
                telefone: document.getElementById("telefone").value,
                cep: document.getElementById("cep").value,
                rua: document.getElementById("rua").value,
                cidade: document.getElementById("cidade").value,
                estado: document.getElementById("estado").value

            };


            salvarCadastro(dadosCadastro);


            console.log("Cadastro enviado");
            console.log("Dados salvos:", dadosCadastro);

        });
    }

}


const links = document.querySelectorAll(".menu a[data-page]");


links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const pagina = link.dataset.page;

        renderizarPagina(pagina);

    });

});


configurarMascaras();

renderizarPagina("inicio");