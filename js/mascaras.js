//Script para o formuláro de cadastro.

// MÁSCARA - CPF

//cria um evento toda vez que o usuário digitar(input) executa a função
export function configurarMascaras() {

    document.addEventListener("input", function(event) {

        //variável campo = ao elemento que recebeu a digitação
        const campo = event.target;

        //verifica se o campo digitado é o CPF
        if (campo.id === "cpf") {

            //variável numeros = ao valor do cpf removendo tudo que não for numero(replace)
            const numeros = campo.value.replace(/\D/g, "").substring(0, 11);

            //variável let(permite alterar o valor da variável durante a formatação.)
            let cpfFormatado = numeros;

            // Verifica a quantidade de números digitados usando .length.

            // A cada etapa, cpfFormatado reorganiza os números e adiciona os separadores

            // usando .substring(): "." após 3 e 6 números e "-" após 9.

            // Com 3 números, adiciona o primeiro ponto.
            if (numeros.length >= 3) {

                cpfFormatado =
                    numeros.substring(0, 3) + "." +
                    numeros.substring(3);
            }

            // Com 6 números, adiciona o segundo ponto.
            if (numeros.length >= 6) {

                cpfFormatado =
                    numeros.substring(0, 3) + "." +
                    numeros.substring(3, 6) + "." +
                    numeros.substring(6);
            }

            // Com 9 números, adiciona o hífen.
            if (numeros.length >= 9) {

                cpfFormatado =
                    numeros.substring(0, 3) + "." +
                    numeros.substring(3, 6) + "." +
                    numeros.substring(6, 9) + "-" +
                    numeros.substring(9);
            }

            //Mostra no campo de digitação o CPF formatado.
            campo.value = cpfFormatado;
        }


        // MÁSCARA - TELEFONE

        //verifica se o campo digitado é o telefone
        if (campo.id === "telefone") {

            //variável numeros = ao valor do telefone removendo tudo que não for numero(replace)
            const numeros = campo.value.replace(/\D/g, "").substring(0, 11);

            //variável let(permite alterar o valor da variável durante a formatação.)
            let telefoneFormatado = numeros;

            // verifica a quantidade de números digitados
            if (numeros.length > 2) {

                telefoneFormatado =
                    "(" + numeros.substring(0, 2) + ")" +
                    " " + numeros.substring(2);
            }

            // adiciona o hífen depois de 7 números
            if (numeros.length > 7) {

                telefoneFormatado =
                    "(" + numeros.substring(0, 2) + ")" +
                    " " + numeros.substring(2, 7) + "-" +
                    numeros.substring(7);
            }

            //Mostra no campo de digitação o telefone formatado.
            campo.value = telefoneFormatado;
        }


        // MÁSCARA - CEP

        //verifica se o campo digitado é o CEP
        if (campo.id === "cep") {

            //variável numeros = ao valor do cep removendo tudo que não for numero(replace)
            const numeros = campo.value.replace(/\D/g, "").substring(0, 8);

            //variável let(permite alterar o valor da variável durante a formatação.)
            let cepFormatado = numeros;

            // verifica a quantidade de números digitados
            if (numeros.length > 5) {

                cepFormatado =
                    numeros.substring(0, 5) + "-" +
                    numeros.substring(5);
            }

            //Mostra no campo de digitação o CEP formatado.
            campo.value = cepFormatado;
        }

    });

}