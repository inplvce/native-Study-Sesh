const banksArray = [
  {
    id: 1,
    name: "Bank of America",
    addresses: [
      {
        street: "100 N Tryon St",
        city: "Charlotte",
        state: "NC",
        zip: "28255",
        depositRate: 1.2,
        geo: {
          lat: 35.2271,
          lng: -80.8431
        }
      }
    ]
  },
  {
    id: 4,
    name: "Another Bank",
    addresses: [
      {
        street: "200 Some St",
        city: "New York",
        state: "NY",
        zip: "10001",
        depositRate: 1.5,
        geo: {
          lat: 40.0,
          lng: -74.0
        }
      }
    ]
  }
];

const banksArrayCopy = [...banksArray]; // Копируем массив

console.log("banksArrayCopy:", banksArrayCopy); // Проверка содержимого перед map

const newLatValue = 40.7128;
const banksArrayCopy2 = banksArrayCopy.map((b) =>
  b.id === 4
    ? {
      ...b,
      addresses: b.addresses.map((a) => ({
        ...a,
        geo: {
          ...a.geo,
          lat: newLatValue,
        },
      })),
    }
    : b
);

console.log("banksArrayCopy222:", banksArrayCopy2); // Проверка результата


// Задача: Обновление информации о пользователях в массиве
// Представь, что у тебя есть список пользователей.
// У каждого пользователя есть несколько свойств, таких как id,
// name, и массив addresses. В каждом addresses хранится адрес с полем geo,
// содержащим широту (lat) и долготу (lng). Твоя задача — для определённого
// пользователя с конкретным id обновить широту (lat) во всех его адресах.

const usersArray = [
  {
    id: 1,
    name: "Alice",
    addresses: [
      {
        street: "123 Maple St",
        city: "Springfield",
        geo: { lat: 39.7817, lng: -89.6501 }
      }
    ]
  },
  {
    id: 2,
    name: "Bob",
    addresses: [
      {
        street: "456 Oak St",
        city: "Metropolis",
        geo: { lat: 40.7128, lng: -74.0060 }
      },
      {
        street: "789 Pine St",
        city: "Metropolis",
        geo: { lat: 40.7328, lng: -74.0460 }
      }
    ]
  }
];

const newUsersLat = 99.9999
const usersCopy = usersArray.map((users) => users.id === 2 ? {
  ...users, addresses: users.addresses.map((user) => ({
    ...user, geo: {...user.geo, lat: newUsersLat}
  }))
} : users)

console.log('usersCopy:', usersCopy)



// Задача: Изменение статуса задач в списке дел
// Представь, что у тебя есть список пользователей,
// и у каждого пользователя есть свой список задач (to-do list).
// Каждая задача имеет статус, показывающий, выполнена она или нет.
// Твоя цель — найти определённого пользователя по id и для всех
// его задач обновить статус на “выполнено”.
