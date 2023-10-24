const arg = (a, b) => { 
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

console.log( arg([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));