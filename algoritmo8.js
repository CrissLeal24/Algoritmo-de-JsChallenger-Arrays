const negativeNumbers = (a) => {
    return a.filter( a => a < 0).length
  }

  console.log(negativeNumbers([4,-3,2,1,0]));