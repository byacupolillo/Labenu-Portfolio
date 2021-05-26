/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log("Bem vindo ao jogo de blackjack!");

// if (confirm("Deseja iniciar o jogo?")) {
//   console.log("Iniciar o jogo");
//   let carta1 = comprarCarta();
//   let carta2 = comprarCarta();
//   let carta3 = comprarCarta();
//   let carta4 = comprarCarta();

//   let cartasUsuario1 = carta1.valor + carta2.valor;
//   let cartasUsuario2 = carta3.valor + carta4.valor;

//   console.log(
//     `Cartas do Usuário1 ${carta1.texto} ${carta2.texto} - pontos: ${cartasUsuario1}`
//   );
//   console.log(
//     `Cartas do Usuario2 ${carta3.texto} ${carta4.texto} - pontos: ${cartasUsuario2}`
//   );
//   alert(
//     `Cartas do Usuário1 ${carta1.texto} ${carta2.texto} - pontos: ${cartasUsuario1}`
//   );
//   alert(
//     `Cartas do Usuario2 ${carta3.texto} ${carta4.texto} - pontos: ${cartasUsuario2}`
//   );

//   if (cartasUsuario1 === cartasUsuario2) {
//     console.log("Empate!");
//   } else if (cartasUsuario1 > cartasUsuario2) {
//     console.log("O usuário 1 ganhou!");
//   } else if (cartasUsuario1 < cartasUsuario2);{
//     console.log("O usuário 2 ganhou!");
//   }

// } else {
//   console.log("O jogo acabou");
// }
