const app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.appendChild(app);

// Создаем заголовок, который будет показывать количество секунд
const heading = document.createElement('h1');
heading.textContent = 'Прошло секунд: 0';
app.appendChild(heading);

// Инициализируем счетчик секунд
let seconds = 0;

// Запускаем интервал, который обновляет счетчик каждую секунду
const intervalId = setInterval(() => {
  seconds += 1;
  heading.textContent = `Прошло секунд: ${seconds}`;
}, 1000);

// Обработчик для очистки интервала при закрытии окна (эквивалент `componentWillUnmount`)
window.addEventListener('beforeunload', () => {
  clearInterval(intervalId);
});
