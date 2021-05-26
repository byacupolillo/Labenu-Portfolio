type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}
// ex a. Executar 'tsc exercicio4.ts' no terminal.
// ex b. Um pouco diferente.. Precisa entrar na pasta - comando 'cd src' e executar 'tsc exercicio4.ts' no terminal.
// ex c. O comando 'tsc' transpila todos os arquivos .ts
// d. O arquivo tsconfig.json gerado possui diversas configurações. A config "lib" lista todas as bibliotecas e "jsx" o código jsx que é gerado.
