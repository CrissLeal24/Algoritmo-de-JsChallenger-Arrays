const compare = (arr) => {
    return [...new Set(arr)].length == 1 ? true : false
}
console.log( compare(['test', 'test', 'test']));