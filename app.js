let listaNumerosGerados = [];
let listaNumerosGeradosMedio = [];
let numeroMisterioso = gerarNumeroMisterioso();
let tentativas = 1;

function gerarNumeroMisterioso() {
    let numeroGerado = parseInt(Math.random() * 10 + 1);

    if (listaNumerosGerados.length == 10){
        listaNumerosGerados = [];
    }
    if (listaNumerosGerados.includes(numeroGerado)){
        return gerarNumeroMisterioso();
    }
    else{
        listaNumerosGerados.push(numeroGerado);
       //console.log(listaNumerosGerados);
        return numeroGerado;
    }
}

function gerarNumeroMisteriosoMedio() {
     let numeroGerado = parseInt(Math.random() * 100 + 1);

    if (listaNumerosGeradosMedio == 100){
        listaNumerosGeradosMedio = [];
    }
    if (listaNumerosGeradosMedio.includes(numeroGerado)){
        return gerarNumeroMisterioso();
    }
    else{
        listaNumerosGeradosMedio.push(numeroGerado);
        //console.log(listaNumerosGeradosMedio);
        return numeroGerado;
    }
}

function gerarNumeroMisteriosoDificil() {
    return parseInt(Math.random() * 100000 + 1)
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function introdução() {
    exibirTextoNaTela("h1", "Adivinhe o número");
    exibirTextoNaTela("p", "Digite um número inteiro entre 1 e 10");
}

function introduçãoMedio() {
    exibirTextoNaTela("h1", "Adivinhe o número");
    exibirTextoNaTela("p", "Digite um número inteiro entre 1 e 100");
}

function introduçãoDificil() {
    exibirTextoNaTela("h1", "Adivinhe o número");
    exibirTextoNaTela("p", "Digite um número inteiro entre 1 e 100.000");
}

function limparTexto() {
    jogada = document.querySelector("input");
    jogada.value = "";
}

introdução();

function verificarJogada() {
    let jogada = document.querySelector("input").value;

    if (jogada == numeroMisterioso) {
        exibirTextoNaTela("h1", "Acertou, parabéns!");
        let palavraTentativa = tentativas <= 1 ? "tentativa" : "tentativas";
        let mensagemAcerto = `Você descobriu o número em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemAcerto);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.querySelector("input").setAttribute("disabled", true);
        document.getElementById("dificil").removeAttribute("disabled");
        document.getElementById("botaoJogada").setAttribute("disabled", true);
        document.getElementById("medio").removeAttribute("disabled");
    }
    else {
        if (jogada > numeroMisterioso) {
            exibirTextoNaTela("p", `O número é menor que ${jogada}`);
        }
        else if (jogada < numeroMisterioso) {
            exibirTextoNaTela("p", `O número é maior que ${jogada}`);
        }
        tentativas++;
        limparTexto();
    }

}

function recomeço(){
    document.getElementById("botaoJogada").removeAttribute("disabled");
    document.querySelector("input").removeAttribute("disabled");
    document.getElementById("dificil").setAttribute("disabled", true);
    document.getElementById("medio").setAttribute("disabled", true);
    document.getElementById("reiniciar").setAttribute("disabled", true);
    limparTexto();
    tentativas = 1;
}

function umNovoJogo() {
    recomeço();
    numeroMisterioso = gerarNumeroMisterioso();
    //console.log(numeroMisterioso);
    introdução();
}

function dificuldadeMedio() {
    recomeço();
    introduçãoMedio();
    numeroMisterioso = gerarNumeroMisteriosoMedio();
    //console.log(numeroMisterioso);
}

function dificuldadeDificil() {
    recomeço();
    introduçãoDificil();
    numeroMisterioso = gerarNumeroMisteriosoDificil();
    //console.log(numeroMisterioso);
}

document.addEventListener("keydown", function(event){

    if (event.key === "Enter"){
       // verificandoTecla();
        verificarJogada();
    }
});

/*function verificandoTecla(){
    console.log("Enter pressionado");
}*/
