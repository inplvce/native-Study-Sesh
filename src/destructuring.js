const arr = [12345, 87654,56789,987654,5,23323,666 ]

const sum = arr.reduce((a, b) => a> b ? a : b, -Infinity)

console.log(sum)

