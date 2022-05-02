const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


const totalBatteries = batteryBatches.reduce(function (previousValue, currentValue) {
    let total = 0
    total =  previousValue + currentValue
    return total
  }, 0)




// let totalBatteries = batteryBatches => batteryBatches.reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue
//   }, 0)

// totalBatteries(batteryBatches)



  // console.log (
//     batteryBatches.reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10 )
// )




// const reducer = batteryBatches => {
//     batteryBatches.reduce((previousValue, currentValue) => previousValue + currentValue, 0)  
// }

// reducer()

// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];

//   function ourReduce(arr, reducer, init) {
//       let accum = init;
//       for (const element of arr) {
//           accum = reducer(accum, element);
//       }
//       return accum;
//   }

//   const couponCounter = (totalAmount, location) => totalAmount + location.amount

//   console.log(ourReduce(couponLocations, couponCounter, 0))


// const products = [
//     { name: 'Shampoo', price: 4.99 },
//     { name: 'Donuts', price: 7.99 },
//     { name: 'Cookies', price: 6.49 },
//     { name: 'Bath Gel', price: 13.99 }
//   ];

//   const getTotalAmountForProducts = products => {
//       let totalPrice = 0
//       for (const item of products) {
//           totalPrice += item.price;
//       }
//       return totalPrice;
//   }


// console.log(getTotalAmountForProducts(products))

//// **** reduce video code-along ****
/*
const books = [
    {
        title: 'Eloquent JavaScript',
        price: 16.00,
        inventory: 2
    },
    {
        title: 'You don\'t know js',
        price: 60.00,
        inventory: 8
    },
    {
        title: 'JavaScript: The Definitive Guide',
        price: 18.95,
        inventory: 3
    }
]

const reducer = (accumulator, item) => {
    console.log(accumulator, item)
    return accumulator + ", " + item.title
}

let total = books.reduce(reducer,' ').substring(3)
*/