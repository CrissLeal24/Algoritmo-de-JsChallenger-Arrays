// Escriba una función que tome argumentos en un número arbitrario de matrices. Debería devolver una matriz que contenga los valores de todas las matrices.

const arrays = (...arrays) =>{
return arrays.flat()
}
console.log(arrays([1, 2, 3], [4, 5, 6]));