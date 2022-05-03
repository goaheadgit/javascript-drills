// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.
// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.
// Example-Input: 23, 2, 3, 4, 5; Output: 2, 3, 4, 23, 5

const sortByProduct = (arr)=> {
let finalNums = []
let newNums = []
let pushTo = 0
for(i = 0; i < arr.length; i++) {
    for(j=0; j<arr.length; j++){
    newNums.sort()
    pushTo = newNums.findindex([j])
    }
finalNums.splice(pushTo, 0, arr[i])
}
return finalNums
}

const test = [23, 2, 3, 4, 5]
console.log(sortByProduct(test))

 