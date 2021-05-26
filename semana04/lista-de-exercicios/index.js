// Exercicios de Leitura de código

//1 - A função conversor de moeda pergunta ao usuário qual o valor atual da cotação do dólar.
// ele retornará o valor em Reais fazendo a multiplicação do valor desejado(100 dolares) * a cotação indicada.

//2 - A função investeDinheiro possui algumas opções de investimento.
// Cada opção retorna o valor aplicado * o quanto o investimento rende.
// caso nao escolha nenhum dos investimentos possiveis, retornará um alerta para o usuário escolher um invest. válido.
// Serão aplicados 150 em ações e 200 na poupança.
// retornará (150*1.1) em ações e (200*1.03) na poupança.

// 3 - Existe 1 array de numeros e 2 arrays vazios. O calculo é para saber se o número é par, se sim inclui-lo no
// array1 vazio, se for impar irá para o array2 vazio.
// depois mostrará a quantidade de numeros dentro do array original e dentro dos arrays de numeros pares e impares.

// 4 - É declarado o valor de 3 arrays. 1 array de numeros, 1 de número infinito e um de valor 0.
// o loop irá verificar se o primeiro array de numero é menor do que infinito, se sim, irá igualar o valor da variavel numero = numero1
// o segundo verificará se o array 2 é maior do que o array valor 0, se sim, igualará os valores.
// será impresso o array inteiro no primeiro loop, pois nenhum número é maior que infinito.
// no segundo será impresso o array inteiro exceto o -10, pois é menor que 0.

// Exercicios de lógica

//Ex1

// Pode se percorrer um array com For/ For of, ForEach , While.
// let i
// for (i=0; i <= 30; i++)
// console.log (i) // formará um loop do 0 até o 30, enquanto for menor ou igual que 30 os numeros serão impressos

// Ex 2

//const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2 / true
// const booleano4 = !booleano3  / false

// a) `booleano1 && booleano2 && !booleano4` - Resp : False

// b) `(booleano1 && booleano2) || !booleano3` - Resp: False

// c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` true && true - Resp : True

// d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` !(false & true) True || !(true && true) false - Resp: True

// e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)` !(true) && !(true)  = False || (!true && true && True) = False.
//Resp: False

// Ex 3

//const quantidadeDeNumerosPares
// let i = 0
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
// }

// Não funciona, pois a variavel não foi inicializada com nenhum número, além de não incrementar o i ao final do loop, gerando loop infinito.

// Código corrigido:

// const quantidadeDeNumerosPares = prompt("Digite algum número")
// let i = 0
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

// Ex 4

// Ex 5

// let verificarDoisNumeros = (a, b) => {
//   if (a < b) {
//     console.log(`O maior é: ${a}`);
//   } else if (b > a) {
//     console.log(`O maior é: ${b}`);
//   } else {
//     console.log(`${a} e ${b} são iguais!`);
//   }
//   if (a % b !== 0 && b % a === 0) {
//     console.log(`${a} não é divisível por ${b} `);
//     console.log(`${b} é divisível por ${a} `);
//   } else if (a % b === 0 || b % a !== 0) {
//     console.log(`${a} é divisível por ${b}`);
//     console.log(`${b} não é divisível por ${a}`);
//   }
// };

// verificarDoisNumeros(15, 30)

// Ex de Funções

// Ex 1

// Ex 2

// let msgHello = () => {
//     console.log("Hello Labenu!")
// }

// msgHello()

// Ex de Objetos

// 1 - Objetos são formas que os programadores criam suas próprias funções e variáveis e guardam dentro de uma "caixinha" com nomes que fazem sentido para aquela aplicação, ou seja, é uma forma mais organizada de guardar elementos complexos de forma limpa e organizada.

// 2 - não funciona... rever

// const medidasRetangulo = [{
//     largura: lado1,
//     altura: lado2,
//     perimetro: 2*(lado1 + lado2),
//     area: (lado1 * lado2)
// }]

// function criaRetangulo(lado1, lado2) {
//     return medidasRetangulo
// }

// criaRetangulo(10,30)

// 3 - 
// const meuFilmePreferido = {
//     titulo: "Kimi no na wa",
//     ano: 2017,
//     diretor: "Makoto Shinkai",
//     atores: ["Ryunosuke Kamiki", "Mone Kamishiraishi"] 
// }

// console.log(`Meu filme favorito é ${meuFilmePreferido.titulo}, lançado no ano de ${meuFilmePreferido.ano}, produzido por ${meuFilmePreferido.diretor} e os atores são: ${meuFilmePreferido.atores}`)

// 4- 

// const pessoa = [{
//     nome: "Beatriz",
//     idade: 26,
//     email: "beatrizcupolillo@gmail.com",
//     endereco: "Vila Mariana, São paulo"
// }]

// const anonimizarPessoa = pessoa.map((parametro1) => { 
//     return parametro1.nome = "Anonimo"
// })

// console.log(pessoa)

// Ex Arrays

// 1 - 
// a -

// let algumasPessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// // const maioresDeVinte = algumasPessoas.filter((pessoa)=> {
// //     return pessoa.idade >= 20
// // })

// // console.log(maioresDeVinte)

// //b -

// const menoresDeVinte = algumasPessoas.filter((pessoa)=>{
//     return pessoa.idade < 20
// })

// console.log(menoresDeVinte)

// EX 2

// const array = [1, 2, 3, 4, 5, 6]

// // a

// // const arrayVezesDois = array.map((numero)=> {
// //     return (numero) * 2
// // })

// // console.log(arrayVezesDois)

// // // b

// // const arrayVezesTresString = array.map((numero)=> {
// //     return `${numero*3}`

// // })

// // console.log(arrayVezesTresString)

// // c

// const parOuImpar = array.map((numero)=> {
//     if (numero % 2 === 0){
//     return `${numero} é Par`
// }else{
//     return `${numero} é Impar`
// }
// })
// console.log(parOuImpar)

// Ex 3

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const possuiPermissao = pessoas.filter((pessoa) => {
//     return pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5
// })

// console.log(possuiPermissao)

// const naoPossuiPermissao = pessoas.filter((pessoa) => {
//     return pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5
// })

// console.log (naoPossuiPermissao)