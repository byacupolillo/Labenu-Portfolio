//Ex A - Tem que pegar o 3o argumento do array pelo process.argv[2]

const userName = process.argv[2]

const userAge = process.argv[3]

const newAge = Number(process.argv[3]) + 7

console.log(`Olá, ${userName}! Você tem ${userAge} anos`)

console.log(`Olá, ${userName}! Você tem ${userAge} anos. Em sete anos você terá ${newAge}`)