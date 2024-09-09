// node 05-iterations\four

//For in

// const myObj = {
//     name: 'niraj',
//     email: 'niraj@example.com',
//     contact: 9876543210
// }
// for(const key in myObj){
//     console.log(`${key} : ${myObj[key]}`)
// }



// const myArr = [11, 12, 13, 14, 15]
// for(const i in myArr){
//     console.log(myArr[i])
// }



// const map = new Map()

// map.set('IN', 'india')
// map.set('PAK', 'pakistan')
// map.set('BAN', 'bangladesh')

// console.log(map)

// for(const abbr in map){
//     console.log(abbr)
// }

// for(const abbr of map){
//     console.log(abbr)
// }

// map.forEach(e => console.log(e))

/*
In JavaScript, for...in is used to iterate over the properties of an object, but a Map is not an object in 
that sense. Instead, it is a collection of key-value pairs, and for...in doesn't work with Map because it only 
works with objects' enumerable properties.
To iterate over the entries of a Map, you can use a for...of loop, which is the correct approach for iterable 
objects like Map, or you can use the map.forEach() method.
*/