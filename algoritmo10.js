const serieNumber = (arr) => {
    return arr.sort((a, b) => b - a)
}

console.log(serieNumber([4,2,3,1]));