console.log(typeof(null))

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
      },
      {
        street: "200 Park Ave",
        city: "New York",
        state: "NY",
        zip: "10166",
        depositRate: 1.5,
        geo: {
          lat: 40.7549,
          lng: -73.9775
        }
      }
    ]
  },
  {
    id: 2,
    name: "JPMorgan Chase",
    addresses: [
      {
        street: "383 Madison Ave",
        city: "New York",
        state: "NY",
        zip: "10179",
        depositRate: 1.8,
        geo: {
          lat: 40.7574,
          lng: -73.9754
        }
      },
      {
        street: "10 S Dearborn St",
        city: "Chicago",
        state: "IL",
        zip: "60603",
        depositRate: 2.0,
        geo: {
          lat: 41.8818,
          lng: -87.6324
        }
      }
    ]
  },
  {
    id: 3,
    name: "Wells Fargo",
    addresses: [
      {
        street: "420 Montgomery St",
        city: "San Francisco",
        state: "CA",
        zip: "94104",
        depositRate: 1.3,
        geo: {
          lat: 37.7898,
          lng: -122.401
        }
      },
      {
        street: "150 E 42nd St",
        city: "New York",
        state: "NY",
        zip: "10017",
        depositRate: 1.6,
        geo: {
          lat: 40.7506,
          lng: -73.9717
        }
      }
    ]
  }
];

console.log(banksArray)

// crud

const newBank = {
  id: '4',
    name: "Bank of Belarus",
  addresses: [
  {
    street: "10 N Tryon St",
    city: "Charlotte",
    state: "NC",
    zip: "28255",
    depositRate: 0.2,
    geo: {
      lat: 35.22711,
      lng: -80.84312
    }
  },
  {
    street: "200 Park Ave",
    city: "New York",
    state: "NY",
    zip: "10166",
    depositRate: 0.5,
    geo: {
      lat: 40.75491,
      lng: -73.97752
    }
  }
]
}


const banksArrayCopy = {...banksArray, newBank}
console.log('BanksArrayCopy:', banksArrayCopy)

const banksArrayCopy2=
