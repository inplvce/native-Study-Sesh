const arr = Array.from('hey');
console.log(arr);

function newArr() {
  return `length array = ${this.length}`;
}

Array.prototype.newArr = newArr;
console.log(arr.newArr());


// map

//Вот задача:

// У тебя есть массив чисел от 1 до 10.
// Используй свой метод myMap, чтобы получить новый массив,
// где каждый элемент — это квадрат числа
// из исходного массива.

Array.prototype.myMap = function (callback) {
  const result = new Array()
  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i]);
  }
  return result
}
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myMap(n => String(n*[n])));

// filter

Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) { // Проверяем условие
      result.push(this[i]);  // Добавляем элемент в результат, если условие true
    }
  }
  return result;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myFilter(n => (n > 4)));

// У тебя есть массив чисел. Используй свой метод myFilter,
// чтобы создать новый массив, содержащий только числа больше 5.

Array.prototype.myFilter = function (removeNumber) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (removeNumber (this[i])) {
      result.push(this[i]);
    }
  }
  return result;
}

console.log('arrForFilter:',[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myFilter(f => (f > 5)))
