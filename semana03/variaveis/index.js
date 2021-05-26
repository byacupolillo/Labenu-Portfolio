// Interpretação de código
// Exercicio 1
// a = 10
// b = 10

// console.log(b)
// 10

// b = 5
// console.log(a, b)
// 10, 5

// Exercicio 2
// a = 10
// b = 20
// c = a (10)
// b = c (10)
// a = b (10)

// console.log(a, b, c)
// 10, 10, 10

//--------------//

//Escrita de código//
// Exercicio 1

let name
let age
console.log(typeof name, typeof age)

//resposta: undefined;undefined. É impresso para verificar se as variaveis estão funcionando, pois os valores poderão ser atribuidos depois.//

name = prompt ("Qual seu nome?")
age = prompt ("Qual sua idade?")
console.log(typeof name, typeof age)

//resposta: string e string - ele consegue definir que as respostas são texto"//

console.log("Olá", name, "Você tem", age, "anos")

//Exercicio 2

let questionOne
let questionTwo
let questionThree
let questionFour
let questionFive




questionTwo = prompt ("Qual seu desenho favorito?")
console.log(questionTwo)

questionThree = prompt ("Onde você mora?")
console.log(questionThree)

questionFour = prompt ("Qual o nome da sua mãe?")
console.log(questionFour)

questionFive = prompt ("Qual sua comida preferida?")
console.log(questionFive)

//Exercicio 3

let favoriteFood = ['kare', 'sashimi', 'hamburger', 'ovo', 'udon']
console.log(favoriteFood)

console.log("Essas são minhas comidas preferidas:")
console.log(favoriteFood[0])
console.log(favoriteFood[1])
console.log(favoriteFood[2])
console.log(favoriteFood[3])
console.log(favoriteFood[4])

favoriteFood[1] = prompt ("Qual sua comida favorita?")
console.log(favoriteFood)

//Exercicio 4

let questionsArray = ['Você nasceu em SP?', 'Você gosta de rosa?', 'Você é maior de 18 anos?']
let answersArray = [true, false, true]

console.log(questionsArray[0], answersArray[0])
console.log(questionsArray[1], answersArray[1])
console.log(questionsArray[2], answersArray[2])