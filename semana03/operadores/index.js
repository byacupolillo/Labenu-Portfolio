// Exercicio de interpretação

// Ex 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado: true

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)

// resultado: false

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)

// resultado: true

// console.log("e. ", typeof resultado)

// resultado: boolean

// Ex 2

// let array
// console.log('a. ', array)

// res: undefined

// array = null
// console.log('b. ', array)

// resp: null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// resp:11

// let i = 0
// console.log('d. ', array[i])

// resp: 0

// array[i+1] = 19
// console.log('e. ', array)

// res: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)

// resp: 9


//Exercicio de código
// Ex 1

// let ageUser = prompt ("Qual sua idade?")
// let ageFriend = prompt ("Qual a idade do seu melhor amigx?")
// let ageUF = Number(ageUser) > Number (ageFriend)
// let ageDifference = Number(ageUser) - Number(ageFriend)
// console.log("Sua idade é maior do que a do seu melhor amigo?", ageUF )
// console.log("A diferença de idade é", ageDifference)

// Ex 2

// let numPar = prompt ("Digite qualquer número par:")
// console.log(numPar%2)

//Resp: sim , sempre que o número for par o resto da divisão será 0. Porém se o número for impar, sempre restará 1.


// Ex 3

// let listaDeTarefas = []
// tarefa1 = prompt ("Digite uma tarefa para realizar:")
// tarefa2 = prompt ("Digite mais uma tarefa para realizar:")
// tarefa3 = prompt ("Só mais uma tarefa para realizar:")

// listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
// console.log(listaDeTarefas)

// tarefaRealizada = prompt ("Qual das tarefa você já realizou 0, 1 ou 2?")
// listaDeTarefas.splice(tarefaRealizada, 1)
// console.log(listaDeTarefas)


// Ex 4

// let userName = prompt ("Digite seu usuário")
// let userEmail = prompt ("Digite seu e-mail")

// console.log("O e-mail", userEmail, "foi cadastrado com sucesso. Seja bem-vinda(o)", userName, "!")

// Desafios

//Ex 1

// let grKelvin = (77 - 32)*5/9 + 273.15
// console.log(grKelvin, "K")

// let grFah = 80*9/5 + 32
// console.log(grFah, "°F")

// let gr2 = 30*9/5 + 32 
// let gr3 = (gr2 - 32)*5/9 + 273.15
// console.log(gr2, "°F", gr3, "K")

// let gr2 = prompt ("Digite um número em graus Celsius") *9/5 + 32 
// let gr3 = (gr2 - 32)*5/9 + 273.15
// console.log(gr2, "°F", gr3, "K")

// Ex 2

// let valorQwH = 0.05
// let valorTotal = valorQwH*280
// console.log (valorTotal)
// let desconto = valorTotal * 0.15
// console.log (desconto)
// console.log(valorTotal-desconto)

// Ex 3


// const libras1 = 20 * 0.4536
// console.log("20 lbs equivalem a", libras1, "kg")

// const oz1 = 10.5 / 3.527
// console.log("10.5oz equivalem a", oz1, "kg")

// const ft1 = 50 / 3.281
// console.log("50ft equivalem a", ft1, "m")

// const gl1 = 103.56 * 3.785
// console.log("103,56 galao equivale a", gl1, "l")

// const xic1 = (540 * 6)/25
// console.log ("540 xicaras equivalem a", xic1, "l")

// const librasConv = prompt ("Qual a conversão de libras para kg?")
// let valorUsuario = prompt ("Quantas libras você quer converter?")
// let valorFinal = valorUsuario * librasConv 
// console.log (valorFinal)
