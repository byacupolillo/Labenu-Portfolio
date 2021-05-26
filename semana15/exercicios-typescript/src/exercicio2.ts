// ex a - entrada é numeros e a saida estatisticas
// ex b - variaveis " numeros ordenados", a, b e soma

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor: number, media: number } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type amostraDeIdades = {

    numeros: number [],

    obterEstatisticas: (numeros: number[]) => {maior: number, menor: number, media: number }
}