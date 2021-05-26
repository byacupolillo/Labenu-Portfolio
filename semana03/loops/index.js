// Exercicio de Interpretação

//Ex 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Resp: Ele duplica o valor de 5 - o resultado é 10.

// Ex 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// Resp: serão impressos os números: 19, 21, 23, 25, 27, 30.
// Não é possivel acessar o indice dos numeros.


// Exercicio de Código

// Exercicio 3

let arrayOriginal = [10,20,33,37,40,50,59,60,70,80]

for (let numero of arrayOriginal) {
    if (numero >= 0){
    console.log(numero)
}
}

for (let numero of arrayOriginal){
    console.log(numero/10)
}

for (let numeroPar of arrayOriginal) {
   if (numeroPar % 2 == 0)
   console.log(numeroPar)
}

for (let i = 0; i < 10; i++) {
    console.log("O elemento do índex", i, "vale", arrayOriginal[i])
}

let valorMaximo = arrayOriginal[0]
let valorMinimo = arrayOriginal[0]


for (let indexDoArray = 0; indexDoArray < arrayOriginal.length; indexDoArray++) {
    let elemento = arrayOriginal[indexDoArray]

    if (valorMaximo < elemento) {
       valorMaximo = elemento
    }
    
}

for (let indexDoArray = 0; indexDoArray < arrayOriginal.length; indexDoArray++) {
    let elemento = arrayOriginal[indexDoArray]

    if (valorMinimo > elemento) {
        valorMinimo = elemento
    }
}

console.log("O maior número é", valorMaximo, "o menor valor é", valorMinimo)