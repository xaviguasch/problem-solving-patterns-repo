// function same(arr1, arr2) {
//   const result = arr1.map((number) => {
//     const squared = number * number

//     if (arr2.includes(squared)) {
//       return true
//     }
//   })

//   return result.every((st) => st === true)
// }

// console.log(same([2, 3, 4], [9, 4, 16]))

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}

console.log(same([2, 3, 4], [9, 4, 16]))
