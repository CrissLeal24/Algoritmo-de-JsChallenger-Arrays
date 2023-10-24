const text = (arr) => {
    return arr.reduce((acc, prev)=> acc.length > prev.length ? acc : prev)
}

console.log( text(['I', 'need', 'candy']));