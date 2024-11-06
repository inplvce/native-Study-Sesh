const buttonClick = document.getElementById('clickMe')
let clickCount = 0

buttonClick.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 1) {
    buttonClick.textContent = `Clicked ${clickCount} time`;
  } else {
    buttonClick.textContent = `Don’t click ${clickCount} times!!!`;
  }
})
