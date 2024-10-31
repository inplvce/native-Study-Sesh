console.log('Happy developing ✨')

const todolistID_1 = 'ddfsfsdfdsf'
const todolistID_2 = 'sdfdsfgsfdds'
const todolistID_3 = 'dsdfdsfdff'

const todolists  = [
  {id: todolistID_1, title: 'what to learn'},
  {id: todolistID_2, title: 'what to buy'},
  {id: todolistID_3, title: 'what to read'}
]

const tasks= {
  [todolistID_1]: [
    {id: 12, title: 'HTML', isDone: true},
    {id: 13, title: 'CSS', isDone: false},
    {id: 14, title: 'JS', isDone: false},
  ],
  [todolistID_2]: [
    {id: 22, title: 'milk', isDone: true},
    {id: 23, title: 'nut', isDone: false},
    {id: 24, title: 'chocolate', isDone: false}
  ],
  [todolistID_3]: [
    {id: 32, title: 'news', isDone: true},
    {id: 33, title: 'React.doc', isDone: true},
    {id: 34, title: 'Learn.js', isDone: false}
  ],
}

console.log(todolists)


//crud tasks


const removeTask = (todolistID, id) => {
  const updatedTasksAfterRemoval = {...tasks,
    [todolistID]: tasks[todolistID].filter((t) => t.id !== id)}
  return updatedTasksAfterRemoval
}

const addTask = (todolistID, title) => {
  const newTask = {id: 222, title: title, isDone: false}
  const taskArrayCopy = {...tasks}
  taskArrayCopy[todolistID] = [newTask, ...tasks[todolistID]] //создаем новый массив (...task[todoID], включающий новый элемент (newTask)
  return taskArrayCopy
}

const changeTaskStatus = (todolistID, id, isDone) => {
  return {
    ...tasks,
    todolistID: tasks[todolistID].map((t) => t.id === id ? {...t, isDone: isDone} : t)
  }
}

const changeTaskTitle = (todolistID, id, title) => {
  return {
    ...tasks,
    [todolistID]: tasks[todolistID].map((t) => t.id === id ? {...t, title : title } : t)
  }
}
console.log(removeTask(todolistID_1, 12))
// const updatedTasksAfterRemoval = removeTask(todolistID_1, 13);
// console.log("Tasks after removing task 13:", updatedTasksAfterRemoval);

const updatedTasksAfterAdding = addTask(todolistID_2, "New Task");
console.log("Tasks after adding new task:", updatedTasksAfterAdding);

//crud todolists


const addTodolist = (title) => {
  // if (!title || typeof title !== 'string') {
  //   throw new Error('Title must be a non-empty string.');
  // }
  const newTodolistId = uuid.v4();
  const newTodolist = { id: newTodolistId, title };
  const updatedTodolists = [...todolists, newTodolist];
  const updatedTasks = { ...tasks, [newTodolistId]: [] };
  return { updatedTodolists, updatedTasks };
}
// Использование функции
  const {updatedTodolists, updatedTasks} = addTodolist('new todolist', todolists, tasks);
  console.log('Todolists:', updatedTodolists);
  console.log('Tasks:', updatedTasks);


// для быстрого поиска (трансформируем массив в объект)
const todolistsForEasySearch  = {
  [todolistID_1]: {id: todolistID_1, title: 'what to learn'},
  [todolistID_2]: {id: todolistID_2, title: 'what to buy'}
}

const newObj = {}
for (let i = 0; i < todolists.length; i++) {
  const newKey = todolists[i].id
  newObj[newKey] = todolists[i]

}
console.log('Array todolists:', newObj)

// Напиши код, который использует цикл for для подсчета суммы всех
// чисел от 1 до 10 и выводит результат в консоль.

// const limit = 10
// let sum = 0
//
// for (let i = 0; i <= limit; i++) {
//   sum += limit
// }
//
// console.log('new sum:', sum)
