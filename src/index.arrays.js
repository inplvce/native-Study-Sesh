const arr = Array.from('hey');
console.log(arr);

function newArr() {
  return `length array = ${this.length}`;
}
Array.prototype.newArr = newArr;
console.log(arr.newArr());
