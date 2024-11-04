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
