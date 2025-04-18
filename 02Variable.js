// const newDate = new Date(2025 , 2 ,19);

// console.log(newDate.toLocaleString())
// console.log(newDate.toDateString())
// console.log(newDate.toISOString())
// console.log(newDate.toLocaleDateString())
// console.log(newDate.toLocaleTimeString())
// console.log(newDate.toTimeString())


// let Arr = [1,2,3,4,5]
// let Arr2 = [6,7,8,9,10]

// console.log(Arr.join("-"))
// console.log( typeof(Arr.join()))

let myArr = [1,2,3,4,5,6,7,8,9]

console.log(myArr)

let newArr = myArr.slice(0,3);

console.log(myArr + " old array after slice")
console.log(newArr + " sliced array")

let newArr2 = myArr.splice(1,4)

console.log(myArr + " old array after splice")
console.log(newArr2 + " splice array")

