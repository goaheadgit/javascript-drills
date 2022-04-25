// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

const phoneNumber = ["(", ")", " ", "-"]
function newPhoneNumber(nums){
    nums.unshift(phoneNumber[0])
    nums.splice(4,0,phoneNumber[1])
    nums.splice(5,0,phoneNumber[2])
    nums.splice(9,0,phoneNumber[3])
    return nums.join('')
}
console.log(newPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
    
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
    
//     return format;
//   