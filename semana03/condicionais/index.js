// Exercicios de leitura de código

//Ex 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// Resposta: Esse código verifica se o numero é par ou impar. Os numeros do não passou no teste sempre terão resto 1, pois são impares.

//Ex 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// Resposta: a)o código verifica o preço da fruta desejada. 
// b) irá aparecer o valor de 2.25
// c) irá aparecer undefined, pois não definiu o parametro corretamente.

//Ex 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) está solicitando para o usuário digitar um número.
// b) Se digitar 10, aparecerá que este número passou no teste. -10 não acontecerá nada, pois não há nada definido.
// c) Sim, aparecera o erro para o let = mensagem, pois não é uma sintaxe aceita, não tem nada definido.

// Exercícios de escrita de código

// Ex 4

// let idade = Number(prompt ("Digite sua idade"))

// if (idade >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você ainda não pode dirigir =(")
// }

// Ex 5

// let turno = prompt ("Qual turno você estuda? Digite M(matutino), V(vespertino) ou N(noturno)")

// if (turno === "M"){
//     console.log("Bom dia!")
// } else if (turno === "V") {
//     console.log("Boa tarde!")
// } else if (turno === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Não identifiquei seu turno...")
// }

// Ex 6

// let turno = prompt ("Qual turno você estuda? Digite M(matutino), V(vespertino) ou N(noturno)")
// switch (turno){
//     case "M":
//         console.log("Bom dia!!")
//         break;
//     case "V":
//         console.log("Boa Tarde!!")
//         break;
//     case "N":
//         console.log("Boa noite!!")
//         break;
//     default:
//         console.log("Não identifiquei seu turno")
//         break;
// }

// Ex 7

// let generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
// let valorIngresso = prompt("Qual o valor do ingresso?").toLowerCase()

// if (generoFilme === "fantasia" && valorIngresso <= 15){
//     console.log("Bom filme!!")
// } else {
//     console.log("Escolha outro filme =(")
// }
// DESAFIOS

// Ex 1

// let generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
// let valorIngresso = prompt("Qual o valor do ingresso?").toLowerCase()
// let snack = prompt("Qual snack você vai comprar?")

// if (generoFilme === "fantasia" && valorIngresso <= 15){
//     console.log("Bom filme com", snack)
// } else {
//     console.log("Escolha outro filme =(")
// }

// Ex 2

let nomeCompleto = prompt("Qual o seu nome completo?").toLowerCase()
let tipoJogo = prompt("Qual o tipo de jogo? Escreva DO (doméstico) ou IN (internacional)").toLowerCase()
let etapaJogo = prompt("Qual a etapa? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toLowerCase()
let categoria = Number (prompt("Qual a categoria? 1, 2, 3 ou 4?"))
let qtdIngressos = Number (prompt("Qual a quantidade de ingressos adquiridos? Digite apenas o número"))

