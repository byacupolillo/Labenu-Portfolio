// Ex 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) Será impresso os valores de 10 e 50. Que são a multiplicação de 2x5 e 10x5.
// b) Será impresso apenas o ultimo valor, pois cada function aceita somente um return. Se cada uma delas for invocada separadamente, trará o mesmo resultado.

// Ex 2

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// a)Será impresso os dois primeiros nomes Darvas e Caio.
// b)Seria impresso os dois novos nomes da Array e seria impresso Amanda e Caio.

//Ex 3

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }

// Essa função pega apenas os números pares de dentro da array e multiplica o valor por ele mesmo. 
// Depois guarda na arrayFinal o número final.


// Ex 4

// a)

// function sobreMim() {
//     console.log("Eu sou a Beatriz tenho 26 anos, moro em São Paulo e não sou estudante.")
// }

// sobreMim()


// b)

// Versão Função Nomeada


// const meuNome = "Beatriz"
// let minhaIdade = 26
// let minhaCidade = "São Paulo"
// let souEstudante = true

// function mostrarDadosSobreMim (meuNome, minhaIdade, minhaCidade, souEstudante) {
//     let mensagemEstudante
//     if (souEstudante) {
//         mensagemEstudante = "Sou estudante"
//     }else{
//         mensagemEstudante  = "Não sou estudante"
//     }
//     return `Eu sou a ${meuNome} tenho ${minhaIdade} moro em ${minhaCidade} e ${mensagemEstudante}`
// }
// console.log (mostrarDadosSobreMim(meuNome, minhaIdade, minhaCidade, souEstudante))

// Versão Arrow Function

// let mostrarDadosSobreMim = (meuNome, minhaIdade, minhaCidade, souEstudante) => {
//     let mensagemEstudante
//     if (souEstudante) {
//         mensagemEstudante = "Sou estudante"
//     }else{
//         mensagemEstudante  = "Não sou estudante"
//     }
//     return `Eu sou a ${meuNome} tenho ${minhaIdade} moro em ${minhaCidade} e ${mensagemEstudante}`
// }

// const meuNome = "Beatriz"
// let minhaIdade = 26
// let minhaCidade = "São Paulo"
// let souEstudante = true

// console.log (mostrarDadosSobreMim(meuNome, minhaIdade, minhaCidade, souEstudante))

// Ex 5 

// a)

// let somarDoisNumeros =  (a, b) => {
//     const soma = a + b
//     return soma
// }

// const resultadoSomaDoisNumeros = somarDoisNumeros(50, 875)
// console.log(resultadoSomaDoisNumeros)


// b)

// let numeroMaiorOuIgual = (a, b) => {
//     if (a >= b){
//         return true
//     } else {
//         return false
//     }
// }

// const resultadoNumeroMaiorOuIgual = numeroMaiorOuIgual (30, 30)
// console.log (resultadoNumeroMaiorOuIgual)

// c)

// let repetirDezVezes = (mensagem) =>{
//     for (let i = 0; i < 10; i++){
//         console.log(mensagem)
//     }
// }

// const mensagemMultiplicada = repetirDezVezes ("Olá, Mundo")

// Ex 6 

// a)

// const arrayDeNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// let contadorDeArray = (arrayDeNumeros) => {
//     return arrayDeNumeros.length
// }

// console.log(contadorDeArray(arrayDeNumeros))

// b)

// let verificarSePar = (Number) => {
//     if (Number % 2 === 0){ 
//         return true
//     }else{ 
//         return false
//     }
// }

// const resultadoSePar = verificarSePar(12)
// const resultadoSePar2 = verificarSePar (17)
// console.log(resultadoSePar)
// console.log(resultadoSePar2)