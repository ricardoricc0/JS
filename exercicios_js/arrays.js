const array = [1.2, 3.4, 7.2, 5.4]
console.log(array[1], array[3])
console.log(array[4])

array[4] = 11
console.log(array[4])

console.log(array) 
console.log(array.length) 

array.push({id: 3}, false, null, NaN, 'Teste', 0)
console.log(array) 

console.log(array.pop())
delete array[0]
console.log(array)

console.log(typeof array)
