const igual = (a, b) => {
    return a.filter(cur => cur !== b)
}

console.log( igual([1,2,'2'], '2'));