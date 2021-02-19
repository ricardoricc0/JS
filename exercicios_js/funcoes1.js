// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 5)
imprimirSoma(2)
imprimirSoma(2, 5, 6, 4, 3, 2)
imprimirSoma()


// Funçnao com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
