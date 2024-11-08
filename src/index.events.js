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
}, {once: true})


