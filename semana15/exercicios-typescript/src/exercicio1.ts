//ex A - O proprio vscode aponta o erro informando que uma variavel string nao aceita numeros como parametro.

const minhaString: string = 5

//ex B - para aceitar ambas as opcoes precisa utilizar a | e os dois tipos.

const meuNumero: number | string = "vv"

//ex C - 

const me: {name: string, age: number, favoriteColor: string} = {
    name: "Beatriz",
    age: 27,
    favoriteColor: "blue"
}

type person = {name: string, age: number, favoriteColor: string}

const Tokio: person = {
    name: "Tokio",
    age: 35,
    favoriteColor: "vermelho"
}

const Adriana: person = {
    name: "Adriana",
    age: 53,
    favoriteColor: "roxo"
} 

const Pedro: person = {
    name: "Pedro",
    age: 19,
    favoriteColor: "verde"
}

//ex e

enum colors {
    RED = "vermelho",
    ORANGE = "laranja",
    YELLOW = "amarelo",
    GREEN = "verde",
    BLUE = "azul",
    INDIGO = "indigo",
    VIOLET = "violeta"
}

type newPerson = {name: string, age: number, favoriteColor: colors}

const Beatriz: newPerson = {
    name: "Beatriz",
    age: 27,
    favoriteColor: colors.BLUE
}