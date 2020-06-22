function same(arr1, arr2) {
  const result = arr1.map((number) => {
    const squared = number * number

    if (arr2.includes(squared)) {
      return true
    }
  })

  return result.every((st) => st === true)
}

console.log(same([2, 3, 4], [9, 4, 16]))

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
