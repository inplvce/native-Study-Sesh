const arr = Array.from('hey');
console.log(arr);

function newArr() {
  return `length array = ${this.length}`;
}

Array.prototype.newArr = newArr;
console.log(arr.newArr());


// map

Array.prototype.myMap = function (callback) {
  const result = new Array()
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i]);
  }
  return result
}
console.log([1, 2, 3, 4, 5, 6].myMap(n => String(n)));
