let soma = 0;
let n = 0;
let botao_numeros = document.querySelector(".button_notas");
let notas_input = document.querySelector(".input");
let textArea = document.querySelector(".textarea");
let botao_media = document.querySelector(".button_media");
let resultado = document.querySelector(".resultado");
let vet = [];

function adicionar_valor() {
    let entrada = (notas_input.value.replace(",","."));
    if (entrada === "") {
        alert("Por favor, insira uma nota.");
        return;
    }
    if (entrada < 0 || entrada > 10) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return;
    }
    if (isNaN(entrada)) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return;
    }
    let nota = Number(entrada);
    vet.push(nota);
    n++;
    textArea.value += `A Nota ${n} foi ${nota}\n`;
    notas_input.value = "";
}

botao_numeros.addEventListener("click", adicionar_valor);

function soma_notas() {
    if (vet.length === 0) {
        alert("Nenhuma nota foi adicionada.");
        return;
    }
    soma = 0;
    for (let i = 0; i < vet.length; i++) {
        soma += vet[i];
    }
    let media = soma / vet.length;
    resultado.textContent = `A média das notas é: ${media}`;
}

botao_media.addEventListener("click", soma_notas);
