const numbers = (a) => {
    return  a.reduce((sum, current) => sum + current);
}

console.log(numbers([-50,0,50,200]));