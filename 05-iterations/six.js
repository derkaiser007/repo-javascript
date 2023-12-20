//node 05-iterations\six

//For Each Loop
// const user = ['niraj', 'suraj', 'vivek', 'samar']

// user.forEach((item) => {
//     console.log(item)
// })

// const userInfo = user.forEach((item) => {
//                      return item
//                  })
// console.log(userInfo)

//Filter
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNums1 = nums.filter((num) => num > 4)
// console.log(myNums1)

// const myNums2 = nums.filter((num) => {num > 4})
// console.log(myNums2)

// const myNums3 = nums.filter((num) => {return num > 4})
// console.log(myNums3)

// let newNums = []
// nums.forEach((num) => {
//     if (num > 4) newNums.push(num);
// })
// console.log(newNums)



// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const myBooks1 = books.filter((book) => book.genre === 'Fiction')
//   console.log(myBooks1)

//   const myBooks2 = books.filter((book) => {
//     return book.genre === 'Fiction' && book.publish < 1985
//   })
//   console.log(myBooks2)



//Map

// const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNums1 = Nums.map((num) => num + 1)
// console.log(myNums1)

// const myNums2 = Nums.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 50)
// console.log(myNums2)



//Reduce

// const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const Total1 = Nums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)
// console.log(Total1)

// const Total2 = Nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(Total2)



// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// console.log(totalPrice)