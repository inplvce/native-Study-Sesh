const buttonClick = document.getElementById('clickMe')
let clickCount = 0

buttonClick.addEventListener('click',  () => {
  clickCount++;
  for (let i = 0; i < buttonClick; i++) {}
  if (clickCount === 1) {
    buttonClick.textContent = `Clicked ${clickCount} time`;
  } else {
    buttonClick.textContent = `Don’t click ${clickCount} times!!!`;
  }
})



const arr = [100, 9, 22, 777];
arr.sort((a, b) => a - b); // Для сортировки по возрастанию
// arr.sort((a, b) => b - a); // Для сортировки по убыванию
console.log(arr);

const numbers = [22,543,3567,9876,23423,6565,32,1221235,553,675]
for (let j = 0; j < numbers.length; j++) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      const temp = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i+1] = temp;
    }
  }
}

console.log(numbers)
