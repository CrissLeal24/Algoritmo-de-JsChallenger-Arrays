//Escribe una función que tome una serie de objetos como argumento. Ordene la matriz por propiedad b en orden ascendente. Devuelve la matriz ordenada


const object = (arr) => {
    return arr.sort((a, b) => a.b - b.b)
}

console.log(object([{a:1,b:7},{a:2,b:1}]));